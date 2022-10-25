import Navbar from "./Navbar";
import SubMainSection from "./SubMainSection";

const navbarList = ["Destinations", "Activities", "About Us", "Contact"];
const subMainList = ["Trondheim", "Geirangerfjord", "Lofoten"];

function MainSection() {
  return (
    <>
      <section id="main-section">
        <div id="navbar" class="white">
          <div class="small-box left-side">
            <img src="./assets/footer-logo_white-xs 2.png" alt="" />
            <p>
              <span class="uppercase">Travel</span>x
            </p>
          </div>
          <div class="small-box middle-side">
            {navbarList.map((list) => (
              <Navbar list={list} />
            ))}
          </div>
          <div class="small-box right-side">
            <i class="fa-solid fa-grip-lines"></i>
          </div>
        </div>
        <div class="main-section-hero">
          <p class="uppercase montserrat white explore">Explore</p>
          <p class="montserrat norway white">Norway</p>
        </div>
        <div class="sub-section-hero">
          {subMainList.map((place) => (
            <SubMainSection place={place} />
          ))}
        </div>
      </section>
    </>
  );
}

export default MainSection;
