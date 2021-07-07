import './Button.scss';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className='btn'>
      Generate
    </button>
  );
};

export default Button;
