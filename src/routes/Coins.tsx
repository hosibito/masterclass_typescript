import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
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

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      (async () => {
        const response = await fetch("https://api.coinpaprika.com/v1/coins");
        const json = await response.json();
        setCoins(json.slice(0, 100));
        setLoading(false);
      })();
    }, []);

    return (
        <Container>
            <Header>
                <Title>코인</Title>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : (
                <CoinsList>
                    {coins.map((coin) => (
                    <Coin key={coin.id}>
                        <Link to={`/${coin.id}`}  state={ { name : coin.name,  rank: coin.rank } }  >
                          <Img src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}/>
                          {coin.name} &rarr;
                        </Link>
                    </Coin>
                    ))}
                </CoinsList>
                )
            }
        </Container>
      );
  }
  export default Coins;

  /**
    정보 가져와서 넣어준다.. 딱히 설명할게 없네?

    다만 문제점이 ex) Bitcion 을 선택해서 선택환 화면으로 넘어갓다가 다시 되돌아오면.. 로딩을 다시한다.
    처음 시작할때 한번만 로깅되게 일부러 설정했는데 다른화면 갓다가 되돌아왓다고 이걸 굳이 다시 로딩하는건 원하는 바가 아니다. 다음 섹션에서 처리할것임. 
   */

