import SubTestimonialSection from "./SubTestimonialSection";

const testimonialList = [
  { src: "jane.png", person: "Jane Cooper", job: "CEO, ABC Corporation" },
  { src: "alan.png", person: "Alan Jackson", job: "CEO, Travelers Community" },
  { src: "jane2.png", person: "Jane Cooper", job: "CEO, Go Travel" },
];

const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
praesentium nihil, excepturi nostrum sunt autem eligendi? Quia
veritatis architecto, harum incidunt beatae ad repudiandae?`;
function TestimonialSection() {
  return (
    <>
      <section class="testimonial-section">
        <div class="rectangle-9">
          {testimonialList.map((item) => (
            <SubTestimonialSection
              src={item.src}
              person={item.person}
              job={item.job}
              lorem={lorem}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default TestimonialSection;
