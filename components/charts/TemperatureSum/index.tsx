import { useEffect, useState } from "react";
import {
    ComposedChart,
    Line,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
} from "recharts";
import style from "./temperatureSumm.module.scss";

interface IData {
    current_accumulated: IAccumulated[];
    historical_accumulated: IAccumulated[];
    ndvi: INdvi[];
    current_year_temperatures: ICurrentYearTemperature[];
}

interface IAccumulated {
    "0": number;
    "5": number;
    "10": number;
    "15": number;
    dt: number;
    rain: number;
}
interface IHistoricalAccumulated {
    "0"?: number;
    "5"?: number;
    "10"?: number;
    "15"?: number;
    dt?: number;
    rain?: number;
    day?: number;
    month?: number;
}
interface INdvi {
    dt?: number;
    value?: number;
}
interface ICurrentYearTemperature {
    dt: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}
interface ICharData {
    dateString: string;
    currentAccumulated: IAccumulated;
    historicalAccumulated: IHistoricalAccumulated;
    currentYear: ICurrentYearTemperature;
    nvdi: INdvi;
}
const TemperatureSum = () => {
    const [data, setData] = useState<IData>();
    const [isLoading, setLoading] = useState(false);

    const monthNames = [
        "янв",
        "фев",
        "мар",
        "апр",
        "мая",
        "июн",
        "июл",
        "авг",
        "сен",
        "ноя",
        "дек",
    ];

    useEffect(() => {
        setLoading(true);
        fetch("http://bird.7host.ru:5050/test_api")
            .then((res) => res.json())
            .then((data: any) => {
                setData(data);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <p>Загрузка...</p>;
    if (!data) return <p>Нет данных</p>;

    const historicalAccumulated: IHistoricalAccumulated[] = [];
    data.historical_accumulated.map((value: IAccumulated, id: number) => {
        const hDate = new Date(value.dt * 1000);
        historicalAccumulated.push({
            ...value,
            "0": Math.round(value["0"]),
            day: hDate.getDate(),
            month: hDate.getMonth(),
        });
    });

    const charData: ICharData[] = [];
    data.current_accumulated.map((value: IAccumulated, id: number) => {
        const date = new Date(value.dt * 1000);
        const dateString = date.getDate() + " " + monthNames[date.getMonth()];

        charData.push({
            dateString: dateString,
            currentAccumulated: {
                ...data.current_accumulated[id],
                "0": Math.round(data.current_accumulated[id]["0"]),
            },
            historicalAccumulated: {
                ...historicalAccumulated.find(
                    (v) =>
                        v.day === date.getDate() && v.month === date.getMonth()
                ),
            },
            currentYear: {
                ...data.current_year_temperatures[id],
                temp: Math.round(data.current_year_temperatures[id].temp),
                temp_max: Math.round(
                    data.current_year_temperatures[id].temp_max
                ),
                temp_min: Math.round(
                    data.current_year_temperatures[id].temp_min
                ),
            },
            nvdi: { ...data.ndvi.find((v) => v.dt === value.dt) },
        });
    });

    console.log(charData);

    return (
        <div className={style.char}>
            <ComposedChart width={986} height={162} data={charData}>
                <defs>
                    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                        <stop className={style.from} offset="0%" />
                        <stop className={style.to} offset="150%" />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} strokeDasharray="2 2" />
                <YAxis
                    yAxisId="left"
                    type="number"
                    domain={["auto", "auto"]}
                    unit="°"
                />
                <YAxis
                    yAxisId="nvdi"
                    hide
                    type="number"
                    domain={["auto", "auto"]}
                />
                <YAxis
                    yAxisId="right"
                    orientation="right"
                    type="number"
                    domain={[0, "dataMax"]}
                    unit="°"
                />
                <XAxis dataKey="dateString" />
                <Tooltip />
                <Legend />
                <Area
                    yAxisId="right"
                    type="monotone"
                    dataKey="currentAccumulated[0]"
                    stroke="var(--area)"
                    fill="url(#gradient)"
                />
                <Line
                    yAxisId="right"
                    type="monotone"
                    dot={false}
                    dataKey="historicalAccumulated[0]"
                    stroke="var(--area)"
                    strokeDasharray="5 3"
                />
                <Line
                    yAxisId="left"
                    type="monotone"
                    dot={false}
                    dataKey="currentYear.temp"
                    stroke="var(--temp)"
                />
                <Line
                    yAxisId="left"
                    type="monotone"
                    dot={false}
                    dataKey="currentYear.temp_max"
                    stroke="var(--temp_max)"
                />
                <Line
                    yAxisId="left"
                    type="monotone"
                    dot={false}
                    dataKey="currentYear.temp_min"
                    stroke="var(--temp_min)"
                />
                <Line
                    yAxisId="nvdi"
                    type="monotone"
                    dot={false}
                    dataKey="nvdi.value"
                    stroke="var(--nvdi)"
                />
            </ComposedChart>
        </div>
    );
};
export default TemperatureSum;
