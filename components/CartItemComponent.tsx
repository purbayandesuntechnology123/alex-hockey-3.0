// components/CartItemComponent.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

interface CartItem {
    id: string;
    name: string;
    size: string;
    price: number;
    quantity: number;
}

interface CartItemComponentProps {
    item: CartItem;
    onDelete: () => void;
}

const CartItemComponent: React.FC<CartItemComponentProps> = ({ item, onDelete }) => {
    const renderRightActions = (progress: Animated.AnimatedInterpolation<number>) => {
        const translateX = progress.interpolate({
            inputRange: [0, 1],
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
            <View style={{ paddingHorizontal: 20 }}>
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

const styles = StyleSheet.create({
    cartItemContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: 80,
    },
    cartItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
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
        backgroundColor: "#fff"
    },
    deleteButton: {
        width: 50,
        height: "100%",
        backgroundColor: '#FD8204',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 15
    },
    deleteButtonInner: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemName: {
        fontSize: 12,
        fontWeight: 600,
        color: "#000000",
    },
    itemSize: {
        fontSize: 9,
        color: '#7D7D7D',
        marginTop: 4,
        fontWeight: 500,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    itemPrice: {
        fontSize: 13,
        color: '#FD8204',
        marginRight: 8,
        fontWeight: 500,
    },
    itemQuantity: {
        fontSize: 13,
        color: "#1D1F24",
        fontWeight: 500,
    },
    itemTotal: {
        fontSize: 14,
        fontWeight: '500',
    },
    divider: {
        height: 1,
        backgroundColor: "#D3D3D3",
    },
});

export default CartItemComponent;