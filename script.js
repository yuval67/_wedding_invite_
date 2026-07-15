const openButton = document.getElementById("openInvite");
const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");

openButton.addEventListener("click", () => {
  cover.classList.add("opening");

  setTimeout(() => {
    cover.classList.remove("active");
    invitation.classList.add("active");
    window.scrollTo(0, 0);
  }, 0);
});
