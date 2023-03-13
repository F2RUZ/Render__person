// api
const API = "https://randomuser.me/api/?results=12";

// for leader
const overlay = document.getElementById("overlay");

// toggle overlay

const togleOver = (toggle) => {
  if (toggle) {
    overlay.classList.remove("hidden");
  } else {
    overlay.classList.add("hidden");
  }
};

const getData = (resourse) => {
  return new Promise((resolve, rejects) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState < 4) {
        console.log("Loading...");
        togleOver(true);
      } else if (request.readyState == 4 && request.status == 200) {
        const resultData = JSON.parse(request.responseText);
        resolve(resultData.results);
        togleOver(false);
      } else if (request.request == 4) {
        rejects("Error !!!");
        togleOver(true);
      }
    });

    request.open("GET", resourse);
    request.send();
  });
};

const reload = () => {
  getData(API)
    .then((data) => {
      updateUi(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

document.addEventListener("DOMContentLoaded", reload);
