import { useState } from "react";
import useRegistro from "../../hooks/useRegistro";
import styles from "./Registro.module.css";

export default function Registro() {
  const [nuevoComentario, setNuevoComentario] = useState("");

  const nombreInput = useRegistro("leo");
  const emailInput = useRegistro("leo@gamil.com");
  const bodyInput = useRegistro("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setNuevoComentario([
      {
        id: 1000,
        name: nombreInput,
        email: emailInput,
        body: bodyInput,
      },
      ...nuevoComentario,
    ]);
    console.log({nuevoComentario});

    nombreInput.reset();
    emailInput.reset();
    bodyInput.reset();
  };
  return (
    <>
      <form className={styles["form-comentarios"]} onSubmit={handleSubmit}>
        <div className={styles["div-input"]}>
          <label htmlFor="nombre" className={styles["label-form"]}>
            Nombre:{" "}
          </label>

          <input
            className={styles["input-form"]}
            type="text"
            name="nombre"
            id="nombre"
            placeholder="Ingrese el nombre"
            {...nombreInput}
          />
        </div>
        <div className={styles["div-input"]}>
          <label htmlFor="email" className={styles["label-form"]}>
            Email:{" "}
          </label>
          <input
            className={styles["input-form"]}
            type="email"
            name="email"
            id="email"
            placeholder="Ingrese el email"
            {...emailInput}
          />
        </div>
        <div className={styles["div-input"]}>
          <label htmlFor="body" className={styles["label-form"]}>
            Body:{" "}
          </label>
          <input
            className={styles["input-form"]}
            type="text"
            name="body"
            id="body"
            placeholder="Ingrese el Comentario"
            {...bodyInput}
          />
        </div>
        <div className={styles["div-input"]}>
          <button className={styles["btn-form"]} type="submit">
            Enviar
          </button>
        </div>
      </form>
      <p>nombre: {nombreInput.value}</p>
      <p>email: {emailInput.value}</p>
      <p>body: {bodyInput.value}</p>
    </>
  );
}
