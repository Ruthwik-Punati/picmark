import {
  Link,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Bookmarks from "./bookmarks";
import Slider from "./slider";
import SearchResult from "./searchResult";
import SelectCountry from "./selectPractice";
import { bookmarksArray } from "./values";
import { useContext, createContext } from "react";
import Product from "./product";
import Cart from "./cart";
import Dashboard from "./dashboard";
import RootLayout from "./rootLayout";

import "./index.css";

export const BookmarksContext = createContext();

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
              <Slider topic="travel" />
              {/* <SelectCountry /> */}
              <SearchResult></SearchResult>

              <Link to="/bookmarks">bookmarks</Link>
            </>
          }
        ></Route>
        <Route
          path="/bookmarks"
          element={
            <BookmarksContext.Provider value={bookmarksArray}>
              <Bookmarks />
            </BookmarksContext.Provider>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );

  // return (
  //   <div className="App">
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<RootLayout></RootLayout>}>
  //           <Route index element={<Dashboard></Dashboard>}></Route>
  //           <Route path="/cart" element={<Cart></Cart>}></Route>
  //         </Route>
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // );
}

function Header() {
  return <h1 className="title">Picmark</h1>;
}
