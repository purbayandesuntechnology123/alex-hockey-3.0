import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "@/components/Header";
import NewPasswordSvg from "@/components/NewPassworSvg";
import Inputs from "@/components/Inputs";
import Eye from "@/components/Eye";
import Labels from "@/components/Labels";
import Button from "@/components/Button";
import { useNavigation } from "expo-router";
import PrevArrows from "@/components/PrevArrows";
import { LinearGradient } from "expo-linear-gradient";

const ChangePassword = () => {
  const navigation: any = useNavigation();
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [isHidden, setHidden] = useState({
    password: true,
    confirmPassword: true,
  });

  const toggleVisibility = (field: "password" | "confirmPassword") => {
    setHidden((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const [error, setError] = useState({ newPassword: "", confirmPassword: "" });

  const validationCheck = () => {
    let newErrorMessage = { newPassword: "", confirmPassword: "" };
    let isValid = true;

    if (!password.newPassword) {
      newErrorMessage.newPassword = "Please Type new password";
      isValid = false;
    }
    if (!password.confirmPassword) {
      newErrorMessage.confirmPassword = "Please confirm your password";
      isValid = false;
    }
    if (password.newPassword !== password.confirmPassword) {
      newErrorMessage.confirmPassword = "Password does not match";
      isValid = false;
    }

    setError(newErrorMessage);
    return isValid;
  };

  const handleSubmit = () => {
    if (validationCheck()) {
      console.log("ok");
      navigation.navigate("success");
    }
  };

  return (
    <LinearGradient
      colors={["#FFDFBE", "#FFFFFF"]}
      style={styles.gradient}
      locations={[0, 0.06]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {/**/}
      {/* Transparent Status Bar */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.mainContainer}>
          <Header text="Change Password" style={styles.header} />
          <PrevArrows href={"/verifyotp"} />
          <NewPasswordSvg />
          <View>
            <View style={styles.inputCon}>
              <Labels labels="New Password" />
              <Inputs
                value={password.newPassword}
                secureTextEntry={isHidden.password}
                placeholder="Type New Password"
                style={error.newPassword ? styles.errorInput : null}
                onChangeText={(text: string) =>
                  setPassword({ ...password, newPassword: text })
                }
              />
              <Eye
                style={styles.eyeStyle}
                onPress={() => toggleVisibility("password")}
                isHidden={isHidden.password}
              />
              {error.newPassword && (
                <Text style={styles.errorMessage}>{error.newPassword}</Text>
              )}
            </View>
            <View style={styles.inputCon}>
              <Labels labels="Confirm Password" />
              <Inputs
                value={password.confirmPassword}
                secureTextEntry={isHidden.confirmPassword}
                placeholder="Confirm Password"
                style={error.confirmPassword ? styles.errorInput : null}
                onChangeText={(text: string) =>
                  setPassword({ ...password, confirmPassword: text })
                }
              />
              <Eye
                style={styles.eyeStyle}
                onPress={() => toggleVisibility("confirmPassword")}
                isHidden={isHidden.confirmPassword}
              />
              {error.confirmPassword && (
                <Text style={styles.errorMessage}>{error.confirmPassword}</Text>
              )}
            </View>
            <View style={styles.btnContainer}>
              <Button text="Submit" onPress={handleSubmit} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  inputCon: {
    marginBottom: 20,
  },
  eyeStyle: {
    top: 45,
  },
  btnContainer: {
    marginTop: 20,
  },
  errorMessage: {
    fontSize: 12,
    color: "red",
  },
  errorInput: {
    borderWidth: 2,
    borderColor: "red",
  },
  header: { color: "#FD8204" },
});
