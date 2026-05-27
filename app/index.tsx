import { Text, View, StyleSheet,Image} from "react-native";
export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "#282828" }}>
      
      <View style={styles.header}>

      <Text style={styles.getArtistPro}>
        Get Artist Pro
      </Text>
      
      <Text style={styles.library}>Library</Text>


       <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Settings-icon-symbol-vector.png/960px-Settings-icon-symbol-vector.png",
        }}      
        style={styles.settingsIcon}
      />
        <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/VK_icons_profile_28.svg/960px-VK_icons_profile_28.svg.png",
        }}
        style={styles.profilePicture}
      />


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
    alignItems: "center",
  },
  settingsIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 80,
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 5, 
  },
});
