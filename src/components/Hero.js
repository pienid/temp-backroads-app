import Title from "./Title";

function Hero() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-banner">
          <Title title="BackRoads" subTitle="App" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            explicabo debitis est autem dicta.
          </p>
          <a href="#tours" className="btn hero-btn">
            explore tours
          </a>
        </div>
      </section>
    </>
  );
}
export default Hero;
