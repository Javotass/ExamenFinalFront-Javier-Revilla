export function getCookieFromHeader(header: string | null, name: string): string | null {
    if (!header) return null;
    const cookies = header.split("; ");
    const cookie = cookies.find((c) => c.startsWith(`${name}=`));
    return cookie ? decodeURIComponent(cookie.split("=")[1]) : null;
   }
   