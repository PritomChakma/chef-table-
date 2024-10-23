import { useState } from "react";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
// import OurRecepie from "./Components/OurRecepie";
import Recepie from "./Components/Recepie";
import Sidebar from "./Components/Sidebar";

function App() {
  const [recipeQueue, setResipeQueue] = useState([]);
  const [preparingRacipe, setPreparingRacipe] = useState([]);

  const handleRecipeQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previous) => previous.recipe_id === recipeQueue.recipe_id
    );

    if (!isExist) {
      setResipeQueue([...recipeQueue, recipe]);
      // alert("This Recipe Already Exist");
    } else {
      alert("This Recipe Already Exist");
      // setResipeQueue([...recipeQueue, recipe]);
    }
  };
  console.log(recipeQueue);

  const removeRancipe = (id) => {
    // find which recipe to remove
    const deleteRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);

    //  Remove from want to cook table
    const updateQueue = recipeQueue.filter((recipe) => recipe.recipe_id !== id);
    setPreparingRacipe(updateQueue);
    setPreparingRacipe([...preparingRacipe, deleteRecipe]);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recepie section */}
      {/* <OurRecepie></OurRecepie> */}
      <section className="md:flex gap-5 mt-10">
        {/* Cart section */}
        <Recepie handleRecipeQueue={handleRecipeQueue}></Recepie>
        {/* sidebar Section */}
        <Sidebar
          removeRancipe={removeRancipe}
          recipeQueue={recipeQueue}
        ></Sidebar>
      </section>
    </div>
  );
}

export default App;
