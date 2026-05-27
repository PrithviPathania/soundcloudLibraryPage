import { Text, View, StyleSheet,Image} from "react-native";
export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "#282828" }}>
      <View style={styles.header}>

      <Text style={styles.getArtistPro}>
        Get Artist Pro
      </Text>
      
      <Text style={styles.library}>Library</Text>

      


      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#282828",
    alignItems: "center",
    flexDirection: "row",
  },
  getArtistPro: {
    color: "#ffffff",
    marginLeft: 20,
    backgroundColor: "#ff00d4",  
    borderRadius: 5,
  },
  library: {
    color: "#ffffff",
    marginLeft: 70,

  },
});
