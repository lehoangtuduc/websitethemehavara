const menu = document.getElementById("mn_mobile_icon");
var menu_list = document.getElementById("mn_mobile");
menu.addEventListener("click", function () {
  console.log(menu_list.style.display);
  if (menu_list.style.visibility === "visible") {
    menu_list.style.visibility = "hidden";
  } else {
    menu_list.style.visibility = "visible";
  }
});
const searchMenu = document.getElementById("search_menu_icon");
var menuSearch = document.getElementById("search_menu");
searchMenu.addEventListener("click", function () {
  console.log(menuSearch.style.display);
  if (menuSearch.style.visibility === "visible") {
    menuSearch.style.visibility = "hidden";
  } else {
    menuSearch.style.visibility = "visible";
  }
});

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Xem Thêm Nội Dung";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Rút Gọn Nội Dung";
    moreText.style.display = "inline";
  }
}