import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import got from "./apis/apis";

const Books = () => {
  const [bookData, setBookData] = useState();
  useEffect(() => {
    (async () => {
      const { data } = await got.get("/books/");
      setBookData(data);
    })();
  }, []);
  console.log(bookData);
  return (
    <div className="ui container">
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <h1 style={{ textAlign: "center" }}>WelCome To Got World</h1>
      </div>
      <p
        style={{
          border: "1px solid green",
          borderRadius: "10px",
          display: "inline-block",
          padding: "10px",
        }}
      >
        <Link to="/houses" className="item">
          Go to Houses
        </Link>
      </p>
      {!bookData ? (
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      ) : (
        <div
          className="ui relaxed divided list"
          style={{ margin: "30px 0 30px 0" }}
        >
          {bookData.map((book, index) => {
            const {
              name,
              authors,
              country,
              numberOfPages,
              publisher,
              released,
            } = book;
            return (
              <div className="item" key={index}>
                <div className="content">
                  <p className="header" style={{ marginTop: "10px" }}>
                    <i className="fas fa-book"></i>&nbsp;{name}
                  </p>

                  <div class="ui list">
                    <div className="item">
                      <div class="content">
                        <b>Total Pages:&nbsp;</b>
                        {numberOfPages}
                      </div>
                      <div class="content">
                        <b>Publisher:&nbsp;</b>
                        {publisher}
                      </div>

                      <div class="content">
                        <b>Country:&nbsp;</b>
                        {country}
                      </div>
                      <div class="content">
                        <b>Released:&nbsp;</b>
                        {released.slice(0, 10)}
                      </div>
                    </div>
                  </div>
                  <div
                    className="description"
                    style={{ textAlign: "right", marginBottom: "10px" }}
                  >
                    {authors[0]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <hr />
    </div>
  );
};
export default Books;
