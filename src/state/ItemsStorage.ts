import { observable, computed, action } from "mobx";
import uuid from "uuid/v4";
import {IItem, ItemTypes, Store} from "../common/index";

export class Item implements IItem {
    id;
    @observable name;
    @observable type;
    @observable bonus;
}

class ItemsStorage implements Store {
    @observable items = [];

    @computed get allItems() {
        return this.items;
    }

    @computed get totalBonus() {
        return this.items.reduce((acc, item) => {
            acc+=item.bonus;
            return acc;
        },0)
    }

    @action addItem(item: IItem) {
        this.items.push({id:uuid(),...item});
    }

    getData = () => this.items;
    setData = (data: any) => {
        this.items = data;
    }
}

export default new ItemsStorage();