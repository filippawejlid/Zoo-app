import { Link, Outlet } from "react-router-dom";
import { Notification } from "../components/pages/Notification";

export function Layout() {
  return (
    <>
      <header>
        <Notification></Notification>
      </header>
      <Outlet></Outlet>
    </>
  );
}
