import { FunctionalComponent } from "preact";
import { Character, State } from "../routes/(platform)/characters.tsx";
import { useState } from "preact/hooks";

type Props = {
 data: State;
};

const IslaCharacter: FunctionalComponent<Props> = (props) => {
 const [characters, setCharacters] = useState<Character[]>(props.data.characters);

 const toggleFav = async (c: Character, isAdd: boolean, event: Event) => {
   event.stopPropagation();
   const res = await fetch(`/api/${isAdd ? "nuevofavorito" : "quitarfavorito"}`, {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({ id: c.id }),
   });
   if (res.ok) {
     setCharacters(characters.map(ch => ch.id === c.id ? { ...ch, favorite: isAdd } : ch));
   }
 };

 return (
   <div class="characters">
     {characters.map((c) => (
       <div class="character" key={c.id} onClick={() => location.href = `/character/${c.id}`}>
         <img src={c.image} alt={c.name} />
         <h3>{c.name}</h3>
         {c.favorite
           ? <button onClick={(e) => toggleFav(c, false, e)}>❌</button>
           : <button onClick={(e) => toggleFav(c, true, e)}>⭐</button>}
       </div>
     ))}
   </div>
 );
};
export default IslaCharacter;
