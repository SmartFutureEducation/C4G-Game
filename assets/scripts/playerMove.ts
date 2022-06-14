
import { _decorator, Component, Node, SystemEvent, EventTouch, Touch, PhysicsSystem2D, ColliderComponent, BoxCollider2D } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Name = playerMove
 * DateTime = Tue Apr 12 2022 22:32:32 GMT+1200 (New Zealand Standard Time)
 * FileBasename = playerMove.ts
 * FileBasenameNoExtension = playerMove
 * URL = db://assets/scripts/playerMove.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('playerMove')
export class playerMove extends Component {

    @property 
    public speed = 1

    @property 
    public color = 1

    start () {
        // this.node.on(SystemEvent.EventType.TOUCH_START, this._touchStart, this);
        this.node.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this);
        // this.node.on(SystemEvent.EventType.TOUCH_END, this._touchEnd, this);

        PhysicsSystem2D.instance.enable = true;

        // const collider = this.getComponent(BoxCollider2D)
        // console.log("Player Item collider name is " + collider.name)
        // console.log("Player collider group is " + collider.group)

    }

    _touchMove(touch: Touch, event: EventTouch){
        const delta = touch.getDelta();
        let pos = this.node.position;

        // this.node.setPosition(pos.x + 0.01 * this.planeSpeed * delta.x, pos.y, pos.z - 0.01 * this.planeSpeed * delta.y);
        this.node.setPosition(pos.x + this.speed * delta.x, pos.y + this.speed * delta.y);
    }

}

