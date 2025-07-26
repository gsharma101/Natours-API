import { displayMap } from "./mapbox";

document.addEventListener("DOMContentLoaded", () => {
  // Handle map display
  const mapBox = document.getElementById("map");
  if (mapBox) {
    const locations = JSON.parse(mapBox.dataset.locations);
    displayMap(locations);
  }

  // Handle Book Tour button
  const bookBtn = document.getElementById("book-tour-btn");
  if (bookBtn) {
    bookBtn.addEventListener("click", () => {
      if (!window.userIsLoggedIn) {
        // Redirect to login page if not authenticated
        window.location.href = "/login";
      } else {
        // Logged in — placeholder for actual booking logic
        console.log("User is logged in. Booking logic goes here.");
      }
    });
  }
});
