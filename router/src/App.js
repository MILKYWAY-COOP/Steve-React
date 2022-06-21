import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <nav className='nav'>
        <Link to='/invoices'>Invoices</Link> | {" "}
        <Link to='/expenses'>Expenses</Link> 
      </nav>
      <Outlet />
    </div>
  );
}
