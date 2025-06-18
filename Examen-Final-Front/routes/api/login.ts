export async function handler(req: Request) {
    if (req.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }
  
    const form = await req.formData();
    const username = form.get("username")?.toString() || "";
    const password = form.get("password")?.toString() || "";
  
    if (password === "1234" && username) {
      const headers = new Headers();
      headers.set("Set-Cookie", `username=${username}; Path=/; HttpOnly; Max-Age=604800`);
      headers.set("Location", "/characters");
      return new Response(null, { status: 303, headers });
    }
  
    return new Response("Unauthorized", { status: 401 });
  }
  