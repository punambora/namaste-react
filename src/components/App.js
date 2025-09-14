import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";

const OrderAppComponent = () => {
  return (
    <div className="order-app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(OrderAppComponent());
