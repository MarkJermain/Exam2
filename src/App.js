import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const URL = "https://randomuser.me/api/";

  const [listApi, setListApi] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const json = await response.json();
        const [apiItem] = json.results;
        setListApi(apiItem);
        console.log(apiItem);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Exam #2</h1>
      <h2>Fetching of API Data</h2>
      <h3> {listApi && <div> Gender: {listApi.gender}</div>} </h3>
      <h3> {listApi && <div> Email: {listApi.email}</div>} </h3>
      <h3> {listApi && <div> Phone Number: {listApi.phone}</div>} </h3>
      <h3> {listApi && <div> Cell Number: {listApi.cell}</div>} </h3>
      <h3> {listApi && <div> Nat: {listApi.nat}</div>} </h3>
    </div>
  );
}
