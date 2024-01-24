const Price = ({oldPrice, newPrice}) => {
  let oldPrices = {
    textDecorationLine: "line-through",
  };
  let newPrices = {
    fontWeight: "bold",
  };
  let styles = {
    backgroundColor: "#e0c367",
    height: "32px",
    borderBottomLeftRadius: "16px",
    borderBottomRightRadius: "16px",
  };
  return (
    <div style={styles}>
      <span style= {oldPrices}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style= {newPrices}>{newPrice}</span>
    </div>
  );
};

export default Price; 
