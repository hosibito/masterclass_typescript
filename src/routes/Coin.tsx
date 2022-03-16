import { useState } from "react";
import { useLocation, useParams } from "react-router";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface RouterState {
  state : {
    name : string;
    rank : number;
  }
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as RouterState;  

  console.log(coinId)
  console.log(state.name) 
  console.log(state.rank)

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
}
export default Coin;

/**
interface RouterState {
  state : {
    name: string;
    rank: number;
  }
}

function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation() as RouterState;  

  console.log(coinId)
  console.log(state.name)
  console.log(state.rank)

  return <h1>Coin: </h1>;
}
export default Coin;

 */
