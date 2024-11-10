import styled from "styled-components";
import "./App.css";
import CardPage from "./pages/CardPage";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <Root>
      <CardPage />
    </Root>
  );
}

export default App;
