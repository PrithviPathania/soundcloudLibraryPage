import { Text, View, StyleSheet, Image, ScrollView, FlatList} from "react-native";


const post = [
  {
    id: 1,
    username: "john_doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    postImage: "https://picsum.photos/id/1015/800/800",
    Title: "Song3",
  },
  {
    id: 2,
    username: "jane_smith",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    postImage: "https://picsum.photos/id/1025/800/800",
    Title: "Song2",
  },
  {
    id: 3,
    username: "alice_johnson",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    postImage: "https://picsum.photos/id/1035/800/800",
    Title: "Song1",
  },
  
  {
    id: 4,
    username: "bob_brown",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    postImage: "https://picsum.photos/id/1045/800/800",
    Title: "Song4",




  }
  ,
  {
    id: 5,
    username: "charlie_davis",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    postImage: "https://picsum.photos/id/1055/800/800",
    Title: "Song5",
  }








];



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
      <View style={styles.options}>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Your likes</Text>
          <Text style={styles.optionText}>➧</Text>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Playlists</Text>
          <Text style={styles.optionText}>➧</Text>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Albums</Text>
          <Text style={styles.optionText}>➧</Text>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Following</Text>
          <Text style={styles.optionText}>➧</Text>
        </View>

        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Stations</Text>
          <Text style={styles.optionText}>➧</Text>
        </View>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Downloads</Text>
          <Text style={styles.optionText}>➧</Text>
        </View>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Your insights</Text>
          <Text style={styles.optionText}>➧</Text>
        </View>
        <View style={styles.optionRow}>
          <Text style={styles.optionText}>Your uploads</Text>
          <Text style={styles.optionText}>➧</Text>
        </View>
      </View>
          
          <View style={styles.optionRow}>

          <Text style={styles.RecentlyPlayed}>Recently Played</Text>
          <Text style={styles.seeall}>See all</Text>
          </View>

          <View>
          <View>
  <ScrollView horizontal
        showsHorizontalScrollIndicator={false}
      >
    {post.map((post) => (
      <View key={post.id}>
        <Image source={{ uri: post.postImage }}
        style={styles.postImage}/>
        <Text style={styles.postTitle}> {post.Title} </Text>
        <Text style={styles.postUsername}>{post.username}</Text>
      </View>
    ))}
  </ScrollView>
</View>



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
  options: {
    marginTop: 20,
    marginLeft: 20,
    rowGap: 10,
    color: "#ffffff",

  },
  optionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 20,
  },
  optionText: {
    color: "#ffffff",
    fontSize: 16,
  },
  RecentlyPlayed: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  seeall: {
    color: "#9c9c9c",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 24,
    marginRight: 20,
  },
  postImage: {
    marginTop: 10,
    width: 100,
    height: 100,
    marginRight: 10,
    marginLeft: 10,
  },
  postTitle: {
    color: "#ffffff",
    fontSize: 16,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  postUsername: {
    color: "#9c9c9c",
    fontSize: 14,
    marginTop: 5, 
    
    marginRight: 10,
    marginLeft: 15,
  },
});
