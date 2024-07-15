import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />

      <Outlet />
    </div>
  );
}

export default App;