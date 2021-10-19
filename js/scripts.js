$(".burger-btn").click(function () {
  if ($("body").hasClass("mob-nav-opened")) {
    $("body").removeClass("mob-nav-opened");
  } else {
    $("body").addClass("mob-nav-opened");
  }
});

$(".navbar-list a").click(function () {
  $("body").removeClass("mob-nav-opened");
});

var swiper = new Swiper('.museum-slider-1', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.museum-pagination-1',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.museum-next-1',
    prevEl: '.museum-prev-1',
  },
});

var swiper = new Swiper('.museum-slider-2', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.museum-pagination-2',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.museum-next-2',
    prevEl: '.museum-prev-2',
  },
});

var swiper = new Swiper('.museum-slider-3', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.museum-pagination-3',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.museum-next-3',
    prevEl: '.museum-prev-3',
  },
});

var swiper = new Swiper('.museum-slider-4', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.museum-pagination-4',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.museum-next-4',
    prevEl: '.museum-prev-4',
  },
});