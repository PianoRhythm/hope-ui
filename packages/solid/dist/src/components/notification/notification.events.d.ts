import { NotificationConfig, ShowNotificationProps } from './notification.types';
type ValueOf<T> = T[keyof T];
export declare const NOTIFICATIONS_EVENTS: {
    readonly show: "hope-ui:show-notification";
    readonly update: "hope-ui:update-notification";
    readonly hide: "hope-ui:hide-notification";
    readonly clear: "hope-ui:clear-notifications";
    readonly clearQueue: "hope-ui:clear-notifications-queue";
    readonly addToNotificationQueue: "hope-ui:add-to-notification-queue";
    readonly setDebugMode: "hope-ui:set-debug-mode";
};
export type NotificationEventType = ValueOf<typeof NOTIFICATIONS_EVENTS>;
export interface NotificationEventDetailMap {
    [NOTIFICATIONS_EVENTS.show]: ShowNotificationProps;
    [NOTIFICATIONS_EVENTS.update]: NotificationConfig & {
        id: string;
    };
    [NOTIFICATIONS_EVENTS.hide]: string;
    [NOTIFICATIONS_EVENTS.clear]: undefined;
    [NOTIFICATIONS_EVENTS.clearQueue]: undefined;
    [NOTIFICATIONS_EVENTS.addToNotificationQueue]: NotificationConfig & {
        id: string;
    };
    [NOTIFICATIONS_EVENTS.setDebugMode]: boolean;
}
export declare function createEvent<K extends NotificationEventType>(type: K, detail?: NotificationEventDetailMap[K]): CustomEvent<NotificationEventDetailMap[K]>;
export {};
//# sourceMappingURL=notification.events.d.ts.map