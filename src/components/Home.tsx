import confetti from "canvas-confetti";
import Logo from "../assets/zt-logo.png";
import BeerLogo from "../assets/beerjs.svg";
import { useStateStore } from "../store/stateStore";

const Home = () => {
  const count = useStateStore((state) => state.count);
  const setCount = useStateStore((state) => state.setCount);
  const showLegend = useStateStore((state) => state.showLegend);
  const setShowLegend = useStateStore((state) => state.setShowLegend);

  const handleClick = () => {
    if (!showLegend) confetti();
    setShowLegend(!showLegend);
  };

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSub = () => {
    if (count === 0) return;

    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <img src={Logo} className="logo" alt="Zustand logo" />
      <h1>State Management with Zustand</h1>

      <div className="card">
        <h3>Counter {count}</h3>
        <div className="btns">
          <button onClick={handleAdd}>➕</button>
          <button onClick={handleReset}>RESET</button>
          <button onClick={handleSub}>➖ </button>
        </div>
        <p className={`${showLegend ? "block" : "hidden"}`}>
          Let's go Zustand, and <br />
          <code>Have another Beer</code>
        </p>
        <img
          onClick={handleClick}
          src={BeerLogo}
          className={`logo beerlogo hover:animate-bounce`}
          alt="Beer Js Cba logo"
        />
      </div>
    </div>
  );
};

export default Home;
