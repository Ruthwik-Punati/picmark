export let bookmarksArray = [];
export let searchQueryValue = "USA";
export function setSearchQueryValue(value) {
  searchQueryValue = value;
}

export const info = {
  countries: {
    India: { cities: ["Hyderabad", "Coimbatore"] },

    Usa: { cities: ["Scranton", "Pensylvania"] },
  },
};

export function getBookmarks() {
  return bookmarksArray;
}

export function setBookmarksValue(array) {
  bookmarksArray = array;
}
