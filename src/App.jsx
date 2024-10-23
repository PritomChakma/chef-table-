import Banner from "./Components/Banner";
import Header from "./Components/Header";
import OurRecepie from "./Components/OurRecepie";
import Recepie from "./Components/Recepie";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner>
      {/* Our Recepie section */}
      <OurRecepie>
        <section>
          {/* Cart section */}
          <Recepie></Recepie>
          {/* sidebar Section */}
          <Sidebar></Sidebar>
        </section>
      </OurRecepie>
    </div>
  );
}

export default App;
