<<<<<<< HEAD
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Dashboard() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="Denúncias 2022" grid dataKey="Denúncias" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
=======
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
>>>>>>> 87eeeba7650b817d7598bfae6a978819ff402c5b
}
