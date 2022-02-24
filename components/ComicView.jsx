import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export const ComicView = ({ list }) => {

    const { name, pages, readPages } = list;

    return (
        <View style={styles.listItem} >
            <Text styles={styles.listItemText}> Comic: {name}</Text>
            <Text styles={styles.listItemText}> Páginas: {pages}</Text>
            <Text styles={styles.listItemText}> Leídas: {readPages}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    listItem: {
        height: 100,
        width: 200,
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "flex-start",
        borderWidth: 1,
        borderColor: "white",
        shadowColor: "#ccc",
        borderRadius: 5,
        margin: 8
    }, listItemText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",

    }
});