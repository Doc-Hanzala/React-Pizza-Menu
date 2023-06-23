import pizzaData from "../data";
import Pizza from "./Pizza";

const Menu = () => {
  return (
    <div className="menu">
      <h2>our menu</h2>
      <p className="intro">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      <div className="pizzas">
        <ul>
          {pizzaData.map((pizza) => {
            return (
              <li>
                <Pizza pizza={pizza} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
