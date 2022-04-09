import { Reset } from "styled-reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Info from "./Info";

const Header = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 3;
  overflow: hidden;
`;

const Title = styled.span`
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

const Content = styled.div`
  width: 100%;
  height: 200vh;
  top: 20%;
  position: absolute;
`;

function App() {
  return (
    <>
      <Reset />
      <Header>
        <Title>이상한 소방</Title>
      </Header>
      <Content>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Info />} />
          </Routes>
        </Router>
      </Content>
    </>
  );
}

export default App;
