const monthEl = document.querySelector(".head .main-dates h2");
const dateEl = document.querySelector(".head .main-dates p");
const datesNumEl = document.querySelector(".dates");
const leftArrow = document.querySelector(".fa-chevron-left");
const rightArrow = document.querySelector(".fa-chevron-right");

const date = new Date();

function calender() {
  const months = [
    " January",
    " February",
    " March",
    " April",
    "May ",
    " June",
    "July ",
    " August",
    " September",
    " October",
    " November",
    " December",
  ];

  monthEl.innerText = months[date.getMonth()];
  dateEl.innerText = date.toDateString();

  const lastDate = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  let days = "";

  for (let i = 1; i <= firstDay; i++) {
    days += `<h4 class="empty"></h4>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    if (date.getDate() === i && date.getMonth() === new Date().getMonth()) {
      days += `<h4 class="today"> ${i} </h4>`;
    } else {
      days += `<h4> ${i} </h4>`;
    }
  }

  datesNumEl.innerHTML = days;
}

calender();

leftArrow.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  calender();
});

rightArrow.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  calender();
});
