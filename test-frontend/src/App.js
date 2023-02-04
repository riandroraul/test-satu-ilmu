import Navbar from "./components/Navbar";

const App = () => {
  const getDataFromApi = async () => {
    const res = await fetch("http://localhost:5000/smartphones");
    const result = await res.json();
    return result;
  };
  getDataFromApi().then((res) => console.log(res));
  return (
    <div className="App">
      <Navbar />
      {/* <p>{data}</p> */}
    </div>
  );
};

export default App;
