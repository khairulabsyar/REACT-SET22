import SubPhilosophySection from "./SubPhilosophySection";

const philosophyList = [
  { number: "01", topic: "Sustainable" },
  { number: "02", topic: "Fair & Share" },
  { number: "03", topic: "Experience" },
];

const lorem = [
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
Voluptates voluptatem facere magni. Ipsa architecto in
explicabo, temporibus, consectetur minus, tenetur quasi
distinctio dolor praesentium repellendus? Porro, quidem.`,
];

function PhilosophySection() {
  return (
    <>
      <section class="philosophy-section">
        <div class="activities-section-head">
          <p class="uppercase montserrat">About us</p>
          <p class="uppercase montserrat desc-size">Our Philosophy</p>
        </div>
        <div class="philosophy-section-box">
          <div class="philosophy-section-card-1 rectangle-5"></div>
          <div class="philosophy-section-card-2">
            {philosophyList.map((item) => (
              <SubPhilosophySection
                number={item.number}
                topic={item.topic}
                lorem={lorem}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PhilosophySection;
