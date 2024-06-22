import { HTMLHopeProps } from '../types';
import { NotificationConfig } from './notification.types';
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
export declare function NotificationContainer(props: NotificationContainerProps): import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=notification-container.d.ts.map