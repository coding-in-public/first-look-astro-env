import type { APIRoute } from "astro";
import { SECRET_PASSWORD } from "astro:env/server";

export const GET: APIRoute = () => {
  const key = SECRET_PASSWORD;
  return new Response(
    JSON.stringify({
      message: key,
    })
  );
};
