import Header from "../../components/Header/Header";
import ImageWeb from "../../assets/image-web-3-desktop.jpg";
import ImageMobile from "../../assets/image-web-3-mobile.jpg";
import CardItem from "../../components/CardItem";
import ImageGaming from "../../assets/image-gaming-growth.jpg";
import ImageLaptop from "../../assets/image-top-laptops.jpg";
import ImagePC from "../../assets/image-retro-pcs.jpg";

const data = [
  {
    src: ImagePC,
    number: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    src: ImageLaptop,
    number: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets",
  },
  {
    src: ImageGaming,
    number: "03",
    title: "The Growth of Gaming",
    description: "How to pandemic has sparked fresh opportunities.",
  },
];

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Header></Header>
      <main>
        <section className="homepage-wrap-content">
          <div className="homepage-left">
            <picture>
              <source media="(max-width:767px)" srcset={ImageMobile} />
              <img
                className="homepage-img"
                src={ImageWeb}
                alt="image main web"
              />
            </picture>
            <div className="homepage-content">
              <h1 className="homepage-title">The Bridght Future of Web 3.0?</h1>
              <div className="homepage-wrap-desc">
                <p className="homepage-desc">
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfillings its promise?
                </p>
                <button className="homepage-button">READ MORE</button>
              </div>
            </div>
          </div>
          <div className="homepage-right">
            <h2 className="homepage-right-title">New</h2>
            <div className="homepage-right-card">
              <h5 className="homepage-right-card-title">
                Hydrogen VS Electric Cars
              </h5>
              <p className="homepage-right-card-desc">
                Will Hydrogen-fueled cars ever catch up to EVs?
              </p>
            </div>
            <div className="homepage-right-card">
              <h5 className="homepage-right-card-title">
                The Downsides of AI Artistry
              </h5>
              <p className="homepage-right-card-desc">
                What are the possible adverse effects of on-demand Ai image
                generation?
              </p>
            </div>
            <div className="homepage-right-card">
              <h5 className="homepage-right-card-title">
                Is VC Funding Drying Up
              </h5>
              <p className="homepage-right-card-desc">
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means
              </p>
            </div>
          </div>
        </section>
        <section className="homepage-wrap-card">
          {data.map((item) => (
            <CardItem
              src={item.src}
              number={item.number}
              title={item.title}
              description={item.description}
            ></CardItem>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Homepage;
