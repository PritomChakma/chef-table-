const Sidebar = ({ recipeQueue, removeRancipe }) => {
  return (
    <div className="md:w-1/3 border-2 rounded-2xl mt-10 p-5">
      {/* want to cook */}
      <h2 className="font-bold text-xl text-center border-b-2 pb-2">
        Want to cook: {recipeQueue.length}
      </h2>
      <div className="">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
          <tbody>
            {recipeQueue.map((recipe, idx) => (
              <tr className="hover" key={idx}>
                <th>{idx + 1}</th>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.preparing_time}</td>
                <td>{recipe.calories}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => removeRancipe(recipe.recipe_id)}
                    className=" bg-green-400 text-sm font-bold text-gray-800 rounded-full px-3 py-2 "
                  >
                    Preparing
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Currently cooking */}
    </div>
  );
};

export default Sidebar;
