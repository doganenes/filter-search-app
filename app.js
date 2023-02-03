const namesList = document.getElementById("nameItems");

fetch("items.json")
  .then((response) => response.json())
  .then((names) => {
    let html = "";
    names.forEach((name) => {
      let genderClass = name.gender === "Male" ? "male" : "female";
      html += `<li>${name.firstName} ${name.lastName} <span class="gender ${genderClass}">${name.gender}</span></li>`;
    });
    namesList.innerHTML = html;
  });

const genderSpans = document.getElementsByClassName("gender");
Array.from(genderSpans).forEach((span) => {
  if (span.classList.contains("male")) {
    span.style.display = "inline-block";
    span.style.width = "10px";

    span.style.height = "10px";
    span.style.borderRadius = "50%";
    span.style.marginRight = "50px";
  } else if (span.classList.contains("female")) {
    span.style.display = "inline-block";
    span.style.width = "3rem";
    span.style.height = "10px";
    span.style.borderRadius = "50%";
    span.style.marginRight = "10px";
  }
});

function filterSearchFunction() {
  let input = document.getElementById("searchInput");
  let filter = input.value.toUpperCase();
  let nameItems = document.getElementById("nameItems");
  let names = nameItems.getElementsByTagName("li");

  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name.innerHTML.toUpperCase().indexOf(filter) > -1) {
      name.style.display = "";
    } else {
      name.style.display = "none";
    }
  }
}
