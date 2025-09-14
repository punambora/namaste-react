import ReactDOM from "react-dom/client";
import Header from "./Header";
import { Body } from "./Body";
import About from "./About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./Contact";

const OrderAppComponent = () => {
  return (
    <div className="order-app">
      <Header />
      <Body />
    </div>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    Component: OrderAppComponent,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "/contact",
    Component: Contact,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
