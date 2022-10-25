import MainSection from "./Components/MainSection";
import ActivitiesSection from "./Components/ActivitiesSection";
import PhilosophySection from "./Components/PhilosophySection";
import BeautiesSection from "./Components/BeautiesSection";
import NetworkSection from "./Components/NetworkSection";
import TestimonialSection from "./Components/TestimonialSection";
import FooterSection from "./Components/FooterSection";
import "./App.css";

function App() {
  return (
    <>
      <MainSection />
      <ActivitiesSection />
      <PhilosophySection />
      <BeautiesSection />
      <NetworkSection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
}

export default App;

// Morning Session
// import WordCard from "./components/WordCard";
// import Box from "./components/Box";

// const arr = [
//   { num: 1, word: "one" },
//   { num: 2, word: "two" },
//   { num: 3, word: "three" },
// ];

// const color = [
//   { colour: "red" },
//   { colour: "lightblue" },
//   { colour: "lightgreen" },
//   { colour: "lightblue" },
//   { colour: "lightpink" },
// ];

// const colour = ["red", "lightblue", "lightgreen", "lightpink"];

// function App() {
//   return (
//     // curly braces in jsx is needed because curly is javascript way of doing things
//     <>
//       {arr.map((item) => (
//         <WordCard num={item.num} word={item.word} />
//       ))}
//       {color.map((x) => (
//         <Box color={x.colour} />
//       ))}
//       {colour.map((k) => (
//         <Box color={k} />
//       ))}
//     </>
//   );
// }

// export default App;
