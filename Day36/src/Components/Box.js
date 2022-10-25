function Box(props) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        color: props.color,
        borderStyle: "solid",
        borderColor: props.color,
        marginTop: "2px",
      }}
    >
      <div style={{ backgroundColor: props.color, width: "100px" }}></div>
      <h2>{props.color}</h2>
    </div>
  );
}

export default Box;
