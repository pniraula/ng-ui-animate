angular.module("ngUiAnimate.util",[])
  .factory('util',function(){
    var self = this;
    self.css = (element, attr, value)=>{
      var element = element[0];
      if(value){
        element.style[attr] = value;
      }
      return element.style[attr];
    }
    return self;
  })
