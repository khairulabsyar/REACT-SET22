function SubActivitiesSection(props) {
  return (
    <div className={`activities-section-card ${props.background}`}>
      <p class="uppercase montserrat desc-size white">{props.activity}</p>
      <p class="transparent">{props.number}</p>
    </div>
  );
}

export default SubActivitiesSection;
