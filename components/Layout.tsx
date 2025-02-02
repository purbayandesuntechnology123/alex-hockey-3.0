// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { LinearGradient } from "expo-linear-gradient";
// import { StatusBar } from "expo-status-bar";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <View>
//       <LinearGradient
//         colors={["white", "black"]}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//         style={styles.statusBarGradient}
//       />
//       <StatusBar translucent backgroundColor="transparent" />
//       <View style={styles.content}>{children}</View>
//     </View>
//   );
// };

// export default Layout;

// const styles = StyleSheet.create({
//   statusBarGradient: {
//       position: "absolute",
//     top: 0,
//     width: "100%",
//     height: Platform.OS === "ios" ? 44 : StatusBar.currentHeight, // Ensures correct height for iOS & Android
//     zIndex: -1, // Keeps it behind the actual status bar
//   },
//   content: {},

// });
