import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
 const cookie = req.headers.get("cookie") || "";
 if (!cookie.includes("username=")) {
   return Response.redirect("/login");
 } else {
   ctx.state.username = cookie.split(";")[0].split("=")[1];
   return await ctx.next();
 }
}
