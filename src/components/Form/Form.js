const Form = ({ setUserInfo, buyer, name }) => {
  const handleBuyerChange = (event) => {
    setUserInfo({ ...buyer, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleBuyerChange}></input>
    </div>
  );
};

export default Form;
