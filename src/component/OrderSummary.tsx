import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const handleBack = () => {
    navigate(-1);
  };

  const navigate = useNavigate();

  return (
    <>
      <div>Order Confirmed</div>
      <button onClick={handleBack}>Go Back</button>
    </>
  );
};
