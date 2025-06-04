import { useState } from "react";

export default function Dropdown({ options, selected, setSelected }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  return (
    <div className={`dropdown ${open ? "is-active" : ""}`}>
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setOpen(!open)}
        >
          <span>{selected}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {options.map((option) => (
            <a
              href="#"
              key={option}
              className={`dropdown-item ${
                option === selected ? "is-active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleSelect(option);
              }}
            >
              {option}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
