import { View } from "react-native";


export default function FotosC() {
        return (
          <View style={styles.container}>
            <StatusBar style="auto" /> 
          </View>
        );
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });