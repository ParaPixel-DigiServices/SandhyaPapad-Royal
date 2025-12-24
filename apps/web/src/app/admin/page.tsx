import KpiCards from "./components/KpiCards";
import OrdersTable from "./components/OrdersTable";
import PaymentVerifier from "./components/PaymentVerifier";
import StockManager from "./components/StockManager";

export default function AdminHome() {
  return (
    <div className="p-8">
      <KpiCards />
      <OrdersTable />
      <PaymentVerifier />
      <StockManager />
    </div>
  );
}
