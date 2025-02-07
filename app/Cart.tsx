// Cart.tsx
import Header from '@/components/Header';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    Animated,
    Dimensions,
    Image,
    StatusBar,
} from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


interface CartItem {
    id: string;
    name: string;
    size: string;
    price: number;
    quantity: number;
}

const CartItemComponent: React.FC<{ item: CartItem; onDelete: () => void }> = ({ item, onDelete }) => {
    const renderRightActions = (progress: Animated.AnimatedInterpolation<number>) => {
        const translateX = progress.interpolate({
            inputRange: [0, 10],
            outputRange: [10, 0],
        });

        return (
            <Animated.View
                style={[styles.deleteButton, { transform: [{ translateX }] }]}
            >
                <TouchableOpacity onPress={onDelete} style={styles.deleteButtonInner}>
                    <Image source={require("../assets/images/icon/deleteIcon.png")} />
                </TouchableOpacity>
            </Animated.View>
        );
    };

    return (
        <View>
            <View style={{ paddingHorizontal: 20, }}>
                <View style={styles.divider} />
            </View>
            <View style={styles.cartItemContainer}>
                <View style={styles.cartItem}>
                    <View style={styles.itemDetails}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemSize}>Size {item.size}</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.itemPrice}>${item.price}</Text>
                            <Text style={styles.itemQuantity}>X {item.quantity}</Text>
                        </View>
                    </View>
                    <Swipeable renderRightActions={renderRightActions}>
                        <View style={styles.totalContainer}>
                            <Text style={styles.itemTotal}>${item.price * item.quantity}</Text>
                        </View>
                    </Swipeable>
                </View>
            </View>
        </View>
    );
};

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = React.useState<CartItem[]>([
        {
            id: '1',
            name: 'Hockey Polo T-Shirt',
            size: 'M',
            price: 200,
            quantity: 10,
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
                <GestureHandlerRootView >
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerCon} >
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
                                <View>
                                    <CartItemComponent
                                        key={item.id}
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

                        <View style={styles.addressSection}>
                            <Text style={styles.sectionTitle}>Shipping Address</Text>
                            <View style={styles.divider} />
                            <View>
                                <TextInput style={styles.input} placeholder="Address 1" />
                                <TextInput style={styles.input} placeholder="Address 2" />
                                <TextInput style={styles.input} placeholder="Landmark" />
                                <TextInput style={styles.input} placeholder="Zipcode" />
                            </View>

                        </View>
                    </ScrollView>
                    <View style={{ justifyContent: "center", alignItems: "center", padding: 20 }}>
                        <TouchableOpacity style={styles.continueButton}>
                            <Text style={styles.continueButtonText}>Continue</Text>
                        </TouchableOpacity>
                    </View>

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
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    container1: {
        // flex: 1,
        backgroundColor: '#fff',
        // paddingHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    scrollView: {
        // flex: 1,
        // padding: 16,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
    },
    stepper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
    },
    cartItemContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: 80,
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // paddingVertical: 8,
        // paddingHorizontal: 16,
    },
    itemDetails: {
        flex: 1,
        marginRight: 16,
        paddingHorizontal: 20,
    },
    totalContainer: {
        width: 200,
        alignItems: 'flex-end',
        paddingRight: 20,
        height: 80,
        justifyContent: "center",
    },
    deleteButton: {
        width: 50,
        height: "100%",
        backgroundColor: '#FD8204',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteButtonInner: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: "#000000",

    },
    itemSize: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    itemPrice: {
        fontSize: 14,
        color: '#FD8204',
        marginRight: 8,
    },
    itemQuantity: {
        fontSize: 13,
        fontWeight: 'bold',
        color: "#000000",
    },
    itemTotal: {
        fontSize: 16,
        fontWeight: '600',
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: '600',
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
    },
    applyButton: {
        position: 'absolute',
        right: 41,
        top: 6,
        backgroundColor: '#FD8204',
        paddingHorizontal: 16,
        paddingVertical: 10.5,
        borderRadius: 100,
        width: 70,
    },
    applyButtonText: {
        color: '#fff',
        fontWeight: '600',
        textAlign: "center",
    },
    viewPromoText: {
        color: '#666',
        fontSize: 16,
    },
    addressSection: {
        // marginBottom: 100,
        padding: 20,
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
    continueButton: {
        backgroundColor: '#FF7F00',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 16,
        width: "100%",
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
        // paddingHorizontal: 16,
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
        // marginTop: 4,
        marginHorizontal: 4
    },
    stepLine: {
        flex: 1,
        height: 1.7,
        backgroundColor: '#108F32',
        // marginHorizontal: 4,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 13,
        color: "#202020",
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
        // marginTop: 4,
        marginHorizontal: 4
    },
    disablestepLine: {
        flex: 1,
        height: 1.7,
        backgroundColor: '#C3C3C3',
        // marginHorizontal: 4,
    },
    divider: {
        height: 1,
        backgroundColor: "#D3D3D3",
        // marginVertical: 10,
    },
});

export default Cart;