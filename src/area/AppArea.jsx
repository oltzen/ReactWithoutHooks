import { makeAutoObservable } from "mobx"
import { observer } from "mobx-react"
import { Button, ButtonStore } from "../component/Button";
import { SimpleStore, SimpleArea } from "./SimpleArea"
import { SetHeadlineArea, SetHeadlineStore } from "./SetHeadlineArea";
import { SetOtherArea, SetOtherStore } from "./SetOtherArea";

export class AppStore {
    headline = "TOL Example"

    tabSimpleB = new ButtonStore("Simple");
    simpleStore = new SimpleStore();

    tabHeadlineB = new ButtonStore("Headline");
    setHeadlineStore = new SetHeadlineStore(this);

    tabOtherB = new ButtonStore("Other");
    setOtherStore = new SetOtherStore(this);


    content = <div>Start the App</div>

    constructor (){
        this.tabSimpleB.action = this.selectSimple;
        this.tabHeadlineB.action = () => {
            this.content =<SetHeadlineArea store={this.setHeadlineStore}></SetHeadlineArea>
        }
        this.tabOtherB.action = () => {
            this.content =<SetOtherArea store={this.setOtherStore}></SetOtherArea>
        }

        makeAutoObservable(this)
    }

    selectSimple = () => {
        this.content =<SimpleArea store={this.simpleStore}></SimpleArea>
    }


    setHeadline(headline){
        this.headline = headline
    }

    setSimpleText(text){
       this.simpleStore.text = text;
    }

    render(){
        return (
            <div><h1>{this.headline}</h1>
            <Button store={this.tabSimpleB}></Button>
            <Button store={this.tabHeadlineB}></Button>
            <Button store={this.tabOtherB}></Button>
            {this.content}
            </div>
        )
    }
}

export const AppArea = observer(({ store }) => (store.render()))