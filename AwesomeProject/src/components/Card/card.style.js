import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10, // Dıştan Boşluk
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
      },
    
      body: {
        padding: 10, // İçten Boşluk
      },
    
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        marginBottom: 3,
      },
    
      text: {
        fontSize: 16,
        margin: 10,
        marginTop: 10,
      },
    
      button: {
        backgroundColor: '#00C2FF',
        padding:10,
        alignItems: 'center',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
      },
    
      button_title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
      },
});