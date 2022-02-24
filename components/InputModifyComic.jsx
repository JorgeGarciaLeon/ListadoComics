import { useState } from 'react'
import {
    Modal,
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';


export const InputModifyComic = ({ deleteComic, addComic, modifyComic, setShowModalModify, showModalModify }) => {

    const [comicName, setComicName] = useState(modifyComic.name);
    const [comicPage, setComicPage] = useState("");
    const [comicPagRead, setComicPageRead] = useState("");

    //setComicName(modifyComic.name);
    //setComicPage(modifyComic.pages);
    //setComicPageRead(modifyComic.readPages)


    const changeTextName = (comicName) => {
        setComicName(comicName);
    }

    const changeTextPaginas = (comicPage) => {
        setComicPage(comicPage);
    }

    const changePagLeidas = (comicPagRead) => {
        setComicPageRead(comicPagRead);
    }

    const changeComic = () => {
        const pagLeidas = (parseInt(comicPagRead)*100) /parseInt(comicPage) + "%"
        const newComic = {
            name:comicName,
            pages: comicPage,
            readPages: pagLeidas
        }
        deleteComic(modifyComic["key"]);
        addComic(newComic);
        setShowModalModify(false)
    }


    return (
        <Modal visible={showModalModify} animationType={'fade'} transparent={true}>
            <View style={styles.inputModal}>

                <TextInput
                    Style={styles.comicInput}
                    placeholder={"Nombre del comic"}
                    value={comicName}
                    onChangeText={changeTextName}
                />

                <TextInput
                    Style={styles.comicInput}
                    placeholder={"Número de páginas"}
                    value={comicPage}
                    onChangeText={changeTextPaginas}
                />

                <TextInput
                    Style={styles.comicInput}
                    placeholder={"Páginas leidas"}
                    value={comicPagRead}
                    onChangeText={changePagLeidas}
                />


                <TouchableOpacity onPress={changeComic} style={styles.containerButton}>
                    <View style={styles.containerButton}>
                        <Text style={styles.textButtonAdd}>Editar Comic</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setShowModalModify(false)} style={styles.containerButtonCancel}>
                    <View style={styles.containerButton}>
                        <Text style={styles.textButtonAdd}>Cancelar</Text>
                    </View>
                </TouchableOpacity>


            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    inputModal: {
        top: "30%",
        left: "30%",
        justifyContent: "center",
        alignItems: "center",
        height: "35%",
        borderColor: "#000",
        borderWidth: 5,
        width:150,
        backgroundColor:"white"
    },
    comicInput: {
        width: "75%",
        borderColor: "blue",
        borderWidth: 5,
        height: 40,
        marginBottom: 5,
        top:5,
        marginBottom: 10
    },
    containerButton: {
        alignSelf: "center",
        width: 90,
        height: 18,
        top: 1,
        backgroundColor: "#f33e18",
    },
    containerButtonCancel:{
        alignSelf: "center",
        width: 90,
        height: 20,
        top: 5,
        backgroundColor: "#f33e18",
    },
    textButtonAdd: {
        position: "absolute",
        alignSelf: "center",
        top: 1
    }
});
