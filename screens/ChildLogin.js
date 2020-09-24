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

  _onFulfill3 = (code) => {
    const newCode = Number(code);
    api.getChildByLogin(newCode).then((child) => {
      const isValid = newCode === child.login_code;
      if (isValid) {
        this.props.navigation.navigate("Signup");
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
