import styles from "./Header.module.css";
import { useState, useRef, useEffect } from "react";
import { useFecth } from "../hooks/useFetch";
import { useUserContext } from "../hooks/useUserContext";

const Header = () => {
  const [username, setUsername] = useState("");
  const { setUser, setUserRepositories } = useUserContext();
  const { getAllDataUser } = useFecth();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser("");
    setUserRepositories([]);

    getAllDataUser(username);

    setUsername("");
    inputRef.current.focus();
  };

  return (
    <header className={styles.header_container}>
      <h1>GitHub Info</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuário: </label>
        <input
          type="text"
          id="username"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
          ref={inputRef}
          required
        />
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
};

export default Header;
