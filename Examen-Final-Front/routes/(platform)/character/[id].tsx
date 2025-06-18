import { FreshContext, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import ComponenteCharacter from "../../../components/ComponenteCharacter.tsx";
import { getCookieFromHeader } from "../../../utils/cookies.ts";

export type CharacterID = {
 id: string;
 name: string;
 image: string;
 house: string;
 favorite: boolean;
};

export type StateID = {
 username: string;
 character: CharacterID;
};

export async function handler(req: Request, ctx: FreshContext<StateID>) {
 const { id } = ctx.params;
 const { data } = await Axios.get("https://hp-api.onrender.com/api/characters");
 const personaje = data.find((c: CharacterID) => c.id === id);

 const favs = getCookieFromHeader(req.headers.get("cookie"), "favorites")?.split(",") || [];
 const character: CharacterID = { ...personaje, favorite: favs.includes(id) };

 return ctx.render({ username: ctx.state.username, character });
}

export default function Page(props: PageProps<StateID>) {
 return <ComponenteCharacter data={props.data} />;
}
