import { AiFillShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import cartContext from '../cartContext';
import { useContext } from 'react';
import { useApp} from '../cartContext'

function Nav() {
  const { item } = useApp();
  console.log(item);

  return (
    <nav>
      <Link to={'/'}>
        <h1>Wear</h1>
      </Link>
      <Link to={'/checkout'}>
        <div className="cart">
          <AiFillShopping />
          <span>{item}</span>
        </div>
      </Link>
    </nav>
  );
}

export default Nav;
