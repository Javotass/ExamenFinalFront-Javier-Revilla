import { FreshContext, PageProps } from "$fresh/server.ts";
import { getCookieFromHeader } from "../../utils/cookies.ts";
import Axios from "npm:axios";
import IslaFavoritesCharacters from "../../islands/IslaFavoritesCharacters.tsx";

export type Character = {
 id: string;
 name: string;
 image: string;
 house: string;
 favorite?: boolean;
};

export type State = {
 username: string;
 characters: Character[];
};

export async function handler(req: Request, ctx: FreshContext<State>) {
 const favs = getCookieFromHeader(req.headers.get("cookie"), "favorites")?.split(",") || [];
 const { data } = await Axios.get("https://hp-api.onrender.com/api/characters");

 const characters = data.filter((c: Character) => favs.includes(c.id));
 return ctx.render({ username: ctx.state.username, characters });
}

export default function Page(props: PageProps<State>) {
 return <IslaFavoritesCharacters data={props.data} />;
}
