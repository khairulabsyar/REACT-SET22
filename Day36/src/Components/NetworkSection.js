import SubNetworkSection from "./SubNetworkSection";

const networkList = [
  { src: "Microsoft-Logo-Grey-1.png", alt: "microsoft.png" },
  { src: "magento-grey-logo-1.png", alt: "magento.png" },
  { src: "Lakehouse-logo_grey_0-1.png", alt: "lakehouse.png" },
  { src: "Midea-Logo-grey-1.png", alt: "midea.png" },
];
function NetworkSection() {
  return (
    <>
      <section class="network-section">
        <div class="network-section-head">
          <p class="uppercase montserrat">Network</p>
          <p class="uppercase montserrat desc-size">Our Partners</p>
        </div>
        <div class="network-section-box">
          {networkList.map((item) => (
            <SubNetworkSection src={item.src} alt={item.alt} />
          ))}
        </div>
      </section>
    </>
  );
}

export default NetworkSection;
