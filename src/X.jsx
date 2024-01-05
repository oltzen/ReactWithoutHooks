import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

export class XStore {
    data = "text"

    constructor (){
        makeAutoObservable(this)
    }

    render(){
        return (
            <div>{this.data}</div>
        )
    }
}

export const X = observer(({ store }) => (store.render()))