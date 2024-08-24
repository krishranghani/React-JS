import { useState } from "react";
import CustomTable from "./Components/CustomTable";
import UserTable2 from "./pages/CustomTable2";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <CustomTable/> */}
      <UserTable2 />
    </>
  );
}

export default App;
