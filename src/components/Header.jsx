import styles from "./Header.module.css";
import { useState, useRef, useEffect } from "react";
import { useFecth } from "../hooks/useFetch";

const Header = () => {
  const [username, setUsername] = useState("");
  const { getAllDataUser } = useFecth();

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      inputRef.current.focus();
      return;
    }

    getAllDataUser(username);
    setUsername("");
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [handleSubmit]);

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
        />
        <button type="submit">Buscar</button>
      </form>
    </header>
  );
};

export default Header;
