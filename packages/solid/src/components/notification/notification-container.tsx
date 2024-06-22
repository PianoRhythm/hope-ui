import { Match, onCleanup, onMount, Show, splitProps, Switch } from "solid-js";

import { CloseButton } from "../close-button/close-button";
import { Flex } from "../flex/flex";
import { IconSpinner } from "../icons/IconSpinner";
import { VStack } from "../stack/stack";
import { HTMLHopeProps } from "../types";
import { Notification } from "./notification";
import { NotificationDescription } from "./notification-description";
import { NotificationIcon } from "./notification-icon";
import { NotificationTitle } from "./notification-title";
import { notificationLoaderStyles } from "./notification.styles";
import { NotificationConfig } from "./notification.types";
import { useNotificationsProviderContext } from "./notifications-provider.context";

type NotificationContainerPropsExtended = {
  onCloseWithNotificationQueued?: (notification: NotificationConfig) => void;
  onClose?: (id: string) => void;
};

type NotificationContainerOptions = Omit<NotificationConfig, "onClose">;

export type NotificationContainerProps = HTMLHopeProps<"div", NotificationContainerOptions> & NotificationContainerPropsExtended;

/**
 * The container for a notification.
 * It renders the default Hope UI designed notification or a custom one if the `render` prop is passed.
 */
export function NotificationContainer(props: NotificationContainerProps) {
  const notificationsProviderContext = useNotificationsProviderContext();

  const [local] = splitProps(props, [
    "render",
    "id",
    "status",
    "title",
    "description",
    "duration",
    "persistent",
    "closable",
    "loading",
    "onMouseEnter",
    "onMouseLeave",
    "queuedNotificationUpdates",
  ]);

  let closeDelayId: number | undefined;

  const _clearCloseDelay = () => {
    window.clearTimeout(closeDelayId);
    closeDelayId = undefined;
  };

  const clearCloseDelay = (force: boolean = false) => {
    // If there are at least one queued notifications, don't clear the timeout
    if (!force && (local.queuedNotificationUpdates?.length ?? 0) > 0) return;

    if (closeDelayId) {
      if (notificationsProviderContext.debugMode()) {
        console.log("NotificationContainer: clearTimeout called.", closeDelayId, local.id, { ...local });
      }

      _clearCloseDelay();
    }
  };

  const _closeNotification = () => {
    _clearCloseDelay();

    if (notificationsProviderContext.debugMode()) {
      console.log("NotificationContainer: [_closeNotification]", local.id, { ...local });
    }

    notificationsProviderContext.hideNotification(local.id);
    props.onClose?.(local.id);
  };

  const closeNotification = (id?: string) => {
    let queued = local.queuedNotificationUpdates;
    if (queued && queued.length > 0) {
      // Get next notification in queue (without mutating) and update
      let next = queued[0];
      let updated = notificationsProviderContext.updateNotification(id ?? local.id, next!);
      if (!updated) {
        if (notificationsProviderContext.debugMode())
          console.error("NotificationContainer: Failed to update queued notification", id ?? local.id, next, queued);

        _closeNotification();
        return;
      }

      _clearCloseDelay();
      props.onCloseWithNotificationQueued?.(next!);

      if (notificationsProviderContext.debugMode()) {
        console.log("NotificationContainer: Update queued notifications", updated, next, queued);
      }

      closeWithDelay();
    } else {
      _closeNotification();
    }
  };

  const closeWithDelay = () => {
    if (local.persistent && (local.queuedNotificationUpdates?.length ?? 0) > 0 || local.duration == null) {
      if (notificationsProviderContext.debugMode()) {
        console.log("NotificationContainer: Persistent notification - setTimeout not called.", local.id, { ...local });
      }
      return;
    }

    closeDelayId = window.setTimeout(() => closeNotification(local.id), local.duration);
    if (notificationsProviderContext.debugMode()) {
      console.log("NotificationContainer: [closeWithDelay] setTimeout called.", closeDelayId, local.duration, local.id, { ...local });
    }
  };

  const showIcon = () => local.status && !local.loading;

  onMount(() => {
    if (notificationsProviderContext.debugMode()) {
      console.log("NotificationContainer: onMount", local.id, { ...local });
    }

    closeWithDelay();
  });

  onCleanup(() => {
    _clearCloseDelay();
  });

  return (
    <Show
      when={local.render}
      fallback={
        <Notification
          status={local.status}
          pr={local.closable ? "$9" : "$3"}
          onMouseEnter={() => clearCloseDelay()}
          onMouseLeave={closeWithDelay}
        >
          <Show when={showIcon()}>
            <NotificationIcon mr="$2_5" />
          </Show>
          <Show when={local.loading}>
            <IconSpinner
              color="$primary10"
              boxSize="$8"
              mr="$2_5"
              class={notificationLoaderStyles()}
            />
          </Show>
          <Switch>
            <Match when={local.title && local.description}>
              <VStack alignItems="flex-start" spacing="$1">
                <NotificationTitle>{local.title}</NotificationTitle>
                <NotificationDescription>{local.description}</NotificationDescription>
              </VStack>
            </Match>
            <Match when={local.title}>
              <NotificationTitle>{local.title}</NotificationTitle>
            </Match>
            <Match when={local.description}>
              <NotificationDescription>{local.description}</NotificationDescription>
            </Match>
          </Switch>
          <Show when={local.closable}>
            <CloseButton
              size="sm"
              position="absolute"
              top="$1_5"
              right="$1_5"
              onClick={() => closeNotification()}
            />
          </Show>
        </Notification>
      }
    >
      <Flex
        w="$full"
        justifyContent="flex-end"
        onMouseEnter={() => clearCloseDelay()}
        onMouseLeave={closeWithDelay}
      >
        {local.render?.({
          id: local.id,
          close: closeNotification,
        })}
      </Flex>
    </Show>
  );
}
