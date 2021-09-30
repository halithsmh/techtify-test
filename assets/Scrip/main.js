var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

//javascript for the navigation bar effects on scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});



//image slider----

(function () {
  //If you want to include more images, add the link name and URL of the image in the array list below.
  let images_list = [
    { "url": "https://html-generator.com/uploads/images/2021/09/26/35673LN9WWO8CFQ.jpg", "name": "slider-1", "link": "" },
    { "url": "https://html-generator.com/uploads/images/2021/09/26/84738KYVJY_9FSX.jpg", "name": "slider-4", "link": "" },
    { "url": "https://html-generator.com/uploads/images/2021/09/26/61222YQCP227Z75.jpg", "name": "61222YQCP227Z75.jpg", "link": "" }
  ];

  let slider_id = document.querySelector("#about-slider");

  // append all images
  let dots_div = "";
  let images_div = "";
  for (let i = 0; i < images_list.length; i++) {
    // if no link without href="" tag
    let href = (images_list[i].link == "" ? "" : ' href="' + images_list[i].link + '"');
    images_div += '<a' + href + ' class="hcg-slides animated"' + (i === 0 ? ' style="display:block"' : '') + '>' +
      '<img src="' + images_list[i].url + '" alt="' + images_list[i].name + '">' +
      '</a>';
    dots_div += '<span class="hcg-slide-dot' + (i === 0 ? ' dot-active' : '') + '" data-id="' + i + '"></span>';
  }
  slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
  slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

  let slide_index = 0;

  let images = slider_id.querySelectorAll(".hcg-slides");
  let dots = slider_id.querySelectorAll(".hcg-slide-dot");
  function showSlides() {
    if (slide_index > images.length - 1) {
      slide_index = 0;
    }
    if (slide_index < 0) {
      slide_index = images.length - 1;
    }
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = "none";
      dots[i].classList.remove("dot-active");
      if (i == slide_index) {
        images[i].style.display = "block";
        dots[i].classList.add("dot-active");
      }
    }
  }

  function dot_click(event) {
    slide_index = event.target.dataset.id;
    showSlides();
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", dot_click, false);
  }
  setInterval(function () {
    slide_index++;
    showSlides();
  }, 3500);

})();


//image-slider---------


