function SubNetworkSection(props) {
  return <img src={process.env.PUBLIC_URL + props.src} alt={props.alt} />;
}

export default SubNetworkSection;
