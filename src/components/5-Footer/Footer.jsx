import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <footer className="flex">
      <div className="left-footer">
        <ul>
          <li>
            <a href="">Project</a>
          </li>
          <li>
            <a href="">certifications</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">About me</a>
          </li>
        </ul>
      </div>
      <div className="right-footer">
        <p>© 2024 Soulaiman Ek Corporation</p>
      </div>
    </footer>
  );
}
