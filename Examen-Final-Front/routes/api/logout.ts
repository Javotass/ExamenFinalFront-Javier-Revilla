export function handler (){
    const headers = new Headers();
    headers.set("Set-Cookie", "username=; Path=/; Max-Age=0");
    headers.set("Set-Cookie", "favorites=; Path=/; Max-Age=0");
    return new Response("Logout Ok", {status: 200, headers});
}