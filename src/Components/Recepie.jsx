import { useEffect, useState } from "react";

const Recepie = () => {
  const [recepie, setRecepie] = useState([]);
  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecepie(data));
  }, []);

  // const { recipe_image, recipe_name } = recepie;

  return (
    <div className="md:w-2/3 md:grid grid-cols-2 gap-5 mx-auto mt-10">
      {recepie.map((res) => (
        <div key={res.recipe_id} className="card bg-base-100  shadow-xl mt-10 ">
          <figure className="p-8 h-52 w-full ">
            <img className="rounded-xl" src={res.recipe_image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">{res.recipe_name}</h2>
            <p className="text-gray-600">{res.short_description}</p>
            <hr />
            <p className="font-bold">Ingredients: {res.ingredients.length}</p>
            <ul>
              {res.ingredients.map((item, idx) => (
                <li className="list-disc text-gray" key={idx}>
                  {item}
                </li>
              ))}
            </ul>
            <hr />
            <div className="flex gap-3">
              {/* time */}
              <div></div>
              {/* calories */}
              <div></div>
            </div>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recepie;
