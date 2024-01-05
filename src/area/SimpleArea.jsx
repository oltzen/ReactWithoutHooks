import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { InputText } from 'primereact/inputtext';

export class SimpleStore {
    text = ""

    constructor (){
        makeAutoObservable(this)
    }

    setText(text) { this.text = text }

    render(){
        return (
            <div style={{backgroundColor: "#DDD"}}>
                <h2>Simple</h2>
                <InputText value={this.text} onChange={(e)=> this.setText(e.target.value)}></InputText>
                <div>Text:{this.text}</div>
            </div>
        )
    }
}

export const SimpleArea = observer(({ store }) => (store.render()))