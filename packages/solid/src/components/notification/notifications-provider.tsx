import {
  Accessor,
  createMemo,
  createUniqueId,
  For,
  JSX,
  onCleanup,
  onMount,
  splitProps,
} from "solid-js";
import type { StoreNode, Store, SetStoreFunction } from "solid-js/store";


import { Portal } from "solid-js/web";
import { Transition, TransitionGroup } from "solid-transition-group";

import { createQueue } from "../../hooks/create-queue";
import { PositionProps } from "../../styled-system/props/position";
import { classNames } from "../../utils/css";
import { Box } from "../box/box";
import { NOTIFICATIONS_EVENTS } from "./notification.events";
import {
  notificationListStyles,
  NotificationListVariants,
  notificationTransitionName,
} from "./notification.styles";
import { NotificationConfig, ShowNotificationProps } from "./notification.types";
import { NotificationContainer } from "./notification-container";
import {
  NotificationsProviderContext,
  NotificationsProviderContextValue,
} from "./notifications-provider.context";
import { createStore } from "solid-js/store";

interface NotificationsProviderProps extends NotificationListVariants {
  /**
   * Maximum amount of notifications displayed at a time,
   * other new notifications will be added to queue.
   */
  limit?: number;

  /**
   * The delay (in ms) before the notification hides.
   */
  duration?: number;

  /**
   * If `true`, duration will be ignored and notifications will never dismiss.
   */
  persistent?: boolean;

  /**
   * If `true`, notifications will show a close button.
   */
  closable?: boolean;

  /**
   * The `z-index` css property of all notifications.
   */
  zIndex?: PositionProps["zIndex"];

  /**
   * The children of the notifications provider.
   */
  children: JSX.Element;
}

const hopeNotificationListClass = "hope-notification__list";

const DEFAULT_NOTIFICATION_DURATION = 5_000;

/**
 * Context provider for the notification system.
 */
export function NotificationsProvider(props: NotificationsProviderProps) {
  const [local] = splitProps(props, [
    "children",
    "placement",
    "duration",
    "persistent",
    "closable",
    "limit",
    "zIndex",
  ]);

  const notificationQueue = createMemo(() => {
    // return createQueue<NotificationConfig>({
    return createQueue<[get: Store<NotificationConfig>, set: SetStoreFunction<NotificationConfig>]>({
      initialValues: [],
      limit: local.limit ?? 10,
    });
  });

  const finalPlacement: Accessor<NotificationsProviderProps["placement"]> = () =>
    local.placement ?? "top-end";

  const notificationsAccessor = () => notificationQueue().state.current();

  const queueAccessor = () => notificationQueue().state.queue();

  const showNotification = (notification: ShowNotificationProps) => {
    const id = notification.id ?? `hope-notification-${createUniqueId()}`;
    const persistent = notification.persistent ?? local.persistent ?? false;
    const duration = notification.duration ?? local.duration ?? DEFAULT_NOTIFICATION_DURATION;
    const closable = notification.closable ?? local.closable ?? true;
    const queuedNotificationUpdates = notification.queuedNotificationUpdates ?? [];

    notificationQueue().update(notifications => {
      const newNotification: NotificationConfig = {
        ...notification,
        queuedNotificationUpdates,
        id,
        persistent,
        duration,
        closable,
      };

      // If notification with the same id already exists, add it to the queue
      if (notification.id && notifications.some(n => n[0].id === notification.id)) {
        addToNotificationQueue(notification.id, newNotification);
        return notifications;
      }

      return [...notifications, createStore(newNotification)];
    });

    return id;
  };

  const updateNotification = (id: string, notification: NotificationConfig) => {
    notificationQueue().update(notifications => {
      const index = notifications.findIndex(n => n[0].id === id);

      if (index === -1) {
        // Create new instead
        showNotification(notification);
        return notifications;
      }

      const newNotifications = [...notifications];

      let updateTarget = newNotifications[index][1];
      updateTarget("description", notification.description);
      updateTarget("title", notification.title);
      updateTarget("status", notification.status);
      updateTarget("loading", notification.loading);
      updateTarget("persistent", notification.persistent);
      updateTarget("duration", notification.duration);
      updateTarget("closable", notification.closable);
      updateTarget("onClose", notification.onClose);

      return newNotifications;
    });
  };

  const hideNotification = (id: string) => {
    notificationQueue().update(notifications => {
      return notifications.filter(notification => {
        if (notification[0].id === id) {
          notification[0].onClose?.(notification[0].id);
          return false;
        }

        return true;
      });
    });
  };

  const addToNotificationQueue = (id: string, notification: NotificationConfig) => {
    if (!id || !notification) return;

    notificationQueue().update(notifications => {
      const index = notifications.findIndex(n => n[0].id === id);

      if (index === -1) {
        // Create new instead
        showNotification(notification);
        return notifications;
      }

      let target = notifications[index];
      let updateTarget = target[1];
      updateTarget("queuedNotificationUpdates", [...target[0].queuedNotificationUpdates ?? [], notification]);

      return [...notifications];
    });
  };

  const clear = () => notificationQueue().update(() => []);

  const clearQueue = () => notificationQueue().clearQueue();

  const removeNotificationFromQueue = (id: string) => {
    notificationQueue().update(notifications => {
      const index = notifications.findIndex(n => n[0].id === id);

      if (index === -1) {
        return notifications;
      }

      let target = notifications[index];
      let updateTarget = target[1];
      updateTarget("queuedNotificationUpdates", target[0].queuedNotificationUpdates?.slice(1));

      return [...notifications];
    });
  };

  const classes = () => {
    return classNames(
      hopeNotificationListClass,
      notificationListStyles({
        placement: finalPlacement(),
      })
    );
  };

  const transitionName = () => {
    switch (finalPlacement()) {
      case "top-start":
        return notificationTransitionName.slideInLeft;
      case "top":
        return notificationTransitionName.slideInTop;
      case "top-end":
        return notificationTransitionName.slideInRight;
      case "bottom-start":
        return notificationTransitionName.slideInLeft;
      case "bottom":
        return notificationTransitionName.slideInBottom;
      case "bottom-end":
        return notificationTransitionName.slideInRight;
      default:
        return notificationTransitionName.slideInRight;
    }
  };

  const context: NotificationsProviderContextValue = {
    //@ts-ignore
    notifications: notificationsAccessor,
    //@ts-ignore
    queue: queueAccessor,
    showNotification,
    updateNotification,
    hideNotification,
    clear,
    clearQueue,
    addToNotificationQueue,
  };

  const showHandler = (event: any) => showNotification(event.detail);
  const updateHandler = (event: any) => updateNotification(event.detail.id, event.detail);
  const hideHandler = (event: any) => hideNotification(event.detail);
  const addToNotificationQueueHandler = (event: any) => addToNotificationQueue(event.detail.id, event.detail);

  onMount(() => {
    window.addEventListener(NOTIFICATIONS_EVENTS.show, showHandler);
    window.addEventListener(NOTIFICATIONS_EVENTS.update, updateHandler);
    window.addEventListener(NOTIFICATIONS_EVENTS.hide, hideHandler);
    window.addEventListener(NOTIFICATIONS_EVENTS.clear, clear);
    window.addEventListener(NOTIFICATIONS_EVENTS.clearQueue, clearQueue);
    window.addEventListener(NOTIFICATIONS_EVENTS.addToNotificationQueue, addToNotificationQueueHandler);
  });

  onCleanup(() => {
    window.removeEventListener(NOTIFICATIONS_EVENTS.show, showHandler);
    window.removeEventListener(NOTIFICATIONS_EVENTS.update, updateHandler);
    window.removeEventListener(NOTIFICATIONS_EVENTS.hide, hideHandler);
    window.removeEventListener(NOTIFICATIONS_EVENTS.clear, clear);
    window.removeEventListener(NOTIFICATIONS_EVENTS.clearQueue, clearQueue);
    window.removeEventListener(NOTIFICATIONS_EVENTS.addToNotificationQueue, addToNotificationQueueHandler);
  });

  return (
    <NotificationsProviderContext.Provider value={context}>
      <Portal>
        <Box class={classes()} zIndex={local.zIndex}>
          <TransitionGroup name={transitionName()}>
            <For each={context.notifications()}>
              {(notification) =>
                // @ts-ignore
                <NotificationContainer {...notification[0]}
                  onCloseWithNotificationQueued={(config) => {
                    // Remove the next item in the queue
                    removeNotificationFromQueue(config.id);
                  }}
                />
              }
            </For>
          </TransitionGroup>
        </Box>
      </Portal>
      {local.children}
    </NotificationsProviderContext.Provider>
  );
}
