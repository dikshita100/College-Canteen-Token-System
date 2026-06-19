import { useLocation } from "react-router-dom";

const Payment = () => {

  const location = useLocation();
  const total = location.state?.total || 0;
  const token = location.state?.token || "----";

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      
      <h2>Scan & Pay</h2>

      <h3>Your Token: {token}</h3>

      <p>Amount: ₹{total}</p>

      <img 
        src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=demo@upi&pn=Canteen&am=${total}&tn=Token${token}`}
        alt="QR Code"
        style={{ margin: "20px" }}
      />

      <p>Use this token after payment to collect food</p>

    </div>
  );
};

export default Payment;