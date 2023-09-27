import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Approuter from "./router/router";

function App() {
  return (
    <div>
      <div className="flex gap-[10px] md:gap-[32px]">
        <div className="w-[72px]">
          <Sidebar />
        </div>
        <div className="w-full h-screen overflow-auto">
          <Approuter />
        </div>
      </div>
    </div>
  );
}

export default App;
