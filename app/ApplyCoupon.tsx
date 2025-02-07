import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from "react-native";
import { useNavigation } from '@react-navigation/native';


interface Coupon {
    id: string;
    discount: string;
    title: string;
    description: string;
}

const coupons: Coupon[] = [
    { id: "1", discount: "20% Off", title: "Try New", description: "Lorem Ipsum is simply dummy" },
    { id: "2", discount: "20% Off", title: "Try New", description: "Lorem Ipsum is simply dummy" },
    { id: "3", discount: "20% Off", title: "Try New", description: "Lorem Ipsum is simply dummy" },
    { id: "4", discount: "20% Off", title: "Try New", description: "Lorem Ipsum is simply dummy" },
    { id: "5", discount: "20% Off", title: "Try New", description: "Lorem Ipsum is simply dummy" },
    { id: "6", discount: "20% Off", title: "Try New", description: "Lorem Ipsum is simply dummy" },
    { id: "7", discount: "20% Off", title: "Try New", description: "Lorem Ipsum is simply dummy" },
];

const ApplyCoupon: React.FC = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const navigation = useNavigation();

    const renderItem = ({ item }: { item: Coupon }) => {
        const isSelected = item.id === selectedId;

        return (
            <TouchableOpacity
                style={[styles.card, isSelected && styles.selectedCard]}
                onPress={() => setSelectedId(item.id)}
            >
                <View style={[styles.discountBadge, isSelected && styles.selectedDiscount]}>
                    <Text style={[styles.discountText, isSelected && styles.selectedDiscount] }>{item.discount}</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={styles.subtitle}>{item.description}</Text>
                        <TouchableOpacity onPress={() => setSelectedId(item.id)}>
                            <Text style={[styles.applyButton, isSelected && styles.selectedApplyText]}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.divider} />
                    <Text style={styles.description}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.mainContainer}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <AntDesign name="arrowleft" size={24} color="#666666" />
                </TouchableOpacity>
                <Text style={styles.header}>Apply Coupon</Text>
                <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
                    <FlatList
                        data={coupons}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    />
                </ScrollView>
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
        backgroundColor: "#F9F9F9",
        paddingHorizontal: 16,
        paddingTop: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: -20
    },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFF",
        // padding: 16,
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: "#C5C5C540",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    selectedCard: {
        // borderWidth: 2,
        // borderColor: "#FD8204",
    },
    discountBadge: {
        backgroundColor: "#C3C3C3",
        paddingVertical: 54,
        // paddingHorizontal: 10,
        // borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
        width: 32,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    selectedDiscount: {
        backgroundColor: "#FD8204",
        color: "#fff"
    },
    discountText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        transform: [{ rotate: "-90deg" }],
        flexShrink: 1,
        textAlign: "center",
        width: 40
    },
    content: {
        flex: 1,
        paddingVertical: 20,
        paddingRight: 20
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 14,
        color: "#242424",
    },
    description: {
        fontSize: 14,
        color: "#000",
    },
    applyButton: {
        color: "#777",
        fontWeight: "bold",
        fontSize: 14,
    },
    selectedApplyText: {
        color: "#FD8204",
    },
    divider: {
        height: 1,
        backgroundColor: "#D3D3D3",
        marginVertical: 10,
    },
});

export default ApplyCoupon;
