import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { name, image } = product;

  return (
    <section className='section product'>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <Link to='/products' className='btn'>Back to products</Link>
    </section>
  );
};

export default SingleProduct;
