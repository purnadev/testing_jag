// document.body.style="background-color: var(--bs-dark);transition: 0.5s;"
// const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
// const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"

// var theme = "dark";
//   const root = document.querySelector(":root");
//   const container = document.getElementsByClassName("theme-container")[0];
//   const themeIcon = document.getElementById("theme-icon");
//   container.addEventListener("click", setTheme);
//   function setTheme() {
//     switch (theme) {
//       case "dark":
//         setLight();
//         theme = "light";
//         break;
//       case "light":
//         setDark();
//         theme = "dark";
//         break;
//     }
//   }
//   function setLight() {
//     root.style.setProperty(
//       "--bs-dark",
//       "linear-gradient(318.32deg, #c3d1e4 0%, #dde7f3 55%, #d4e0ed 100%)"
//     );
//     document.getElementById('menubar').style.color='black';

//     container.classList.remove("shadow-dark");
//     setTimeout(() => {
//       container.classList.add("shadow-light");
//       themeIcon.classList.remove("change");
//     }, 300);
//     themeIcon.classList.add("change");
//     themeIcon.src = sun;
//   }
//   function setDark() {
//     root.style.setProperty("--bs-dark", "#091f31");
//     document.getElementById('menubar').style.color='white';
//     container.classList.remove("shadow-light");
//     setTimeout(() => {
//       container.classList.add("shadow-dark");
//       themeIcon.classList.remove("change");
//     }, 300);
//     themeIcon.classList.add("change");
//     themeIcon.src = moon;
//   }



  // menu
  function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  let ttl4 = gsap.timeline();
  ttl4
  .from('#home',{
   onStart: function () {
        $('#home').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    }
  })
  .from('#about',{
    visibility:'hidden',
   onStart: function () {
        $('#about').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    }

  }).from('#team',{
visibility:'hidden',
   onStart: function () {
        $('#team').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    }
  }).from('#events',{
visibility:'hidden',
   onStart: function () {
        $('#events').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    }
  }).from('#venue',{
    visibility:'hidden',
   onStart: function () {
        $('#venue').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    }
  }).from('#gallery',{
    visibility:'hidden',
   onStart: function () {
        $('#gallery').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    }
  }).from('#spon',{
    visibility:'hidden',
   onStart: function () {
        $('#spon').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    }
  }).from('#contact',{
    visibility:'hidden',
   onStart: function () {
        $('#contact').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    }
  }).from('#btn_rg',{
    opacity:0,
    x:-30,
   onStart: function () {
        $('#btn_eg').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    }
  }).from('#love',{
    visibility:'hidden',
   onStart: function () {
        $('#love').textillate({
            in: {
                effect: 'fadeInLeft' 
            }
            
        });
    }
  })
  
}
  
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  // document.getElementById('btn_reg').style.opacity='1';
 

}

document.getElementById('about').addEventListener('click',()=>{
  document.getElementById('loader').style.display='none';
  
  console.log('About');
  // document.getElementById('ja').style.display = 'none';
})


$(document).ready(function() {
    
  // When the button is clicked make the lightbox fade in in the span of 1 second, hide itself and start the video
  $("#jam_rr").on("click", function() {
    $("#lightbox").fadeIn(1000);
    $(this).hide();
    var videoURL = $('#video').prop('src');
    videoURL += "?autoplay=1";
    $('#video').prop('src',videoURL);
  });
  
  // When the close button is clicked make the lightbox fade out in the span of 0.5 seconds and show the play button
  $("#close-btn").on("click", function() {
    $("#lightbox").fadeOut(500);
    $("#jam_rr").show(250);
  });
});


var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination"
  }
});


/**
 * @description Change Home page slider's arrows active status
 */
function updateSliderArrowsStatus(
  cardsContainer,
  containerWidth,
  cardCount,
  cardWidth
) {
  if (
    $(cardsContainer).scrollLeft() + containerWidth <
    cardCount * cardWidth + 15
  ) {
    $("#slide-right-container").addClass("active");
  } else {
    $("#slide-right-container").removeClass("active");
  }
  if ($(cardsContainer).scrollLeft() > 0) {
    $("#slide-left-container").addClass("active");
  } else {
    $("#slide-left-container").removeClass("active");
  }
}
$(function() {
  // Scroll products' slider left/right
  let div = $("#cards-container");
  let cardCount = $(div)
    .find(".cards")
    .children(".card").length;
  let speed = 1000;
  let containerWidth = $(".container").width();
  let cardWidth = 250;

  updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);

  //Remove scrollbars
  $("#slide-right-container").click(function(e) {
    if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
      $(div).animate(
        {
          scrollLeft: $(div).scrollLeft() + cardWidth
        },
        {
          duration: speed,
          complete: function() {
            setTimeout(
              updateSliderArrowsStatus(
                div,
                containerWidth,
                cardCount,
                cardWidth
              ),
              1005
            );
          }
        }
      );
    }
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  });
  $("#slide-left-container").click(function(e) {
    if ($(div).scrollLeft() + containerWidth > containerWidth) {
      $(div).animate(
        {
          scrollLeft: "-=" + cardWidth
        },
        {
          duration: speed,
          complete: function() {
            setTimeout(
              updateSliderArrowsStatus(
                div,
                containerWidth,
                cardCount,
                cardWidth
              ),
              1005
            );
          }
        }
      );
    }
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  });

  // If resize action ocurred then update the container width value
  $(window).resize(function() {
    try {
      containerWidth = $("#cards-container").width();
      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    } catch (error) {
      console.log(
        `Error occured while trying to get updated slider container width: 
            ${error}`
      );
    }
  });
});
