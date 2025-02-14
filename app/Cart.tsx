// Cart.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Header from '@/components/Header';
import { AntDesign } from '@expo/vector-icons';
import CartItemComponent from '@/components/CartItemComponent';

interface CartItem {
    id: string;
    name: string;
    size: string;
    price: number;
    quantity: number;
}

const Cart: React.FC = () => {
    const [selected, setSelected] = useState(true);
    const [selectedButton, setSelectedButton] = useState<"deliver" | "edit" | null>(null);
    const [cartItems, setCartItems] = React.useState<CartItem[]>([
        {
            id: '1',
            name: 'Hockey Polo T-Shirt',
            size: 'M',
            price: 195,
            quantity: 15,
        },
        {
            id: '2',
            name: 'Hockey Polo T-Shirt',
            size: 'XXL',
            price: 200,
            quantity: 10,
        },
    ]);

    const handleDeleteItem = (id: string) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };
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
                        <Header text="Cart" style={styles.header} />
                    </TouchableOpacity>
                    <ScrollView style={styles.scrollView}>
                        <View style={styles.container1}>
                            <View style={styles.stepperContainer}>
                                <View style={styles.stepLine} />
                                <View style={styles.stepItem}>
                                    <View style={styles.stepCircle}>
                                        <View style={styles.activeStepCircle} />
                                    </View>
                                    <Text style={styles.activeStepText}>Cart</Text>
                                </View>
                                <View style={styles.disablestepLine} />
                                <View style={styles.stepItem}>
                                    <View style={styles.stepCircleInner}>
                                        <View style={styles.disableStepCircle} />
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

                            <Text style={styles.sectionTitle}>Product Details</Text>

                            {cartItems.map(item => (
                                <View key={item.id}>
                                    <CartItemComponent
                                        item={item}
                                        onDelete={() => handleDeleteItem(item.id)}
                                    />
                                </View>
                            ))}
                        </View>
                        <View style={styles.couponSection}>
                            <Text style={styles.couponTitle}>Coupons</Text>
                            <View style={styles.promoContainer}>
                                <View style={styles.inputWrapper}>
                                    <TextInput
                                        style={styles.promoInput}
                                        placeholder="Promo Code"
                                        placeholderTextColor="#232939CC"
                                    />
                                    <TouchableOpacity style={styles.applyButton}>
                                        <Text style={styles.applyButtonText}>Apply</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity>
                                    <Text style={styles.viewPromoText}>View Promo Code</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Text style={{
                            fontSize: 15,
                            fontWeight: 600,
                            marginTop: 22,
                            color: "#202020",
                            paddingHorizontal: 19,
                            marginBottom: 15,
                        }}>Delivering to</Text>
                        <View style={styles.container2}>
                            <View style={styles.addressContainer}>
                                <TouchableOpacity onPress={() => setSelected(true)} style={styles.radioContainer}>
                                    <View style={[styles.radioOuter, selected && styles.radioOuterSelected]}>
                                        {selected && <View style={styles.radioInner} />}
                                    </View>
                                </TouchableOpacity>
                                <View>
                                    <Text style={styles.name}>Rajdwip Dey</Text>
                                    <Text style={styles.address}>
                                        House, Near Amtala Maiden, Sonatikiri, West Bengal, 743 245, INDIA, Phone: 7894343423
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.buttonGroup}>
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        selectedButton === "deliver" ? styles.activeButton : styles.inactiveButton,
                                    ]}
                                    onPress={() => setSelectedButton("deliver")}
                                >
                                    <Text
                                        style={[
                                            styles.buttonText,
                                            selectedButton === "deliver" ? styles.activeText : styles.inactiveText,
                                        ]}
                                    >
                                        Deliver to this address
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        selectedButton === "edit" ? styles.activeButton : styles.inactiveButton,
                                    ]}
                                    onPress={() => setSelectedButton("edit")}
                                >
                                    <Text
                                        style={[
                                            styles.buttonText1,
                                            selectedButton === "edit" ? styles.activeText : styles.inactiveText,
                                        ]}
                                    >
                                        Edit Address
                                    </Text>
                                </TouchableOpacity>
                            </View>


                            <TouchableOpacity style={styles.addNewButton}>
                                <Text style={styles.addNewText}>Add a new delivery address</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.continueButton}>
                                <Text style={styles.continueButtonText}>Continue</Text>
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
    header: {
        color: '#6D6D6D',
        fontSize: 18,
        fontWeight: 600,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    container1: {
        backgroundColor: '#fff',
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
    couponSection: {
        padding: 20,
        backgroundColor: "#F2F2F2",
    },
    promoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputWrapper: {
        flex: 1,
        position: 'relative',
        marginRight: 8,
    },
    promoInput: {
        height: 49,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 100,
        paddingHorizontal: 16,
        backgroundColor: "#ffffff",
        paddingRight: 100,
        width: 227,
        fontSize: 14,
        fontWeight: '600',
    },
    applyButton: {
        position: 'absolute',
        left: 151,
        top: 6,
        backgroundColor: '#FD8204',
        borderRadius: 100,
        width: 70,
        height: 37,
        justifyContent: "center",
    },
    applyButtonText: {
        color: '#fff',
        fontWeight: '600',
        textAlign: "center",
        fontSize: 14,
    },
    viewPromoText: {
        color: '#666',
        fontSize: 11,
    },
    deliverySection: {
        flex: 1,
        padding: 20,
        backgroundColor: "#E8E8E8",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
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
        fontSize: 15,
        fontWeight: 500,
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
    addressContainer: {
        marginBottom: 16,
        flexDirection: "row",
        gap: 10,
    },
    radioContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },
    radioOuter: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: "#00000033",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FCFCFC"
    },
    radioOuterSelected: {
        borderColor: "#FD8204",
    },
    radioInner: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: "#FD8204",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5
    },
    address: {
        fontSize: 10,
        color: "#666",
        lineHeight: 17.8,
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        gap: 20,
    },
    activeButton: {
        backgroundColor: "#FD8204",
    },
    inactiveButton: {
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#DDDDDD",
    },
    activeText: {
        color: "#FFF",
    },
    inactiveText: {
        color: "#646464",
    },
    button: {
        flex: 1,
        borderRadius: 4,
        alignItems: "center",
        height: 50,
        justifyContent: "center",
    },
    buttonText: {
        fontWeight: 600,
        fontSize: 14,
        width: 97,
        textAlign: "center",
    },
    buttonText1: {
        fontWeight: 600,
        fontSize: 14,
        width: 58,
        textAlign: "center",
    },
    addNewButton: {
        backgroundColor: "#FFFFFF",
        padding: 12,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#DDDDDD",
        marginBottom: 16,
        height: 50,
        justifyContent: "center",
    },
    addNewText: {
        textAlign: "center",
        fontWeight: 600,
        fontSize: 14,
        color: "#646464"
    },
});

export default Cart;