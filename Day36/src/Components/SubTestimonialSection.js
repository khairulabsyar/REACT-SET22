function SubTestimonialSection(props) {
  return (
    <div class="testimonial-section-card">
      <div class="testimonial-section-mini-card">
        <i class="fa-solid fa-quote-left"></i>
        <p>{props.lorem}</p>
      </div>
      <i class="fa-solid fa-caret-down fa-xl"></i>
      <div class="testimonial-section-card-human">
        <img src={process.env.PUBLIC_URL + props.src} alt="" />
        <div>
          <h3 class="white">{props.person}</h3>
          <p>{props.job}</p>
        </div>
      </div>
    </div>
  );
}

export default SubTestimonialSection;
