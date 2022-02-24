import { useState } from "react";
import {
  Button,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { InputAddComic } from './components/InputAddComic'


export default function App() {
  const [productList, setProductList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addProductHandler = (comic) => {
    if (comic.name !== "") {
      setProductList((currentProductList) => 
          [...productList, {key:Math.random().toString(), value: comic}]);  
    }

    setShowModal(false)
  };

  console.log(productList);

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => setShowModal(true)} style={styles.containerButton}>
        <View style={styles.containerButton}>
          <Text style={styles.textButtonAdd}>ADD</Text>
        </View>
      </TouchableOpacity>


      <InputAddComic addMode={showModal} addProductHandler={addProductHandler} setShowModal={setShowModal} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: "#ccc",
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: "80%"
  },
  listContainer: {
    width: "100%",
    padding: 20
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
  },
  textButtonVer: {
    position: "absolute",
    backgroundColor: "blue",
    alignSelf: "center",
    paddingRight: 220,
    top: 12
  }
});