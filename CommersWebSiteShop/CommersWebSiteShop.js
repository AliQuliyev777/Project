window.addEventListener("scroll", function () {
    // console.log(window.scrollY);
    if (window.scrollY >= 150) {
        // document.querySelector(".layout-header ul li a").style.color = "white"
        $(".layout-header ul li a").css("color", "black");
        $(".layout-account ul li a ").css("color", "black");
        $(".logo i").css("color", "black");

        if (window.scrollY >= 1085) {

            $(".layout-header ul li a").css("color", "black");
            $(".layout-account ul li a ").css("color", "black");
            $(".logo i").css("color", "black");


        }



    } else {
        // document.querySelector(".layout-header ul li a").style.color = "black"
        $(".layout-header ul li a").css("color", "black");
        $(".layout-account ul li a ").css("color", "black");
        $(".logo i").css("color", "black");



    }

})


// window.addEventListener("scroll", function() {
//     console.log(window.scrollY);
//     if (window.scrollY >= 2000) {
//         document.querySelector(".mainslide").style.animationName = "hereket"
//     } else {
//         document.querySelector(".mainslide").style.animationName = ""
//     }

// })




$(".wmn").click(function () {
    $(".wmnul").show()
    $(".wmnul2").hide()
    $(".wmnul3").hide()
    $(".wmnul4").hide()
    $(".wmnul5").hide()




})
$(".MN").click(function () {
    $(".wmnul").hide()
    $(".wmnul2").show()
    $(".wmnul3").hide()
    $(".wmnul4").hide()
    $(".wmnul5").hide()




})
$(".KID").click(function () {
    $(".wmnul").hide()
    $(".wmnul2").hide()
    $(".wmnul3").show()
    $(".wmnul4").hide()
    $(".wmnul5").hide()


})

$(".HM").click(function () {
    $(".wmnul").hide()
    $(".wmnul2").hide()
    $(".wmnul3").hide()
    $(".wmnul4").show()
    $(".wmnul5").hide()


})
$(".MKP").click(function () {
    $(".wmnul").hide()
    $(".wmnul2").hide()
    $(".wmnul3").hide()
    $(".wmnul4").hide()
    $(".wmnul6").hide()
    $(".wmnul5").show()


})
$(".ZR").click(function () {
    $(".wmnul").hide()
    $(".wmnul2").hide()
    $(".wmnul3").hide()
    $(".wmnul4").hide()
    $(".wmnul5").hide()
    $(".wmnul6").show()

})
$(".layout-sidebar__content").css({ "visibility": "hidden" })

$(".fa-bars").click(function () {
    // $(".layout-sidebar__content").css({ "overflow": "hidden" })

    // $(".layout-sidebar__content").show()
$(".layout-sidebar__content").css({ "visibility": "visible" })

    $("body").css({ "overflow": "hidden" })
    
$(".layout-sidebar__content").css({ "transform": "translate(0%, 0%)" })
$(".layout-sidebar__content").css({ "transition": "all 0.5s ease-out" })
    
})
$(".fa-xmark").click(function () {
    $(".layout-sidebar__content").css({ "transform": "translate(-100%, 0%)" })
    
    $(".layout-sidebar__content").css({ "transition": "all 0.5s ease-out" })
$(".layout-sidebar__content").css({ "visibility": "hidden" })
    
    // $(".layout-sidebar__content").hide()
    $("body").css({ "overflow": "auto" })
    // total -= Number(baza[i].qiymet)
    // document.querySelector(".Sbb").innerHTML = total

})


// !BAZA

var baza = [{
    sekil: "Zara1.jpg",
    title: "LONG COTTON TRENCH COAT",
    qiymet: "50",
    cat: "Women’s"

},
{
    sekil: "/Zara2.jpg",
    title: "WATER-REPELLENT OVERSHIRT WITH POCKETS",
    qiymet: "60",
    cat: "Women’s"

},
{
    sekil: "Zara3.jpg",
    title: "OVERSIZE PARKA WITH BUTTONS",
    qiymet: "50",
    cat: "Women’s"
},

{
    sekil: "Zara4.jpg",
    title: "COMFORT BLAZER",
    qiymet: "90",
    cat: "Men’s"
},
{
    sekil: "Zara5.jpg",
    title: "STRAIGHT FIT BLAZER",
    qiymet: "80",
    cat: "Men’s"
},
{
    sekil: "Zara6.jpg",
    title: "DOUBLE-BREASTED SUIT BLAZER",
    qiymet: "70",
    cat: "Men’s"
},


{
    sekil: "Zara10.jpg",
    title: "BROOKLYN T-SHIRT",
    qiymet: "50",
    cat: "Kid’s"

},
{
    sekil: "Zara8.jpg",
    title: "EMBROIDERED NEW YORK TROUSERS",
    qiymet: "90",
    cat: "Kid’s"

},
{
    sekil: "Zara9.jpg",
    title: "NEW YORK HOODIE",
    qiymet: "50",
    cat: "Kid’s"
}
]


// for (let i = 0; i < baza.length; i++) {
//     document.querySelector(".product").innerHTML +=
//         `
//     <div class="product__item__pic " category="${baza[i].cat}" onclick="goster(${i})">

//     <div class="hello">
//         <div class="demo">
//             <div class="back">
//                 <div class="product5 ">
//                     <i class="fa-solid fa-maximize"></i>
//                     <i class="fa-solid fa-heart"></i>
//                     <i class="fa-solid fa-bag-shopping" onclick="elaveet(${[i]})"></i>
//                     </div>
//                     </div>
//                     <img src="${baza[i].sekil}">

//              <h3>${baza[i].title}</h3>
//              <span>$${baza[i].qiymet}</span>
//         </div>
//     </div>
//     `
// }


document.querySelectorAll(".site-main2 ul li a").forEach(x => {
    x.addEventListener("click", function () {
        console.log(x.innerHTML);

        document.querySelectorAll(".product .product__item__pic").forEach(y => {
            if (y.getAttribute("category") == x.innerHTML || x.innerHTML == "Show All") {
                y.style.display = "block"
            } else {
                y.style.display = "none"
            }
        })
    })
})


function goster(n) {

    // document.querySelector(".fa-maximize").style.display = "block"

    document.querySelector(".black").innerHTML =
        `
        <div class="close-container closq" onclick="bagla(${n})">
        <div class="leftright"></div>
        <div class="rightleft"></div>
        <label class="close">close</label>
        
      </div>
    <img src="${baza[n].sekil}">


    `
}

$(".black").hide()


$(".fa-maximize").click(function () {
    $(".black").show()
    $("body").css({ "overflow": "hidden" })

})

// $(".close-container").on("click" (function () {
//     $(".black").hide()
//     $(".black").css({ "position": "absolute" })
//     $("body").css({ "overflow": "auto" })

// })

function bagla() {
    document.querySelector(".black").style.display = "none"
    $("body").css({ "overflow": "auto" })

}

// add-to-cart text-center py-2 mr-1
// !Cart add //

 let total = 0;
function elaveet(i) {

    document.querySelector(".maintbooody").innerHTML +=
        `
        <div class="tbooody">
        <div class="product-remove">
        <i class="fa-regular fa-circle-xmark delll"></i>

        </div>


        <div class="imagetbody">
        <img src="${baza[i].sekil}" alt="">
        </div>
        <div class="imagetxt">
        <p>${baza[i].title}</p>
        </div>

        <div class="priceimage">
        <p>${baza[i].qiymet}</p>
        <span>$</span>

        </div>
        
        <div class="priceimage2">
        <p>${baza[i].qiymet}</p>
        <span>$</span>
        </div>
        </div>

        `

    total += Number(baza[i].qiymet)
    document.querySelector(".Sbb").innerHTML = total


    $(".product-remove").click(function () {
    
        
// !Remove



// $(this).parent().remove()
        var sonqiymet = $(this).parent().children().eq(3).children().eq(0).text()
        total -= sonqiymet
        document.querySelector(".Sbb").innerHTML = total

    })
}

var numm = 0;

var setir;
$("body").on("click", ".delll", function () {
    setir = $(this).parents(".tbooody")
    setir.remove()
    numm--
    $(".numm").html(numm)
});


$(".fa-bag-shopping").click(function () {

    numm++
    $(".numm").html(numm)
})




// !Remove

$(".Cartmain").hide()
$("body").on("click", ".fa-cart-shopping", function () {
    // $(".Cartmain").css({ "display": "flex" })
    $(".Cartmain").show()
    $(".mainrow").hide()
    $("body").css({ "overflow": "hidden" })


})



$(".outer").click(function () {
    $(".mainrow").show()

    $(".Cartmain").hide()
    $("body").css({ "overflow": "auto" })

})
// !Search
for (let i = 0; i < baza.length; i++) {
    document.querySelector(".results").innerHTML +=
        `



             <div class="result-item">
             <img src="${baza[i].sekil}">
             <div class="search-info">
             <h3 class="axtar">${baza[i].title}</h3>
             <span class="axtar">$${baza[i].qiymet}</span>
        </div>

        </div>
    </div>
    `
}


// !Search



$(".search-btn2").on("keyup", function() {


    document.querySelectorAll(".result-item").forEach(x => {
        if (x.innerText.toLocaleUpperCase().includes(document.querySelector(".search-btn2").value.toLocaleUpperCase()))
            x.style.display = ""
        else {
            x.style.display = "none"
        }
    });

});



$(".modal-search1").hide()
$("body").on("click", ".fa-magnifying-glass", function () {
    // $(".Cartmain").css({ "display": "flex" })
    $(".modal-search1").show()
   


})

$("body").on("click", "#close-search", function () {
    // $(".Cartmain").css({ "display": "flex" })
    $(".modal-search1").hide()
   


})

// !Search



function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



  $(".modal-search1").hide()
$("body").on("click", ".fa-magnifying-glass", function () {
    // $(".Cartmain").css({ "display": "flex" })
    $(".modal-search1").show()
   


})



// add-to-cart text-center py-2 mr-1