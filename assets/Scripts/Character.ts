import Game from "./Game";
import Game_Music from "./Game_Music";
const {ccclass, property} = cc._decorator;
@ccclass
export default class Character extends cc.Component {
    @property(sp.Skeleton)
    public Spine:sp.Skeleton=null;
    @property(cc.Node)
    PositionFood:cc.Node[]=[];
    @property(cc.Node)
    customerList:cc.Node=null;
    @property(cc.Node)
    char:cc.Node=null;
    @property(cc.Tween)
    moveEnd_:cc.Tween=null;
    @property(cc.Prefab)
    iconCheck:cc.Prefab[]=[];
    @property(cc.Animation)
    customerUi:cc.Animation=null;
    @property
    check:boolean=true;
    public static ins: Character;
    onLoad () {
    Character.ins = this;
    if (this.node.name=="Gia") {
             
    }
    if (this.node.name=="Nu") {
  
    }
    if (this.node.name=="Loli") {
     
    }
     this.moveEnd_=cc.tween()
     .call(() =>{
        this.Spine.setAnimation(0, 'happy', false);
       
     })
     .delay(1.2)

     .call(() =>{
        this.Spine.setAnimation(0, 'happy', false);
        var anim=cc.scaleTo(0.5,0,0);
        this.customerList.runAction(anim)
        Game_Music.ins.playSound(9)
        Game.ins.initHighLight(this.customerList.getPosition(),this.node)
        //
      
     })
     .delay(0.8)
     .call(()=>{
        this.Spine.setAnimation(0, 'move', true);
     })
     .to(1.5,{position:cc.v3(cc.view.getCanvasSize().height +200,90)})
     .call(() =>{
      this.node.destroy();
     })
 }
 moveChar(nameChar:String,PositionStart:cc.Vec3,char:cc.Node){
 if (nameChar=="Nu") {
    cc.tween(char)
    .to(0,{position:PositionStart})
    .to(1,{position:cc.v3(-50.738,90)})
    //.delay(0.5)
    .call(() => { 
      Game_Music.ins.playSound(10)
       this.Spine.setAnimation(0, 'idle', true);
      this.node.getChildByName("customer_Need").active=true;
      this.node.getChildByName("customer_Need").getComponent(cc.Animation).play("customer")
      })
      .delay(1)
      .call(() => { 
       this.Spine.setAnimation(0, 'idle_nor', true);
      }) 
    .start()   
 }
 if (nameChar=="Gia") {
    cc.tween(char)
    
    .to(0,{position:PositionStart})
    .to(1,{position:cc.v3(-50.738,0)})
    //.delay(1)
    .call(() => { 
        Game_Music.ins.playSound(11)
       this.Spine.setAnimation(0, 'idle', true);
      this.node.getChildByName("customer_Need").active=true;
      })
      .delay(1)
      .call(() => { 
       this.Spine.setAnimation(0, 'idle_nor', true);
      }) 
    .start() 
}
if (nameChar=="Loli") {
    cc.tween(this.node)
    .to(0,{position:cc.v3(-cc.view.getCanvasSize().height-100,42.121)})
    .to(1,{position:cc.v3(-50.738,42.121)})
    .call(() => { 
        Game_Music.ins.playSound(12)
       this.Spine.setAnimation(0, 'idle', true);
       this.node.getChildByName("customer_Need").active=true;
       
      })
      .delay(1)
      .call(() => { 
       this.Spine.setAnimation(0, 'idle_nor', true);
      }) 
    .start()    
}
 }
 foodMove(node:cc.Node,food:string){
    // var food_1 = this.PositionFood[0].parent.convertToNodeSpaceAR(new cc.Vec2(this.PositionFood[0].x, this.PositionFood[1].y));
    //  var food_true=this.node.getChildByName("customer_Need").parent.convertToNodeSpaceAR(new cc.Vec2(food_1.x,food_1.y));
    cc.tween(node)
     .to(0.5,{position:cc.v3(this.node.getChildByName("customer_Need").position.x-30,this.node.getChildByName("customer_Need").position.y+50)})
     .to(0.5,{scale:0})
     .start()
     cc.tween(this.customerList.getChildByName(food))
     .delay(0.5)
      .call(() => { 
        this.customerList.getChildByName(food).destroy()
      }) 
     .start() 
 }
   moveEnd(turnNumber:number){

    this.moveEnd_.clone(this.node).start();
    this.scheduleOnce(() => {
        turnNumber+=1
        this.spawnChar(turnNumber);
    }, 2);
   }
  public spawnChar(turnNumber:number){
       Game.ins.initChar(turnNumber);
   }
happy(){
    this.moveEnd_.clone(this.node).start();
   }
   disComfort(){
    this.Spine.setAnimation(0, 'frustrating', false);
 this.Spine.addAnimation(0, 'idle_nor', true);
   }     
    start () {
      
        this.Spine.setAnimation(0, 'move', true);
    
    //   var animState = anim.play('customer');
    //   var wrapMode = animState.wrapMode
    //   console.log(wrapMode);
      
    //   //anim.wrapMode
    }
    open(){
        this.Spine.setAnimation(0, 'idleL', true);
    }
    initCheckIcon(Status:string,food:string){
        if (Status=="Yes") {   
            var checkIcon=cc.instantiate(this.iconCheck[0])    
            checkIcon.setPosition(this.customerList.getChildByName(food).position)
            this.customerList.addChild(checkIcon);
            this.scheduleOnce(this.destroy_Icon,0.7) 
        }
        // if (Status=="Yes") {
        //     var checkIcon=cc.instantiate(this.iconCheck[0])   
        //     checkIcon.setPosition(this.PositionFood[1].position)
        //     this.node.getChildByName("customer_Need").addChild(checkIcon);
        //     this.scheduleOnce(this.destroy_Icon,0.7) 
        // }
        else{ if (Status=="No") {
            var checkIcon=cc.instantiate(this.iconCheck[1])   
            checkIcon.setPosition(this.customerList.position)
            this.node.addChild(checkIcon);
            this.scheduleOnce(this.destroy_Icon,0.7) 
        }
           
        }
      
    }
    destroy_Icon(Status:String){
        try {
            var scale=cc.scaleTo(1,0);
            //this.PositionFood[0].runAction(scale)
            //this.node.getChildByName("customer_Need").runAction(scale)
        } catch (error) {
            
        }
        // try {
        //     this.node.getChildByName("checkTrue").destroy();
        // } catch (error) {
            
        // }
        try {
            this.node.getChildByName("checkFalse").destroy();
           
        } catch (error) {
            
        }  
    }
    update (dt) {
    
}
}
