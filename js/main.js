$(document).ready(function () {
  'use strict';

  $(window).on('load', function () { // makes sure that whole site is loaded
      $('html, body').scrollTop(0);
      $('#status').fadeOut();
      $('#loader').delay(250).fadeOut('slow');
      $('#preloader').addClass('show');
      setTimeout(function () {
          $('#preloader img').addClass('fadeIn');
      }, 2000);
      setTimeout(function () {
          $('#preloader').removeClass('show');
      }, 7000);
      setTimeout(() => {
        $('#preloader img').addClass('fadeOut');
      }, 6000);
      setTimeout(function () {
          $('#home-bg-video').addClass('animate__animated animate__fadeInRight homeShow');
          $('#home-bg-video').trigger('play');
      }, 8000);
  });

  var myFullpage = new fullpage('#fullpage', {
    navigation: true,
    anchors: [
      'sd-home',
      'sd-intro',
      'sd-every',
      'sd-partners',
      'sd-floorplans',
      'sd-fixtures',
      'sd-doorstep-1',
      'sd-doorstep-2',
      'sd-doorstep-3',
      'sd-doorstep-4',
      'sd-map',
      'sd-contact-us',
      'sd-disclaimer',
      'sd-backpage',
    ],
    slidesNavigation: false,
    scrollBar: true,
    verticalCentered: false,
    scrollOverflowReset: true,
    scrollHorizontally: true,
    scrollingSpeed: 800,
    autoScrolling: true,
    normalScrollElements: '.sale-intro, #map',
    touchSensitivity: 15,
    fitToSectionDelay: 100,
    fitToSection: true,

    afterLoad: function (anchorLink, index) {
      if ($('body').hasClass('fp-viewing-sd-home')) {
        $('#scroll-down').text('Introduction');
      }

      if ($('body').hasClass('fp-viewing-sd-intro')) {
        $('#scroll-down').text('Living in Toorak');
        $('#scroll-up').text('home');
        $('#home-modal #home-modal-container').addClass('show');
        $('#home-modal .home-modal-box').addClass('show');
        $('#home-modal .home-modal-content').addClass('show');
      }

      if ($('body').hasClass('fp-viewing-sd-every')) {
        $('#scroll-down').text('creative partners');
        $('#scroll-up').text('Introduction');
        $('#sd-everyday-carousel').addClass('show');
        $('.sunday-paragraph').removeClass('collapse')
      }

      if ($('body').hasClass('fp-viewing-sd-partners')) {
        $('#scroll-down').text('Residences');
        $('#scroll-up').text('Creative partners');
      }

      if ($('body').hasClass('fp-viewing-sd-floorplans')) {
        $('#scroll-down').text('The interior');
        $('#scroll-up').text('Creative partners');        
      }

      if ($('body').hasClass('fp-viewing-sd-fixtures')) {
        $('#scroll-down').text('Early mornings');
        $('#scroll-up').text('Residences');
      }

      if ($('body').hasClass('fp-viewing-sd-doorstep-1')) {
        $('#scroll-down').text(`hours of leisure`);
        $('#scroll-up').text('The interior');
        $('#doorstep-1 .dp-container-left').addClass('show');
        $('#doorstep-1 .doorstep-container-mid .col-md-4').addClass('show');
      }

      if ($('body').hasClass('fp-viewing-sd-doorstep-2')) {
        $('#scroll-down').text(`dinner's served`);
        $('#scroll-up').text(`early mornings`);
        $('#doorstep-2 .dp-container-right').addClass('show');
        $('#doorstep-2 .doorstep-container-mid .col-md-4').addClass('show');
      }

      if ($('body').hasClass('fp-viewing-sd-doorstep-3')) {
        $('#scroll-down').text('after dark');
        $('#scroll-up').text('hours of leisure');
        $('#doorstep-3 .dp-container-left').addClass('show');
        $('#doorstep-3 .doorstep-container-mid .col-md-4').addClass('show');
      }

      if ($('body').hasClass('fp-viewing-sd-doorstep-4')) {
        $('#scroll-down').text('locale');
        $('#scroll-up').text(`dinner's served`);
        $('#doorstep-4 .dp-container-right').addClass('show');
        $('#doorstep-4 .doorstep-container-mid .col-md-4').addClass('show');
      }

      if ($('body').hasClass('fp-viewing-sd-map')) {
        $('#scroll-down').text('Contact');
        $('#scroll-up').text('after dark');
      }

      if ($('body').hasClass('fp-viewing-sd-contact-us')) {
        $('#scroll-up').text('Contact');
        $('#scroll-down').text('Disclaimer');
      }

      if ($('body').hasClass('fp-viewing-sd-disclaimer')) {
        $('#scroll-up').text('Disclaimer');
        $('#scroll-down').text('Backpage');
      }

      if ($('body').hasClass('fp-viewing-sd-backpage')) {
        $('#scroll-up').text(' ');
      }
    },

    onLeave: function (origin, destination, direction) {
      if (origin.index == 5) {
        $('#replaced-content').css('display', 'none');
        $('#original-content').css('display', 'block');
      }
    },
  });

  // Click to show menu
  // Click to Scroll down
  $(document).on('click', '.menu-arrow-box', function () {
    fullpage_api.moveSectionDown();
  });

  $(document).on('click', '#menu-arrow-down-box', function () {
    fullpage_api.moveSectionUp();
  });

  var container = $('.sunday-navbar');
  $('#nav-open-btn').click(function () {
    $('.sunday-navbar').toggleClass('sunday-navbar-active');
    $('#menubar-overlay').toggleClass('nav-open');
  });

  $('#collapse_box').click(function () {
    $('#collapse_box').toggleClass('reverse');
    $('.sd-everyday-row .sunday-paragraph').toggleClass('collapse');
  });

  $('.menu-box a').click(function () {
    setTimeout(() => {
      $('.sunday-navbar').toggleClass('sunday-navbar-active');
      $('#menubar-overlay').toggleClass('nav-open');
    }, 200);
  });

  $('#phone-btn').click(function () {
    if ($('.sunday-navbar').hasClass('sunday-navbar-active')) {
      $('.sunday-navbar').toggleClass('sunday-navbar-active');
      $('#menubar-overlay').toggleClass('nav-open');
    }
  });
  $(document).mouseup(function (e) {
    // if the target of the click isn't the container nor a descendant of the container
    if ($('.sunday-navbar').hasClass('sunday-navbar-active')) {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.sunday-navbar').toggleClass('sunday-navbar-active');
        $('#menubar-overlay').toggleClass('nav-open');
      }
    }
  });

  $('a#v-pills-home-tab').removeClass('active');
  $('a#v-pills-settings-tab').addClass('active');

  function changeTab() {
    $('.progress-bar-fill').css({
      width: '0',
      transition: 'none',
    });
    var tabs = $('.partner-tabs .nav-link');
    var active = tabs.filter('.active');
    var nextTab = active.next('a');
    var toClick = nextTab.length ? nextTab : tabs.eq(0);
    var pagination = $('.tab-pagination-bullets');

    $('a#v-pills-home-tab').click(function () {
      $('.progress-bar-fill').css({
        width: '0',
        transition: 'none',
      });
      pagination.removeClass('bullets-active');
      pagination.eq(0).addClass('bullets-active');
      progressBar(0);
    });

    $('a#v-pills-profile-tab').click(function () {
      $('.progress-bar-fill').css({
        width: '0',
        transition: 'none',
      });
      pagination.removeClass('bullets-active');
      pagination.eq(1).addClass('bullets-active');
      progressBar(1);
    });

    $('a#v-pills-messages-tab').click(function () {
      $('.progress-bar-fill').css({
        width: '0',
        transition: 'none',
      });
      pagination.removeClass('bullets-active');
      pagination.eq(2).addClass('bullets-active');
      progressBar(2);
    });

    $('a#v-pills-settings-tab').click(function () {
      $('.progress-bar-fill').css({
        width: '0',
        transition: 'none',
      });
      pagination.removeClass('bullets-active');
      pagination.eq(3).addClass('bullets-active');
      progressBar(3);
    });
    toClick.trigger('click');
  }
  changeTab();
  var int = setInterval(changeTab, 20000);

  function progressBar(n) {
    var bar = $('.progress-bar-fill');
    bar.eq(n).css({
      width: '100%',
      transition: 'width 20s linear',
      '-webkit-transition': 'width 20s linear',
    });
  }

  var des = $('.floorplan-swiper #slide1 .layout-box');
  // var newdes = des.attr('data-gallery', 'data-gallery2');

  $('.back-btn').click(function () {
    fullpage_api.setAllowScrolling(true);
    $('#original-content').css('display', 'block');
    $('#replaced-content').css('display', 'none');
    $('.residencies-dropdown').removeClass('dropdown-movetop');
    $('.nav-top-row').css('visibility', 'visible');
    $('.nav-wrapper').css('visibility', 'visible');
    $('.back-btn').addClass('unshown');
  });

  $('#floorplanModalBtn').click(() => {
    $('#floor-plan .residencies-dropdown.dropdown-movetop').css(
      'z-index',
      '20'
    );
  });

  $('#floorplateModalBtn').click(() => {
    $('#floor-plan .residencies-dropdown.dropdown-movetop').css(
      'z-index',
      '20'
    );
  });

  $('#floorPlateModalCloseBtn').click(() => {
    $('#floor-plan .residencies-dropdown.dropdown-movetop').css(
      'z-index',
      '1000'
    );
  });

  $('#floorPlanModalCloseBtn').click(() => {
    $('#floor-plan .residencies-dropdown.dropdown-movetop').css(
      'z-index',
      '1000'
    );
  });

  var floorplan_links = $('.floorplan-links');

  function callclickFloorplanLinksFunction() {
    for (var i = 0; i < floorplan_links.length; i++) {
      clickFloorplanLinks(i);
    }
  }
  callclickFloorplanLinksFunction();

  function clickFloorplanLinks(n) {
    var dropdownBtn = $('#floorplan-dropdown .dropdown-item');
    floorplan_links.eq(n).click(function () {
      propertySwiper.update();
      fullpage_api.setAllowScrolling(false);
      switch (n) {
        case 0:
          dropdownBtn.eq(n).trigger('click');
          break;
        case 1:
          dropdownBtn.eq(n).trigger('click');
          break;
        case 2:
          dropdownBtn.eq(n).trigger('click');
          break;
        case 3:
          dropdownBtn.eq(n).trigger('click');
          break;
        case 4:
          dropdownBtn.eq(n).trigger('click');
          break;
        case 5:
          dropdownBtn.eq(n).trigger('click');
          break;
        case 6:
          dropdownBtn.eq(n).trigger('click');
          break;
        case 7:
          dropdownBtn.eq(n).trigger('click');
          break;
        case 8:
          dropdownBtn.eq(n).trigger('click');
         break;
        case 9:
          dropdownBtn.eq(n).trigger('click');
        break;
        case 10:
          dropdownBtn.eq(n).trigger('click');
        break;
        case 11:
          dropdownBtn.eq(n).trigger('click');
        break;
        case 12:
          dropdownBtn.eq(n).trigger('click');
          break;
      }
    });
  }

  // show different property function
  function clickDropdownItem(n) {
    var dropdownBtn = $('#floorplan-dropdown .dropdown-item');
    var modalImg = $('#floorplanModal .modal-body img');
    var modalPlateImg = $('#floorplateModal .modal-body img');
    var modalTitle = $('#floorplanModal .modal-body .floorplan-modal-title');
    var carouselPopup = $('#property-carousel .swiper-slide .expand-icon');
    var carouselImg = $('#property-carousel .swiper-wrapper');
    var paragraph = $('.property-desc p');
    dropdownBtn.eq(n).click(function () {
      propertySwiper.update();
      $('.residencies-dropdown').addClass('dropdown-movetop');
      $('.back-btn').removeClass('unshown');
      $('.nav-top-row').css('visibility', 'hidden');
      $('.nav-wrapper').css('visibility', 'hidden');
    });
    switch (n) {
      case 0:
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html('<span>GROUND</span> 01');
          $('.property-info').html(`<ul class="info-list">
                        <li>BEDROOM <span>3</span></li>
                        <li>BATHROOM<span> 2</span></li>
                        <li>CAR SPACE<span> 2</span></li>
                    </ul>

                    <ul class="info-area">
                        <li>INTERIOR<span> 128 m2</span></li>
                        <li>EXTERIOR<span> 94 m2</span></li>
                        <li>TOTAL AREA<span> 222 m2</span></li>
                    </ul>`);
          modalImg.attr('src', './assets/img/floorplan/floorplans-g1.jpg');
          modalPlateImg.attr('src', './assets/img/floorplate/floorplate-g-1.jpg');                    
          modalTitle.html('<span>GROUND</span> 01');
          paragraph.html('Complemented by expansive courtyard space, the clever layout expands from the inside out. ');

          propertySwiper.appendSlide(`<div class="swiper-slide ground-floor">
          <a class="expand-icon" href="./assets/img/1.jpg"
          data-toggle="lightbox" data-gallery="property-gallery">
          <img src="./assets/img/icons/lightbox-expand.svg" alt="expand"></a>
          <img class="property-show-img" src="./assets/img/1.jpg"
          alt="Popup slide">
          </div>       `)
          carouselImg.addClass('ground-level');
        });
        break;
      case 1:
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html(
            `<span>GROUND</span> 02`
          );
          $('.property-info').html(`<ul class="info-list">
                <li>BEDROOM<span>2 </span></li>
                <li>BATHROOM<span> 2</span></li>
                <li>CAR SPACE<span>2 </span></li>
            </ul>

            <ul class="info-area">
              <li>INTERIOR<span>108 m2 </span></li>
              <li>EXTERIOR<span>40 m2 </span></li>
              <li>TOTAL AREA<span> 147m2 </span></li>
            </ul>`);
          modalImg.attr('src', './assets/img/floorplan/floorplans-g2.jpg');
          modalPlateImg.attr('src', './assets/img/floorplate/floorplate-g-2.jpg');
          modalTitle.html('<span>GROUND</span> 02');
          paragraph.html('Welcomed by views over the open living space and manicured outdoors, you’ll feel home, instantly. ');

          propertySwiper.appendSlide(`<div class="swiper-slide ground-floor">
          <a class="expand-icon" href="./assets/img/1.jpg"
          data-toggle="lightbox" data-gallery="property-gallery">
          <img src="./assets/img/icons/lightbox-expand.svg" alt="expand"></a>
          <img class="property-show-img" src="./assets/img/1.jpg"
          alt="Popup slide">
          </div>       `)
          carouselImg.addClass('ground-level');
        });
        break;
      case 2:
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html('<span>GROUND</span> 03');
          $('.property-info').html(`<ul class="info-list">
                <li>BEDROOM<span> 3</span></li>
                <li>BATHROOM<span> 2</span></li>
                <li>CAR SPACE<span> 2</span></li>
            </ul>

            <ul class="info-area">
            <li>INTERIOR<span> 131 m2</span></li>
            <li>EXTERIOR<span> 118 m2</span></li>
            <li>TOTAL AREA<span> 249 m2</span></li>
            </ul>`);
          modalImg.attr('src', './assets/img/floorplan/floorplans-g3.jpg');
          modalPlateImg.attr('src', './assets/img/floorplate/floorplate-g-3.jpg');
          modalTitle.html('<span>GROUND</span> 03');          
          paragraph.html('North-facing and with two outdoor areas, this residence invites you to find a new favourite place, every day. ');
          $('.ground-floor').remove();

          propertySwiper.appendSlide(`<div class="swiper-slide ground-floor">
          <a class="expand-icon" href="./assets/img/1.jpg"
          data-toggle="lightbox" data-gallery="property-gallery">
          <img src="./assets/img/icons/lightbox-expand.svg" alt="expand"></a>
          <img class="property-show-img" src="./assets/img/1.jpg"
          alt="Popup slide">
          </div>       `)
          carouselImg.addClass('ground-level');
        });
        break;
      case 3:
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html('<span>GROUND</span> 04');
          $('.property-info').html(`<ul class="info-list">
                  <li>BEDROOM<span> 3</span></li>
                  <li>BATHROOM<span> 2</span></li>
                  <li>CAR SPACE<span> 2</span></li>
              </ul>

              <ul class="info-area">
                <li>INTERIOR<span> 141 m2</span></li>
                <li>EXTERIOR<span> 118 m2</span></li>
                <li>TOTAL AREA<span> 259 m2</span></li>
              </ul>`);
          modalImg.attr('src', './assets/img/floorplan/floorplans-g4.jpg');
          modalPlateImg.attr('src', './assets/img/floorplate/floorplate-g-4.jpg');
          modalTitle.html('<span>GROUND</span> 04');
          paragraph.html(' Where green vistas follow your every move. Surrounded by lush courtyard space, serenity sets the tone.');
          propertySwiper.appendSlide(`<div class="swiper-slide ground-floor">
          <a class="expand-icon" href="./assets/img/1.jpg"
              data-toggle="lightbox" data-gallery="property-gallery">
              <img src="./assets/img/icons/lightbox-expand.svg" alt="expand"></a>
          <img class="property-show-img" src="./assets/img/1.jpg"
              alt="Popup slide">
      </div>       `)
          carouselImg.addClass('ground-level');
        });
        break;

      case 4:
        //101
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html(`<span>LEVEL</span> 01.0${n - 3}`);
          $('.property-info').html(`<ul class="info-list">
                  <li>BEDROOM<span> 3</span></li>
                  <li>BATHROOM<span> 2</span></li>
                  <li>CAR SPACE<span> 2</span></li>
              </ul>

              <ul class="info-area">
              <li>INTERIOR<span> 128 m2</span></li>
              <li>EXTERIOR<span> 13 m2</span></li>
              <li>TOTAL AREA<span> 141 m2</span></li>
              </ul>`);
          modalImg.attr('src', `./assets/img/floorplan/floorplans-1-${n - 3}.jpg`);
          modalPlateImg.attr('src', `./assets/img/floorplate/floorplate-1.${n - 3}.jpg`);
          modalTitle.html(`<span>LEVEL</span> 01.0${n - 3}`);          
          paragraph.html('Designed with purposeful flow of movement in mind; comfort and connection inform life inside.');
        });
        break;
      case 5:
        //01.02
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html(`<span>LEVEL</span> 01.0${n - 3}`);
          $('.property-info').html(`<ul class="info-list">
                  <li>BEDROOM<span> 3</span></li>
                  <li>BATHROOM<span> 2</span></li>
                  <li>CAR SPACE<span> 2</span></li>
              </ul>

              <ul class="info-area">
              <li>INTERIOR<span> 130 m2</span></li>
              <li>EXTERIOR<span> 13 m2</span></li>
              <li>TOTAL AREA<span> 143 m2</span></li>
              </ul>`);
          modalImg.attr('src', `./assets/img/floorplan/floorplans-1-${n - 3}.jpg`);
          modalPlateImg.attr('src', `./assets/img/floorplate/floorplate-1.${n - 3}.jpg`);
          modalTitle.html(`<span>LEVEL</span> 01.0${n - 3}`);

          propertySwiper.update();          
          paragraph.html('For those who take entertaining seriously, this strategically considered layout provides plenty of appeal. ');
        });
        break;

      case 6:
        //01.03
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html(`<span>LEVEL</span> 01.0${n - 3}`);
          $('.property-info').html(`<ul class="info-list">
                  <li>BEDROOM<span> 3</span></li>
                  <li>BATHROOM<span> 2</span></li>
                  <li>CAR SPACE<span> 2</span></li>
              </ul>

              <ul class="info-area">
              <li>INTERIOR<span> 129 m2</span></li>
              <li>EXTERIOR<span> 12 m2</span></li>
              <li>TOTAL AREA<span> 141 m2</span></li>
              </ul>`);
          modalImg.attr('src', `./assets/img/floorplan/floorplans-1-${n - 3}.jpg`);
          modalPlateImg.attr('src', `./assets/img/floorplate/floorplate-1.${n - 3}.jpg`);
          modalTitle.html(`<span>LEVEL</span> 01.0${n - 3}`);
       
          propertySwiper.update();          
          paragraph.html('Anchoring the centre of daily life with poles of quiet; tranquil is what describes this residence best. ');
        });
        break;
      
      case 7: 
        //01.04
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html(`<span>LEVEL</span> 01.0${n - 3}`);
          $('.property-info').html(`<ul class="info-list">
                  <li>BEDROOM<span> 3</span></li>
                  <li>BATHROOM<span> 2</span></li>
                  <li>CAR SPACE<span> 2</span></li>
              </ul>

              <ul class="info-area">
              <li>INTERIOR<span> 129 m2</span></li>
              <li>EXTERIOR<span> 12 m2</span></li>
              <li>TOTAL AREA<span> 141 m2</span></li>
              </ul>`);
          modalImg.attr('src', `./assets/img/floorplan/floorplans-1-${n - 3}.jpg`);
          modalPlateImg.attr('src', `./assets/img/floorplate/floorplate-1.${n - 3}.jpg`);
          modalTitle.html(`<span>LEVEL</span> 01.0${n - 3}`);
          
          paragraph.html('North-east facing living areas are flooded with natural light while the master suite enjoys tucked away calm.  ');
        });
        break;
      case 8:
        //201
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html(`<span>LEVEL</span> 02.0${n - 7}`);
          $('.property-info').html(`<ul class="info-list">
                  <li>BEDROOM<span> 3</span></li>
                  <li>BATHROOM<span> 2</span></li>
                  <li>CAR SPACE<span> 2</span></li>
              </ul>

              <ul class="info-area">
              <li>INTERIOR<span> 184 m2</span></li>
              <li>EXTERIOR<span> 27 m2</span></li>
              <li>TOTAL AREA<span> 211 m2</span></li>
              </ul>`);
          modalImg.attr('src', `./assets/img/floorplan/floorplans-2-${n - 7}.jpg`);
          modalPlateImg.attr('src', `./assets/img/floorplate/floorplate-2.${n - 7}.jpg`);
          modalTitle.html(`<span>LEVEL</span> 02.0${n - 7}`);
          
          propertySwiper.update();          
          paragraph.html('The home unfolds as you step inside, creating balance between life and living naturally and spatially. ');
        });
        break;
      case 9: 
        //02.02
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html(`<span>LEVEL</span> 02.0${n - 7}`);
          $('.property-info').html(`<ul class="info-list">
                  <li>BEDROOM<span> 3</span></li>
                  <li>BATHROOM<span> 2</span></li>
                  <li>CAR SPACE<span> 2</span></li>
              </ul>

              <ul class="info-area">
              <li>INTERIOR<span> 142 m2 </span></li>
              <li>EXTERIOR<span> 40 m2 </span></li>
              <li>TOTAL AREA<span> 182 m2</span></li>
              </ul>`);
          modalImg.attr('src', `./assets/img/floorplan/floorplans-2-${n - 7}.jpg`);
          modalPlateImg.attr('src', `./assets/img/floorplate/floorplate-2.${n - 7}.jpg`);
          modalTitle.html(`<span>LEVEL</span> 02.0${n - 7}`);
          
          propertySwiper.update();          
          paragraph.html('There’s a level of luxury that surrounds a secluded master bedroom — one that’s best experienced.');
        });
       break;
      case 10: 
        //02.03
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html(`<span>LEVEL</span> 02.0${n - 7}`);
          $('.property-info').html(`<ul class="info-list">
                  <li>BEDROOM<span> 3</span></li>
                  <li>BATHROOM<span> 2</span></li>
                  <li>CAR SPACE<span> 2</span></li>
              </ul>

              <ul class="info-area">
              <li>INTERIOR<span> 153 m2</span></li>
              <li>EXTERIOR<span> 12 m2 </span></li>
              <li>TOTAL AREA<span> 165 m2</span></li>
              </ul>`);
          modalImg.attr('src', `./assets/img/floorplan/floorplans-2-${n - 7}.jpg`);
          modalPlateImg.attr('src', `./assets/img/floorplate/floorplate-2.${n - 7}.jpg`);
          modalTitle.html(`<span>LEVEL</span> 02.0${n - 7}`);
          
          propertySwiper.update();          
          paragraph.html('Where the heart of the home meets consideration in every detail; this is life and living at residence 2.03. ');
        });
        break;
      
      case 11: 
        //301
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html(`<span>LEVEL</span> 30${n - 10}`);
          $('.property-info').html(`<ul class="info-list">
                  <li>BEDROOM<span> 2</span></li>
                  <li>BATHROOM<span> 2</span></li>
                  <li>CAR SPACE<span> 2</span></li>
              </ul>

              <ul class="info-area">
              <li>INTERIOR<span> 120 m2</span></li>
              <li>EXTERIOR<span> 104 m2</span></li>
              <li>TOTAL AREA<span> 225 m2</span></li>
              </ul>`);
          modalImg.attr('src', `./assets/img/floorplan/floorplans-3-${n - 10}.jpg`);
          modalPlateImg.attr('src', `./assets/img/floorplate/floorplate-3.${n - 10}.jpg`);
          modalTitle.html(`<span>LEVEL</span> 30${n - 10}`);
          
          propertySwiper.update();          
          paragraph.html('Contoured by lush greenery highlighted by a north-facing aspect, this residence affords you unparalleled privacy and pleasure.');
        });
        break;
      case 12: 
        //301
        dropdownBtn.eq(n).click(function () {
          $('.ground-floor').remove();
          propertySwiper.update();
          $('#original-content').css('display', 'none');
          $('#replaced-content').css('display', 'flex');
          $('#replaced-content .sunday-title p').html(`<span>LEVEL</span> 30${n - 10}`);
          $('.property-info').html(`<ul class="info-list">
                  <li>BEDROOM<span> 2</span></li>
                  <li>BATHROOM<span> 2</span></li>
                  <li>CAR SPACE<span> 2</span></li>
              </ul>

              <ul class="info-area">
              <li>INTERIOR<span> 130 m2</span></li>
              <li>EXTERIOR<span> 84 m2</span></li>
              <li>TOTAL AREA<span> 214 m2</span></li>
              </ul>`);
          modalImg.attr('src', `./assets/img/floorplan/floorplans-3-${n - 10}.jpg`);
          modalPlateImg.attr('src', `./assets/img/floorplate/floorplate-3.${n - 10}.jpg`);
          modalTitle.html(`<span>LEVEL</span> 30${n - 10}`);
          propertySwiper.update();          
          paragraph.html('Expansive views over the city welcome you as you walk through the doors. Sights that inspire, quality of life that mirrors exactly that.');
        });
        break;
    }
  }

  // show different Fixture function
  function clickFixtureDropdownItem(n) {
    var dropdownBtn = $('#fixture-list li');
    var bathroomSwiper = $('#bathroom-swiper');
    var kitchenSwiper = $('#kitchen-swiper');
    var laundrySwiper = $('#laundry-swiper');
    var penthouseSwiper = $('#throughout-swiper');
    var fixture_item_content = $('.fixture-item-content');
    var fixture_location_content = $('.fixture-location-content');
    switch (n) {
      case 0:       
        dropdownBtn.eq(n).click(function () {
          dropdownBtn.removeClass('active');
          dropdownBtn.eq(n).addClass('active');
          bathroomSwiper.css('display', 'none');
          kitchenSwiper.css('display', 'none');
          penthouseSwiper.css('display', 'block');
          laundrySwiper.css('display', 'none');
          fixture_item_content.html('Carpet');
          fixture_location_content.html(`All Apartments`);
          living_Swiper.update();
        });
        break;
      case 1:
        dropdownBtn.eq(n).click(function () {
          dropdownBtn.removeClass('active');
          dropdownBtn.eq(n).addClass('active');
          bathroomSwiper.css('display', 'none');
          kitchenSwiper.css('display', 'block');
          penthouseSwiper.css('display', 'none');
          laundrySwiper.css('display', 'none');
          fixture_item_content.html('Kitchen Joinery');
          fixture_location_content.html(`Kitchen`);
          kitchen_Swiper.update();
        });
        break;
      case 2:        
        dropdownBtn.eq(n).click(function () {
          dropdownBtn.removeClass('active');
          dropdownBtn.eq(n).addClass('active');
          bathroomSwiper.css('display', 'block');
          kitchenSwiper.css('display', 'none');
          penthouseSwiper.css('display', 'none');
          laundrySwiper.css('display', 'none');
          fixture_item_content.html('Basin Mixer');
          fixture_location_content.html('Bathroom <br> Ensuite');
          bathroom_Swiper.update();
        });
        break;
      case 3:
        dropdownBtn.eq(n).click(function () {
          dropdownBtn.removeClass('active');
          dropdownBtn.eq(n).addClass('active');
          bathroomSwiper.css('display', 'none');
          kitchenSwiper.css('display', 'none');
          penthouseSwiper.css('display', 'none');
          laundrySwiper.css('display', 'block');
          fixture_item_content.html('Laundry Mixer');
          fixture_location_content.html(`Laundry`);
          laundry_Swiper.update();
        });
        break;
    }
  }

  function callFixtureDropdownFunction() {
    var list = $('#fixture-list li');
    for (var i = 0; i < list.length; i++) {
      clickFixtureDropdownItem(i);
    }
  }
  callFixtureDropdownFunction();

  function callDropdownFunction() {
    var list = $('#floorplan-dropdown .dropdown-item');
    for (var i = 0; i < list.length; i++) {
      clickDropdownItem(i);
    }
  }
  callDropdownFunction();

  function clickAccordion(id) {
    var accordionBtn = $('#' + id + ' ' + '.btn');
    switch (id) {
      case 'slow-start-accordion':
        accordionBtn.eq(0).click(function () {
          $('#doorstep-1 .dp-container-left').css({
            background: "url('./assets/img/doorstep/Fourth-Chapter.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(1).click(function () {
          $('#doorstep-1 .dp-container-left').css({
            background: "url('./assets/img/doorstep/Mammoth.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(2).click(function () {
          $('#doorstep-1 .dp-container-left').css({
            background: "url('./assets/img/doorstep/morning-market.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(3).click(function () {
          $('#doorstep-1 .dp-container-left').css({
            background: "url('./assets/img/doorstep/moby.jpg')",
            'background-size': 'cover',
          });
        });
        break;
      case 'hours-leisure-accordion':
        accordionBtn.eq(0).click(function () {
          $('#doorstep-2 .dp-container-right').css({
            background: "url('./assets/img/doorstep/Hawksburn.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(1).click(function () {
          $('#doorstep-2 .dp-container-right').css({
            background: "url('./assets/img/doorstep/Toorak-Village.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(2).click(function () {
          $('#doorstep-2 .dp-container-right').css({
            background: "url('./assets/img/doorstep/armadale.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(3).click(function () {
          $('#doorstep-2 .dp-container-right').css({
            background: "url('./assets/img/doorstep/Sarah-&-Sebastian.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(4).click(function () {
          $('#doorstep-2 .dp-container-right').css({
            background: "url('./assets/img/doorstep/Kooyong.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(5).click(function () {
          $('#doorstep-2 .dp-container-right').css({
            background: "url('./assets/img/doorstep/Studio-Pilates.jpg')",
            'background-size': 'cover',
          });
        });
        break;
      case 'dinner-served-accordion':
        accordionBtn.eq(0).click(function () {
          $('#doorstep-3 .dp-container-left').css({
            background: "url('./assets/img/doorstep/amaru.jpg')",
            'background-size': 'auto 100%',
            'background-position': '50% 50%',
            'background-repeat': 'no-repeat',
          });
        });
        accordionBtn.eq(1).click(function () {
          $('#doorstep-3 .dp-container-left').css({
            background: "url('./assets/img/doorstep/Bistro-Thierry.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(2).click(function () {
          $('#doorstep-3 .dp-container-left').css({
            background: "url('./assets/img/doorstep/Sonny-Chiba.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(3).click(function () {
          $('#doorstep-3 .dp-container-left').css({
            background: "url('./assets/img/doorstep/pizza.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(4).click(function () {
          $('#doorstep-3 .dp-container-left').css({
            background: "url('./assets/img/doorstep/Chez-bob.jpg')",
            'background-size': 'cover',
          });
        });
        break;
      case 'after-dark-accordion':
            accordionBtn.eq(0).click(function () {
          $('#doorstep-4 .dp-container-right').css({
            background: "url('./assets/img/doorstep/Toorak-Cellars.jpg')",
            'background-size': 'auto 100%',
            'background-position': '50% 50%',
            'background-repeat': 'no-repeat',
          });
        });
        accordionBtn.eq(1).click(function () {
          $('#doorstep-4 .dp-container-right').css({
            background: "url('./assets/img/doorstep/Bouzy-Bar-a-Vins.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(2).click(function () {
          $('#doorstep-4 .dp-container-right').css({
            background: "url('./assets/img/doorstep/Auterra.jpg')",
            'background-size': 'cover',
          });
        });
        accordionBtn.eq(3).click(function () {
          $('#doorstep-4 .dp-container-right').css({
            background: "url('./assets/img/doorstep/Milton-Wine-Bar.jpg')",
            'background-size': 'cover',
          });
        });
        break;
    }
  }
  clickAccordion('slow-start-accordion');
  clickAccordion('hours-leisure-accordion');
  clickAccordion('dinner-served-accordion');
  clickAccordion('after-dark-accordion');

  function clickTabs() {
    $('a#welcome-pills-home-tab').click(function () {
      $('#counter-number').html('1');
      $('.welcome-home').css(
        'background',
        'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./assets/img/welcome-home.jpg") no-repeat center center /cover'
      );
    });

    $('a#welcome-pills-profile-tab').click(function () {
      $('#counter-number').html('2');
      $('.welcome-home').css(
        'background',
        'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./assets/img/slide-residences-bg.jpg") no-repeat center center /cover'
      );
    });

    $('a#welcome-pills-messages-tab').click(function () {
      $('#counter-number').html('3');
      $('.welcome-home').css(
        'background',
        'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./assets/img/slide-welcome-home-bg.jpg") no-repeat center center /cover'
      );
    });

    $('a#welcome-pills-settings-tab').click(function () {
      $('#counter-number').html('4');
      $('.welcome-home').css(
        'background',
        'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./assets/img/slide-creative-partners-bg.jpg") no-repeat center center /cover'
      );
    });

    $('a#welcome-pills-spaces-tab').click(function () {
      $('#counter-number').html('5');
      $('.welcome-home').css(
        'background',
        'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("./assets/img/bg-Image-house.png") no-repeat center center /cover'
      );
    });
  }

  clickTabs();

  function clickFixtureBox(id) {
    var fixtureBox = $('#' + id + ' ' + '.swiper-slide');
    var fixtureSsbox = $('#' + id + ' ' + '.swiper-slide .ss-box');
    var fixtureActiveSlide = $('#' + id + ' ' + '.swiper-slide-active .ss-box');
    var fixture_item_content = $('.fixture-item-content');
    var fixture_location_content = $('.fixture-location-content');
    switch (id) {
      case 'throughout-swiper':
        fixtureBox.eq(0).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Carpet');
          fixture_location_content.html(`All apartments`);
        });
        fixtureBox.eq(1).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Paint');
          fixture_location_content.html(`All apartments`);
        });
        fixtureBox.eq(2).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Timber Flooring');
          fixture_location_content.html(`All apartments`);
        });
        break;
      
      case 'bathroom-swiper':
        fixtureBox.eq(0).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Floor Tile ');
          fixture_location_content.html(`Bathrooms <br> Ensuites <br> Powder Rooms <br> Laundry`);
        });

        fixtureBox.eq(1).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Fluted Glass');
          fixture_location_content.html(`Bathrooms <br>
          Ensuites`);
        });

        fixtureBox.eq(2).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Mirror');
          fixture_location_content.html(
            `Bathrooms <br> Ensuites <br> Powder Rooms`
          );
        });

        fixtureBox.eq(3).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Metal - Mirror Frames');
          fixture_location_content.html(`Bathrooms <br> Ensuites <br> Powder Rooms`);
        });

        fixtureBox.eq(4).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Metal - Shower Door');
          fixture_location_content.html('Bathrooms <br> Ensuites <br> Powder Rooms');
        });

        fixtureBox.eq(5).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Basin - Stone Slab');
          fixture_location_content.html('Bathrooms <br> Ensuites <br> Powder Rooms');
        });

        fixtureBox.eq(6).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Basin Spout');
          fixture_location_content.html('Bathroom <br> Ensuites');
        });

        fixtureBox.eq(7).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Basin Mixer');
          fixture_location_content.html('Bathroom <br> Ensuites');
        });

        fixtureBox.eq(8).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Floor Waste');
          fixture_location_content.html('Bathroom <br> Ensuites');
        });

        fixtureBox.eq(9).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Handshower');
          fixture_location_content.html('Bathroom <br> Ensuites');
        });

        fixtureBox.eq(10).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Hand Towel Rail');
          fixture_location_content.html('Bathroom <br> Ensuites <br> Powder Rooms');
        });

        fixtureBox.eq(11).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Flush Plate');
          fixture_location_content.html('Bathroom <br> Ensuites <br> Powder Rooms');
        });

        fixtureBox.eq(12).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Robe Hook ');
          fixture_location_content.html('Bathroom <br> Ensuites <br> Powder Rooms');
        });

        fixtureBox.eq(13).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Shower');
          fixture_location_content.html('Bathroom <br> Ensuites');
        });

        fixtureBox.eq(14).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Shower Arm');
          fixture_location_content.html('Bathroom <br> Ensuites');
        });

        fixtureBox.eq(15).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Towel Rail ');
          fixture_location_content.html('Bathroom <br> Ensuites');
        });

        fixtureBox.eq(16).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Towel Rail ');
          fixture_location_content.html('Bathroom <br> Ensuites');
        });
        fixtureBox.eq(17).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Toilet Roll Holder');
          fixture_location_content.html('Bathroom <br> Ensuites <br> Powder Rooms');
        });
        fixtureBox.eq(18).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Toilet Suite');
          fixture_location_content.html('Bathroom <br> Ensuites <br> Powder Rooms');
        });
        fixtureBox.eq(19).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Bath');
          fixture_location_content.html('Ensuites');
        });
        fixtureBox.eq(20).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Bath Spout');
          fixture_location_content.html('Ensuites');
        });
        break;

      case 'kitchen-swiper':
        fixtureBox.eq(0).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Kitchen Joinery');
          fixture_location_content.html(`Kitchen`);
        });

        fixtureBox.eq(1).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Stone Slab');
          fixture_location_content.html(`Kitchen`);
        });

        fixtureBox.eq(2).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Miele 5 Burner Gas Cooktop');
          fixture_location_content.html(`Kitchen`);
        });

        fixtureBox.eq(3).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Miele Fully Integrated Dishwasher');
          fixture_location_content.html(`Kitchen`);
        });

        fixtureBox.eq(4).click(function () {
          fixtureSsbox.children().removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Tap Mixer');
          fixture_location_content.html(`Kitchen <br> Laundry`);
        });

        fixtureBox.eq(5).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Miele 60cm Oven ');
          fixture_location_content.html(`Kitchen`);
        });
        fixtureBox.eq(6).click(function () {
          fixtureSsbox.children().removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Miele 60cm Microwave Oven');
          fixture_location_content.html(`Kitchen`);
        });
        fixtureBox.eq(7).click(function () {
          fixtureSsbox.children().removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Miele 88cm Under Cupboard Rangehood');
          fixture_location_content.html(`Kitchen`);
        });
        fixtureBox.eq(8).click(function () {
          fixtureSsbox.children().removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Fisher & Paykel Freestanding Refrigerator Freezer ');
          fixture_location_content.html(`Kitchen`);
        });
        fixtureBox.eq(9).click(function () {
          fixtureSsbox.children().removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Double Square Sink');
          fixture_location_content.html(`Kitchen`);
        });
        break;
      
      case 'laundry-swiper':
        fixtureBox.eq(0).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Floor Tile');
          fixture_location_content.html(`Powder room <br> Bathroom <br> Ensuite <br> Laundry`);
        });
  
        fixtureBox.eq(1).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Tap Mixer');
          fixture_location_content.html(`Kitchen <br> Laundry`);
        });
        fixtureBox.eq(2).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Laundry Trough');
          fixture_location_content.html(
            `All Apartments`
          );
        });
        fixtureBox.eq(3).click(function () {
          fixtureSsbox.removeClass('active');
          fixtureActiveSlide.addClass('active');
          fixture_item_content.html('Laundry Trough');
          fixture_location_content.html(`Select Apartments`);
        });
  
      break;
       
      
      
      }
    }
    clickFixtureBox('throughout-swiper');
    clickFixtureBox('kitchen-swiper');
    clickFixtureBox('bathroom-swiper');
    clickFixtureBox('laundry-swiper');

  //Form Controls
  $('.form-control')
    .val('')
    .on('focusin', function () {
      $(this).parent('.form-group').addClass('form-group-focus');
    })
    .on('focusout', function () {
      if ($(this).val().length === 0) {
        $(this).parent('.form-group').removeClass('form-group-focus');
      }
    });

  $('#contact-form')
    .validator()
    .on('submit', function (e) {
      if (e.isDefaultPrevented()) {
        // handle the invalid form...
      } else {
        e.preventDefault();
        // Contact Form Working Functions
        // var select_1 = $('#inputGroupSelect01');

        // var residenceChoice = '';
        // select_1.on('change', function (e) {
        //   residenceChoice = $(e.target).val();
        // });
        // select_1.trigger('change');

        const user = $('#form_name').val();
        const number = $('#form_contact_number').val();
        const message = $('#form_message').val();
        const email = $('form_contact_email').val();

        const formMessage =
          'Hi, ' +
          'My Name is ' +
          user +
          ', ' +
          'and here is my mobile number: ' +
          number +
          '. ' +
          'my email address is: ' +
          email +
          ', ' +
          "Extra message is: " +
          message +
          ". " +
          'please give me a call when you are free, thank you!';

        var data = {
          service_id: 'service_qz90776',
          template_id: 'template_ym5qrt8',
          user_id: 'user_ePbhQ0zjSmeO3JyJIjYUV',
          template_params: {
            from_name: user + '- Cledon',
            message_html: formMessage,
          },
        };

        // console.log(JSON.stringify(data).replace(/\\n/g, '\\n'));

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
          type: 'POST',
          data: JSON.stringify(data).replace(/\\n/g, '\\n'),
          contentType: 'application/json',
        })
          .done(function () {
            alert('Your e-mail is sent!');
            $('#contactModal').modal('hide');
            $('#contact-form')[0].reset();
          })
          .fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
          });
      }
    });

  $('#purchase-form')
    .validator()
    .on('submit', function (e) {
      if (e.isDefaultPrevented()) {
        // handle the invalid form...
      } else {
        e.preventDefault();
        // Contact Form Working Functions
        var select_1 = $('#purchaseInputGroupSelect01');

        var residenceChoice = '';

        select_1.on('change', function (e) {
          residenceChoice = $(e.target).val();
        });
        select_1.trigger('change');

        const user = $('#purchase_form_name').val();
        const number = $('#purchase_form_contact_number').val();
        const message = $('#purchase_form_message').val();
        const email = $('#purchase_form_email_address').val();

        const formMessage =
          'Hi, ' +
          'My Name is ' +
          user +
          ', ' +
          'and my mobile number is: ' +
          number +
          '. ' +
          'Email address is: ' +
          email +
          'I am interested in purchasing: ' +
          residenceChoice +
          ', '
          +
          "Extra message is: '" +
          message +
          "', " +
          'please give me a call when you are free, thank you!';

        var data = {
          service_id: 'service_qz90776',
          template_id: 'template_6d3js9m',
          user_id: 'user_ePbhQ0zjSmeO3JyJIjYUV',
          template_params: {
            from_name: user + '- Sunday Hawksburn',
            message_html: formMessage,
          },
        };

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
          type: 'POST',
          data: JSON.stringify(data).replace(/\\n/g, '\\n'),
          contentType: 'application/json',
        })
          .done(function () {
            alert('Your e-mail is sent!');
            $('#purchaseModal').modal('hide');
            $('#purchase-form')[0].reset();
          })
          .fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
          });
      }
    });

  $('#message-form')
    .validator()
    .on('submit', function (e) {
      if (e.isDefaultPrevented()) {
        // handle the invalid form...
      } else {
        e.preventDefault();
        // Contact Form Working Functions
        // var select_1 = $('#messageInputGroupSelect01');
        // var residenceChoice = '';

        // select_1.on('change', function (e) {
        //   residenceChoice = $(e.target).val();
        // });
        // select_1.trigger('change');
        
        const user = $('#message_form_name').val();
        const number = $('#message_form_contact_number').val();
        const message = $('#message_form_message').val();
        const email = $('#message_form_email_address').val();

        const formMessage =
          'Hi, ' +
          'My Name is ' +
          user +
          ', ' +
          'and here is my mobile number: ' +
          number +
          '. ' +
          'my email address is: ' +
          email +
          ', ' +
          "Extra message is: " +
          message +
          ", " +
          'please give me a call when you are free, thank you!';

        var data = {
          service_id: 'service_qz90776',
          template_id: 'template_6d3js9m',
          user_id: 'user_ePbhQ0zjSmeO3JyJIjYUV',
          template_params: {
            from_name: user + '- Sunday Hawksburn',
            message_html: formMessage,
          },
        };

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
          type: 'POST',
          data: JSON.stringify(data).replace(/\\n/g, '\\n'),
          contentType: 'application/json',
        })
          .done(function () {
            alert('Your e-mail is sent!');
            $('#messageModal').modal('hide');
            $('#message-form')[0].reset();
          })
          .fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
          });
      }
    });

  // Video controls
  // $('#logoModal2').on('shown.bs.modal', function (event) {
  //     $('#jesse-video').currentTime = 0;
  // });
  $('#logoModal1').on('hidden.bs.modal', function (event) {
    $('#jesse-video-1')[0].pause();
    $('#jesse-video-1')[0].currentTime = 0;
  });
  $('#logoModal2').on('hidden.bs.modal', function (event) {
    console.log('modal2 closed');
    $('#jesse-video-2')[0].pause();
    $('#jesse-video-2')[0].currentTime = 0;
  });
  $('#logoModal3').on('hidden.bs.modal', function (event) {
    $('#jesse-video-3')[0].pause();
    $('#jesse-video-3')[0].currentTime = 0;
  });
  $('#videoModalFox').on('hidden.bs.modal', function (event) {
    $('#martyVideo')[0].pause();
    $('#martyVideo')[0].currentTime = 0;
  });
  $('#videoModalLana').on('hidden.bs.modal', function (event) {
    $('#lanaVideo')[0].pause();
    $('#lanaVideo')[0].currentTime = 0;
  });

  // First Swiper
  const bathroom_Swiper = new Swiper('#bathroom-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesPerView: 3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // navigation: {
    //     nextEl: '#bathroom-swiper-arrow-next',
    //     prevEl: '#bathroom-swiper-arrow-prev',
    // },
    centeredSlides: true,
    slideToClickedSlide: true,
  });

  const kitchen_Swiper = new Swiper('#kitchen-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesPerView: 3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    centeredSlides: true,
    slideToClickedSlide: true,
    // navigation: {
    //     nextEl: '#kitchen-swiper-arrow-next',
    //     prevEl: '#kitchen-swiper-arrow-prev',
    // }
  });

  const living_Swiper = new Swiper('#throughout-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesPerView: 3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    centeredSlides: true,
    slideToClickedSlide: true,
    // navigation: {
    //     nextEl: '#penthouse-swiper-arrow-next',
    //     prevEl: '#penthouse-swiper-arrow-prev',
    // },
  });

  const laundry_Swiper = new Swiper('#laundry-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    spaceBetween: 10,
    slidesPerGroup: 1,
    slidesPerView: 3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    centeredSlides: true,
    slideToClickedSlide: true,
    // navigation: {
    //     nextEl: '#laundry-swiper-arrow-next',
    //     prevEl: '#laundry-swiper-arrow-prev',
    // }
  });

  var menuSwiper = new Swiper('.menu-carousel-container', {
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    //   },
  });

  var seSwiper = new Swiper('#sd-everyday-carousel', {
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.sd-next',
      prevEl: '.sd-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  var propertySwiper = new Swiper('#property-carousel', {
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: '.sd-property-next',
      prevEl: '.sd-property-prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
});

function initMap() {
  const sunday = {
    lat: -37.849627,
    lng: 145.017087,
  };
  var locationsInfo = [
    "Fourth Chapter - 385 High St, Prahran VIC 3181",
    "Mammoth - 736 Malvern Rd, Armadale VIC 3143",
    "Abacus - 383 Chapel St, South Yarra VIC 3141",
    "Morning Market - 579 High St, Prahran VIC 3181",
    "Moby - 1150 High St, Armadale VIC 3143",
    "The Stables of Como - Williams Rd &, Lechlade Ave, South Yarra VIC 3141",
    "Hello James - 8/145 Canterbury Rd, Toorak VIC 3142",
    "Abacus Bar & Kitchen - 383 Chapel St, South Yarra VIC 3141",
    "Kanteen - 154 Alexandra Ave, South Yarra VIC 3141",
    "Norman - 2/300 Toorak Rd, South Yarra VIC 3141",
    "Lucky Penny - 481 Chapel St, South Yarra VIC 3141",
    "Tivoli Road Bakery - 3 Tivoli Road, South Yarra VIC 3141", //tivoli 
    "Officine Zero - 534 Malvern Road, Prahran VIC 3181", // END OF EARLY MORNINGS

    "Amaru - 1121 High St, Armadale VIC 3143",
    "Bistro Thierry - 511 Malvern Rd, Toorak VIC 3142",
    "Sonny Chiba - 14 Beatty Ave, Armadale VIC 3143",
    "Neighbourhood Pizza - 20 Beatty Ave, Armadale VIC 3143",
    "Chez Bob - 22 Beatty Ave, Armadale VIC 3143",
    "Omnia - 625 Chapel St, South Yarra VIC 3141",
    "Bar Carolina - 44 Toorak Rd, South Yarra VIC 3141",
    "Atlas Dining - 133 Commercial Rd, South Yarra VIC 3141",
    "France-Soir - 11 Toorak Rd, South Yarra VIC 3141",
    "Cucinetta - 4/3 Murphy St, South Yarra VIC 3141",
    "Mt Erica Hotel - 420 High St, Prahran VIC", // mt erica
    
    "48h Pizza e Gnocchi - 373 Malvern Rd, South Yarra VIC 3141",
    "Fratellino Pizzeria - 415 Malvern Rd, South Yarra VIC 3141",
    "Bistro Gitan - 52 Toorak Rd West, South Yarra VIC 3141",
    "Mopho Canteen - 197 Carlisle St, Balaclava VIC 3183",
    "Thirty Eight Chairs - 4 Bond St, South Yarra VIC 3141",
    
    "Toorak Cellars - 18 Beatty Ave, Armadale VIC 3143",
    "Bouzy Bar a Vins - 976 High St, Armadale VIC 3143",
    "Auterra Wine Bar - 1160 High St, Armadale VIC 3143",
    "Milton Wine Shop - 1427 Malvern Rd, Malvern VIC 3144",
    "Neptune Food & Wine - 212 High St, Windsor VIC 3181",
    "Galah boozery - 216 High St, Windsor VIC 3181", // AFTER DARK END
    //HOURS OF LEISURE
    "Como Park - 305-325 Williams Rd, South Yarra VIC 3141",
    "Fawkner Park - 24-88 Commercial Rd, South Yarra VIC 3141",
    "Royal Botanical Gardens - Melbourne VIC 3004",
    "Rockly Gardens - South Yarra VIC 3141",
    "Kooyong Lawn Tennis Club - 489 Glenferrie Rd, Kooyong VIC 3144",
    "Orrong Park - ",
    "Toorak Bowling Club - 9 Mandeville Cres, Toorak VIC 3142",
    "Royal Burnley Golf Club - 102 Madden Grove, Burnley VIC 3121",
    "Studio Pilates - 1113 High Street Armadale VIC 3143",
    "Ora Pilates - 3-5 Carters Ave, Toorak VIC 3142",
    "Prahran Aquatic Centre - 41 Essex St, Prahran VIC 3181",
    "F45 Toorak - 2/22 Cecil Pl, Prahran VIC 3181",
    "Body Fit Training - 832 High St, Armadale VIC 3143",
    "Barry’s Bootcamp - 299 Toorak Rd, Melbourne VIC 3141",
    
    "Toorak Primary School - Canterbury Rd, Toorak VIC 3142",
    "Loreto Mandeville Hall - 10 Mandeville Cres, Toorak VIC 3142",
    "St Catherine’s School - 17 Heyington Pl, Toorak VIC 3142",
    "St Kevin’s College - 31 Moonga Rd, Toorak VIC 3142",
    "Geelong Grammar Toorak - 14 Douglas St, Toorak VIC 3142",
    "Lauriston Girls’ School - 38 Huntingtower Rd, Armadale VIC 3143",
    "Armadale Primary School - Densham Rd, Armadale VIC 3143",
    "Christ Church Grammar School - 677 Punt Rd, South Yarra VIC 3141",
    "Scotch College - 1 Morrison St, Hawthorn VIC 3122",
  ];
  let locationName = [];
  let locationAddress = [];
  for (i = 0; i < locationsInfo.length; i++) {
    locationName.push((locationsInfo[i].split(" - ")[0]));
    locationAddress.push((locationsInfo[i].split(" - ")[1]));
  };


  console.log(locationAddress);
  const map = new google.maps.Map(document.getElementById('map'), {
    center: sunday,
    zoom: 16,
    styles: [
      {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
          {
            saturation: 36,
          },
          {
            color: '#333333',
          },
          {
            lightness: 40,
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#ffffff',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: 'all',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#fefefe',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#fefefe',
          },
          {
            lightness: 17,
          },
          {
            weight: 1.2,
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f5f5f5',
          },
          {
            lightness: 20,
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f5f5f5',
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#dedede',
          },
          {
            lightness: 21,
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffffff',
          },
          {
            lightness: 17,
          },
        ],
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#ffffff',
          },
          {
            lightness: 29,
          },
          {
            weight: 0.2,
          },
        ],
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff',
          },
          {
            lightness: 18,
          },
        ],
      },
      {
        featureType: 'road.local',
        elementType: 'geometry',
        stylers: [
          {
            color: '#ffffff',
          },
          {
            lightness: 16,
          },
        ],
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f2f2f2',
          },
          {
            lightness: 19,
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#e9e9e9',
          },
          {
            lightness: 17,
          },
        ],
      },
    ],
  });

  var sundayMarker = new google.maps.Marker({
    position: sunday,
    title: 'Clendon',
    icon: { url: './assets/img/icons/map-cursor.png', scaledSize: new google.maps.Size(200,200)}
  });

  sundayMarker.setMap(map);
 
  var cafeMarker =
    'https://firebasestorage.googleapis.com/v0/b/neat-vent-254802.appspot.com/o/marker.svg?alt=media&token=cd4f760a-2182-4e93-bf2b-3eace89f0dc1';
  var foodMarker = './assets/img/icons/foodMarker.svg';
  var bookMarker = './assets/img/icons/bookLibrary.svg';
  var shopMarker = './assets/img/icons/shopMarker.svg';
  var movingMarker = './assets/img/icons/movingMarker.svg';

  const locations = [
    {
      position: new google.maps.LatLng(-37.852764,145.001226), //1
      type: cafeMarker,
    },
    {
      position: new google.maps.LatLng( -37.849514,145.013148), // 2
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.845675,144.994142),// 3
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.85363,145.007624), // 4
      type: cafeMarker,
    },
    {
      position: new google.maps.LatLng(-37.856219,145.025458), //5
      type: cafeMarker,
    },
    {
      position: new google.maps.LatLng(-37.838520, 145.005080), //stables
      type: cafeMarker,
    },
    {
      position: new google.maps.LatLng(-37.848340, 145.009480), // james
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.845661, 144.994156), //Abacus
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.831640, 145.005080),
      type: cafeMarker,
    },
    {
      position: new google.maps.LatLng(-37.838480, 144.986660),
      type: cafeMarker,
    },
    {
      position: new google.maps.LatLng(-37.8350858, 144.9964926),
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.83937, 144.99819), // tvolio road
      type: cafeMarker,
    },
    {
      position: new google.maps.LatLng(-37.848389, 145.004105), // OFFICINE ZERO
      type: cafeMarker,
    },

    // DINNERS SERVED
    {
      position: new google.maps.LatLng(-37.85589,145.024664), // 11 AMARU
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.847958,145.003506), //12 BISTRO
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.850637,145.014318), // SONNY CHIBA
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.850486,145.014106), //14 NEIGHBOURHOOD PIZZA
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.850355,145.014041), //15 CHEZ
      type: foodMarker,
    },

    {
      position: new google.maps.LatLng(-37.8570368, 144.9925459),
      type: foodMarker,
    },
  
    {
        position: new google.maps.LatLng(-37.839447021484375, 144.99560546875), // latest bar carolina
        type: foodMarker,
    },
    {
        position: new google.maps.LatLng(-37.8460252, 144.987745),
        type: foodMarker,
    },
    {
        position: new google.maps.LatLng(-37.8381528, 144.98667), //soir
        type: foodMarker,
    },
    {
        position: new google.maps.LatLng(-37.8384, 144.99026), // cucinetta
        type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.853291, 145.002747), // MT ERICA HOTL
      type: foodMarker,
    },
    
    {
      position: new google.maps.LatLng(-37.84753, 144.99907),
      type: foodMarker,
    },
    {
        position: new google.maps.LatLng(-37.84771, 145.00039), //pizzeria
        type: foodMarker,
    },
    {
        position: new google.maps.LatLng(-37.83741, 144.97925), //bistro
        type: foodMarker,
    },
    {
        position: new google.maps.LatLng(-37.86874, 144.9933),
        type: foodMarker,
    },
    {
        position: new google.maps.LatLng(-37.84099, 144.99472), //thirty eight chairs
        type: foodMarker,
    },
    
        
    // AFTER DARK
    {
      position: new google.maps.LatLng(-37.850533,145.014192), //16 TOORAK
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.855623,145.020359), //17 BOUZY
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.856378,145.025956), //18 AUTERRA
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.852994,145.041796), //19 MILTON WINE SHOP
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-37.852325,144.995225), //NEPTUNE FOOD WINE
      type: foodMarker,
    },
    {
      position: new google.maps.LatLng(-378524076, 144.9932039), //GALAH BOOZERY
      type: foodMarker,
    },
     
    // HOURS OF LEISURE
    {
      position: new google.maps.LatLng(-37.83577, 145.00562),
      type: movingMarker,
  },
  {
      position: new google.maps.LatLng(-37.84506, 144.98039),
      type: movingMarker,
  },
  {
      position: new google.maps.LatLng(-37.81739, 144.96752), //royal garden
      type: movingMarker,
  },
  {
      position: new google.maps.LatLng(-37.83912, 144.99271), //rockly garden
      type: movingMarker,
    },
    {
      position: new google.maps.LatLng(-37.838909,145.031984), // 9 KOOYONG
      type: movingMarker,
    },
    {
      position: new google.maps.LatLng(-37.8506209,145.0088932), // 9 ORRONG
      type: movingMarker,
    },
    {
      position: new google.maps.LatLng(-37.8486147,145.0112253), // 9 TOORAK BOWLING
      type: movingMarker,
    },
    {
      position: new google.maps.LatLng(-37.827999,145.013785), // 9 BURNLEY GOLF
      type: movingMarker,
    },
    {
      position: new google.maps.LatLng(-37.855855,145.024691), // 10 STUDIO PILATES
      type: movingMarker,
    },
    {
      position: new google.maps.LatLng(-37.84167,144.9391012), // 10 ORA PILATES
      type: movingMarker,
    },
    {
      position: new google.maps.LatLng(-37.84797, 144.99662), // aquatic
      type: movingMarker,
  },
  {
      position: new google.maps.LatLng(-37.85055, 144.99482),
      type: movingMarker,
  },
  {
      position: new google.maps.LatLng(-37.85482, 145.0156), // BODY FIT
      type: movingMarker,
    },
    {
      position: new google.maps.LatLng(-37.83958, 144.9964), // BARRY'S
      type: movingMarker,
  },
  //End of leisures

    // Schools
    {
      position: new google.maps.LatLng(-37.84301, 145.01042),
      type: bookMarker,
  },
  {
      position: new google.maps.LatLng(-37.84864, 145.01435),
      type: bookMarker,
  },
  {
      position: new google.maps.LatLng(-37.83775, 145.02198),
      type: bookMarker,
  },
  {
      position: new google.maps.LatLng(-37.83889, 145.02774),
      type: bookMarker,
  },
  {
      position: new google.maps.LatLng(-37.83914, 145.00888),
      type: bookMarker,
  },
  {
      position: new google.maps.LatLng(-37.85212, 145.02467),
      type: bookMarker,
  },
  {
      position: new google.maps.LatLng(-37.85218, 145.01794),
      type: bookMarker,
  },
  {
      position: new google.maps.LatLng(-37.8391, 144.98636),
      type: bookMarker,
  },
  {
      position: new google.maps.LatLng(-37.83405, 145.02944),
      type: bookMarker,
  },
  ];

  var markers = [];
  for (i = 0; i < locations.length; i++) {
    const infowindow = new google.maps.InfoWindow({
      content: locationName[i] + '<br> <br>' + locationAddress[i],
    });

    const marker = new google.maps.Marker({
      position: locations[i].position,
      map,
      icon: locations[i].type,
    });
    markers.push(marker);
    marker.addListener('click', () => {
      infowindow.open(map, marker);
    });
    const zoomInBtns = document.querySelectorAll('.zoomIn');
    zoomInBtns[i].addEventListener('click', () => {
      if (marker) {
        map.setZoom(20);
        map.setCenter(marker.getPosition());
        google.maps.event.trigger(marker, 'click');
      }
    });
  }

  var styles = [
    {
      width: 30,
      height: 30,
      className: 'custom-clustericon-1',
    },
    {
      width: 40,
      height: 40,
      className: 'custom-clustericon-2',
    },
    {
      width: 50,
      height: 50,
      className: 'custom-clustericon-3',
    },
  ];

  new MarkerClusterer(map, markers, {
    styles: styles,
    clusterClass: 'custom-clustericon',
  });
}

var imgSrc = [
  './assets/img/1.jpg',
  './assets/img/2.jpg',
  './assets/img/3.jpg',
  './assets/img/4.jpg',
  './assets/img/5.jpg',
  './assets/img/6.jpg'
];
