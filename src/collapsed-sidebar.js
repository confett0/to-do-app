const toggleNav = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("hidden");
  };
  
  document
    .querySelector(".open-sidebar")
    .addEventListener("click", () => toggleNav());
  
  export { toggleNav };

