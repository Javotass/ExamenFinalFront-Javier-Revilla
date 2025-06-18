import { FunctionalComponent } from "preact";
import { StateID } from "../routes/(platform)/character/[id].tsx";

type Props = {
 data: StateID;
};

const ComponenteCharacter: FunctionalComponent<Props> = (props) => {
 return (
   <div class="characterID">
     <h1>{props.data.character.name}</h1>
     <img src={props.data.character.image} alt={props.data.character.name} />
     <p>House: {props.data.character.house || "Unknown"}</p>
     <form method="post" action={`/api/${props.data.character.favorite ? "quitarfavorito" : "nuevofavorito"}`}>
       <input type="hidden" name="id" value={props.data.character.id} />
       <button type="submit">
         {props.data.character.favorite ? "❌ Quitar de favoritos" : "⭐️ Añadir a favoritos"}
       </button>
     </form>
     <a href="/characters">← Back</a>
   </div>
 );
};
export default ComponenteCharacter;
