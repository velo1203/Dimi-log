export { default } from "next-auth/middleware";

export const config = {
    matcher: ["/((?!login|api|images|favicon.ico).*)"],
};
