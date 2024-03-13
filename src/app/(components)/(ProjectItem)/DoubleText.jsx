import "./DoubleText.scss";

const DoubleText = ({ data }) => {
  return (
    <div className="double-text">
      <div className="container">
        <div className="text-list">
          <div className="big-text text-item">
            <h2>{data?.big_text[0].text}</h2>
          </div>
          <div className="small-text text-item">
            <h3>{data?.small_text[0].text}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoubleText;
