import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  MapOutlined,
  InsertChartOutlinedSharp,
  ReportOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Opções</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem ">
                <LineStyle className="sidebarIcon" />
                Dashboard
              </li>
            </Link>

            <Link to="/mapa" className="link">
              <li className="sidebarListItem">
                <MapOutlined className="sidebarIcon" />
                Mapa
              </li>
            </Link>

            <Link to="/graficos" className="link">
              <li className="sidebarListItem">
                <InsertChartOutlinedSharp className="sidebarIcon" />
                Gráficos
              </li>
            </Link>

            <Link to="/denuncias" className="link">
              <li className="sidebarListItem">
                <ReportOutlined className="sidebarIcon" />
                Denúncias
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notificações</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Mensagens
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
