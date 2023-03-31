import React from "react";
import PercentChange from "./PercentChange";

const TableLine = ({ coin, index }) => {
  // fonction pour faire afficher les chiffres comme le prix du shiba (0.000001)
  const priceFormater = (num) => {
    if (Math.round(num).toString().length < 4) {
      return new Intl.NumberFormat("us-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(num);
    } else {
      return num;
    }
  };
  //fonction pour enlever les 0 d'un chiffre en millard et enlever les 6 derniers chiffres
  const mktCapFormater = (num) => {
    let newNum = String(num).split("").slice(0, -6);

    return Number(newNum.join(""));
  };
  return (
    <div className="table-line">
      <div className="infos-container">
        <span>*</span>
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} height="20" alt="logo" />
        </div>
        <div className="infos">
          <div className="chart-img">
            <img src="./assets/chart-icon.svg" alt="" />
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            href={
              `https://www.coingecko.com/fr/pi%C3%A8ces/` +
              coin.name
                .toLowerCase()
                .replace(" ", "-")
                .replace(" ", "-")
                .replace(" ", "-")
            }
          >
            <img src="./assets/info-icon.svg" alt="" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
      <p className="mktcap">
        {mktCapFormater(coin.market_cap).toLocaleString()} Md$
      </p>
      <p className="volume">{coin.total_volume.toLocaleString()} $</p>
      <PercentChange percent={coin.price_change_percentage_1h_in_currency} />
    </div>
  );
};

export default TableLine;
