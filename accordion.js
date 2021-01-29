//THIS CODE ADDS EVENT LISTENERS FOR CLICK
$(document).ready(function () {
  var row = document.getElementsByClassName("list__heading-row");
  row = Array.from(row);
  row.forEach((element) => {
    element.addEventListener("click", showText);
  });


//   //THIS CODE STYLES ALL THE INNER STUFF
//   for (let i = 0; i < row.length; i++) {
//     row[i].classList.remove("active-row");
//     // row.getElementsByClassName("list__text--main")[i].classList.remove("active-text-bold");
//   }
});

//THIS CODE CREATES A FUNCTION TO ADD AND REMOVE CLASS NAMES
function showText() {
  if (this.classList.contains("active-row")) {
    this.classList.remove("active-row");
    this.getElementsByClassName("list__text--main")[0].classList.remove("active-text-bold");
    this.getElementsByClassName("list__dropdown")[0].classList.remove("active-dropdown");
    $(this).siblings(".list__text--collapsible")[0].style.display = "none";
} else {

      //ADDS ALL NECESSARY CLASSES TO THESE CHILDREN
    this.classList.add("active-row");
    this.getElementsByClassName("list__text--main")[0].classList.add("active-text-bold");
    this.getElementsByClassName("list__dropdown")[0].classList.add("active-dropdown");
    $(this).siblings(".list__text--collapsible")[0].style.display = "inline-block";
  }
}


