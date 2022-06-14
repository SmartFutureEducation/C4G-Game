
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = backgroundMove
 * DateTime = Tue May 31 2022 18:44:12 GMT+1200 (New Zealand Standard Time)
 * FileBasename = backgroundMove.ts
 * FileBasenameNoExtension = backgroundMove
 * URL = db://assets/scripts/backgroundMove.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('backgroundMove')
export class backgroundMove extends Component {

    @property(Node)
    bg01: Node = null

    @property(Node)
    bg02: Node = null

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
        console.log(this.bg01)
        this.bg01.setPosition(0,-300,0)
        this.bg02.setPosition(-900,-300,0)
    }

    _moveBackground(deltaTime: number){

        this.bg01.setPosition(this.bg01.position.x + this.speed * deltaTime, -300, 0)
        if (this.bg01.position.x > this._bgMovingRange){
            this.bg01.setPosition(-this._bgMovingRange, -300, 0)
        }

        this.bg02.setPosition(this.bg02.position.x + this.speed * deltaTime, -300, 0)
        if (this.bg02.position.x > this._bgMovingRange){
            this.bg02.setPosition(-this._bgMovingRange, -300, 0)
        }


        // for(let bgNode of this.node.children){
        //     bgNode.setPosition(bgNode.position.x + this.speed * deltaTime, 0, 0)

        //     if (bgNode.position.x > this._bgMovingRange){
        //         bgNode.setPosition(-this._bgMovingRange, -300, 0)
        //     }
        // }

    }
}

