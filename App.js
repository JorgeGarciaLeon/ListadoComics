import { useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { InputAddComic } from './components/InputAddComic';
import { ComicView } from './components/ComicView';


export default function App() {
  const [comicList, setComicList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addProductHandler = (comic) => {
    if (comic.name.value !== "") {
      setComicList((currentComicList) =>
        [...comicList, { key: Math.random().toString(), name: comic.name, pages: comic.pages, readPages: comic.readPages }]);
    }

    setShowModal(false)
  };

  const deleteComic = (comicKey) => {
    setComicList((currentComicList) => {
      return currentComicList.filter((comicList) => comicList.key !== comicKey);
    })
  }


  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => setShowModal(true)} style={styles.containerButton}>
        <View style={styles.containerButton}>
          <Text style={styles.textButtonAdd}>ADD</Text>
        </View>
      </TouchableOpacity>

      <InputAddComic addMode={showModal} addProductHandler={addProductHandler} setShowModal={setShowModal} />

      <FlatList data={comicList} renderItem={(comic) => {
        return (
          <ComicView list={comic.item} deleteComic={deleteComic} />
        )

      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "#ccc",
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: "90%"
  },
  containerButton: {
    alignSelf: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "red",
    position: "absolute",
    bottom: 4,
    right: 2
  },
  textButtonAdd: {
    position: "absolute",
    alignSelf: "center",
    top: 12
  }
});