import SubActivitiesSection from "./SubActivitiesSection";

const activitiesList = [
  { activity: "Hiking", number: "230 Activities", background: "rectangle-1" },
  { activity: "Sailing", number: "121 Activities", background: "rectangle-2" },
  { activity: "Skiing", number: "212 Activities", background: "rectangle-3" },
  { activity: "Kayaking", number: "512 Activities", background: "rectangle-4" },
];

function ActivitiesSection() {
  return (
    <>
      <section class="activities-section">
        <div class="activities-section-head">
          <p class="uppercase montserrat">hundred of</p>
          <p class="uppercase montserrat desc-size">activities for everyone</p>
        </div>
        <div class="activities-section-box">
          {activitiesList.map((item) => (
            <SubActivitiesSection
              activity={item.activity}
              number={item.number}
              background={item.background}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default ActivitiesSection;
