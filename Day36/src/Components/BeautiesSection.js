import SubBeautiesSection from "./SubBeautiesSection";

const beautiesList = [
  { desc: "Reine", background: "rectangle-6" },
  { desc: "Norway", background: "rectangle-7" },
  { desc: "Bergen", background: "rectangle-8" },
];

function BeautiesSection() {
  return (
    <>
      <section class="beauties-section">
        <div class="beauties-section-head">
          <p class="uppercase montserrat">beauties</p>
          <p class="uppercase montserrat desc-size">Hotels and Appartements</p>
        </div>
        <div class="beauties-section-box">
          {beautiesList.map((item) => (
            <SubBeautiesSection desc={item.desc} background={item.background} />
          ))}
        </div>
      </section>
    </>
  );
}

export default BeautiesSection;
