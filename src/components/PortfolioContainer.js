import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks, setMyStocks }) {

  const renderedStocks = myStocks.map(stock => (
    <Stock key={stock.id} stock={stock} myStocks={myStocks} setMyStocks={setMyStocks} />
  ))
  return (
    <div>
      <h2>My Portfolio</h2>
      {renderedStocks}
    </div>
  );
}

export default PortfolioContainer;
