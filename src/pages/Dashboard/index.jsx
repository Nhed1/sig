import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
// import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import styles from "./styles.module.scss";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <FeaturedInfo />
      <Chart data={userData} title="Denúncias 2022" grid dataKey="Denúncias" />
      <div className={styles.homeWidgets}>
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
