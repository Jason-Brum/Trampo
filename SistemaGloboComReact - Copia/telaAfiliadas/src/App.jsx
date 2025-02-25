import Header from "./components/Header";
import Menu from "./components/Menu";



function App() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Header />
      <nav className="bg-gray-200 py-3 px-6 rounded-md mt-4 md:mt-0 flex gap-6 w-full justify-center">
        <Menu />
      </nav>
    </div>
  );
}

export default App;



