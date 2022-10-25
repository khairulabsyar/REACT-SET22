function SubPhilosophySection(props) {
  return (
    <div class="philosophy-section-mini-card">
      <h2 class="silver">{props.number}</h2>
      <div>
        <h2>{props.topic}</h2>
        <p>{props.lorem}</p>
      </div>
    </div>
  );
}

export default SubPhilosophySection;
