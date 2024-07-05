import './App.css';
import Header from "./components/Header"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
         <Header name="krish" age="18" city="suart" />

         <Card name="card1" price="100"/>
         <Card name="card2" price="200"/>
         <Card name="card3" price="300"/>
         <Card name="card4" price="400"/>
    </div>
  );
}

export default App;
