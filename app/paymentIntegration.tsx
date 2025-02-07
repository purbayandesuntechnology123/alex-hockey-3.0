import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
// import Icon from 'react-native-vector-icons/Feather';
// import LinearGradient from 'react-native-linear-gradient';

const paymentIntegration: React.FC = () => {
    const navigation = useNavigation();

    const paymentMethods = [
        { id: '1', name: 'PayPal', icon: require('../assets/images/payPal.png') },
        { id: '2', name: 'Stripe', icon: require('../assets/images/stripe.png') },
        { id: '3', name: 'Mastercard', icon: require('../assets/images/master.png') },
        { id: '4', name: 'UPI Pay', icon: require('../assets/images/upi.png') },
        { id: '5', name: 'Scan & Pay', icon: require('../assets/images/scan.png') },
    ];

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
                        <AntDesign name="arrowleft" size={24} color="#666666" />
                    </TouchableOpacity>
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
                            <Text style={styles.activeStepText}>Payment</Text>
                        </View>
                    </View>

                    {/* Payment Methods */}
                    <Text style={styles.sectionTitle}>Payment Methods</Text>
                    <FlatList
                        data={paymentMethods}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.paymentMethod}>
                                <Image source={item.icon} style={styles.paymentIcon} />
                                <Image source={require('../assets/images/rightArrow.png')} style={styles.paymentIcon} />
                                {/* <Text style={styles.paymentText}>{item.name}</Text> */}
                                {/* <Icon name="chevron-right" size={20} color="#888" /> */}
                            </TouchableOpacity>
                        )}
                    />
                </View>

                {/* Price Details */}
                <Text style={styles.priceTitle}>Price Details (2 Items)</Text>
                <View style={styles.priceContainer}>
                    <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Sub-Total</Text>
                        <Text style={styles.priceValue}>$22,400 : 00</Text>
                    </View>
                    <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Delivery Free</Text>
                        <Text style={styles.priceValue}>$25 : 00</Text>
                    </View>
                    <View style={styles.priceRow}>
                        <Text style={styles.priceLabel}>Discount</Text>
                        <Text style={styles.discount}>- $3 : 00</Text>
                    </View>
                    <View style={styles.priceRow}>
                        <Text style={styles.totalLabel}>Total Amount</Text>
                        <Text style={styles.totalValue}>$22,377 : 00</Text>
                    </View>

                    {/* Pay Now Button */}
                    <TouchableOpacity style={styles.payButton}>
                        <Text style={styles.payButtonText}>Pay Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default paymentIntegration;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FD8204',
        paddingTop: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
        // paddingHorizontal: 20,
        paddingTop: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    paymentContainer: {
        flex: 1,
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
        // paddingHorizontal: 16,
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
        // marginTop: 4,
        marginHorizontal: 4
    },
    stepLine: {
        flex: 1, // This makes the line stretch dynamically
        height: 1.7,
        backgroundColor: '#108F32',
        // marginHorizontal: 4,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 23,
        color: "#202020"
    },
    paymentMethod: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        // padding: 12,
        borderRadius: 10,
        marginBottom: 14,
        // shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        borderWidth: 1,
        borderColor: "#D1D1D1",
        height: 45,
        paddingHorizontal: 20,
        justifyContent: "space-between"
    },
    paymentIcon: {
        // width: "10%",
        height: 20,
        resizeMode: 'contain',
    },
    paymentText: {
        flex: 1,
        fontSize: 14,
        color: '#333',
    },
    priceContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: 16,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: -2 }, // Negative height for top shadow
        elevation: 30, // For Android
        paddingBottom: 40,
    },
    priceTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        paddingHorizontal: 20,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    priceLabel: {
        fontSize: 14,
        color: '#1D1F24',
        fontWeight: '500',
    },
    priceValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
    },
    discount: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF5733',
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    totalValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    payButton: {
        backgroundColor: '#FF7F00',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 16,
    },
    payButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    headerCon: {
        display: 'flex',
        // justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
        // gap: 10,
        // padding: 20,
    },
});
