import Chart from "../../components/Chart";
import Map from "../../components/Map";
import Settings from "../../components/SettingComponent";
import Table from "../../components/Table";

export default function Dashboard({ activeTab = "chart" }) {
  function renderTab(activeTab) {
    switch (activeTab) {
      case "chart":
        return <Chart />;
      case "map":
        return <Map />;
      case "table":
        return <Table />;
      case "settings":
        return <Settings />;

      default:
        return <Chart />;
    }
  }

  return renderTab(activeTab);
}
