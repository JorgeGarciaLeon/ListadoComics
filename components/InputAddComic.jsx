import { useState } from 'react'
import {
    Modal,
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';


export const InputAddComic = ({ addMode, setShowModal, addProductHandler }) => {

    const [comicName, setComicName] = useState("");
    const [comicPage, setComicPage] = useState("0");
    const [comicPagRead, setComicPageRead] = useState("0");

    const changeTextName = (comicName) => {
        setComicName(comicName);
    }

    const changeTextPaginas = (comicPage) => {
        setComicPage(comicPage);
    }

    const changePagLeidas = (comicPagRead) => {
        setComicPageRead(comicPagRead);
    }

    const sendComic = () => {
        const newComic = {
            name:comicName,
            pages: comicPage,
            readPages: comicPagRead
        }


        addProductHandler(newComic)
        setShowModal(false)
    }


    return (
        <Modal visible={addMode} animationType={'fade'} transparent={true}>
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
                    placeholder={"Número de páginas"}
                    value={comicPagRead}
                    onChangeText={changePagLeidas}
                />


                <TouchableOpacity onPress={sendComic} style={styles.containerButton}>
                    <View style={styles.containerButton}>
                        <Text style={styles.textButtonAdd}>Añadir Comic</Text>
                    </View>
                </TouchableOpacity>


            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    inputModal: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        flex: 1,
        borderColor: "#000",
        borderWidth: 5,
    },
    comicInput: {
        width: "75%",
        width: 200,
        borderBottomColor: "red",
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 5
    },
    containerButton: {
        alignSelf: "center",
        width: 90,
        height: 20,
        backgroundColor: "#f33e18",
    },
    textButtonAdd: {
        position: "absolute",
        alignSelf: "center",
        top: 4
    }
});
