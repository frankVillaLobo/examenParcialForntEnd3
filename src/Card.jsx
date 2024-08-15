//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import CardStyles from "./Styles/Card.module.css"
function Card(props) {
  return (
    <div className={CardStyles.cardContainer}>
      <h2>Hola, {props.persona.name}</h2>
      <p>Dejanos contarte un poco de ti</p>
      <ul>
        {Object.entries(props.persona).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
