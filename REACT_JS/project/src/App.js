import './App.css';
import Profile from './components/app1/app1';
import Profile1 from './components/app1/app2';
import Gallery from './components/app1/app3';
import Gallery2 from './components/app2/Gallery';
import Bio from './components/app3/app1';
import TodoList from './components/app4/app1';
import TodoList2 from './components/app4/app2';
import TodoList3 from './components/app4/app3';
import Profile2 from './components/app5/app2';

function App() {
  return (
    <div className="App">
      <Profile/>
      <hr />
      <Profile1/>
      <hr />
      <Gallery/>
      <hr />
      <Gallery2/>
      <hr />
      <Bio/>
      <hr />
      <TodoList/>
      <hr />
      <TodoList2/>
      <hr />
      <TodoList3/>
      <hr />
      <Profile2/>




    </div>
  );
}

export default App;
