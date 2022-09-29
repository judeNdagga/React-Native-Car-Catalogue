import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
    
    
      },
    
      titles: {
        marginTop: '20%',
        width: '100%',
        alignItems: 'center',
    
      },
    
      title: {
        fontSize: 40,
        fontWeight: '600',
    
      },
    
      subtitle: {
        fontSize: 16,
        color: 'indigo',
    
      },

      subtitleCTA: {
        textDecorationLine: 'underline',

      },
    
      image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
      },
      buttonContainer: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
    }
});

export default styles;