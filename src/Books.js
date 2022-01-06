import got from "./apis/apis";
import React, { useEffect, useState } from "react";
const Books = () => {
  const [data, setData] = useState();
  useEffect(() => {
    (async () => {
      const res = await got.get("/books/");
      setData(res);
    })();
  }, []);
  console.log(data);
  return (
    <div>
      <h1>WelCome To Got Family</h1>
      {!data ? <p>Loading...</p> : <p>Data</p>}
    </div>
  );
};
export default Books;
