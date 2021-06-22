
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(sp.Skeleton)
    hand:sp.Skeleton=null;

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START,function(event){
            this.scheduleOnce(this.openStore,0.5)
          
          },this);
    }
    onEnable(){

   }
    start () {
        this.node.getChildByName("Icon").scale=5;
        cc.tween( this.node.getChildByName("Icon"))
        .parallel(
             cc.tween().to(0.35, { scale: 1 }),
             cc.tween().to(0.25, { angle:3600 })
        )
        .start();
        cc.tween(this.node.getChildByName("tut_hand"))
        .repeatForever(
          cc.tween()
          .to(1,{position:cc.v3(263.956,-280.578)})
          .call(()=>{
            this.hand.setAnimation(0,'tap',true)
            this.node.getChildByName("L_3").setScale(1)
            this.node.getChildByName("L_2").setScale(0.95)
            
          }
          )
          .delay(0.5)
          .call(()=>{
            this.hand.addAnimation(0,'<None>',true)
          })
          .to(1,{position:cc.v3(-222.023,-280.578)})
          .call(()=>{
            this.hand.setAnimation(0,'tap',true)
            this.node.getChildByName("L_3").setScale(0.95)
            this.node.getChildByName("L_2").setScale(1)
          })
  
            
          .delay(0.5)
          .call(()=>{
            this.hand.addAnimation(0,'<None>',true)
          })
          .to(0,{position:cc.v3(-222.023,-280.578)})
          .call(()=>{
            this.node.getChildByName("L_3").setScale(0.95)
            this.node.getChildByName("L_2").setScale(1)
          })
  
          .call(()=>{
           
          })
        )
        .start()
    }
  openStore(){
    if (cc.sys.os == cc.sys.OS_ANDROID) {
        cc.sys.openURL("https://play.google.com/store/apps/details?id=com.abi.game.cooking.fever.chef&hl=en_US&gl=US")
    }
    else{
        cc.sys.openURL("https://apps.apple.com/my/app/cooking-sizzle-master-chef/id1527708035")
    }
  }
    update (dt) {
        var Canvas=cc.find("Canvas");
        var CanvasSize=cc.view.getCanvasSize();
        if (CanvasSize.width>CanvasSize.height) {
         this.node.scale=0.8
        this.node.setPosition(10,-145.606)
        }
        else{
            this.node.scale=0.6
            this.node.setPosition(7.5,-77.639);
        }
    }
}
