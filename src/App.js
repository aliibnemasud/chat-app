import "./App.css";
import ChatBot from "./components/ChatBot/ChatBot";
import Header from "./shared/Header";

function App() {
  return (
    <div className="App">
      <Header/>         
      <ChatBot />
    </div>
  );
}

export default App;
