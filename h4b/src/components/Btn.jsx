import React from "react";
import axios from "axios";

const btn = () => {
  const yoyo = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/model/training1.csv",
        { responseType: "blob" }
      );
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "model.pkl");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.log(error);
    }
  };
  return <button onClick={yoyo}>Hello</button>;
};

export default btn;
