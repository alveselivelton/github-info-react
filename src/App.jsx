import styles from "./App.module.css";
import { useUserContext } from "./hooks/useUserContext";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const { user } = useUserContext();

  return (
    <div className={styles.container}>
      <Header />
      {user.name && <Card />}
    </div>
  );
}

export default App;
