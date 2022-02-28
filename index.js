// Inporting the main function from hamnurger_menu file
import { default as hamburgerMenu } from "./JS/hamnurger_menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu li a");
});