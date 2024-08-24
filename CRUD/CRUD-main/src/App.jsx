import { useState } from "react";
import UserTable from "./pages/CustomTable";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserTable />
    </>
  );
}

export default App;
