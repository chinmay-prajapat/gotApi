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
      <h1>Books</h1>
    </div>
  );
};
export default Books;
