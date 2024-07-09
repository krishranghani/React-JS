import "./App.css";
import Card from "./components/Card";
import img1 from "./image/26.jpg"
import img2 from "./image/27.jpg"
import img3 from "./image/28.jpg"
import img4 from "./image/29.jpg"
import img5 from "./image/30.jpg"
import img6 from "./image/31.jpg"

function App() {
  return (
    <div className="App">
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          Responsive Product card grid
        </h1>
        <h1 className="text-3xl">Tailwind CSS & React JS</h1>
      </div>

      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ">
        <Card image={img1} brand="starbucks" proname="COFFEE" delPrice="299$" curPrice="199$" />
        <Card image={img2} brand="Herbal" proname="TEA" delPrice="399$" curPrice="299$" />
        <Card image={img3} brand="Lipton" proname="GREEN TEA" delPrice="499$" curPrice="399$" />
        <Card image={img4} brand="Red Bull" proname="RED BULL" delPrice="599$" curPrice="499$" />
        <Card image={img5} brand="Fresho" proname="CHOCOLATE MOUSSE" delPrice="699$" curPrice="599$" />
        <Card image={img6} brand="Neilson" proname="CHOCOLATE MACARONS" delPrice="799$" curPrice="699$" />

      </div>
    </div>
  );
}

export default App;






// import './App.css';
// import Header from "./components/Header"
// import Card from "./components/Card"

// function App() {
//   return (
//     <div className="App">
//          <Header name="krish" age="18" city="suart" />

//          <Card name="card1" price="100"/>
//          <Card name="card2" price="200"/>
//          <Card name="card3" price="300"/>
//          <Card name="card4" price="400"/>
//     </div>
//   );
// }

// export default App;