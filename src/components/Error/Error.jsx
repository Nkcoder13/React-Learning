import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <div>Oops you have entered wrong url</div>
      <h2>
        {err.status} -- {err.statusText}
      </h2>
      <p>{err.data}</p>
    </>
  );
};

export default Error;
