$.fn.extend({totop:function (option) {
    var option=option||{};
    var duration=option.duration||500;
    var target=option.target||0;
    var success=option.success;

    this.click(function () {
        $("html,body").animate({scrollTop:target},duration,function () {
            if(success){
                success.call(this);
            }
        }.bind(this));
    })
}})