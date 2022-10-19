import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ChartDiagram = () => {
  Chart.register(ArcElement, Tooltip, Legend);

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const { expenses } = useSelector((state: RootState) => state.budget);

  let labels = expenses.map((exp) => exp.title);
  let cost = expenses.map((exp) => exp.cost);
  let color: string[] = [];
  expenses.map(() => color.push(getRandomColor()));

  const data = {
    labels: [...labels],
    datasets: [
      {
        label: "Расходы",
        data: [...cost],
        backgroundColor: [...color],
      },
    ],
  };

  const pieChart = <Pie width={320} height={320} data={data} />;
  return pieChart;
};
export default ChartDiagram;
