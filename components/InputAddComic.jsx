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
    const [comicPage, setComicPage] = useState("");
    const [comicPagRead, setComicPageRead] = useState("");

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
        const pagLeidas = (parseInt(comicPagRead)*100) /parseInt(comicPage) + "%"
        const newComic = {
            name:comicName,
            pages: comicPage,
            readPages: pagLeidas
        }

        addProductHandler(newComic)
        setShowModal(false)
        newComic = {
            name:"",
            pages: "",
            readPages: ""
        }
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
                    placeholder={"Páginas leidas"}
                    value={comicPagRead}
                    onChangeText={changePagLeidas}
                />


                <TouchableOpacity onPress={sendComic} style={styles.containerButton}>
                    <View style={styles.containerButton}>
                        <Text style={styles.textButtonAdd}>Añadir Comic</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setShowModal(false)} style={styles.containerButtonCancel}>
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
