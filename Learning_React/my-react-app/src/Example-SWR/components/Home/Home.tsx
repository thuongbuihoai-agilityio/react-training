import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="todo">
      <nav className="nav">
        <Link className="nav__item" to="about">About</Link>
        <Link className="nav__item" to="contact">Contact</Link>
        <Link className="nav__item" to="todos">Todo List</Link>
      </nav>
    </div>
  );
}

export default Home;