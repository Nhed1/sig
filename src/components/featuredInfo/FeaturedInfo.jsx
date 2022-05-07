import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Denúncias Coletadas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">842</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Em comparação ao mês passado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Denúncia em Destaque</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Vazamento de água</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Em comparação ao mês passado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Bairro em Destaque</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">Renascença - São Luís</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Em comparação ao mês passado</span>
      </div>
    </div>
  );
}
