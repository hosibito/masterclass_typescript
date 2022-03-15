import { useParams } from "react-router";

function Coin() {
  const params = useParams();
  const { coinId } = useParams();
  console.log(params)
  console.log(params.coinId)
  return <h1>Coin: {coinId}</h1>;
}
export default Coin;

/**
 react-router-dom v6 이상이신 분들은
    const { coinId } = useParams(); 이렇게만 해주셔도 됩니다.
    useParams쓰는 순간 타입이 string or undefined로 됩니다.

    interface RouteParams {
        coinId: string;
        }
    도 필요없다.. 주소창에 파라메터로 넘어오는건 srting 일수 밖에 없다..

 react-query가 자체적으로 type정의를 제공하여 다운로드가 필요 없어짐
 */