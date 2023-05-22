import { useState, useEffect, memo, createContext, useContext } from "react";

import "./index.css";
import { bookmarksArray } from "./values";

import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";

function Slider({ topic }) {
  const [data, setData] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(true);

  useEffect(
    function () {
      fetch(
        `https://api.unsplash.com/search/photos?&client_id=p8Vxhphk3wSUajua2TgpnQUiYmLWCjpkA0EdJo-e7DU&query=${topic}&per_page=6&order_by=relevant`
      )
        .then((data) => data.json())
        .then((data) => {
          setData(data);
        });
    },
    [topic]
  );

  return (
    <>
      <div className="gallery">
        {data.results?.map((obj) => (
          <div key={obj.id} className="imageBox">
            <img
              className="sliderImage"
              key={obj.id}
              src={obj.urls.small}
              alt="travel"
            ></img>

            <div
              key={obj.id + 2}
              className="bookmark"
              onClick={function (e) {
                setIsBookmarked(!isBookmarked);
                if (bookmarksArray.some((e) => e.src === obj.urls.small)) {
                  const index = bookmarksArray.findIndex(
                    (e) => e.src === obj.urls.small
                  );

                  bookmarksArray.splice(index, index + 1);
                } else
                  bookmarksArray.push({
                    isBookmarked: true,
                    src: obj.urls.small,
                    div: (
                      <>
                        <div
                          key={e.target.closest(".imageBox").id}
                          className="imageBox"
                        >
                          <img
                            className="sliderImage"
                            key={
                              e.target.closest(".imageBox").querySelector("img")
                                .key
                            }
                            src={
                              e.target.closest(".imageBox").querySelector("img")
                                .src
                            }
                            alt="travel"
                          ></img>

                          <div
                            key={e.target.closest(".bookmark").id + 2}
                            className="bookmark"
                            // onClick={function () {
                            //   if (bookmarksArray.some((e) => e.id === obj.id)) {
                            //     const index = bookmarksArray.findIndex(
                            //       (e) => e.id == obj.id
                            //     );

                            //     bookmarksArray.splice(index, index + 1);
                            //   }
                            // }}
                          >
                            <BsBookmarksFill
                              key={obj.id}
                              className="react-icons"
                            />
                          </div>
                        </div>
                      </>
                    ),
                  });
              }}
            >
              {bookmarksArray.some((e) => e.src === obj.urls.small) ? (
                <BsBookmarksFill key={obj.urls.small} className="react-icons" />
              ) : (
                <BsBookmarks
                  key={obj.urls.small + "b"}
                  className="react-icons"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default memo(Slider);
