import "./home.css";
import WeeklySales from "@/components/Home/WeeklySales/WeeklySales";
import WeeklyIncome from "@/components/Home/WeeklyIncome/WeeklyIncome";
import MonthlySummary from "@/components/Home/MonthlySummary/MonthlySummary";
import WeeklyOrders from "@/components/Home/WeeklyOrders/WeeklyOrders";
import Expenses from "@/components/Home/Expenses/Expenses";
import GraphContainer from "@/components/Home/GraphContainer/GraphContainer";

export default function Home() {
  return (
    <main className="grid-container">
      <GraphContainer gridArea="weekly-sales">
        <WeeklySales />
      </GraphContainer>

      <GraphContainer gridArea="weekly-income">
        <WeeklyIncome />
      </GraphContainer>

      <GraphContainer gridArea="monthly-summary">
        <MonthlySummary />
      </GraphContainer>

      <GraphContainer gridArea="weekly-orders">
        <WeeklyOrders />
      </GraphContainer>

      <GraphContainer gridArea="expenses">
        <Expenses />
      </GraphContainer>
    </main>
  );
}
