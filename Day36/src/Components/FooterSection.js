import Navbar from "./Navbar";
import SubFooterSection from "./SubFooterSection";

const footerList = [
  "Destinations",
  "Activities",
  "About Us",
  "Contact",
  "Privacy Policy",
];

const socialList = [
  "fa-brands fa-instagram",
  "fa-solid fa-earth-asia",
  "fa-brands fa-twitter",
  "fa-brands fa-youtube",
];

function FooterSection() {
  return (
    <>
      <footer class="footer-section">
        <div class="footer-section-head">
          <img src="./assets/footer-logo_white-xs 2.png" alt="" />
          <p class="white travelx">
            <span class="uppercase">Travel</span>x
          </p>
        </div>
        <div class="footer-box middle-side">
          {footerList.map((list) => (
            <Navbar list={list} />
          ))}
        </div>
        <hr />
        <div class="white connection">
          <p>© 2020 Bikart Design. All rights reserved</p>
          <div>
            {socialList.map((list) => (
              <SubFooterSection list={list} />
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;
