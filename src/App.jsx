import { useEffect, useState } from 'react';
import AboutUs from './AboutUs';
import ProductList, { Navbar } from './ProductList';
import CartItem from './CartItem';
import './App.css';

function readPage() {
  const page = window.location.hash.slice(1);
  return page === 'plants' || page === 'cart' ? page : 'home';
}

export default function App() {
  const [page, setPage] = useState(readPage);

  useEffect(() => {
    function onNavigate() {
      setPage(readPage());
      window.scrollTo(0, 0);
    }
    window.addEventListener('hashchange', onNavigate);
    return () => window.removeEventListener('hashchange', onNavigate);
  }, []);

  return (
    <>
      <Navbar page={page} />
      <main>
        {page === 'home' && (
          <>
            <section className="landing" aria-labelledby="landing-title">
              <div className="wrapper landing-content">
                <p className="eyebrow">The indoor plant shop</p>
                <h1 id="landing-title">Paradise<br />Nursery</h1>
                <p>Find a houseplant for your windowsill, work desk, or that corner that needs a little life.</p>
                <a className="button button-light" href="#plants">Get Started</a>
              </div>
            </section>
            <AboutUs />
          </>
        )}
        {page === 'plants' && <ProductList />}
        {page === 'cart' && <CartItem />}
      </main>
      <footer className="site-footer"><div className="wrapper">Paradise Nursery</div></footer>
    </>
  );
}
