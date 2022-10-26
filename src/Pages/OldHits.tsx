import { Outlet, Link } from "react-router-dom";

const OldHits = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/NewestBangers">About</Link>
          </li>
          <li>
            <Link to="/OldHits">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      </div>
  )
};

export default OldHits;
