const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

navBtn.addEventListener("click", () => {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
sidebar.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

// set year

date.innerHTML = new Date().getFullYear();

// modal

const modalBtn = document.querySelector(".certificate-btn");
const modal = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".close-btnModal");

modalBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("open-modal");
  console.log("click");
});
