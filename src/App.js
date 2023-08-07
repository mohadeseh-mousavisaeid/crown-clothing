import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import { Homepage } from "./pages/homepage.component";

const Shop = () => {
  const params = useParams();
  return <h1 className={"shop"}>Shop: {params.id}</h1>;
};

function App() {
  return (
    <div className={"App"}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop/:id" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
