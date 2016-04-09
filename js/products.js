(function () {
  var app = angular.module('store-products', []);


  /*TAB CONTROLLER*/
  app.directive('productTab', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-tab.html',
      /*TAB CONTROLLER*/
      controller:function(){
        this.tab = 1;
          this.selectTab = function(setTab){
            this.tab = setTab;
          };
          this.isSelected = function(checkTab){
            return this.tab === checkTab;
          };
      },
      controllerAs: 'tab'
    };
  });


  /*IMG GALERY*/
  app.directive("productGallery", function(){
        return {
        restrict:"E",
        templateUrl: "product-gallery.html",
        controller: function() {
            this.current = 0;
            this.setCurrent = function(imageNumber){
            this.current = imageNumber || 0;
            };
         },
         controllerAs: "gallery"
      };
    });

  /*ADD REVIEWS FORM*/

    app.controller('ReviewController', function() {
      this.review = {};
      this.review.createdOn = Date.now();
      this.addReview = function(product) {
        product.reviews.push(this.review);
        this.review = {};
      };
    });

  /*Directive to include description, specification  & reviews*/

  app.directive('productDescription', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });

  app.directive('productSpecifications', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-specifications.html'
    };
  });

  app.directive('productReviews', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-reviews.html'
    };
  });

  app.directive('header', function(){
    return{
      restrict: 'E',
      templateUrl: 'header.html'
    };
  });


})();
