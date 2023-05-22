import { Link } from "react-router-dom";
import { memo, useState, useEffect } from "react";
import { bookmarksArray } from "./values";

function Bookmarks() {
  const [bookmarks, setBookmarks] = useState(bookmarksArray);

  console.log("b rendered");

  return (
    <>
      <div
        className="gallery"
        onClick={function (e) {
          console.log(
            e.target.closest(".bookmark").classList.contains("bookmark")
          );
          if (!e.target.closest(".bookmark").classList.contains("bookmark")) {
            return;
          }

          console.log(
            e.target.closest(".bookmark").parentElement.querySelector("img").src
          );
          // if (
          //   bookmarksArray.some(
          //     (obj) =>
          //       e.target.closest(".bookmark").parentElement.querySelector("img")
          //         .key === obj.id
          //   )
          // ) {

          console.log(1);
          const index = bookmarksArray.findIndex(
            (obj) =>
              e.target.closest(".bookmark").parentElement.querySelector("img")
                .src === obj.src
          );
          bookmarksArray.splice(index, 1);

          setBookmarks([...bookmarksArray]);
        }}
      >
        {bookmarks?.map((e) => e.div)}
      </div>
      <Link to="/">Home</Link>
    </>
  );
}

export default memo(Bookmarks);
