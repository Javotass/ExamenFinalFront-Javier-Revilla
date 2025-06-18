export function handler() {
  return new Response(null, {
    status: 303,
    headers: {
      "Location": "/login",
    },
  });
}
