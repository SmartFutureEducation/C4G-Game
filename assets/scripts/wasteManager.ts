
import { _decorator, Component, Node, Prefab, instantiate, math } from 'cc';
import { wasteHandling } from './wasteHandling';
const { ccclass, property } = _decorator;

 
@ccclass('wasteManager')
export class wasteManager extends Component {

    @property(Prefab)
    wastePrefab: Prefab

    @property(Node)
    wasteItemsRoot: Node = null

    start () {
        // randomly create new waste item
        this.schedule(()=>{
            let newWasteItem: Node = null
            newWasteItem = instantiate(this.wastePrefab)

            newWasteItem.parent = this.wasteItemsRoot
            newWasteItem.getComponent(wasteHandling).scoreBoard = this.node.parent.getChildByName('MyScoreBoard')

            newWasteItem.active = true

            let number1 = 10
            let stringA = "this is my string test"
            
        }, 2);
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
