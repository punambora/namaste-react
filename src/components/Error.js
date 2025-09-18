import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      Error Page
      <div>Error Status: {err.statusText}</div>
      <div>Error Details: {err.data}</div>
      <div>Error Stack: {err?.error?.stack}</div>
    </div>
  );
};

export default Error;
