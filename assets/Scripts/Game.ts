import Character from "./Character"
import Game_Music from "./Game_Music"
import Food_Check from "./Food_Check"
const {ccclass, property} = cc._decorator;
@ccclass
export default class Game extends cc.Component {
   @property(cc.Node)
   public WinFx:cc.Node=null;
   @property(cc.Prefab)
   highlight:cc.Node=null;
   @property(cc.Node)
   Splash:cc.Node=null;
    @property(cc.Node)
    nodeEndCard:cc.Node[]=[]
  @property(cc.Node)
  foodArrayTu:cc.Node[]=[]
   @property(cc.Node)
   PosStart:cc.Node=null;
   @property(cc.Prefab)
   character:cc.Prefab[]=[];
   @property
   public turn_True:number=0;
   @property(cc.Prefab)
   hand:cc.Prefab[]=[];
   @property(cc.Prefab)
   Food:cc.Prefab[]=[];
   @property(cc.Prefab)
   icon:cc.Prefab[]=[];
   @property(cc.Node)
   Uicharacter:cc.Node=null;
   @property
   public turnNumber_1:number=1;
   @property
   public hotdog:number=0;
   public khoai_tay:number=0;
   public khoai_tay_1:number=0;
   public hamber:number=0;
   @property(cc.Prefab)
   Win:cc.Node=null;
   @property
   turn_1:boolean=false
   turn_2:boolean=false
   turn_3:boolean=false
   @property(cc.Node) 
   positionFood:cc.Node[]=[];
   @property(cc.Node)
   Food_Position:cc.Node=null;
   public static ins: Game;
 onLoad () {
    Game.ins=this;
    //cc.dynamicAtlasManager.enabled = false;
   this.initFood();
   //this.Game_End_Card()
 }
 initHand(){

 }
initFood(){
  var action = cc.fadeTo(2, 230);
  this.Splash.runAction(action);
  this.Splash.zIndex=1
      for (let index = 0; index < 9; index++) {
      if (index==1||index==2||index==0) {
         var food=cc.instantiate(this.Food[0])
        food.setPosition(this.positionFood[index].position)
        if (index==0) {
          food.setScale(0.8)
          this.Food_Position.addChild(food); 
        }
        if (index==1) {
          food.setScale(0.9)
          this.Food_Position.addChild(food); 
        }
        if (index==2) {
          food.setScale(1)
         
          this.Food_Position.addChild(food); 

        }
      }
      if (index==3||index==4||index==5) {
         var food=cc.instantiate(this.Food[1])
        food.setPosition(this.positionFood[index].position)
        if (index==3) {
          food.setScale(0.8)
          this.Food_Position.addChild(food); 
        }
        if (index==4) {
          food.setScale(0.9)
          this.Food_Position.addChild(food); 
        }
        if (index==5) {
          food.setScale(1)
          food.zIndex=2
          this.Food_Position.addChild(food); 
          var hand=cc.instantiate(this.hand[0])
          hand.zIndex=3
          hand.setPosition(this.positionFood[index].position)
          this.Food_Position.addChild(hand); 
        }
      }
      if (index==6||index==7||index==8) {
         var food=cc.instantiate(this.Food[2])
        food.setPosition(this.positionFood[index].position)
        if (index==6) {
          food.setScale(0.8)
          this.Food_Position.addChild(food); 
        }
        if (index==7) {
          food.setScale(0.9)
          this.Food_Position.addChild(food); 
        }
        if (index==8) {
          food.setScale(1)
          this.Food_Position.addChild(food); 
        }
      }
   }   
}
    start () {
     this.initChar(1);
     this.turnNumber_1=1;
     this.turn_True=0;  
    }
    initChar(turnNumber:number){
       if (turnNumber==1) {
         var character=cc.instantiate(this.character[0])
         character.setPosition(this.PosStart.position.x,this.PosStart.position.y+200)
         this.Uicharacter.addChild(character);
         Character.ins.moveChar("Nu",this.PosStart.position,character);
       }
       if (turnNumber==2) {
         var character=cc.instantiate(this.character[1])
         character.setPosition(this.PosStart.position)
         this.Uicharacter.addChild(character);
         Character.ins.moveChar("Gia",this.PosStart.position,character);
       }
       if (turnNumber==3) {
         var character=cc.instantiate(this.character[2])
         character.setPosition(this.PosStart.position)
         this.Uicharacter.addChild(character);
         Character.ins.moveChar("Loli",this.PosStart.position,character);
        
       }
    }
    initHighLight(FxPosition:cc.Vec2,node:cc.Node){
      var highlight=cc.instantiate(this.highlight)
      highlight.setPosition(FxPosition.x,FxPosition.y+50)
     node.addChild(highlight)
    }
    check_Food(nameNode:String,turnNumber:number,nodeFood:cc.Node){
      if (turnNumber==1) {
         if (nameNode=="hamber"&& this.turn_True==0) {
            //Food_Check.ins.scaleTo_0();
            this.turn_True+=1;
            if (this.turn_True==1) {
              Character.ins.initCheckIcon("Yes","hamber");
              Character.ins.foodMove(nodeFood,"hamber");
              Game_Music.ins.playSound(2);
              Game_Music.ins.playSound(13);
            }
            //food.getComponent("Ch").check_Food(this.node.name);
            try {
              this.Splash.active=false;
              this.Food_Position.getChildByName("tut_hand").destroy();
            
            } catch (error) {   
            }  
            this.initHandTuturial("hotdog")
            if (this.Food_Position.getChildByName("tut_hand")==null) {
            
             } 
            
          }
          else
          if (nameNode=="hotdog"&& this.turn_True==1) {
            Character.ins.initCheckIcon("Yes","hotdog");
            Character.ins.moveEnd(turnNumber);
            this.turnNumber_1+=1
            this.turn_True=0
            Character.ins.foodMove(nodeFood,"hotdog")
            Game_Music.ins.playSound(2);
            Game_Music.ins.playSound(4);
            this.Food_Position.children.forEach(foodName => {
              if (foodName.name=="tut_hand") {
                foodName.destroy()
              }
            });
          } 
          else{
            if (this.Food_Position.getChildByName("tut_hand")==null) {
              this.initHandTuturial("hotdog")
             }  
            Character.ins.initCheckIcon("No","");
            Game_Music.ins.playSound(1);
            Character.ins.disComfort();
            Game_Music.ins.playSound(1)
           }
      }
      if (turnNumber==2) {
        switch (nameNode) {
          case "hotdog" :
            try {   
               this.Food_Position.children.forEach(foodName => {
              if (foodName.name=="tut_hand") {
                foodName.destroy()
              }
            });
            } catch (error) {
              
            }
            if (this.hotdog==0) {
              this.hotdog+=1
              Character.ins.initCheckIcon("Yes","hotdog");
              Character.ins.foodMove(nodeFood,"hotdog");
              Game_Music.ins.playSound(2);
              Game_Music.ins.playSound(6);
            }
            else{
              Character.ins.initCheckIcon("No","");
              Character.ins.disComfort();
              Game_Music.ins.playSound(1)
            }
            break;
        case "khoai_tay":
          try {
            this.Food_Position.children.forEach(foodName => {
              if (foodName.name=="tut_hand") {
                foodName.destroy()
              }
            });
          } catch (error) {
            
          }
          if (this.khoai_tay==0) {
            this.khoai_tay+=1;
            Character.ins.initCheckIcon("Yes","khoai_tay");
            Character.ins.foodMove(nodeFood,"khoai_tay");
            Game_Music.ins.playSound(2);
          }
          else{
            Character.ins.initCheckIcon("No","");
            Character.ins.disComfort();
            Game_Music.ins.playSound(1)
          }
          break;
          default:
          Character.ins.initCheckIcon("No","");
          Character.ins.disComfort();
          Game_Music.ins.playSound(1)
          // if (this.Food_Position.getChildByName("tut_hand")==null) {
          //   this.initHandTuturial("hotdog")
          //  }  
        }
        if (this.khoai_tay>=1&&this.hotdog>=1) {
          //Game_Music.ins.playSound(6)
          Game_Music.ins.playSound(14)
          Character.ins.moveEnd(turnNumber);
         this.hotdog=0;
          this.khoai_tay=0;
          this.turnNumber_1+=1
        }
        // if (nameNode=="hotdog"&&this.hotdog==0) {
        //     this.hotdog+=1;
        //     Character.ins.initCheckIcon("Yes","hotdog");
        //     Character.ins.foodMove(nodeFood,"hotdog");
        //     Game_Music.ins.playSound(2);
        //   // if (this.turn_True==2) {
        //   //   Character.ins.initCheckIcon("Yes",2);
        //   //   Character.ins.moveEnd(turnNumber);
        //   //   this.turnNumber_1+=1
        //   //   this.turn_True=0
        //   //   Character.ins.foodMove(nodeFood)
        //   //   Game_Music.ins.playSound(2);
        //   //   ;
        //   //   this.Food_Position.children.forEach(foodName => {
        //   //     if (foodName.name=="tut_hand") {
        //   //       foodName.destroy()
        //   //     }
        //   //   });
            
        //   // }  
          
        // } 
        // else
        // if (nameNode=="khoai_tay"&&this.khoai_tay==0) {
        //   Game_Music.ins.playSound(6)
        //     this.khoai_tay+=1;
        //     Character.ins.initCheckIcon("Yes","khoai_tay");
        //    Character.ins.foodMove(nodeFood,"khoai_tay");
        //    
        //      Game_Music.ins.playSound(2);      
        // }
      }
      if (turnNumber==3) {
        console.log("chay vaof 3");
        
        switch (nameNode) {
          case "khoai_tay" :
            if (this.khoai_tay_1==0) {
              this.khoai_tay_1+=1
              Character.ins.initCheckIcon("Yes","khoai_tay");
              Character.ins.foodMove(nodeFood,"khoai_tay");
              Game_Music.ins.playSound(2);
            }
            else{
              Character.ins.initCheckIcon("No","");
              Character.ins.disComfort();
              Game_Music.ins.playSound(1)
            }
            break;
        case "hamber":
          if (this.hamber==0) {
            this.hamber+=1;
            Character.ins.initCheckIcon("Yes","hamber");
            Character.ins.foodMove(nodeFood,"hamber");
            Game_Music.ins.playSound(2);
          }
          else{
            Character.ins.initCheckIcon("No","");
            Character.ins.disComfort();
            Game_Music.ins.playSound(1)
          }
          break;
          default:
          Character.ins.initCheckIcon("No","");
          Character.ins.disComfort();
          Game_Music.ins.playSound(1)
          // if (this.Food_Position.getChildByName("tut_hand")==null) {
          //   this.initHandTuturial("khoai_tay"||"hamber")
          //  } 
        }
        if (this.khoai_tay_1>=1&&this.hamber>=1) {
          Game_Music.ins.playSound(7)
          Character.ins.moveEnd(turnNumber);
          this.scheduleOnce(this.Game_End_Card,3);
          
        }
      }
    }
    initHandTuturial(nameFood:String){
     
          this.foodArrayTu.length=0;
          this.Food_Position.children.forEach(foodName => {
            if (foodName.name==nameFood) {
              this.foodArrayTu.push(foodName)
            }
          });
          var hand=cc.instantiate(this.hand[0])
          hand.setPosition(this.foodArrayTu[1].position)
          this.Food_Position.addChild(hand);
  
      
     

    }
    Game_End_Card(){
      var WinFx=cc.instantiate(this.Win)
      WinFx.setPosition(-19.926,-175.606)
      this.node.addChild(WinFx);
      cc.audioEngine.pauseAll();
      Game_Music.ins.playSound(8);
      this.Splash.active=true
      
    
      }
    
 update (dt) {

 }
}
