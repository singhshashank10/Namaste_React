const Shimmer = () => {
  return (
    <div>
      <h1> Loading ..........</h1>
    </div>
  );
};

export default Shimmer;

const XYZ = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  // console.log(props)
  return (
    <div className="card">
      {/* <img alt=" Pizza Hut" src={CDN_IMG_URL + cloudinaryImageId}></img> */}
      <div className="cardDetails">
        <p>{cuisines.join(", ")}</p>
        <span>{avgRating}★</span>
      </div>
    </div>
  );
};
