
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body">
  <div classNameName="container-fluid">
    <Link className="navbar-brand" to="/">
      <h5>
      NEWS DASHBOARD
      </h5>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/general">General</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/bussiness">Bussiness</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/entertainment">Entertainment</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/health">Health</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/science">Science</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/sports">Sports</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="technology">Technology</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar