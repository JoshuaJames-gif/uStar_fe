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
  state = { code: "", isError: false };

  _onFulfill3 = (code) => {
    const newCode = Number(code);
    api.getChildByLogin(newCode).then((child) => {
      const isValid = newCode === child.login_code;
      if (isValid) {
        this.props.navigation.navigate("ChildPage", {
          isParentLoggedIn: false,
          child_id: child.child_id,
        });
        this.setState({ code, isError: false });
      } else this.setState({ isError: true });
    });
  };

  render() {
    return (
      <View style={[styles.inputWrapper, { backgroundColor: "#2F0B3A" }]}>
        <Text style={{ marginBottom: 10 }}>
          ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
        </Text>
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Please ask parent/ guardian for your special login code
        </Text>
        <CodeInput
          ref="codeInputRef3"
          codeLength={4}
          borderType="circle"
          autoFocus={false}
          codeInputStyle={{ fontWeight: "800" }}
          onFulfill={this._onFulfill3}
        />
        <Text style={{ marginTop: 10 }}>⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</Text>
        {this.state.isError && (
          <Text style={styles.errorText}>
            Sorry, could you try again please?
          </Text>
        )}
        <TouchableOpacity
          style={styles.buttonSignup}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={styles.buttonSignUpText}>↰ Back</Text>
        </TouchableOpacity>
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
  buttonSignUpText: {
    fontSize: 15,
    color: "#fff",
  },
  buttonSignup: {
    borderRadius: 5,
    height: 30,
    width: 100,
    backgroundColor: "#083464",
    overflow: "hidden",
    borderColor: "yellow",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 5,
  },
  inputWrapper: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "800",
  },
  errorText: {
    fontSize: 14,
    fontWeight: "800",
    color: "red",
  },
});

export default ChildLogin;
