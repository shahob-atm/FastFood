import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Order from "./Order.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path={"/order"} element={<Order />} />
      </Routes>
    </>
  )
}

export default App;
