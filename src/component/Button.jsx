import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"
import { Button as PrimeButton } from "primereact/button";

export class ButtonStore {
    label = ""

    action = () => {}

    constructor (label){
        this.label = label
        makeAutoObservable(this)
    }

    render(){
        return (
            <PrimeButton label={this.label} onClick={() => this.action()}></PrimeButton>
        )
    }
}

export const Button = observer(({ store }) => (store.render()))