angular
  .module("ngUiAnimate.fly.flyIn", [])
  .directive("flyIn", ['$timeout', 'util', function($timeout, util){
    return {
          restrict: 'EA',
          scope:{
            options:"@",
            duration:"@duration",
            direction:"@direction"
          },
          link:function(scope, element, attr){
            var duration = scope.duration||3000;
            util.css(element, 'animationDuration', duration/1000+'s');
            element.addClass('nua-fly-in');
            (function(){
              $timeout(function () {
                element.removeClass('nua-fly-in');
              }, 10);
            });
          }
      };
  }]);
