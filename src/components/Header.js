import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="logo-container">
        <img
          className="w-30"
          src="https://img.freepik.com/premium-vector/fast-delivery-logo-design-food-service-delivery-creative-template-with-running-burger-corporate-identity-fast-food-restaurant-cafe-vector-illustration-isolated-white-background_178650-15407.jpg"
        />
      </div>
      <div className="">
        <ul className="flex">
          <li>Home</li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
