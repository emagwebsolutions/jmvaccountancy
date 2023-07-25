type detail = {
  obj: {};
};

const Details = ({ obj }: detail) => {
  const res = Object.values(obj).map((v: any, i) => {
    return (
      <li key={i}>
        <i className="fa fa-book"></i>&nbsp;&nbsp; {v}
      </li>
    );
  });

  return <ul className="para-text">{res}</ul>;
};
export default Details;
