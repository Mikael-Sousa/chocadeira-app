declare const _default: {
    createNotifications: ({ userId, sensor, status, value }: {
        userId: number;
        sensor: string;
        status: string;
        value: number;
    }) => Promise<{
        status: number;
        error: string;
        data?: never;
    } | {
        status: number;
        data: any;
        error?: never;
    }>;
    getNotifications: (userId: number) => Promise<{
        status: number;
        message: string;
        data?: never;
    } | {
        status: number;
        data: any[];
        message?: never;
    }>;
};
export default _default;
//# sourceMappingURL=notifications.service.d.ts.map