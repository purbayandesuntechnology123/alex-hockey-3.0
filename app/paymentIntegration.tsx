import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import Header from '@/components/Header';
import { useRouter } from 'expo-router';
import HeaderNav from '@/components/HeaderNav';

const PaymentIntegration: React.FC = () => {

    const router = useRouter();
    const navigation = useNavigation();
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

    const paymentMethods = [
        { id: '1', name: 'PayPal', icon: require('../assets/images/payPal.png') },
        { id: '2', name: 'Stripe', icon: require('../assets/images/stripe.png') },
    ];

    const handlePaymentMethodPress = (id: string) => {
        setSelectedMethod(id);
    };
    
    const handleContinue = () => {
        router.push('/success')
    }

    return (
        <View style={styles.mainContainer}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={styles.container}>
                <View style={styles.paymentContainer}>
                <HeaderNav title="Payment"/>
                    {/* Steps Indicator */}
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
                            <Text style={styles.activeStepText}>Address</Text>
                        </View>
                        <View style={styles.stepLine} />
                        <View style={styles.stepItem}>
                            <View style={styles.stepCircle}>
                                <View style={styles.activeStepCircle} />
                            </View>
                            <Text style={styles.disableStepText}>Payment</Text>
                        </View>
                    </View>
                </View>

                {/* Price Details */}
                <Text style={styles.priceTitle}>Price Details (2 Items)</Text>
                <View style={styles.priceContainer}>
                    <View style={styles.methodeContainer}>
                        <View style={styles.priceRow}>
                            <Text style={styles.priceLabel}>Sub-Total</Text>
                            <Text style={styles.priceLabel}>$22,400 : 00</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.priceLabel}>Delivery Free</Text>
                            <Text style={styles.priceLabel}>$25 : 00</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.priceLabel}>Discount</Text>
                            <Text style={styles.priceLabel}>- $3 : 00</Text>
                        </View>
                        <View style={styles.priceRow}>
                            <Text style={styles.priceLabel}>Total Amount</Text>
                            <Text style={styles.priceLabel}>$22,377 : 00</Text>
                        </View>
                    </View>
                    {/* Payment Methods */}
                    <View style={{ padding: 20, flex: 1 }}>
                        <Text style={styles.sectionTitle}>Payment Methods</Text>
                        <FlatList
                            data={paymentMethods}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[
                                        styles.paymentMethod,
                                        selectedMethod === item.id && { borderColor: '#FF7F00' }
                                    ]}
                                    onPress={() => handlePaymentMethodPress(item.id)}
                                >
                                    <Image source={item.icon} style={styles.paymentIcon} />
                                    <Image source={require('../assets/images/rightArrow.png')} style={styles.paymentIcon} />
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    <View style={{ padding: 20 }}>
                        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                            <Text style={styles.continueButtonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PaymentIntegration;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FD8204',
        paddingTop: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        paddingTop: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    paymentContainer: {
        backgroundColor: '#FCFCFC',
        paddingHorizontal: 20,
        paddingBottom: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    stepperContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 16,
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
    sectionTitle: {
        fontSize: 14,
        fontWeight: '500',
        marginVertical: 23,
        color: "#202020"
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 14,
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 1,
        borderWidth: 1,
        borderColor: "#D1D1D1",
        height: 45,
        paddingHorizontal: 20,
        justifyContent: "space-between"
    },
    paymentIcon: {
        height: 20,
        resizeMode: 'contain',
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
        // paddingBottom: 40,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    methodeContainer: {
        backgroundColor: '#FCFCFC',
        padding: 20,
        shadowColor: '#A0A0A0',
        shadowOpacity: 0.5,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: -4 },
        elevation: 10,
        borderRadius: 24,
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
    priceLabel: {
        fontSize: 13,
        color: '#1D1F24',
        fontWeight: 500,
    },
    headerCon: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
    },
    header: {
        color: '#6D6D6D',
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10,
    },
    continueButton: {
        backgroundColor: '#FD8204',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 26,
        width: "100%",
        height: 50
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});