import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const { state: detail } = useLocation();
  console.log(detail);
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />

      <p className="text-center ">{detail.label}</p>
      <div className="flex justify-content-evenly align-items-center flex-wrap">
        <ul>
          <p className="">Nutriens</p>

          <li>Calcium: {detail.digest[5].total.toFixed()}mg</li>
          <li>Carbs: {detail.digest[1].total.toFixed()}g</li>
          <li>Cholesterol: {detail.digest[3].total.toFixed()}mg</li>
          <li>Energy: {detail.calories.toFixed()}kcal</li>
          <li>Fat: {detail.digest[0].total.toFixed()}</li>
          <li>Carbs: {detail.digest[1].total.toFixed()}</li>
          <li>Protein: {detail.digest[2].total.toFixed()}</li>
          <li>Cholesterol: {detail.digest[3].total.toFixed()}</li>
        </ul>
      </div>
      <div>
        <img src={detail.image} alt={detail.label} />
      </div>

      <ul className="mt-4">
        <p>Recipe</p>
        {detail.ingredientLines.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <button className="btn btn-danger ">Back</button>
    </div>
  );
};

export default Details;
