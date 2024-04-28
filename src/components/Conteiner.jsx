import React from "react";
import "../css/MyContainer.css";

function Conteiner({ children }) {
  return (
    <div className="centered-container">
      {children}
    </div>
  );
}

export default Conteiner;
