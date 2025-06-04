export default function Dropdown() {
  return (
    <div>
      <label className="label">x property</label>
      <div className="dropdown is-active">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>sepal length</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              sepal length
            </a>
            <a href="#" className="dropdown-item">
              sepal width
            </a>
            <a href="#" className="dropdown-item">
              petal length
            </a>
            <a href="#" className="dropdown-item">
              petal width
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
