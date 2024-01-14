import { useState, ReactNode } from "react";

export const Collapsible = ({
  label,
  children,
}: {
  label: string;
  children?: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <article>
      <button type="button" onClick={toggle}>
        {label}
        <i className={`fa-solid fa-chevron-up ${open ? "rotate" : ""}`}></i>
      </button>

      <div className={`collapsible-content ${open ? "expand" : "close"}`}>
        {children}
      </div>
    </article>
  );
};
