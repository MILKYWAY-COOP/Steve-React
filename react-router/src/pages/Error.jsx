import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className='section'>
      <h1>404</h1>
      <p>Page not found</p>
      <Link to='/' className='btn'>Back Home</Link>
    </section>
  );
};
export default Error;
