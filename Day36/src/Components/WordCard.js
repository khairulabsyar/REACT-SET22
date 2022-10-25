// function WordCard({no, word}) {
//   return (
//     <div>
//       <h2>{no}</h2>
//       <h2>{word}</h2>
//     </div>
//   );
// }

function WordCard(props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        backgroundColor: "lightblue",
        paddingLeft: "10px",
      }}
    >
      <h2>{props.num}</h2>
      <h2>{props.word}</h2>
    </div>
  );
}

export default WordCard;
