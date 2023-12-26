import Editor from "./Editor";
import "./index.css";
import TextList from "./TextList";

function App() {
  return (
    <div className="App">
      <Editor />
      <div className="other"><TextList /></div>
    </div>
  );
}

export default App;
