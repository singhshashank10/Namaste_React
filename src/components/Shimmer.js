const Shimmer = () => {
  return (
    <div className="shimmer-outer">
      {Array(8)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

{
  /* <div className="shimmer-card">
  {Array(10)
    .fill("")
    .map((e, index) => (
      <div key={index} className="cardDetails"></div>
    ))}
</div>; */
}

export default Shimmer;
