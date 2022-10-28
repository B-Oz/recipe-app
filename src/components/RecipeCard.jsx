import { Link } from "react-router-dom";
import "../css/recipeCard.css";

import { useNavigate } from "react-router-dom";

const RecipeCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="container d-flex justify-content-center align-items-center p-4 m-4 flex-col text-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={data.recipe.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{data.recipe.label}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={() => navigate("/details", { state: data.recipe })}
            className="btn btn-secondary"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
