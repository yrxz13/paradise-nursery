import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartCount, selectCartItems } from './CartSlice';
import { categories, formatPrice } from './plants';

export function Navbar({ page }) {
  const count = useSelector(selectCartCount);
  const current = target => page === target ? 'page' : undefined;

  return (
    <header className="site-header">
      <div className="wrapper header-inner">
        <a className="brand" href="#home">Paradise Nursery</a>
        <nav aria-label="Shop navigation">
          <a href="#home" aria-current={current('home')}>Home</a>
          <a href="#plants" aria-current={current('plants')}>Plants</a>
          <a href="#cart" aria-current={current('cart')} className="cart-link">
            <span className="cart-icon" aria-hidden="true">&#128722;</span>
            Cart <span className="cart-count" aria-live="polite" aria-atomic="true">{count}<span className="sr-only"> items</span></span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const inCart = new Set(items.map(item => item.id));

  return (
    <div className="wrapper shop-page">
      <div className="page-heading">
        <h1>Shop houseplants</h1>
        <p>Browse 18 plants across three collections.</p>
      </div>
      {categories.map(({ name, products }, index) => (
        <section className="collection" key={name} aria-labelledby={'collection-' + index}>
          <h2 id={'collection-' + index}>{name}</h2>
          <div className="products">
            {products.map(product => (
              <article className="product-card" key={product.id}>
                <img src={product.image} alt={product.name} width="400" height="300" loading="lazy" />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-actions">
                    <strong>{formatPrice(product.priceCents)}</strong>
                    <button type="button" className="button" disabled={inCart.has(product.id)}
                      onClick={() => dispatch(addItem(product))}>
                      {inCart.has(product.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
