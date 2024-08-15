import React from "react";
import { useState } from "react";
import Card from "./Card";
import FormStyle from "./Styles/Form.module.css";
const Form = () => {
  // declaramos los estados
  const [persona, setPersona] = useState({
    name: "",
    favoriteSong: "",
    favoriteAnime: "",
    favoriteMovie: "",
  });
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  // declaramos manejadores

  const handleChangeName = (event) => {
    setPersona({ ...persona, name: event.target.value });
  };
  const handleChangeFavoriteSong = (event) => {
    setPersona({ ...persona, favoriteSong: event.target.value });
  };
  const handleChangeFavoriteAnime = (event) => {
    setPersona({ ...persona, favoriteAnime: event.target.value });
  };
  const handleChangeFavoriteMovie = (event) => {
    setPersona({ ...persona, favoriteMovie: event.target.value });
  };
  const handleSubmit = (event) => {
    // prevenimos que se cargue toda la pagina
    event.preventDefault();
    //aca hacemos las validaciones
    // primer input
    if (persona.name.length < 3 || /^\s/.test(persona.name)) {
      setError(true);
    }
    // segundo input
    if (persona.favoriteSong.length < 6) {
      setError(true);
    }

    if (
      persona.name.length > 3 &&
      !/^\s/.test(persona.name) &&
      persona.favoriteSong.length > 5 &&
      persona.favoriteAnime.length > 5 &&
      persona.favoriteMovie.length > 5
    ) {
      setShow(true);
      setError(false);
    }else{
        setError(true);
    }
  };
  return (
    <div className={FormStyle.formContainer}>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" value={persona.name} onChange={handleChangeName} />
        <br></br>
        <label>Cancion favorita:</label>
        <input
          type="text"
          value={persona.favoriteSong}
          onChange={handleChangeFavoriteSong}
        />
        <br></br>
        <label>Anime favorito:</label>
        <input
          type="text"
          value={persona.favoriteAnime}
          onChange={handleChangeFavoriteAnime}
        />
        <br></br>
        <label>Pelicula favorita:</label>
        <input
          type="text"
          value={persona.favoriteMovie}
          onChange={handleChangeFavoriteMovie}
        />
        <br></br>
        <button>Enviar</button>
      </form>
      {error ? (
        <>
          <h2 style={{ color: "red" }}>
            Por favor chequea que la información sea correcta
          </h2>
        </>
      ) : null}
      {show ? <Card persona={persona}></Card> : null}
    </div>
  );
};

export default Form;
