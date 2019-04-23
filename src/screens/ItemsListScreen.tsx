import * as React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { IItem } from "../common";
import ItemView from "../components/ItemView";
import {observer} from "mobx-react";
import { Item } from "../state/ItemsStorage";

interface ItemsListProps {
    store: {
        allItems: IItem[];
        totalBonus: number;
    }
}

const renderItem = ({item}:{item: IItem}) => <ItemView item={item}/>

const ItemsListScreen = observer((props: ItemsListProps) => {
    const totalBonus = (props.store.totalBonus > 0 ? "+":"") + props.store.totalBonus;
    return (
        <React.Fragment>
            <Text style={styles.totalBonus}>Total bonus: {totalBonus}</Text>
            <FlatList
                data={props.store.allItems}
                renderItem={renderItem}
            />
        </React.Fragment>
    );
})

const styles = StyleSheet.create({
    totalBonus: {
        fontSize: 24,
        margin: 8,
    }
})

export default ItemsListScreen;