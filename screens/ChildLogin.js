import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import CodeInput from "react-native-confirmation-code-input";
import * as api from "../utils/api";

class ChildLogin extends Component {
  state = { code: "" };
  _alert = (message) =>
    Alert.alert("Confirmation Code", message, [{ text: "OK" }], {
      cancelable: false,
    });
  _onFulfill3 = (code) => {
    console.log("child login.js ->", code);
    api.getChildByLogin(code).then((child) => {
      const isValid = code === child.login_code;
      if (isValid) {
        this.props.navigation.navigate("Profile");
        return this.setState({ code });
      }
    });
  };

  render() {
    return (
      <View style={[styles.inputWrapper, { backgroundColor: "#2F0B3A" }]}>
        <Text
          style={[styles.inputLabel, { color: "#fff", textAlign: "center" }]}
        >
          CIRCLE CONFIRMATION CODE
        </Text>
        <CodeInput
          ref="codeInputRef3"
          codeLength={4}
          borderType="circle"
          autoFocus={false}
          codeInputStyle={{ fontWeight: "800" }}
          onFulfill={this._onFulfill3}
        />
      </View>

      // <View style={styles.login}>
      //   <Text>Please enter your 4-digit verification code!</Text>
      //   <View style={{ flexDirection: "row", marginTop: 10 }}>
      //     <TextInput
      //       style={{
      //         borderWidth: 3,
      //         height: 50,
      //         width: 50,
      //         borderColor: "orange",
      //         textAlign: "center",
      //         fontSize: 20,
      //       }}
      //       maxLength={1}
      //     />
      //     <TextInput
      //       style={{
      //         borderWidth: 3,
      //         height: 50,
      //         width: 50,
      //         borderColor: "orange",
      //         textAlign: "center",
      //         fontSize: 20,
      //       }}
      //       maxLength={1}
      //     />
      //     <TextInput
      //       style={{
      //         borderWidth: 3,
      //         height: 50,
      //         width: 50,
      //         borderColor: "orange",
      //         textAlign: "center",
      //         fontSize: 20,
      //       }}
      //       maxLength={1}
      //     />
      //     <TextInput
      //       style={{
      //         borderWidth: 3,
      //         height: 50,
      //         width: 50,
      //         borderColor: "orange",
      //         textAlign: "center",
      //         fontSize: 20,
      //       }}
      //       çmaxLength={1}
      //     />
      //   </View>
      //   <View style={[styles.inputWrapper, { backgroundColor: "#2F0B3A" }]}>
      //     <Text
      //       style={[styles.inputLabel, { color: "#fff", textAlign: "center" }]}
      //     >
      //       CIRCLE CONFIRMATION CODE
      //     </Text>
      //     <CodeInput
      //       ref="codeInputRef3"
      //       codeLength={5}
      //       borderType="circle"
      //       autoFocus={false}
      //       codeInputStyle={{ fontWeight: "800" }}
      //       onFulfill={this._onFulfill3}
      //     />
      //   </View>
      //   <View>
      //     <TouchableOpacity
      //       style={styles.buttonSignUp}
      //       onPress={() => this.props.navigation.navigate("Home")}
      //     >
      //       <Text style={styles.buttonText}>Back to Login</Text>
      //     </TouchableOpacity>
      //   </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 0.5,
    height: 500,
    width: 500,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  inputBox: {
    borderWidth: 1,
  },
  buttonSignUp: {
    fontSize: 12,
    borderRadius: 5,
    height: 30,
    width: 300,
    backgroundColor: "#FFA611",
    overflow: "hidden",
    borderColor: "#FFA611",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: -100,
    marginTop: 60,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  inputWrapper: {
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "800",
  },
});

export default ChildLogin;
