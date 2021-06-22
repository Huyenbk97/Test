
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
 @property(cc.Camera) 
 camera:cc.Node=null; 
onLoad () {
    var Canvas=cc.find("Canvas");
    var CanvasSize=cc.view.getCanvasSize();
    if (CanvasSize.width>CanvasSize.height) {
        // cc.view.setDesignResolutionSize( cc.view.getCanvasSize().width,cc.view.getCanvasSize().height,cc.ResolutionPolicy.SHOW_ALL)
        // this.camera.getComponent(cc.Camera).zoomRatio=1.2
        cc.Canvas.instance.fitWidth=false;
        cc.Canvas.instance.fitHeight=true;
      
     


    }else{
        //cc.view.setDesignResolutionSize( cc.view.getCanvasSize().width,cc.view.getCanvasSize().height,cc.ResolutionPolicy.SHOW_ALL)

        cc.Canvas.instance.fitWidth=false;
        cc.Canvas.instance.fitHeight=true;
      
     

    }
}

    start () {

    }
   ngang(){
    //cc.view.setDesignResolutionSize( cc.view.getCanvasSize().width,cc.view.getCanvasSize().height,cc.ResolutionPolicy.SHOW_ALL)
    //this.camera.getComponent(cc.Camera).zoomRatio=1
    
   }
   doc(){
    //cc.view.setDesignResolutionSize( cc.view.getCanvasSize().width,cc.view.getCanvasSize().height,cc.ResolutionPolicy.SHOW_ALL)
  
 
}
   update (dt) {

    var Canvas=cc.find("Canvas");
    var CanvasSize=cc.view.getCanvasSize();
    if (CanvasSize.width>CanvasSize.height) {
    
        //cc.view.setDesignResolutionSize( cc.view.getCanvasSize().width,cc.view.getCanvasSize().height,cc.ResolutionPolicy.SHOW_ALL)
       cc.Canvas.instance.fitWidth=false;
       cc.Canvas.instance.fitHeight=true;
      //this.ngang();
      
     
    }else{
  
        //cc.view.setDesignResolutionSize( cc.view.getCanvasSize().width,cc.view.getCanvasSize().height,cc.ResolutionPolicy.SHOW_ALL)
        cc.Canvas.instance.fitWidth=false;
        cc.Canvas.instance.fitHeight=true;
       
    // this.doc();
     
    
    }
   }
}
