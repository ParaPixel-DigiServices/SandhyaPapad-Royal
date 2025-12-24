import KpiCards from "./components/KpiCards";
import OrdersTable from "./components/OrdersTable";

export default function AdminHome() {
  return (
    <div className="p-8">
      <KpiCards />
      <OrdersTable />
    </div>
  );
}
