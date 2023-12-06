import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <h1>Health App</h1>
      <Outlet />
    </div>
  )
}
