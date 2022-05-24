import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="todo" data-testid="home">
      <nav className="nav">
        <Link className="nav__item" to="/about" data-testid="about">About</Link>
        <Link className="nav__item" to="/contact">Contact</Link>
        <Link className="nav__item" to="/todos">Todo List</Link>
      </nav>
    </div>
  );
}

export default Home;