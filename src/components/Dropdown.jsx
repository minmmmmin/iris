import { useState } from "react";

export default function XYDropdowns() {
  const options = [
    "sepal length",
    "sepal width",
    "petal length",
    "petal width",
  ];

  const [xSelected, setXSelected] = useState("sepal length");
  const [xOpen, setXOpen] = useState(false);

  const [ySelected, setYSelected] = useState("sepal length");
  const [yOpen, setYOpen] = useState(false);

  const handleXSelect = (option) => {
    setXSelected(option);
    setXOpen(false);
  };

  const handleYSelect = (option) => {
    setYSelected(option);
    setYOpen(false);
  };

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      {/* X Property */}
      <div>
        <label className="label">x property</label>
        <div className={`dropdown ${xOpen ? "is-active" : ""}`}>
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu-x"
              onClick={() => setXOpen(!xOpen)}
            >
              <span>{xSelected}</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu-x" role="menu">
            <div className="dropdown-content">
              {options.map((option) => (
                <a
                  href="#"
                  key={option}
                  className={`dropdown-item ${
                    option === xSelected ? "is-active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleXSelect(option);
                  }}
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Y Property */}
      <div>
        <label className="label">y property</label>
        <div className={`dropdown ${yOpen ? "is-active" : ""}`}>
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu-y"
              onClick={() => setYOpen(!yOpen)}
            >
              <span>{ySelected}</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </div>
          <div className="dropdown-menu" id="dropdown-menu-y" role="menu">
            <div className="dropdown-content">
              {options.map((option) => (
                <a
                  href="#"
                  key={option}
                  className={`dropdown-item ${
                    option === ySelected ? "is-active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleYSelect(option);
                  }}
                >
                  {option}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
