import { Hero } from "./Hero";
import { Link } from "react-router-dom";
import Card from "./Card";
import cardImage from "../assets/images/card.jpg";

export function Homepage() {
  return (
    <>
      <Hero />
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between py-8">
            <h2>Specials</h2>
            <Link to="/" className="button button--primary">
              Online menu
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              imgSrc={cardImage}
              title="Greek salad"
              price={12.99}
              description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
              hasDelivery={true}
            />
            <Card
              imgSrc={cardImage}
              title="Greek salad"
              price={12.99}
              description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
              hasDelivery={true}
            />
            <Card
              imgSrc={cardImage}
              title="Greek salad"
              price={12.99}
              description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
              hasDelivery={true}
            />
          </div>
        </div>
      </section>
    </>
  );
}
