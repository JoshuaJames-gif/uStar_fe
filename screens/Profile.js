import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableHighlight,
  Alert,
  FlatList,
  List,
  ListItem,
} from "react-native";
import Firebase from "../config/Firebase";
import logo from "../assets/logo.png";
import { Avatar, Caption, Title } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import * as api from "../utils/api";

// class Profile extends React.Component {
//   handleSignout = () => {
//     Firebase.auth().signOut();
//     this.props.navigation.navigate("Login");
//   };

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <View style={styles.userInfo}>
//           <View
//             style={{ flexDirection: "row", marginTop: 15, marginBottom: 10 }}
//           >
//             <Avatar.Image
//               source={{
//                 uri:
//                   "https://www2.le.ac.uk/digitalsignage/slideshow/chemistry/images/archive/upto-dec-16/star.png",
//               }}
//               size={160}
//             />

//             <View style={{ marginLeft: 40 }}>
//               <Title
//                 style={[
//                   styles.title,
//                   {
//                     marginTop: 15,
//                     marginBottom: 5,
//                     color: "#777777",
//                   },
//                 ]}
//               >
//                 John Doe
//               </Title>
//               <Caption style={styles.caption}>@J_doe</Caption>
//               <View style={styles.row}>
//                 <Icon name="email" color="#777777" size={20} />
//                 <Text style={{ color: "#7777777", marginLeft: 20 }}>
//                   john_doe@gmail.com
//                 </Text>
//               </View>
//               <View style={{ marginTop: 10 }}>
//                 <Button>
//                   <Text>Update Image</Text>
//                 </Button>
//               </View>
//             </View>
//           </View>
//         </View>
//         <View
//           style={{
//             backgroundColor: "#434568",
//             height: 200,
//             width: 400,
//             marginBottom: 10,
//             marginLeft: 5,
//             marginRight: 5,
//             borderColor: "#fff",
//             borderWidth: 5,
//             flexDirection: "row",
//           }}
//         >
//           <Text style={{ alignItems: "center", color: "#fff" }}>
//             Register Child:
//           </Text>
//           <TextInput
//             style={{
//               height: 20,
//               width: 100,
//               borderWidth: 2,
//               borderColor: "#777777",
//               marginLeft: 10,
//             }}
//           />
//         </View>
//         <View style={{ backgroundColor: "#fff", height: 200, width: 400 }}>
//           <Text>ChildList</Text>
//         </View>

//         {/* Register new child */}
//         {/* current ChildList */}
//         <View>
//           <TouchableOpacity
//             style={styles.signOutButton}
//             title="Logout"
//             onPress={this.handleSignout}
//           >
//             <Text>Sign Out now </Text>
//           </TouchableOpacity>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   signOutButton: {
//     fontSize: 12,
//     borderRadius: 5,
//     height: 30,
//     width: 300,
//     backgroundColor: "#FFA611",
//     overflow: "hidden",
//     borderColor: "#FFA611",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   caption: {
//     color: "#fff",
//   },
//   row: {
//     flexDirection: "row",
//     marginBottom: 10,
//     marginTop: 10,
//   },
// });
// export default Profile;

class Profile extends React.Component {
  state = {
    children: [],
    child_name: "",
    parent_name: this.props.navigation.state.params.name,
    parent_email: this.props.navigation.state.params.email,
  };

  componentDidMount() {
    this.getChildByParent().then((children) => {
      this.setState({ children });
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { child_name, parent_email } = this.state;
    api.postChildren(parent_email, 0, child_name).then((child_name) => {
      this.setState({ children: child_name });
    });
  };

  getChildByParent = () => {
    return api.getChildrenByParent(this.props.parent_email);
  };

  addChild = (newChild) => {
    this.setState((currentState) => {
      return {
        children: [newChild, ...currentState.children],
      };
    });
  };

  render() {
    const { children } = this.state;
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              padding: 10,
              width: "100%",
              backgroundColor: "#100",
              height: 150,
            }}
          >
            <TouchableOpacity>
              <Image
                source={require("../images/smiling-gold-star.png")}
                style={{ width: 30, height: 30 }}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../images/smiling-gold-star.png")}
              stylep={{
                width: 140,
                height: 140,
                borderRadius: 100,
                marginTop: -70,
              }}
            ></Image>
            <Text style={{ fontSize: 25, fontWeight: "bold", padding: 10 }}>
              {this.props.navigation.state.params.name}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "grey" }}>
              {this.props.navigation.state.params.email}
            </Text>
          </View>
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#fff",
              width: "90%",
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
            }}
          >
            <Image
              source={{
                uri:
                  "https://www2.le.ac.uk/digitalsignage/slideshow/chemistry/images/archive/upto-dec-16/star.png",
              }}
              style={{ width: 20, height: 20 }}
            ></Image>
            <Text
              style={{
                fontSize: 15,
                color: "#818181",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Register Child:
            </Text>
            <TextInput
              style={styles.input}
              value={this.state.child_name}
              onChangeText={(child_name) => this.setState({ child_name })}
            />
            <TouchableOpacity
              style={styles.addChild}
              onPress={this.handleSubmit}
            >
              <Text>Add Child</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#fff",
              width: "100%",
              height: 150,
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
              marginTop: 40,
            }}
          >
            <Image
              source={{
                uri:
                  "https://www2.le.ac.uk/digitalsignage/slideshow/chemistry/images/archive/upto-dec-16/star.png",
              }}
              style={{ width: 20, height: 20 }}
            ></Image>
            {/* <Text
              style={{
                fontSize: 15,
                color: "#818181",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            > */}
            <View>
              {children.map((child) => (
                <View key={child.child_id}>
                  <Text>{child.child_name}</Text>
                  <Text>{child.star_count}</Text>
                </View>
              ))}
            </View>
            {/* </Text> */}
          </View>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              flexDirection: "row",
              justifyContent: "center",
              backgroundColor: "#fff",
              width: "90%",
              padding: 20,
              paddingBottom: 22,
              borderRadius: 10,
              shadowOpacity: 80,
              elevation: 15,
              marginTop: 20,
              marginTop: 40,
              backgroundColor: "#000",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: "#fff",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
  addChild: {
    borderWidth: 1,
    borderColor: "#777",
    backgroundColor: "orange",
    padding: 8,
    margin: 10,
    width: 100,
  },
});
export default Profile;
