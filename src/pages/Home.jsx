import { useState, useEffect } from "react";
import axios from "axios";
import "../css/home.css";
import Navbar from "../components/Navbar";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [query, setQuery] = useState(null);
  const [meal, setMeal] = useState(null);
  const [data, setData] = useState(null);

  const APP_KEY = process.env.REACT_APP_APP_KEY;
  const APP_ID = process.env.REACT_APP_APP_ID;

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getApi = () => {
    axios(url)
      .then((res) => {
        console.log(res);
        setData(res.data.hits);
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
        </div>
        <button
          className="btn btn-secondary "
          type="submit"
          onClick={() => getApi()}
        >
          Search
        </button>
      </div>
      <div>
        {data && data.map((item, idx) => <RecipeCard data={item} key={idx} />)}
      </div>
    </>
  );
};

export default Home;
