import React, { useEffect, useState } from "react";

import got from "./apis/apis";

const Houses = () => {
  const [bookData, setBookData] = useState();
  useEffect(() => {
    (async () => {
      const { data } = await got.get("/houses");
      setBookData(data);
    })();
  }, []);
  console.log(bookData);
  return (
    <div className="ui container">
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <h1 style={{ textAlign: "center" }}>Houses</h1>
      </div>

      {!bookData ? (
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      ) : (
        <div
          className="ui relaxed divided list"
          style={{ margin: "30px 0 30px 0" }}
        >
          <div
            className="flex-container"
            style={{
              display: "grid",
              gridTemplateColumns: " repeat(auto-fill, minmax(230px, 1fr))",
              gridGap: "20px",
            }}
          >
            {bookData.map((book, index) => {
              const { name, coatOfArms, region, seats, words } = book;
              return (
                <div
                  className="ui cards"
                  style={{ padding: "2px 16px" }}
                  key={index}
                >
                  <div
                    className="card"
                    style={{
                      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                      transition: "0.3s",
                    }}
                  >
                    <div className="content">
                      <div className="header">{name}</div>
                      <div className="meta">{region}</div>
                      <div className="description">
                        <b>Coat Of Arms:&nbsp;</b>

                        {coatOfArms}
                      </div>
                      <div className="description">
                        <b>Seat:&nbsp;</b>
                        {seats[0]}
                      </div>
                      <div className="description">
                        <b>Slogan:&nbsp;</b>

                        {words}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Houses;
