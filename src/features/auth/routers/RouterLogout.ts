import { Elysia } from "elysia";
import ServiceAuth from "../services/ServiceAuth";
import Context from "@/app/Context";

export const RouterLogout = new Elysia({ prefix: "/auth", tags: ["Auth"] })
  .use(Context.User())
  .post(
    "/logout",
    async ({ userRuntime, cookie }) => {
      await ServiceAuth.logout(userRuntime);
      cookie.accessToken.remove();
      cookie.refreshToken.remove();
      return;
    },
    {
      response: {},
    },
  );
