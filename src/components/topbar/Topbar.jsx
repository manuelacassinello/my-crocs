import "./topbar.scss"

export default function Topbar() {
  return (
    <div className="topbar" >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            <img src="assets/logo.png" alt="k"></img>
          </a>
          <div className="itemContainer">
            <a href="#works" className="worksT">New Arrivals</a>
          </div>
          <div className="itemContainer">
            <a href="#about" className="aboutT">Classics</a>
          </div>
          <div className="itemContainer">
            <a href="#contact" className="contactT">Creative  Space</a>
          </div>
        </div>
        <div className="right">
          <input type="text"placeholder="Hey,  how can I help you today?"/>
          <button>
            <img src="assets/icon.png" alt="k"></img>
          </button>
        </div>
      </div>
    </div>
  )
}
