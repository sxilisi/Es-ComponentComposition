import { useState } from "react";

export default function Container({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }
  return (
    <div className="app">
      <div className="app-title">
        {title} <button onClick={handleToggleCollapse}>Toggle</button>
      </div>
      <div className={!collapsed ? "app-content" : "app-content-hidden"}>
        {children}
      </div>
    </div>
  );
}
