import { useEffect, useState } from "react";

const Recepie = ({ handleRecipeQueue }) => {
  const [recepie, setRecepie] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecepie(data));
  }, []);

  // const { recipe_image, recipe_name } = recepie;

  return (
    <div className="md:w-2/3 md:grid grid-cols-2 gap-5 mx-auto border-">
      {recepie.map((recipe) => (
        <div
          key={recipe.recipe_id}
          className="card bg-base-100  shadow-xl mt-10 border-2"
        >
          <figure className="p-8 h-52 w-full ">
            <img className="rounded-xl" src={recipe.recipe_image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{recipe.recipe_name}</h2>
            <p className="text-gray-600">{recipe.short_description}</p>
            <hr />
            <p className="font-bold">
              Ingredients: {recipe.ingredients.length}
            </p>
            <ul>
              {recipe.ingredients.map((item, idx) => (
                <li className="list-disc text-gray" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <hr />
            <div className="flex gap-5 items-center">
              {/* time */}
              <div className="flex items-center gap-2">
                <i className="fa-regular fa-clock"></i>
                <p>{recipe.preparing_time} Munite</p>
              </div>
              {/* calories */}
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-fire-flame-curved"></i>
                <p>{recipe.calories} Calories</p>
              </div>
            </div>

            <div className="card-actions ">
              <button
                onClick={() => handleRecipeQueue(recipe)}
                className="btn bg-green-400 font-bold rounded-full px-8 "
              >
                Want to Cook
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recepie;
