/* Vertical Transition Plugin */

if (window.bannerSectionTransition_plugin && window.bannerSectionTransition_plugin.excluded && Array.isArray(window.bannerSectionTransition_plugin.excluded) && window.bannerSectionTransition_plugin.excluded.length > 0)
for (var i = 0; i < window.bannerSectionTransition_plugin.excluded.length; i++) window.location.pathname.indexOf(window.bannerSectionTransition_plugin.excluded[i]) > -1 && document.body.classList.add("excluded-page");

if (document.body.className !== 'excluded-page'){

  document.body.insertAdjacentHTML("afterbegin", '<div class="transition-slide"></div>');

  var item = document.createElement('div');
  item.classList.add('transition-overlay');
  //overlay.className = "transition-overlay";
  //document.body.insertAdjacentHTML('afterbegin', overlay);
  
  
  var tl_intro = gsap.timeline(),
  transitionSlide = document.querySelector(".transition-slide"),
  site = document.getElementById("siteWrapper") || document.querySelector(".Site");

  (transitionSlide.style.visibility = "visible"),

  tl_intro 
  .fromTo(transitionSlide, 1.2, { y: "100%" }, { y: "0%", ease: "expo.inOut" }, 0)   
  .to(transitionSlide,1, { y: "-100%", ease: "expo.inOut", onComplete: function () {transitionSlide.style.visibility = "hidden";}, }, 1)

  .to(site,
    { 
      keyframes: [
        { y: "100vh", ease: "expo.inOut", duration: 0 },
        { y: "20h", ease: "expo.inOut", duration: 0, delay: 1 },
        {
          y: "0",
          ease: "expo.inOut",
          duration: 1,
          clearProps: "transform",
          onStart: function () {
            window.scrollTo(0, 0), (site.style.opacity = "1");
          },
        },
      ],
      onComplete: function () {
        document.body.classList.add("transition-slide-end");
      },
    },        
    0
  );
}

/* Vertical Transition Plugin */
