// Cart.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Header from '@/components/Header';
import { AntDesign } from '@expo/vector-icons';
import CartItemComponent from '@/components/CartItemComponent';
import RNPickerSelect from "react-native-picker-select";

interface CartItem {
    id: string;
    name: string;
    size: string;
    price: number;
    quantity: number;
}

const ShoppingAddress: React.FC = () => {
    const [country, setCountry] = useState("India");
    const [fullName, setFullName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={styles.container}>
                <GestureHandlerRootView>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerCon}>
                        <AntDesign name="arrowleft" size={24} color="#666666" />
                    </TouchableOpacity>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.stepperContainer}>
                            <View style={styles.stepLine} />
                            <View style={styles.stepItem}>
                                <View style={styles.stepCircle}>
                                    <View style={styles.activeStepCircle} />
                                </View>
                                <Text style={styles.activeStepText}>Cart</Text>
                            </View>
                            <View style={styles.stepLine} />
                            <View style={styles.stepItem}>
                                <View style={styles.stepCircle}>
                                    <View style={styles.activeStepCircle} />
                                </View>
                                <Text style={styles.disableStepText}>Address</Text>
                            </View>
                            <View style={styles.disablestepLine} />
                            <View style={styles.stepItem}>
                                <View style={styles.stepCircleInner}>
                                    <View style={styles.disableStepCircle} />
                                </View>
                                <Text style={styles.disableStepText}>Payment</Text>
                            </View>
                        </View>

                            <Text style={styles.sectionTitle}>Enter a new delivery address</Text>
                        <View style={{ padding: 20 }}>
                            <Text style={styles.label}>Country/Region</Text>
                            <View style={styles.dropdownContainer}>
                                <RNPickerSelect
                                    onValueChange={(value) => setCountry(value)}
                                    items={[
                                        { label: "India", value: "India" },
                                        { label: "United States", value: "USA" },
                                        { label: "United Kingdom", value: "UK" },
                                    ]}
                                    value={country}
                                    style={pickerSelectStyles}
                                />
                            </View>
                            <Text style={styles.label}>Full Name (First and Last name)</Text>
                            <TextInput
                                style={styles.input1}
                                placeholder="Enter Your Name"
                                value={fullName}
                                onChangeText={setFullName}
                            />

                            {/* Mobile Number Field */}
                            <Text style={styles.label}>Mobile Number</Text>
                            <TextInput
                                style={styles.input1}
                                placeholder="Enter your mobile number"
                                keyboardType="numeric"
                                value={mobileNumber}
                                onChangeText={setMobileNumber}
                            />
                            <View style={styles.addressSection}>
                                <Text style={styles.addressTitle}>Shipping Address</Text>
                                <View style={styles.divider} />
                                <View>
                                    <TextInput style={styles.input} placeholder="Address 1" />
                                    <TextInput style={styles.input} placeholder="Address 2" />
                                    <TextInput style={styles.input} placeholder="Landmark" />
                                    <TextInput style={styles.input} placeholder="Zipcode" />
                                </View>
                            </View>
                                <TouchableOpacity style={styles.continueButton}>
                                    <Text style={styles.continueButtonText}>Save this Address</Text>
                                </TouchableOpacity>
                        </View>
                    </ScrollView>
                </GestureHandlerRootView>
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
    headerCon: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        width: 200,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    scrollView: {
    },
    stepper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    continueButton: {
        backgroundColor: '#FD8204',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 36,
        width: "100%",
        height: 50
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    stepperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 16,
        paddingHorizontal: 20,
    },
    stepItem: {
        alignItems: 'center',
        flexDirection: "row",
    },
    stepCircle: {
        width: 11,
        height: 11,
        borderWidth: 2,
        borderColor: "#108F32",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
    },
    activeStepCircle: {
        width: 4,
        height: 4,
        borderRadius: 6,
        backgroundColor: '#108F32',
    },
    activeStepText: {
        fontSize: 12,
        color: '#108F32',
        fontWeight: 'bold',
        marginHorizontal: 4
    },
    stepLine: {
        flex: 1,
        height: 1.7,
        backgroundColor: '#108F32',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 600,
        marginVertical: 13,
        color: "#474747",
        textAlign: "center",
    },
    couponTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 13,
        color: "#202020",
    },
    stepCircleInner: {
        width: 11,
        height: 11,
        borderWidth: 2,
        borderColor: "#C3C3C3",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
    },
    disableStepCircle: {
        width: 4,
        height: 4,
        borderRadius: 6,
        backgroundColor: '#C3C3C3',
    },
    disableStepText: {
        fontSize: 12,
        color: '#C3C3C3',
        fontWeight: 'bold',
        marginHorizontal: 4
    },
    disablestepLine: {
        flex: 1,
        height: 1.7,
        backgroundColor: '#C3C3C3',
    },
    divider: {
        height: 1,
        backgroundColor: "#D3D3D3",
    },
    container2: {
        flex: 1,
        padding: 20,
        backgroundColor: "#E8E8E8",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    addressSection: {
        // padding: 20,
        paddingBottom: 20
    },
    input: {
        backgroundColor: "#F6F6F6",
        padding: 10,
        borderRadius: 4,
        marginTop: 19,
        borderColor: "#DDDDDD",
        borderWidth: 1,
        height: 35,
    },
    addressTitle: {
        fontSize: 15,
        fontWeight: 500,
        color: "#474747",
        textAlign: "center",
        marginVertical: 13,
    },
    label: {
        fontSize: 15,
        fontWeight: "500",
        marginBottom: 5,
        color: "#474747",
    },
    dropdownContainer: {
        borderRadius: 10,
        marginBottom: 15,
        height: 45,
        borderColor: "#D1D1D1",
        borderWidth: 1,
        justifyContent: "center"
    },
    input1: {
        borderRadius: 4,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 15,
        height: 45,
        borderColor: "#D1D1D1",
        borderWidth: 1,
    },

});
const pickerSelectStyles = {
    inputIOS: {
        fontSize: 13,
        color: "#000",
    },
    inputAndroid: {
        fontSize: 13,
        color: "#000",
    },
};

export default ShoppingAddress;