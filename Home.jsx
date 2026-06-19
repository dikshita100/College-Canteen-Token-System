import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="hero">

        <h3>
          Skip Long Queues and <br/>  Order Food
          Easily Through Digital Tokens
        </h3>

        <div className="btns">
          <button onClick={() => navigate("/order")}>Order Now</button>
          <button onClick={() => navigate("/menu")}>View Menu</button>
        </div>

      </div>

      <div className="features">

        <div className="card">
          <h3>📱 Online Ordering</h3>
        </div>

        <div className="card">
          <h3>🎫 Token Generation</h3>
        </div>

        <div className="card">
          <h3>🥗 Dietary Filters</h3>
        </div>

        <div className="card">
          <h3>⚡ Fast Service</h3>
        </div>

      </div>
    </>
  )
}

export default Home;
