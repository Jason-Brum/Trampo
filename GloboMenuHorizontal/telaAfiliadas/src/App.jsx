import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <Header />
        <nav className="bg-gray-200 py-3 px-6 rounded-md flex gap-6">
          <Menu />
        </nav>
       
      </div>
    </div>
   
  );
}


export default App;







