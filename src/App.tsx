import "./global.module.css"
import styles from "./global.module.css";
import Header from "./components/organisms/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/organisms/Footer/Footer.tsx";

function App() {

    return (
        <div className={styles.wrapper}>
            <Header/>
            <main className={styles.main}>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
