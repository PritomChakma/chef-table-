import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecepie from "./Components/OurRecepie";

function App() {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recepie section */}
      <OurRecepie></OurRecepie>
    </div>
  );
}

export default App;
