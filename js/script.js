var mapButton = document.querySelector(".map-small");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    };
  };
});


var writeUsButton = document.querySelector(".write-us-button");
var writeUsPopup = document.querySelector(".modal-wrire-us");

var writeUsClose = writeUsPopup.querySelector(".modal-close");
var writeUsForm = writeUsPopup.querySelector("form");
var writeUsLogin = writeUsPopup.querySelector("[name=name]");
var writeUsEmail = writeUsPopup.querySelector("[name=email]");

writeUsButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");
});

writeUsClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function(evt) {
  if (!writeUsLogin.value || !writeUsEmail.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove("modal-error");
    writeUsLogin.classList.remove("modal-input-invalid");
    writeUsEmail.classList.remove("modal-input-invalid");
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add("modal-error");
    if (!writeUsLogin.value) {
      writeUsLogin.classList.add("modal-input-invalid");
    } else {
      writeUsEmail.classList.add("modal-input-invalid");
    };
  };
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.remove("modal-error");
    };
  };
});


