import { useState, useEffect } from "react";
import axios from "axios";
import "../css/home.css";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [query, setQuery] = useState(null);
  const [meal, setMeal] = useState(null);

  // const apps = {
  //   apiKey: process.env.REACT_APP_apiKey,
  //   appId: process.env.REACT_APP_appId,
  // };

  const apiKey = "0699238fab1128c9744015546a02b835";
  const appId = "ef5430ac";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${apiKey}&mealType=${meal}`;

  const getApi = () => {
    axios(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      <Navbar />
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
              onClick={() => getApi()}
            >
              Search
            </button>
          </div>
        </form>
        <RecipeCard />
      </div>
    </>
  );
};

export default Home;
