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

export function createEvent(type: ValueOf<typeof NOTIFICATIONS_EVENTS>, detail?: any) {
  return new CustomEvent(type, { detail });
}
