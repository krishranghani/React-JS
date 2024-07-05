import './App.css';
// hpw to use image
import img1 from "../src/images/image.jpg"

function App() {
// topica :- RENDARING EXPRESSION , LISTS (map()), METHODS , IMAGES

  const fristname = "krish";
  const lastname = "ranghani";

  // RENDARING  LISTS -> using map() mathod
  const arr = ["krish", "vijay", "dhaval"]

  return (
    <div className="App">
      <h1>rendaring expression and listing</h1>
      <h3>
        my fristname is {fristname} and my last name is {lastname}
      </h3>
      <hr />
      <h1>10 and 20 sum is {10 + 20}</h1>
      {arr.map((cvalue, index, arr) => {
        return (
          <div>
            <p>my name is {cvalue}</p>
          </div>
        );
      })}
      <hr />
      <h1>how to rendaring image in react js</h1>
      <img src={img1} alt="cool image"/>
    </div>
  );
}

export default App;
