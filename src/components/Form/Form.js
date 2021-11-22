const Form = ({ setUserInfo, userInfo, name }) => {
  const handleBuyerChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <input type="text" name={name} onChange={handleBuyerChange} />
    </div>
  );
};

export default Form;
