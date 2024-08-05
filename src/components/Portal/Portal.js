"use client";
import React, { useId } from "react";
import { createPortal } from "react-dom";

function Portal({ children }) {
  const [host, setHost] = React.useState(null);
  const id = useId();

  React.useEffect(() => {
    const host = document.createElement("div");
    document.body.appendChild(host);
    host.setAttribute("data-react-portal-host-" + id, "");

    setHost(host);

    return () => {
      host.remove();
    };
  }, []);

  if (!host) {
    return null;
  }

  return createPortal(children, host);
}

export default Portal;
