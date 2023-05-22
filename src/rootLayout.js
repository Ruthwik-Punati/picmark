import { Outlet } from "react-router-dom";
import NavBar from "./navBar";

import { Provider } from "react-redux";
import store from "./store.js/store";
function RootLayout() {
  return (
    <Provider store={store}>
      {" "}
      <>
        <NavBar></NavBar>
        <Outlet></Outlet>
      </>
    </Provider>
  );
}

export default RootLayout;
