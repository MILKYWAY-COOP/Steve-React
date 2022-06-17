import { AirFillShopping } from "react-icons/ai"
import { Link } from "react-router-dom"

function Nav() {
    return (
      <nav>
        <Link to={'/'}>
          <h1>Wear</h1>
        </Link>
        <Link to={'/checkout'}>
          <div className='cart'>
            <AirFillShopping />
            <span>0</span>
          </div>
        </Link>
      </nav>
    );
}