import "dotenv/config";
declare const _default: {
    register: (name: string, email: string, password: string) => Promise<{
        status: number;
        message: string;
        data?: never;
    } | {
        status: number;
        data: {
            token: string;
            user: {
                id: any;
                name: any;
                email: any;
            };
        };
        message?: never;
    }>;
    login: (email: string, password: string) => Promise<{
        status: number;
        message: string;
        data?: never;
    } | {
        status: number;
        data: {
            token: string;
            user: {
                id: any;
                name: any;
                email: any;
            };
        };
        message?: never;
    }>;
    getProfileByUserId: (userId: number) => Promise<{
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
//# sourceMappingURL=auth.service.d.ts.map