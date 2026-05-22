alert("JavaScript is connected! 🎉"); //picture,name,father name,age,email,qualification,other info//
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  let nameValue = inputs[1].value.trim();
  let mailValue = inputs[4].value.trim();
  let nameError = document.getElementById("nameError");
  let mailError = document.getElementById("mailError");

  if (nameValue === "") {
    nameError.style.display = "block";
    nameError.textContent = "Please enter name";
    return;
  } else {
    nameError.style.display = "none";
  }
  if (mailValue === "") {
    mailError.style.display = "block";
    mailError.textContent = "Email cannot be empty";
    return;
  } else if (!mailValue.includes("@") || !mailValue.includes(".com")) {
    mailError.style.display = "block";
    mailError.textContent = "Please enter a valid email";
    return;
  } else {
    mailError.style.display = "none";
  }

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let image = document.createElement("img");
  image.setAttribute("src", inputs[0].value); //picture

  let h1 = document.createElement("h1");
  h1.textContent = inputs[1].value; //name

  let h2 = document.createElement("h2");
  h2.textContent = inputs[2].value; //father namess

  let h3 = document.createElement("h3");
  h3.textContent = inputs[3].value; //age

  let h4 = document.createElement("h4");
  h4.textContent = inputs[4].value; //email

  let h5 = document.createElement("h5");
  h5.textContent = inputs[5].value; //qualification

  let p = document.createElement("p");
  p.textContent = inputs[6].value; //other info

  profile.appendChild(image);
  card.appendChild(profile);

  card.appendChild(h1);
  card.appendChild(h2);
  card.appendChild(h3);
  card.appendChild(h4);
  card.appendChild(h5);
  card.appendChild(p);

  main.appendChild(card);
  document.getElementById("successMessage").style.display = "block";

  inputs.forEach(function (inp) {
    if (inp.type !== "submit") {
      inp.value = "";
    }
  });
});
