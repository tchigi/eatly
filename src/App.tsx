import "./global.module.css"
import Button from "./components/atoms/Button/Button.tsx";
function App() {

  return (
    <div>
      <Button label={"Get started"}/>
      <Button label={"Go Pro"} theme={"inverted"}/>
      <Button label={"Download"} iconType={"arrow-right"}/>
    </div>
  )
}

export default App
