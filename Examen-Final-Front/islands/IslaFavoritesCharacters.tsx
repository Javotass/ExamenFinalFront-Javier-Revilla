import { FunctionalComponent } from "preact";
import { Character, State } from "../routes/(platform)/favorites.tsx";
import { useState } from "preact/hooks";

const IslaFavoritesCharacters: FunctionalComponent<{ data: State }> = ({ data }) => {
 const [characters, setCharacters] = useState<Character[]>(data.characters);

 const quitarFavorito = async (c: Character, e: Event) => {
   e.stopPropagation();
   const res = await fetch("/api/quitarfavorito", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ id: c.id }),
   });
   if (res.ok) {
     setCharacters(characters.filter((ch) => ch.id !== c.id));
   }
 };

 return (
   <div class="characters">
     {characters.map((c) => (
       <div class="character" key={c.id} onClick={() => location.href = `/character/${c.id}`}>
         <img src={c.image} alt={c.name} />
         <h3>{c.name}</h3>
         <button onClick={(e) => quitarFavorito(c, e)}>❌</button>
       </div>
     ))}
   </div>
 );
};

export default IslaFavoritesCharacters;
