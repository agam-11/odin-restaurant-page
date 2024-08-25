function setupMenuPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  const containerDiv = document.createElement("div");
  contentDiv.appendChild(containerDiv);

  const h1 = document.createElement("h1");
  h1.textContent = "Amazing Menu";

  const para = document.createElement("p");
  para.textContent = "SUPER AMAZING ITEMS";

  containerDiv.append(h1, para);
}

export { setupMenuPage };
