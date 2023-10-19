const btn = document.querySelector(".share__icon");
const share = document.querySelector(".share");

let count = 0;
btn.addEventListener("click", () => {
  count++;
    console.log(count)
  if (count % 2 === 0) {
    share.style.display = "none";
  } else {
    share.style.display = "flex";
  }
});
