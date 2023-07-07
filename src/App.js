import DataFromAPI from "./Project/DataFetching";
// import Sidebar from "./Project/Sidebar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <Sidebar /> */}
      <DataFromAPI />
    </div>
  );
}
