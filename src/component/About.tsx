import { useNavigate } from "react-router-dom";
export const About = () => {
  const handleClick = () => {
    navigate("/order-summary");
  };
  const navigate = useNavigate();
  return (
    <>
      <div>About</div>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};
