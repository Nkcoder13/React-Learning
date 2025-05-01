import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setStatus(true);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatus(false);
    });
  }, []);

  return status;
};

export default useOnlineStatus;
