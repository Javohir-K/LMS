import { LineChart,Line,CartesianGrid, XAxis,YAxis,Tooltip, AreaChart, Area } from "recharts";
const data = [{month: 'March',net:2400},{month: 'April',net:2800},{month: 'May',net:1800},{month: 'June',net:1930},{month: 'July',net:3240},]

export const renderLineChart=(
    <AreaChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    {/* <Line type="monotone" dataKey="net" stroke="#2ec866" /> */}
    <CartesianGrid stroke="#444" strokeDasharray="5 5" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Area type="monotone" dataKey="net" stroke="#2ec866" fill="#2ec866" />
  </AreaChart>
)