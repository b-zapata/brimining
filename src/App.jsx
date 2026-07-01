import heroImage from './assets/mining-hero.png';

function App() {
  return (
    <main className="site-shell">
      <section className="hero" aria-labelledby="page-title">
        <img
          className="hero__image"
          src={heroImage}
          alt="Mining equipment and core samples at an active worksite"
        />
        <div className="hero__overlay" />

        <div className="hero__content">
          <p className="hero__eyebrow">BRI Mining</p>
          <h1 id="page-title">This site is under construction.</h1>
          <p className="hero__copy">
            We are building a new online home for BRI Mining. Please check back
            soon.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
