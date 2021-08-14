import "./App.css";
import Body from "./Components/Body/Body";
import SideBar from "./Components/SideBar/Sidebar";

function App() {
  return (
    <div className="containe">
      <div className="col-md-12">
        <div className="row">
          <SideBar />
          <Body />
        </div>
      </div>
    </div>
  );
}

export default App;
