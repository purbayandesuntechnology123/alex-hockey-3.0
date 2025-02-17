import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, StatusBar, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Header from '@/components/Header';
import HockeyJerseyCard from '@/components/HockeyJerseyCard';
import OrderStepper from '@/components/OrderStepper';
import HeaderNav from '@/components/HeaderNav';

const OrderDetails: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={styles.container}>
                <View style={styles.paymentContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerCon}>
                        <AntDesign name="arrowleft" size={24} color="#4A4B60" />
                        <Header text="Confirmed" style={styles.header} />
                    </TouchableOpacity>
                    {/* <HeaderNav title="Confirmed"/> */}
                    <Text style={{ fontWeight: 400, fontSize: 12, color: "#fff", marginTop: 12, }}>
                        Arriving by 3 Feb - 5 Feb
                    </Text>

                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ padding: 20, gap: 7 }}>
                        <HockeyJerseyCard size="L" quantity={5} />
                        <HockeyJerseyCard size="M" quantity={5} />
                        <HockeyJerseyCard size="XL" quantity={5} />
                        <HockeyJerseyCard size="XXL" quantity={5} />
                    </View>
                    <View style={{ paddingHorizontal: 20 }}>
                        <View style={{ borderColor: "#D3D3D3", borderWidth: 1, borderRadius: 8, padding: 15, gap: 55 }}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <Text style={styles.deliveryTitle}>Open box delivery will be done</Text>
                                <TouchableOpacity>
                                <Text style={styles.viewTitle}>View Checks</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingBottom: 16 }}>
                                <Text style={styles.deliveryDesc}>Sealed package{'\n'}will be opened</Text>
                                <Text style={styles.deliveryDesc}>Checks will be{'\n'}performed</Text>
                                <Text style={styles.deliveryDesc}>Share OTP to{'\n'}confirm delivery</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <OrderStepper />
                    </View>


                    <View style={styles.priceContainer}>
                        <View style={styles.methodeContainer}>
                            <View style={styles.priceRow}>
                                <Text style={styles.priceLabel}>Sub-Total</Text>
                                <Text style={styles.priceLabel1}>$22,400 : 00</Text>
                            </View>
                            <View style={styles.priceRow1}>
                                <Text style={styles.priceLabel}>
                                    Delivery Free{'\n'}Price Details
                                </Text>
                                <Text style={styles.priceLabel1}>$25 : 00</Text>
                            </View>
                            <View style={styles.priceRow}>
                                <Text style={styles.priceLabel}>Discount</Text>
                                <Text style={styles.priceLabel1}>- $3 : 00</Text>
                            </View>
                            <View style={styles.priceRow}>
                                <Text style={styles.totalAmountLabel}>Total Amount</Text>
                                <Text style={styles.totalPriceLabel}>$22,377 : 00</Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default OrderDetails;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FD8204',
        paddingTop: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
    },
    paymentContainer: {
        backgroundColor: '#FD8204',
        paddingHorizontal: 20,
        paddingBottom: 10,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingTop: 20,
    },
    deliveryTitle: {
        fontWeight: 500,
        color: "#1D1F24",
        fontSize: 12,
    },
    deliveryDesc: {
        fontWeight: 400,
        color: "#666666",
        fontSize: 10,
        textAlign: "center"
    },
    viewTitle: {
        fontWeight: 500,
        color: "#FD8204",
        fontSize: 12,
    },
    priceContainer: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        marginTop: 16,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 30,
    },
    methodeContainer: {
        backgroundColor: '#FCFCFC',
        padding: 20,
        shadowColor: '#A0A0A0',
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: -4 },
        elevation: 10,
    },
    priceTitle: {
        fontSize: 13,
        fontWeight: '500',
        marginBottom: 8,
        paddingHorizontal: 20,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    priceRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    priceLabel: {
        fontSize: 13,
        color: '#1D1F24',
        fontWeight: 500,
    },
    priceLabel1: {
        fontSize: 14,
        color: '#2E2E2E',
        fontWeight: 500,
    },
    totalAmountLabel: {
        fontWeight: 600,
        fontSize: 13,
        color: "#070707",
    },
    totalPriceLabel: {
        fontWeight: 600,
        fontSize: 14,
        color: "#070707",
    },
    headerCon: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    header: {
        color: '#202020',
        fontSize: 18,
        fontWeight: 500,
        paddingLeft: 10,
    },
});