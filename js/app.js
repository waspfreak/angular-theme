(function () {
  var app = angular.module('store', ['store-products']);  /*['store-products'] is a dependency is (product.js)*/

    app.controller('StoreController', function () {
      this.products = gems;
    });



    // app.controller('StoreController', ['$http', function($http){
    //   var store = this;
    //   store.products = [];
    //
    //   $http.get('http://www.julls.uk/store-products.json').success(function(data){
    //     store.products = data;
    //   });
    // }]);


var gems =
[
  {
    name: 'Tourmaline',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 2.50,
    canPurchase: false,
    soldOut: false,
    images:[
      "img/Brandberg-Amethyst-2.jpg",
      "img/fluorite6.jpg",
      "img/fluorite4.jpg",
    ],
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    reviews: [
      {
      stars: 3,
      body: "I think this gem was just OK, could honestly use more shine, IMO.",
      author: "JimmyDean@example.org",
      createdOn: 1397490980837
      },
      {
      stars: 2,
      body: "Any gem with 12 faces is for me!",
      author: "gemsRock@example.org",
      createdOn: 1397490980837
      }
    ]
  },
  {
    name: 'Citrine',
    description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
    price: 3.93,
    canPurchase: false,
    soldOut: false,
    images:[
      "img/Jasper-green.png",
      "img/Jasper-red.png",
      "img/Jasper-with-Hematite.png",
    ],
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    reviews: [
      {
      stars: 1,
      body: "I think this gem was just OK, could honestly use more shine, IMO.",
      author: "JimmyDean@example.org",
      createdOn: 1397490980837
      },
      {
      stars: 4,
      body: "Any gem with 12 faces is for me!",
      author: "gemsRock@example.org",
      createdOn: 1397490980837
      }
    ]
  },

  {
    name: 'Amethyst',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 1.5,
    canPurchase: false,
    soldOut: false,
    images:[
      "img/Jasper-green.png",
      "img/Jasper-red.png",
      "img/Jasper-with-Hematite.png",
    ],
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    reviews: [
      {
      stars: 4,
      body: "I think this gem was just OK, could honestly use more shine, IMO.",
      author: "JimmyDean@example.org",
      createdOn: 1397490980837
      },
      {
      stars: 4,
      body: "Any gem with 12 faces is for me!",
      author: "gemsRock@example.org",
      createdOn: 1397490980837
      }
    ]
  },

];







})();
