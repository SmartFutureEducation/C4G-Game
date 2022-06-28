
import { _decorator, Component, Animation, Node, Collider, ITriggerEvent, PhysicsSystem2D, BoxCollider2D, Contact2DType, Collider2D, IPhysics2DContact, Label } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Name = wasteHandling
 * DateTime = Tue Apr 19 2022 15:33:29 GMT+1200 (New Zealand Standard Time)
 * FileBasename = wasteHandling.ts
 * FileBasenameNoExtension = wasteHandling
 * URL = db://assets/scripts/wasteHandling.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('wasteHandling')
export class wasteHandling extends Component {

    @property(Node)
    scoreBoard: Node = null

    // reference full scripts from help doc https://docs.cocos.com/creator/manual/en/physics-2d/physics-2d-contact-callback.html
    start () {
        // Registering callback functions for a single collider
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }

        // Registering global contact callback functions
        // if (PhysicsSystem2D.instance) {
        //     PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
        //     PhysicsSystem2D.instance.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        // }
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        console.log('onBeginContact');

        this.scoreBoard.getComponent(Label).string = (Number(this.scoreBoard.getComponent(Label).string) + 10).toString()


        // const animationComponent = this.node.getComponent(Animation);
        // animationComponent.play()
        
        setTimeout(() => {
            this.node.destroy();
        }, 1);  // seems the timeout is required, else errors will be reported while running
        
    }
    onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when the contact between two colliders just about to end.
        console.log('onEndContact');
    }
    onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called every time collider contact should be resolved
        console.log('onPreSolve');
    }
    onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called every time collider contact should be resolved
        console.log('onPostSolve');
    }


    update (deltaTime: number) {
        this.node.setPosition(this.node.position.x, this.node.position.y - 50 * deltaTime) 
    }
}
