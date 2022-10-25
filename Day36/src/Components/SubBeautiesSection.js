function SubBeautiesSection(props) {
  return (
    <div class={`beauties-section-card ${props.background}`}>
      <p class="uppercase montserrat desc-size">{props.desc}</p>
    </div>
  );
}

export default SubBeautiesSection;
