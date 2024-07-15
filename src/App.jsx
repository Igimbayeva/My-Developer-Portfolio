import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar } from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer"; 

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      
      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
