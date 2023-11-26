let input = document.querySelector(".input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click", () => {
  let ivalue = input.value;
  let li = document.createElement("li");
  li.innerHTML = ivalue;
  ul.appendChild(li);
  input.value = "";
  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  li.appendChild(span);
  span.addEventListener("click", () => {
    li.remove();
  });
});
