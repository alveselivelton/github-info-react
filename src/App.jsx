import styles from "./App.module.css";
import { useUserContext } from "./hooks/useUserContext";
import Header from "./components/Header";
import Card from "./components/Card";
import Loading from "./components/Loading";

function App() {
  const { user, loading } = useUserContext();

  return (
    <div className={styles.container}>
      <Header />
      {loading && <Loading />}
      {user.name && <Card />}
    </div>
  );
}

export default App;
