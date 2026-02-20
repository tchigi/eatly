import "./global.module.css"
import styles from "./global.module.css";
import Header from "./components/organisms/Header/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "./components/organisms/Footer/Footer.tsx";
import ScrollToAnchor from "./helpers/ScrollToAnchor.ts";

function App() {
    // Паттерны:
    // 1. Итератор - @src/store/slices/blogSlice.ts
    // 2. Состояние - @src/components/molecules/FAQItem/FAQItem.tsx
    // 3. Store - @src/store/store.ts
    // 4. Фабричный метод - @src\components\atoms\Icon\Icon.tsx
    // 5. Фасад - @src\components\atoms\Heading\Heading.tsx
    // 6. Конуструктор - @src\components\atoms\Heading\Heading.tsx
    // 7. Цепочка ответственности - @src\components\organisms\RecipesSection\RecipesSection.tsx
    // 8. Стратегия - @main.tsx
    // 9. Абстрактная фабрика - @src\components\organisms\Blog\Blog.tsx
    // 10. Адаптер - @src\components\organisms\SinglePost\SinglePost.tsx
    // 11. Команда - @src/store/slices/newCommentSlice.ts
    // 12. Наблюдатель - @src/components/molecules/FAQItem/FAQItem.tsx
    // 13. Декоратор - @src\components\atoms\Range\Range.tsx

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
