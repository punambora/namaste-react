import ReactDOM from "react-dom/client";
import Header from "./Header";
import { Body } from "./Body";
import About from "./About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "./Contact";
import Error from "./Error";
import RestaurantMenuCard from "./RestaurantMenuCard";
import { Provider } from "react-redux";
import appStore from "../utils/store";

const OrderAppComponent = () => {
  return (
    <Provider store={appStore}>
      <div className="order-app">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    Component: OrderAppComponent,
    children: [
      {
        path: "/",
        Component: Body,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "restaurant/:restId",
        Component: RestaurantMenuCard,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
