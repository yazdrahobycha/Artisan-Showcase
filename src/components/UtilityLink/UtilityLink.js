import React from "react";
import Link from "next/link";

function UtilityLink({ children, asButton, ...params }) {
  const Tag = asButton ? 'button' : Link
  return <Tag {...params}>{children}</Tag>;
}

export default UtilityLink;
