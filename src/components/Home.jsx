import React from "react";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

const Home = () => {
  return (
    <div className="container-fluid bg-secondary bg-opacity-50">
      <div className="row d-flex flex-column flex-md-row py-3">
        <div className="col mt-2">
          <div className="card d-flex flex-row justify-content-around align-items-center">
            <i className="bi bi-currency-dollar fs-4 text-success"></i>
            <div>
              <span>Sales</span>
              <h3>124</h3>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="card d-flex flex-row justify-content-around align-items-center">
            <i className="bi bi-currency-dollar fs-4 text-success"></i>
            <div>
              <span>Sales</span>
              <h3>124</h3>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="card d-flex flex-row justify-content-around align-items-center">
            <i className="bi bi-currency-dollar fs-4 text-success"></i>
            <div>
              <span>Sales</span>
              <h3>124</h3>
            </div>
          </div>
        </div>
        <div className="col mt-2">
          <div className="card d-flex flex-row justify-content-around align-items-center">
            <i className="bi bi-currency-dollar fs-4 text-success"></i>
            <div>
              <span>Sales</span>
              <h3>124</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex flex-column flex-md-row py-3">
        <div className="col-md-8">
          <LineChart />
        </div>
        <div className="col-md-4">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default Home;
