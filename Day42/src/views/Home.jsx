
import useAuth from "../hooks/useAuth";

const Home = () => {
  const { login } = useAuth();

  return (
    <>
      <h2>This is the home page (public)</h2>

      <button onClick={() => login()}>Login</button>
    </>
  );
}

export default Home;