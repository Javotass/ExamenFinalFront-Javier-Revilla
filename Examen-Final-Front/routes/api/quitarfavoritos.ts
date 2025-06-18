import { getCookieFromHeader } from "../../utils/cookies.ts";

export async function handler(req: Request) {
 const { id } = await req.json();
 const favs = getCookieFromHeader(req.headers.get("cookie"), "favorites")?.split(",") || [];
 const updated = favs.filter((f) => f !== id);
 const headers = new Headers();
 headers.set("Set-Cookie", `favorites=${updated.join(",")}; Path=/; HttpOnly; Max-Age=604800`);
 return new Response("OK", { status: 200, headers });
}
