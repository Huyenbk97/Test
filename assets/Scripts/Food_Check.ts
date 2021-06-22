import Game from "./Game"
const {ccclass, property} = cc._decorator;
@ccclass
export default class Food_Check extends cc.Component {
  @property(cc.SpriteFrame)
  Food:cc.Node[]=[];
  public static ins: Food_Check; 
 onLoad () {
    //this.node.tag=1;
    Food_Check.ins=this;
 }
    start () {
        this.node.on(cc.Node.EventType.TOUCH_START,function(event){
           var turn=Game.ins.turnNumber_1
           Game.ins.check_Food(this.node.name,turn,this.node);
           this.scale();
         },this);
    }
    scale(){
    var scale= this.node.getScale(cc.v2());
    cc.tween(this.node)
    .to(0,{scaleX:scale.x,scaleY:scale.y})
    .to(0.2,{scaleX:scale.x-0.2,scaleY:scale.y-0.2})
    .to(0.4,{scaleX:scale.x,scaleY:scale.y})
    .start()
    }
 update (dt) {}
}
