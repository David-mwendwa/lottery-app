const NumberItem = ({ value, remove }) => {
  const handleRemove = (e) => {
    remove(value);
  };
  
  return (
    <li>
      {value} <button onClick={handleRemove}>X</button>
    </li>
  );
};

export default NumberItem;
