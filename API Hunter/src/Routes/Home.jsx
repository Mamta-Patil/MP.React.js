import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{textAlign:"center"}}>
      <Link to="/login">
        <h3 data-testid="login-link">Login Page</h3>
      </Link>
      <Link to="/dashboard">
        <h3 data-testid="home-link">Home</h3>
      </Link>
    </div>
  );
}
export default Home;
