function setupAboutPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  const containerDiv = document.createElement("div");
  contentDiv.appendChild(containerDiv);

  const h1 = document.createElement("h1");
  h1.textContent = "ABOUT US";

  const para = document.createElement("para");
  para.textContent = "WE ARE SO FUCKIN DOPE";

  containerDiv.append(h1, para);
}

export { setupAboutPage };
