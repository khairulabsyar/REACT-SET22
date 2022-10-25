// function MyButton(props) {
//   return (
//     <button
//       style={{
//         all: "unset",
//         backgroundColor: "lightpink",
//         borderRadius: "10px",
//         padding: "8px 20px",
//         color: "white",
//         cursor: "pointer",
//         height: "50px",
//         width: "75px",
//       }}
//     >
//       {/* how to make default value for children, */}
//       {/* {props.children || "Click Me"} */}
//     </button>
//   );
// }

// // second way, destructure
// function MyButton({ children = "Click me" }) {
//   return (
//     <button
//       style={{
//         all: "unset",
//         backgroundColor: "lightblue",
//         borderRadius: "10px",
//         padding: "10px",
//         color: "white",
//         cursor: "pointer",
//         height: "50px",
//         width: "75px",
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// // second
// function MyButton({ children = "Click me", height, fontSize }) {
//   return (
//     <button
//       style={{
//         all: "unset",
//         backgroundColor: "lightblue",
//         borderRadius: "10px",
//         padding: "10px",
//         color: "white",
//         cursor: "pointer",
//         height: height,
//         width: "75px",
//         fontSize: fontSize,
//       }}
//     >
//       {children}
//     </button>
//   );
// }

// third
// function MyButton({ children = "Click me", size, onClick, disabled }) {
//   let height;
//   let fontSize;
//   let borderRadius;

//   switch (size) {
//     case "large":
//       height = "65px";
//       fontSize = "30px";
//       borderRadius = "20px";
//       break;

//     case "standard":
//       height = "45px";
//       fontSize = "16px";
//       borderRadius = "4px";
//       break;

//     case "small":
//       height = "35px";
//       fontSize = "16px";
//       borderRadius = "4px";
//       break;

//     case "tiny":
//       height = "25px";
//       fontSize = "16px";
//       borderRadius = "4px";
//       break;
//     default:
//       height = "45px";
//       fontSize = "16px";
//       borderRadius = "4px";
//       break;
//   }

//   return (
//     <button
//       style={{
//         all: "unset",
//         backgroundColor: "lightblue",
//         borderRadius: borderRadius,
//         padding: "10px",
//         color: "white",
//         cursor: "pointer",
//         height: height,
//         width: "75px",
//         fontSize: fontSize,
//       }}
//       onClick={onClick}
//       disabled={disabled}
//     >
//       {children}
//     </button>
//   );
// }

// forth
function MyButton({ children = "Click me", size, ...restProps }) {
  let height;
  let fontSize;
  let borderRadius;

  switch (size) {
    case "large":
      height = "65px";
      fontSize = "30px";
      borderRadius = "20px";
      break;

    case "standard":
      height = "45px";
      fontSize = "16px";
      borderRadius = "4px";
      break;

    case "small":
      height = "35px";
      fontSize = "16px";
      borderRadius = "4px";
      break;

    case "tiny":
      height = "25px";
      fontSize = "16px";
      borderRadius = "4px";
      break;
    default:
      height = "45px";
      fontSize = "16px";
      borderRadius = "4px";
      break;
  }

  return (
    <button
      style={{
        all: "unset",
        backgroundColor: "lightblue",
        borderRadius: borderRadius,
        padding: "10px",
        color: "white",
        cursor: "pointer",
        height: height,
        width: "75px",
        fontSize: fontSize,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default MyButton;
