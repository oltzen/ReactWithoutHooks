import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"

import { InputText } from 'primereact/inputtext';

export class SetHeadlineStore {
    text = ""

    app = null;

    constructor (app){
        this.app = app;
        makeAutoObservable(this)
    }

    setText(text) { this.text = text; this.app.setHeadline(text) }

    render(){
        return (
            <div style={{backgroundColor: "#DDD"}}>
                <h2>Set headline</h2>
                <InputText value={this.text} onChange={(e)=> this.setText(e.target.value)}></InputText>
            </div>
        )
    }
}

export const SetHeadlineArea = observer(({ store }) => (store.render()))