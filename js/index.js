function Slider(id,preArrow,nextArrow,pre,next){
    var that=this;
    this.index=0;
    this.$menu=$(id);
    this.preActive=pre[0];
    this.nextActive=next[0];
    this.preUnActive=pre[1];
    this.nextUnActive=next[1];
    this.$items=this.$menu.find("li");
    this.$preArrow=$(preArrow);
    this.$nextArrow=$(nextArrow);
    this.itemWidth=this.$items.width();
    this.totalWidth=this.$menu.width();
    this.visibleCount=Math.ceil(this.$menu.parent().width()/ this.itemWidth);
    this.totalCount=this.$items.length;
    this.$preArrow.on("click",function(e){
        e.preventDefault();
        that.pre();
    });
    this.$nextArrow.on("click",function(e){
        e.preventDefault();
        that.next();
    });
    this._check();
}
Slider.prototype={
    constructor:Slider,
    next:function(){
        var that=this;
        if(this.index+this.visibleCount<this.totalCount){
            this.$menu.stop().animate({
                left:-(this.index +1)* this.itemWidth+"px"
            },"fast",function(){
                that.index++;
                that._check();
            });
        }
    },
    pre:function(){
        var that=this;
        if(this.index>0){
            this.$menu.stop().animate({
                left:-(this.index -1)* this.itemWidth+"px"
            },"fast",function(){
                that.index--;
                that._check();
            });
        }
    },
    _check:function(){
        if(this.index+this.visibleCount>=this.totalCount){
            this.$nextArrow.find("a")[0].className=this.nextUnActive;
        }else {
            this.$nextArrow.find("a")[0].className=this.nextActive;
        }
        if(this.index<=0){
            this.$preArrow.find("a")[0].className=this.preUnActive;
        }else {
            this.$preArrow.find("a")[0].className=this.preActive;
        }
    }
};
$(function(){
    var slider=new Slider("#menus","#pre","#nex",['btnAa','btnAb'],['btnBa','btnBb']);
});
