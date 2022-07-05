
import { _decorator, Component, Node, SystemEvent, EventTouch, Touch, PhysicsSystem2D, ColliderComponent, BoxCollider2D } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('trashMove')
export class trashMove extends Component {

    @property
    public speed = 1

    @property 
    public color = 1
    node: any;

    start () {

        this.node.on(SystemEvent.EventType.TOUCH_MOVE, this._touchMove, this);


        PhysicsSystem2D.instance.enable = true;


    }

    _touchMove(touch: Touch, event: EventTouch){
        const delta = touch.getDelta();
        let pos = this.node.position;


        this.node.setPosition(pos.x + this.speed * delta.x, pos.y + this.speed * delta.y);
    }

}

