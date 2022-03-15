import { useParams } from "react-router";

function Coin() {
  const params = useParams();
  const { coinId } = useParams();
  console.log(params)
  console.log(params.coinId)
  return <h1>Coin: {coinId}</h1>;
}
export default Coin;

