const {ccclass, property} = cc._decorator;
@ccclass
export default class Game_Music extends cc.Component {
    @property(cc.AudioClip)
    public sound:cc.AudioClip[]=new Array();
    public static ins: Game_Music;
    onLoad () {
       Game_Music.ins=this;
    }
    start () {
        cc.audioEngine.play(this.sound[0],true,0.5); 
    }
    playSound(index:number){
        return cc.audioEngine.play(this.sound[index],false,1);
    }   
    playSound_1(index:number){
        return cc.audioEngine.play(this.sound[index],true,1);
    }  
    update (dt) {
    
   }
}
