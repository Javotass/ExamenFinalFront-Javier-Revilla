import { getCookieFromHeader } from "../../utils/cookies.ts";

export async function handler(req: Request) {
 const { id } = await req.json();
 const favs = getCookieFromHeader(req.headers.get("cookie"), "favorites")?.split(",") || [];
 if (!favs.includes(id)) favs.push(id);
 const headers = new Headers();
 headers.set("Set-Cookie", `favorites=${favs.join(",")}; Path=/; HttpOnly; Max-Age=604800`);
 return new Response("OK", { status: 200, headers });
}
