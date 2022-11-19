import styles from "./Card.module.css";
import { useUserContext } from "../hooks/useUserContext";

const Card = () => {
  const { user, userRepositories } = useUserContext();

  return (
    <main className={styles.card_container}>
      <section className={styles.user}>
        <img src={user.avatar_url} alt={user.name} />
        <div className={styles.user_info}>
          <h2>{user.name}</h2>
          {user.bio ? <p>{user.bio}</p> : <p>O usuário não possui Bio</p>}
        </div>
      </section>
      <section className={styles.repositories}>
        <h3>Respositórios Públicos</h3>
        <ul>
          {userRepositories &&
            userRepositories.map((repository) => (
              <li key={repository.id}>
                <a href={repository.clone_url} target="_blanck">
                  {repository.name}
                </a>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Card;
