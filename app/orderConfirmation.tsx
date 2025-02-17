import Header from "@/components/Header";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';
import HeaderNav from "@/components/HeaderNav";


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
                <HeaderNav title="Payment Successful"/>
                <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
                    <Image source={require('../assets/images/paymentSuccess.png')} />

                    <Text style={styles.successText}>Order Placed Successfully</Text>
                    <Text style={styles.orderText}>Your order number is 00000010.</Text>
                    <Text style={styles.description}>We’ll email you an order confirmation with{'\n'} details and tracking info.</Text>
                    <TouchableOpacity style={styles.OrderButton}>
                        <Text style={styles.OrderText}>View Order</Text>
                    </TouchableOpacity>

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
        fontSize: 16,
        fontWeight: 500,
        color: "#FD8204",
        marginTop: 10,
    },
    orderText: {
        fontSize: 13,
        color: "#1D1F24",
        // marginBottom: 30,
        fontWeight: 700,
        marginBottom: 6,
        marginTop: 2,
    },
    description: {
        fontSize: 12,
        color: "#7A7A7A",
        marginBottom: 52,
        fontWeight: 400,
        textAlign: "center"
    },
    button: {
        backgroundColor: '#FD8204',
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
    OrderText: {
        fontSize: 16,
        fontWeight: 600,
        color: "#070707",
    },
    OrderButton: {
        borderColor: "#0000001A",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 30,
        paddingVertical: 17,
    }
});

export default orderConfirmation;
