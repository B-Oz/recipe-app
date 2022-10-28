import { useState } from "react";
import "../css/home.css";

const Home = () => {
  const [query, setQuery] = useState("");
  const [meal, setMeal] = useState("breakfast");
  return (
    <div className="container ">
      <form action="post" className="homeForm ">
        <div className="d-flex mt-4 g-2">
          <input
            type="search"
            className="homeInput form-control"
            name="foodSearch"
            id="foodSearch"
            placeholder="What you want eat?"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <select
            className="form-select mx-3"
            aria-label="Default select example"
            name="mealtype"
            id={meal} /*string meal de olabilir */
            // onSelect={meal}
            onChange={(e) => setMeal(e.target.value)}
          >
            <option value="breakfast">Breakfast</option>
            <option value="dinner">Dinner</option>
            <option value="lunch">Lunch</option>
            <option value="snack">Snack</option>
            <option value="teatime">Teatime</option>
          </select>
          <button
            className="btn btn-secondary "
            type="submit"
            // style={{ backgroundColor: "rgb(186, 1, 50)" }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;
