import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";

interface ChartProps {
    coinId: string;
}

function Chart() {
    const outletDatas = useOutletContext<ChartProps>();
    console.log("ddd", outletDatas.coinId);
    const { isLoading, data } = useQuery(["ohlcv", outletDatas.coinId], () =>
        fetchCoinHistory(outletDatas.coinId)
    );
    return <h1>Chart</h1>;
}

export default Chart;
