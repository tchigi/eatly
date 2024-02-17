import "./global.module.css"
import styles from "./global.module.css";
import Header from "./components/organisms/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/organisms/Footer/Footer.tsx";
import ScrollToAnchor from "./helpers/ScrollToAnchor.ts";

function App() {

    return (
        <div className={styles.wrapper}>
            <ScrollToAnchor/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default App
