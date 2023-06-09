import ReactDOM from "react-dom/client";
import "./index.css";

import { App } from "./App";
import { bookmarksArray } from "./values";
import "bootstrap/dist/css/bootstrap.min.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {" "}
    <App bookmarks={bookmarksArray} />
  </>
);
