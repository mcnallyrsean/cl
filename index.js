
var AuthentifyManager = (function(){

  function toggleSearch() {
    $('.menu ul li:last-child').on('click', function(){
      $('#search-bar').toggleClass('show-me');
    });
  }

  function toggleSubmenu() {
    $('.menu ul li:not(:nth-last-child(-n + 2))').on('click', function(){
      $('#submenu').toggleClass('show-me');
    });
  }

  function toggleHero(){
    $('.change-hero').on('click', function(){
      $('#hero1content').toggleClass('hide-me');
      $('#hero2content').toggleClass('show-me');
    });
  }
  function toggleMobileNav() {
    $('#nav-icon3').click(function(){
      $(this).toggleClass('open');
      if ($('.mobile-menu').css('display') == 'none') {
        $('.mobile-menu').show();
      } else {
        $('.mobile-menu').hide();
      }
    });
  }
  function toggleMobileSubmenu() {
    $('.mobile-menu ul li:not(:nth-last-child(-n + 1))').on('click', function(){
      $('#submenu').toggleClass('show-me');
    });
  }

  function escapeMobileSubmenu() {
    $('#submenu:not(ul)').on('click', function(){
      $('#submenu').hide();
    })
  }

  var publicAPI = {
    toggleSearch: toggleSearch,
    toggleSubmenu: toggleSubmenu,
    toggleHero: toggleHero,
    toggleMobileNav: toggleMobileNav,
    toggleMobileSubmenu: toggleMobileSubmenu,
    escapeMobileSubmenu: escapeMobileSubmenu
  }

  return publicAPI;
})();

$(document).ready(function(){
  AuthentifyManager.toggleSearch(),
  AuthentifyManager.toggleSubmenu(),
  AuthentifyManager.toggleHero(),
  AuthentifyManager.toggleMobileNav(),
  AuthentifyManager.toggleMobileSubmenu()
  AuthentifyManager.escapeMobileSubmenu()
})
