import ReactDOM from "react-dom/client";
import Header from "./Header";
import { Body } from "./Body";
import About from "./About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Contact from "./Contact";
import Error from "./Error";

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
    errorElement: <Error />,
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
