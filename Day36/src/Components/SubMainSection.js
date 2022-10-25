function SubMainSection(props) {
  return (
    <div class="sub-section-card">
      <i class="fa-solid fa-location-dot"> </i>
      <div>
        <h2 class="white montserrat">{props.place}</h2>
        <p class="transparent">Plan a trip</p>
      </div>
    </div>
  );
}

export default SubMainSection;
