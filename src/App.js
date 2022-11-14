import { useState } from "react";
import Header from "./components/header/header.component";
import Body from "./components/body/body.component";
import Container from "./components/container/container.component";
import './App.css';


function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Header setSearch={setSearch} />
      <Body>
        <Container search={search} />
      </Body>
    </div>
  );
}

export default App;
