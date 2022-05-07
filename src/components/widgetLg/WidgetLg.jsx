import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Últimas Denúncias</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Usuário</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Denúncia</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/236x/f6/e0/cb/f6e0cbd12630674a1ecf5031dd027a0c.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Dominick Lima</span>
          </td>
          <td className="widgetLgDate">2 Jun 2022</td>
          <td className="widgetLgAmount">Vazamento de Água</td>
          <td className="widgetLgStatus">
            <Button type="Resolvido" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/originals/e6/67/3f/e6673fc4f4930a84277c3f88bc87978e.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Leonardo Garreto</span>
          </td>
          <td className="widgetLgDate">1 Jun 2022</td>
          <td className="widgetLgAmount">Vazamento de Esgoto</td>
          <td className="widgetLgStatus">
            <Button type="Negado" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/originals/2f/3c/94/2f3c949240d375f8d705b5647a140c52.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Giovanni Luca</span>
          </td>
          <td className="widgetLgDate">23 Mai 2022</td>
          <td className="widgetLgAmount">Vazamento de Esgoto</td>
          <td className="widgetLgStatus">
            <Button type="Pendente" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i.pinimg.com/originals/d2/80/b3/d280b334747451a0de6a4a7624418793.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Dominick Lima</span>
          </td>
          <td className="widgetLgDate">20 Mai 2022</td>
          <td className="widgetLgAmount">Vazamento de Água</td>
          <td className="widgetLgStatus">
            <Button type="Resolvido" />
          </td>
        </tr>
      </table>
    </div>
  );
}
