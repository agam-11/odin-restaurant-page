import homeImage from "./images/home.jpg";

function setupHomePage() {
  const contentDiv = document.querySelector("#content");

  contentDiv.innerHTML = "";
  const containerDiv = document.createElement("div");
  contentDiv.appendChild(containerDiv);

  const img = document.createElement("img");
  img.src = homeImage;

  const h1 = document.createElement("h1");
  h1.textContent = "THE Restaurant";

  const para = document.createElement("p");
  para.textContent = "this restaurant so good bro";

  containerDiv.append(img, h1, para);
}

export { setupHomePage };
