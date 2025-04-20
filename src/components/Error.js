import { useRouteError } from "react-router";

const Error = () => {
  const er = useRouteError();
  return (
    <div>
      <h1>Something went wrong</h1>
      <h3>{er.status}</h3>
    </div>
  );
};

export default Error;
