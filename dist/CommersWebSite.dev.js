"use strict";

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  myIndex++;

  if (myIndex > x.length) {
    myIndex = 1;
  }

  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
}

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  if (window.scrollY >= 150) {
    // document.querySelector(".layout-header ul li a").style.color = "white"
    $(".layout-header ul li a").css("color", "black");
    $(".layout-account ul li a ").css("color", "black");
    $(".logo i").css("color", "white");

    if (window.scrollY >= 1085) {
      $(".layout-header ul li a").css("color", "black");
      $(".layout-account ul li a ").css("color", "black");
      $(".logo i").css("color", "black");
    }

    if (window.scrollY >= 750) {
      document.querySelector(".cloned2").style.animationName = "hereket";
    } else {
      document.querySelector(".cloned2").style.animationName = "";
    }
  } else {
    // document.querySelector(".layout-header ul li a").style.color = "black"
    $(".layout-header ul li a").css("color", "black");
    $(".layout-account ul li a ").css("color", "black");
    $(".logo i").css("color", "black");
  }

  if (window.scrollY >= 1090) {
    document.querySelector(".product").style.animationName = "product";
  } else {
    document.querySelector(".product").style.animationName = "";
  }
}); // window.addEventListener("scroll", function() {
//     console.log(window.scrollY);
//     if (window.scrollY >= 2000) {
//         document.querySelector(".mainslide").style.animationName = "hereket"
//     } else {
//         document.querySelector(".mainslide").style.animationName = ""
//     }
// })

$(".wmn").click(function () {
  $(".wmnul").show();
  $(".wmnul2").hide();
  $(".wmnul3").hide();
  $(".wmnul4").hide();
  $(".wmnul5").hide();
});
$(".MN").click(function () {
  $(".wmnul").hide();
  $(".wmnul2").show();
  $(".wmnul3").hide();
  $(".wmnul4").hide();
  $(".wmnul5").hide();
});
$(".KID").click(function () {
  $(".wmnul").hide();
  $(".wmnul2").hide();
  $(".wmnul3").show();
  $(".wmnul4").hide();
  $(".wmnul5").hide();
});
$(".HM").click(function () {
  $(".wmnul").hide();
  $(".wmnul2").hide();
  $(".wmnul3").hide();
  $(".wmnul4").show();
  $(".wmnul5").hide();
});
$(".MKP").click(function () {
  $(".wmnul").hide();
  $(".wmnul2").hide();
  $(".wmnul3").hide();
  $(".wmnul4").hide();
  $(".wmnul6").hide();
  $(".wmnul5").show();
});
$(".ZR").click(function () {
  $(".wmnul").hide();
  $(".wmnul2").hide();
  $(".wmnul3").hide();
  $(".wmnul4").hide();
  $(".wmnul5").hide();
  $(".wmnul6").show();
});
$(".layout-sidebar__content").css({
  "visibility": "hidden"
});
$(".fa-bars").click(function () {
  $(".layout-sidebar__content").css({
    "visibility": "visible"
  });
  $("body").css({
    "overflow": "hidden"
  });
  $(".layout-sidebar__content").css({
    "transform": "translate(0%, 0%)"
  });
  $(".layout-sidebar__content").css({
    "transition": "all 0.5s ease-out"
  });
});
$(".fa-xmark").click(function () {
  $(".layout-sidebar__content").css({
    "transform": "translate(-100%, 0%)"
  });
  $(".layout-sidebar__content").css({
    "transition": "all 0.5s ease-out"
  });
  $(".layout-sidebar__content").css({
    "visibility": "hidden"
  }); // $(".layout-sidebar__content").hide()

  $("body").css({
    "overflow": "auto"
  }); // total -= Number(baza[i].qiymet)
  // document.querySelector(".Sbb").innerHTML = total
}); // !BAZA

var baza = [{
  sekil: "Zara1.jpg",
  title: "LONG COTTON TRENCH COAT",
  qiymet: "50",
  cat: "Women’s"
}, {
  sekil: "Zara2.jpg",
  title: "WATER-REPELLENT OVERSHIRT WITH POCKETS",
  qiymet: "60",
  cat: "Women’s"
}, {
  sekil: "Zara3.jpg",
  title: "OVERSIZE PARKA WITH BUTTONS",
  qiymet: "50",
  cat: "Women’s"
}, {
  sekil: "https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title: "COMFORT BLAZER",
  qiymet: "90",
  cat: "Men’s"
}, {
  sekil: "https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  title: "STRAIGHT FIT BLAZER",
  qiymet: "80",
  cat: "Men’s"
}, {
  sekil: "https://i.pinimg.com/originals/a3/92/2c/a3922c432494e8836b1e11e9722c7115.jpg",
  title: "Eren Yeager",
  qiymet: "99999999",
  cat: "Men’s"
}, {
  sekil: "Zara10.jpg",
  title: "BROOKLYN T-SHIRT",
  qiymet: "50",
  cat: "Kid’s"
}, {
  sekil: "Zara8.jpg",
  title: "EMBROIDERED NEW YORK TROUSERS",
  qiymet: "90",
  cat: "Kid’s"
}, {
  sekil: "Zara9.jpg",
  title: "NEW YORK HOODIE",
  qiymet: "50",
  cat: "Kid’s"
}];

for (var i = 0; i < baza.length; i++) {
  document.querySelector(".product").innerHTML += "\n    <div class=\"product__item__pic \" category=\"".concat(baza[i].cat, "\" onclick=\"goster(").concat(i, ")\">\n\n    <div class=\"hello\">\n        <div class=\"demo\">\n            <div class=\"back\">\n                <div class=\"product5 \">\n                    <i class=\"fa-solid fa-maximize\"></i>\n                    <i class=\"fa-solid fa-heart\"></i>\n                    <i class=\"fa-solid fa-bag-shopping\" onclick=\"elaveet(").concat([i], ")\"></i>\n                    </div>\n                    </div>\n                    <img src=\"").concat(baza[i].sekil, "\">\n\n             <h3>").concat(baza[i].title, "</h3>\n             <span>$").concat(baza[i].qiymet, "</span>\n        </div>\n    </div>\n    ");
}

document.querySelectorAll(".site-main2 ul li a").forEach(function (x) {
  x.addEventListener("click", function () {
    console.log(x.innerHTML);
    document.querySelectorAll(".product .product__item__pic").forEach(function (y) {
      if (y.getAttribute("category") == x.innerHTML || x.innerHTML == "Show All") {
        y.style.display = "block";
      } else {
        y.style.display = "none";
      }
    });
  });
});

function goster(n) {
  // document.querySelector(".fa-maximize").style.display = "block"
  document.querySelector(".black").innerHTML = "\n        <div class=\"close-container closq\" onclick=\"bagla(".concat(n, ")\">\n        <div class=\"leftright\"></div>\n        <div class=\"rightleft\"></div>\n        <label class=\"close\">close</label>\n        \n      </div>\n    <img src=\"").concat(baza[n].sekil, "\">\n\n\n    ");
}

$(".fa-maximize").click(function () {
  $(".black").css({
    "visibility": "visible"
  }); // $(".black").show()

  $("body").css({
    "overflow": "hidden"
  });
}); // $(".close-container").on("click" (function () {
//     $(".black").hide()
//     $(".black").css({ "position": "absolute" })
//     $("body").css({ "overflow": "auto" })
// })

function bagla() {
  // document.querySelector(".black").style.visibility = "hidden"
  $(".black").css({
    "visibility": "hidden"
  }); // document.querySelector(".black").style.display = "none"

  $("body").css({
    "overflow": "auto"
  });
} // !Swipper


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); // !Cart add //

var total = 0;

function elaveet(i) {
  document.querySelector(".maintbooody").innerHTML += "\n        <div class=\"tbooody\">\n        <div class=\"product-remove\">\n        <i class=\"fa-regular fa-circle-xmark delll\"></i>\n\n        </div>\n\n\n        <div class=\"imagetbody\">\n        <img src=\"".concat(baza[i].sekil, "\" alt=\"\">\n        </div>\n        <div class=\"imagetxt\">\n        <p>").concat(baza[i].title, "</p>\n        </div>\n\n        <div class=\"priceimage\">\n        <p>").concat(baza[i].qiymet, "</p>\n        <span>$</span>\n\n        </div>\n        \n        <div class=\"priceimage2\">\n        <p>").concat(baza[i].qiymet, "</p>\n        <span>$</span>\n        </div>\n        </div>\n\n        ");
  total += Number(baza[i].qiymet);
  document.querySelector(".Sbb").innerHTML = total;
  $(".product-remove").click(function () {
    // !Remove
    // $(this).parent().remove()
    var sonqiymet = $(this).parent().children().eq(3).children().eq(0).text();
    total -= sonqiymet;
    document.querySelector(".Sbb").innerHTML = total;
  });
}

var numm = 0;
var setir;
$("body").on("click", ".delll", function () {
  setir = $(this).parents(".tbooody");
  setir.remove();
  numm--;
  $(".numm").html(numm);
});
$(".fa-bag-shopping").click(function () {
  numm++;
  $(".numm").html(numm);
}); // !Remove

$(".Cartmain").hide();
$("body").on("click", ".fa-cart-shopping", function () {
  // $(".Cartmain").css({ "display": "flex" })
  $(".Cartmain").show();
  $(".mainrow").hide();
  $("body").css({
    "overflow": "hidden"
  });
});
$(".outer").click(function () {
  $(".mainrow").show();
  $(".Cartmain").hide();
  $("body").css({
    "overflow": "auto"
  });
}); // !Search

for (var _i = 0; _i < baza.length; _i++) {
  document.querySelector(".results").innerHTML += "\n\n\n\n             <div class=\"result-item\">\n             <img src=\"".concat(baza[_i].sekil, "\">\n             <div class=\"search-info\">\n             <h3 class=\"axtar\">").concat(baza[_i].title, "</h3>\n             <span class=\"axtar\">$").concat(baza[_i].qiymet, "</span>\n        </div>\n\n        </div>\n    </div>\n    ");
} // !Search


$(".search-btn2").on("keyup", function () {
  document.querySelectorAll(".result-item").forEach(function (x) {
    if (x.innerText.toLocaleUpperCase().includes(document.querySelector(".search-btn2").value.toLocaleUpperCase())) x.style.display = "";else {
      x.style.display = "none";
    }
  });
});
$(".modal-search1").hide();
$("body").on("click", ".fa-magnifying-glass", function () {
  // $(".Cartmain").css({ "display": "flex" })
  $(".modal-search1").show();
});
$("body").on("click", "#close-search", function () {
  // $(".Cartmain").css({ "display": "flex" })
  $(".modal-search1").hide();
}); // !Search

function myFunction() {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

$(".modal-search1").hide();
$("body").on("click", ".fa-magnifying-glass", function () {
  // $(".Cartmain").css({ "display": "flex" })
  $(".modal-search1").show();
});