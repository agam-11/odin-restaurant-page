import "./styles.css";
import { setupHomePage } from "./home-page";
import { setupMenuPage } from "./menu-page";
import { setupAboutPage } from "./about-page";

setupHomePage();

const nav = document.querySelector("nav");

nav.addEventListener("click", (e) => {
  if (e.target.id == "home-button") {
    setupHomePage();
  } else if (e.target.id == "menu-button") {
    setupMenuPage();
  } else if (e.target.id == "about-button") {
    setupAboutPage();
  }
});
