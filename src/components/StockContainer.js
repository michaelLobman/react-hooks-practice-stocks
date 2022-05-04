import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, myStocks, setMyStocks }) {

  const renderedStocks = stocks.map(stock => (
    <Stock stock={stock} myStocks={myStocks} setMyStocks={setMyStocks} key={stock.id} />
  ))


  return (

    <div>
      <h2>Stocks</h2>
      {renderedStocks}
    </div>
  );
}

export default StockContainer;
