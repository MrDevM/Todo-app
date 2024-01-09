const btn = document.querySelectorAll("button");
const imgD = document.querySelector(".circle");
const ul = document.querySelector("ul");
const delet = document.querySelectorAll(".cross");
const button = document.querySelectorAll("button");
const item = document.querySelector(".items");
const time = document.querySelector("header img");
const input = document.querySelector(".add input");
btn.forEach((b) => {
  b.addEventListener("click", (e) => {
    const non = document.querySelectorAll("button");
    non.forEach((n) => {
      if (n == e.target) {
        n.style.color = "var(--Bright-Blue)";
      } else {
        n.style.color = "var(--Very-Dark-Grayish-Blue-2)";
      }
    });
  });
});
ul.addEventListener("click", (e) => {
  if (e.target.classList == "cross") {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList == "circle") {
    const circle = e.target;
    const p = circle.nextElementSibling.firstElementChild;
    if (
      circle.children[0].style.visibility == "" ||
      circle.children[0].style.visibility == "hidden"
    ) {
      circle.children[0].style.visibility = "initial";
      circle.style.backgroundImage = "var(--Check-bg)";
      if (time.classList == "sun") {
        p.classList.remove("delmo");
        p.classList.add("del");
      } else if (time.classList == "moon") {
        p.classList.remove("del");
        p.classList.add("delmo");
      }
    } else if (circle.children[0].style.visibility == "initial") {
      circle.style.backgroundImage = "none";
      circle.children[0].style.visibility = "hidden";
      p.classList.remove("del");
      if (time.classList == "sun") {
        p.classList.remove("del");
      } else if (time.classList == "moon") {
        p.classList.remove("delmo");
      }
    }
  }
});
//
//
const visibleCount = Array.from(ul.children).filter(
  (li) => li.style.display !== "none"
).length;
const d = document.createElement("b");
d.textContent = visibleCount;
item.insertBefore(d, item.children[0]);
//
//
button.forEach((b) => {
  ule = document.querySelector("ul").children;
  b.addEventListener("click", (e) => {
    for (li of ule) {
      const con = li.children[0].querySelector(".check");
      if (e.target.classList.contains("completed")) {
        if (con.style.visibility == "initial") {
          li.style.display = "block";
        } else if (con.style.visibility != "initial") {
          li.style.display = "none";
        }
      } else if (e.target.classList.contains("active")) {
        if (con.style.visibility != "initial") {
          li.style.display = "block";
        } else {
          li.style.display = "none";
        }
      } else if (e.target.classList.contains("all")) {
        li.style.display = "block";
      } else if (e.target.classList.contains("clear")) {
        if (con.style.visibility == "initial") {
          ul.removeChild(li);
        } else if (con.style.visibility != "initial") {
          li.style.display = "block";
        }
      }
    }
    const uls = document.querySelector("ul");
    const visibleCount = Array.from(uls.children).filter(
      (li) => li.style.display === "block"
    ).length;

    const existingCount = document.querySelector("b");
    if (existingCount) {
      existingCount.textContent = visibleCount;
    } else {
      const d = document.createElement("b");
      d.textContent = visibleCount;
      item.insertBefore(d, item.children[0]);
    }
  });
});
const form = document.forms[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = document.querySelector('input[type="text"]').value;
  const li = document.createElement("li");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const p = document.createElement("p");
  const img = document.createElement("img");
  const img2 = document.createElement("img");
  const hr = document.createElement("hr");
  img.classList.add("check");
  img.setAttribute("src", "images/icon-check.svg");
  img.setAttribute("alt", "check");
  img.style.visibility = "hidden";
  img2.classList.add("cross");
  img2.setAttribute("src", "images/icon-cross.svg");
  img2.setAttribute("alt", "cross");
  div1.classList.add("conta");
  div1.appendChild(div2);
  div2.classList.add("circle");
  div2.appendChild(img);
  div3.classList.add("textcon");
  div3.appendChild(p);
  div1.appendChild(div3);
  div1.appendChild(img2);
  li.style.display = "block";
  li.appendChild(div1);
  li.appendChild(hr);
  if (value.trim() != "") {
    p.textContent = value.trim();
    ul.appendChild(li);
  } else {
    alert("The New Todo must not empty");
  }
});
time.addEventListener("click", (e) => {
  const cal = document.querySelector(".cal");
  const add = document.querySelector(".add");
  const textcon = document.querySelectorAll(".textcon");
  const body = document.body;
  const mb = document.querySelector(".btnsdis1");
  if (time.classList == "sun") {
    time.classList.remove("sun");
    time.classList.add("moon");
    time.setAttribute("alt", "moon");
    time.setAttribute("src", "images/icon-moon.svg");
    cal.style.backgroundColor = "var(--white)";
    document.body.style.backgroundColor = "var(--Very-Light-Grayish-Blue)";
    add.style.backgroundColor = "var(--Very-great-Gray)";
    for (tc of textcon) {
      tc.style.color = "var(--Very-Dark-Grayish-Blue-2)";
    }
    for (bt of btn) {
      bt.classList.add("btnm");
      bt.classList.remove("btn");
    }
    body.setAttribute("id", "light");
    mb.classList.remove("dark");
    mb.classList.add("light");
  } else if (time.classList == "moon") {
    time.classList.remove("moon");
    time.classList.add("sun");
    time.setAttribute("alt", "sun");
    time.setAttribute("src", "images/icon-sun.svg");
    cal.style.backgroundColor = "var(--Very-Dark-Desaturated-Blue)";
    document.body.style.backgroundColor = "var(--Very-Dark-Blue)";
    add.style.backgroundColor = "var(--Very-Dark-Desaturated-Blue)";
    for (tc of textcon) {
      tc.style.color = "var(--Very-Light-Grayish-Blue)";
    }
    for (bt of btn) {
      bt.classList.add("btn");
      bt.classList.remove("btnm");
    }
    body.setAttribute("id", "dark");
    mb.classList.remove("light");
    mb.classList.add("dark");
  }
});
input.addEventListener("input", (e) => {
  const img = document.querySelector("header img");
  if (img.classList.contains("sun")) {
    e.target.style.color = "var(--Light-Grayish-Blue)";
  } else if (img.classList.contains("moon")) {
    e.target.style.color = "var(--Very-Dark-Grayish-Blue)";
  }
});
