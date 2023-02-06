import styled from "styled-components";
import Home from "./modules/home"
const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:30px 0 10px;
`;

const Header = styled.span`
color:black;
font-size:22px;
font-weight:bold;
`;

function App() {
  return (
    <Container>
      <header >
        Monthly Expense Tracker
            </header>
            <Home />
            
    </Container>
  );
}

export default App;
