declare const _default: {
    createSettings: (userId: number) => Promise<{
        status: number;
        data: any;
    }>;
    getSettings: (userId: number) => Promise<{
        status: number;
        message: string;
        data?: never;
    } | {
        status: number;
        data: any;
        message?: never;
    }>;
    updateSettings: (userId: number, data: {
        defaultTheme: boolean;
    }) => Promise<{
        status: number;
        message: string;
        data?: never;
    } | {
        status: number;
        data: any;
        message?: never;
    }>;
};
export default _default;
//# sourceMappingURL=settings.service.d.ts.map