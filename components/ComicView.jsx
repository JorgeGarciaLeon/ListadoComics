import React from 'react';
import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';

export const ComicView = ({ setShowModalModify, deleteComic, list, setModifyComic }) => {

    const { name, pages, readPages } = list;

    const modifify = () =>{
        const sendComic ={
            name,
            pages,
            readPages
        }
        setShowModalModify(true)
        setModifyComic(sendComic)
    }

    return (
        <View style={styles.listItem} >
            <Text styles={styles.listItemText}> Comic: {name}</Text>
            <Text styles={styles.listItemText}> Páginas: {pages}</Text>
            <Text styles={styles.listItemText}> Leídas: {readPages}</Text>
            <Text styles={styles.listItemText}> Porcentaje: {Math.trunc((parseInt(readPages)*100)/parseInt(pages))}%</Text>
            
            <TouchableOpacity onPress={modifify}>
                    <View >
                        <Text >Modificar</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => deleteComic(list.key)}>
                    <View >
                        <Text >Eliminar</Text>
                    </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({

    listItem: {
        height: 150,
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