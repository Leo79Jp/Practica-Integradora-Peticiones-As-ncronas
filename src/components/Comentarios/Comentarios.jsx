import useComentarios from "../../hooks/useComentarios";
import styles from "./Comentarios.module.css";

export default function Comentarios() {
  const { comentarios } = useComentarios();
  return (
    <div>
      <ul className={styles['ul-comentarios']}>
        {comentarios.map(comentario => (
          
            <li key={comentario.id} className={styles['li-comentarios']}>
            <h2 className={styles['h2-comentarios']}>{comentario.name}</h2>
            <p className={styles['p1-comentarios']}>{comentario.email}</p>
            <p className={styles['p2-comentarios']}>{comentario.body}</p>
          </li>
        )
        )}
      </ul>
    </div>
  );
}
