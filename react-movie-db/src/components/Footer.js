import React from "react";
import "../styles/footer.css";

export default function Footer({ previousPage, nextPage }) {
  return (
    <div className="footer">
      <button className="btn left" onClick={previousPage}>
        &#8592;Prev
      </button>
      <button className="btn right" onClick={nextPage}>
        Next&#8594;
      </button>
    </div>
  );
}
