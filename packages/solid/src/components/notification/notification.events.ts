import { NotificationConfig, ShowNotificationProps } from "./notification.types";

type ValueOf<T> = T[keyof T];

export const NOTIFICATIONS_EVENTS = {
  show: "hope-ui:show-notification",
  update: "hope-ui:update-notification",
  hide: "hope-ui:hide-notification",
  clear: "hope-ui:clear-notifications",
  clearQueue: "hope-ui:clear-notifications-queue",
  addToNotificationQueue: "hope-ui:add-to-notification-queue",
  setDebugMode: "hope-ui:set-debug-mode",
} as const;

export type NotificationEventType = ValueOf<typeof NOTIFICATIONS_EVENTS>;

export interface NotificationEventDetailMap {
  [NOTIFICATIONS_EVENTS.show]: ShowNotificationProps;
  [NOTIFICATIONS_EVENTS.update]: NotificationConfig & { id: string };
  [NOTIFICATIONS_EVENTS.hide]: string;
  [NOTIFICATIONS_EVENTS.clear]: undefined;
  [NOTIFICATIONS_EVENTS.clearQueue]: undefined;
  [NOTIFICATIONS_EVENTS.addToNotificationQueue]: NotificationConfig & { id: string };
  [NOTIFICATIONS_EVENTS.setDebugMode]: boolean;
}

export function createEvent<K extends NotificationEventType>(
  type: K,
  detail?: NotificationEventDetailMap[K]
) {
  return new CustomEvent<NotificationEventDetailMap[K]>(type, { detail });
}
