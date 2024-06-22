import { NotificationConfig, ShowNotificationProps } from './notification.types';
declare function show(config: ShowNotificationProps): void;
declare function update(config: NotificationConfig & {
    id: string;
}): void;
declare function hide(id: string): void;
declare function clear(): void;
declare function clearQueue(): void;
declare function addToNotificationQueue(config: NotificationConfig & {
    id: string;
}): void;
declare function setDebugMode(debugMode: boolean): void;
export declare const notificationService: {
    show: typeof show;
    update: typeof update;
    hide: typeof hide;
    clear: typeof clear;
    clearQueue: typeof clearQueue;
    addToNotificationQueue: typeof addToNotificationQueue;
    setDebugMode: typeof setDebugMode;
};
export {};
//# sourceMappingURL=notification.service.d.ts.map