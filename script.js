const dec = document.querySelector("#dec");
const inc = document.querySelector("#inc");
const clr = document.querySelector("#clr");
const err = document.querySelector("#error-message");
const count = document.querySelector("#countDisplay");
let i = 1;
dec.addEventListener("click", () => {
  i--;
  count.innerHTML = i;
  if (i == 0) {
    dec.disabled = true;
    clr.style.display = "none";
    err.style.display = "block";
  }
});
inc.addEventListener("click", () => {
  i++;
  count.innerHTML = i;
  err.style.display = "none";
  dec.disabled = false;
  clr.style.display = "block";
});
clr.addEventListener("click", () => {
  i = 0;
  count.innerHTML = i;
  err.style.display = "block";
  dec.disabled = true;
  clr.style.display = "none";
});
