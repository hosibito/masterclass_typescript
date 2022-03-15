import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const coins = [
    {
      id: "btc-bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      rank: 1,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "eth-ethereum",
      name: "Ethereum",
      symbol: "ETH",
      rank: 2,
      is_new: false,
      is_active: true,
      type: "coin",
    },
    {
      id: "hex-hex",
      name: "HEX",
      symbol: "HEX",
      rank: 3,
      is_new: false,
      is_active: true,
      type: "token",
    },
  ];

function Coins() {
    return (
        <Container>
          <Header>
            <Title>코인</Title>
          </Header>
          <CoinsList>
            {coins.map((coin) => (
              <Coin key={coin.id}>
                <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
              </Coin>
            ))}
          </CoinsList>
        </Container>
      );
  }
  export default Coins;

  /**
   * Container 를 div 로 만든다. 
   * Header 를 header 로 만든다.
   * Title 를 h1 으로 만든다
   * CoinsList 를 ul 로
   * Coin 을 li 로
   * 그뒤 스타일을 꾸며준다. 
   * 링크를 걸어주고 각각의 정보를 넣어준다
   * 정보는 나중에는 받아올것이나 우선은 테스트리스트에서 넣는다.
   */

