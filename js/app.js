(function () {
  var app = angular.module('store', []);

    app.controller('StoreControl', function () {
      this.products = gems;

  });

  var gems =[
  {
    name: 'Gemstone',
    description: '        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 2.50,
    canPurchase: false,
    soldOut: false,
    images:[
      "img/Jasper-green.png",
      "img/Jasper-red.png",
      "img/Jasper-with-Hematite.png",
    ],
  },
  {
    name: 'Gemstone',
    description: '        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
    price: 3.93,
    canPurchase: false,
    soldOut: false,
    images:[
      "img/Jasper-green.png",
      "img/Jasper-red.png",
      "img/Jasper-with-Hematite.png",
    ],
  },
  {
    name: 'Gemstone',
    description: '        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 1.5,
    canPurchase: false,
    soldOut: false,
    images:[
      "img/Jasper-green.png",
      "img/Jasper-red.png",
      "img/Jasper-with-Hematite.png",
    ],
  },

];

  app.controller('TabController', function() {
    this.tab = 1;

      this.selectTab = function(setTab){
        this.tab = setTab;
      };

      this.isSelected = function(checkTab){
        return this.tab === checkTab;
    };

    app.controller('GalleryController', function(){
      this.current = 0;

      this.setCurrent = function(newGallery){
        this.current = newGallery || 0;
      };

    });


  });


})();
