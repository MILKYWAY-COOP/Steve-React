import { Link, Outlet } from 'react-router-dom';
import {getInvoices} from '../data';
    
export default function Invoices() {
    let invoices = getInvoices();
    return (
        <div className='main-invoices'>
            <nav className='nav-invoices'>
                {invoices.map(invoice => (
                    <Link key={invoice.number}
                        to={`/invoices/${invoice.id}`}
                    className="invoice">
                        {invoice.name}
                    </Link>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}