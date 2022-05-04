import React from "react";

function Stock({ stock, myStocks, setMyStocks }) {

  function handleClick(){

    const stockExists = myStocks.filter(myStock => myStock.id === stock.id)

    if (stockExists.length === 1) {
      const filtered = myStocks.filter(myStock => myStock.id !== stock.id)
      setMyStocks(filtered)
    } else {
      setMyStocks([...myStocks, stock])
    }

  }



  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
