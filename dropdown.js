
jQuery.myPlugins={
   drop:function(obj,obj2){
    var that=this;
  $(obj).click(function () {
      that.dropDown(obj2);
  });
},
dropDown:function (obj2) {
    var ul = $(obj2);
    if (ul.css("display") == "none") {
      ul.slideDown("fast");
    } else {
      ul.slideUp("fast");
    }
  }

}
$.myPlugins.drop(".input-select","#dropdown ul");
