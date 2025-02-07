import Header from "@/components/Header";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';


const orderConfirmation: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerCon} >
                    <AntDesign name="arrowleft" size={24} color="#666666" />
                    <Header text="Payment" style={styles.header} />
                </TouchableOpacity>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <Image source={require('../assets/images/paymentSuccess.png')} />

                    <Text style={styles.successText}>Payment Successful!</Text>
                    <Text style={styles.description}>Thank you for your purchase.</Text>

                </View>
                    <View style={{justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Go to Home</Text>
                    </TouchableOpacity>
                    </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FD8204',
        paddingTop: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // alignItems: "center",
        // justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,

    },
    headerCon: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        width: 200,
    },
    header: {
        color: '#6D6D6D',
        fontSize: 20,
        fontWeight: 900,
    },
    successIconContainer: {
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    successText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FD8204",
        marginTop: 10,
    },
    description: {
        fontSize: 14,
        color: "#1D1F24",
        marginBottom: 30,
        fontWeight: '500',
    },
    button: {
        backgroundColor: '#FF7F00',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 16,
        width: "95%",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#FFF",
    },
});

export default orderConfirmation;
