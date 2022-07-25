import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;


@ccclass('backgroundMove')
export class backgroundMove extends Component {

   @property(Node)
   Conveyerbeltimage1: Node = null

   @property(Node)
   Conveyerbeltimage2: Node = null

   @property(Number)
   speed: number = 10

   // private _bgSpeed = 10
   private _bgMovingRange = 900

   start () {
       this._init()
   }

   update (deltaTime: number) {
       this._moveBackground(deltaTime)
   }

   _init(){
       console.log('Init log..');
       console.log(this)
       console.log(this.Conveyerbeltimage1)
       this.Conveyerbeltimage1.setPosition(0,-300,0)
       this.Conveyerbeltimage2.setPosition(-900,-300,0)
   }

   _moveBackground(deltaTime: number){

       this.Conveyerbeltimage1.setPosition(this.Conveyerbeltimage1.position.x + this.speed * deltaTime, -300, 0)
       if (this.Conveyerbeltimage1.position.x > this._bgMovingRange){
           this.Conveyerbeltimage1.setPosition(-this._bgMovingRange, -300, 0)
       }

       this.Conveyerbeltimage2.setPosition(this.Conveyerbeltimage2.position.x + this.speed * deltaTime, -300, 0)
       if (this.Conveyerbeltimage2.position.x > this._bgMovingRange){
           this.Conveyerbeltimage2.setPosition(-this._bgMovingRange, -300, 0)
       }


       // for(let bgNode of this.node.children){
       //     bgNode.setPosition(bgNode.position.x + this.speed * deltaTime, 0, 0)

       //     if (bgNode.position.x > this._bgMovingRange){
       //         bgNode.setPosition(-this._bgMovingRange, -300, 0)
       //     }
       // }

   }
}
