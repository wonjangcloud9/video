import { Reset } from "styled-reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Info from "./Info";

const Header = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
`;

function App() {
  return (
    <>
      <Reset />
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Info />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
