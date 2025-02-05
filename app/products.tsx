import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, Animated, ImageBackground, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Header from '@/components/Header';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const products: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const [selectedFabric, setSelectedFabric] = useState<string | null>(null);
    const navigation = useNavigation();

    const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>({
        addName: false,
        addNumber: false,
        premiumFabric: false,
    });

    const options = [
        { id: "addName", label: "Add Name on Shirt", label1: "$5" },
        { id: "addNumber", label: "Add Number on Shirt", label1: "$3" },
        { id: "premiumFabric", label: "Upgrade to Premium Fabric", label1: "$7" },
    ];

    const toggleAccordion = (section: string) => {
        setActiveAccordion(activeAccordion === section ? null : section);
    };

    const handleCheckboxChange = (id: string) => {
        setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <View style={styles.mainContainer}>
            {/* <LinearGradient colors={["#FFDFBE", "#FFFFFF00"]} style={styles.gradient} /> */}
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />


            <View style={styles.container}>
            <View style={styles.headerCon}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="#666666" />
    </TouchableOpacity>
    <Header text="Product Options" style={styles.header} />
</View>

                {/* Custom Image Slider */}
                <ImageBackground source={require('../assets/images/productsBG.png')} style={styles.sliderContainer}>
                    <View style={styles.sliderContainer}>
                        <CustomImageSlider
                            images={[
                                require('../assets/images/tshirt/HOCKEY_JERSEY_EDGE.png'),
                                require('../assets/images/tshirt/HOCKEY_JERSEY_EDGE.png'),
                                require('../assets/images/tshirt/HOCKEY_JERSEY_EDGE.png'),
                            ]}
                        />
                    </View>
                </ImageBackground>

                {/* Product Details */}
                <ScrollView style={styles.productDetails} contentContainerStyle={{ paddingBottom: 50 }}>
                    <Text style={styles.productTitle}>Hockey Polo T-Shirt</Text>
                    <Text style={styles.price}>$195.00</Text>
                    <Text style={styles.productSubTitle}>Select Type</Text>
                    {/* Accordion Sections */}
                    <Accordion
                        title="Fabric Type"
                        isActive={activeAccordion === 'Fabric Type'}
                        onPress={() => toggleAccordion('Fabric Type')}
                    >
                        {['Polyester', 'Cotton Blend', 'Mesh Fabric', 'Spandex Blend', 'Bamboo Fabric Blend', 'Nylon Blend'].map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => setSelectedFabric(item)}>
                                <View style={styles.divider} />
                                <Text style={[styles.accordionContent, selectedFabric === item && styles.activeText]}>
                                    {item}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </Accordion>

                    <Accordion
                        title="Product Options and Add Ons"
                        isActive={activeAccordion === "Product Options"}
                        onPress={() => toggleAccordion("Product Options")}
                    >
                        {options.map((option) => (
                            <>
                                <View style={styles.divider} />
                                <View key={option.id} style={styles.optionRow}>
                                    <CustomCheckbox
                                        checked={checkedItems[option.id]}
                                        onPress={() => handleCheckboxChange(option.id)}
                                    />
                                    <Text style={styles.optionText}>{option.label}</Text>
                                    <Text style={styles.optionText1}>- {option.label1}</Text>
                                </View>
                            </>
                        ))}
                    </Accordion>

                    <Accordion
                        title="Matching Custom Product"
                        isActive={activeAccordion === 'Matching Custom Product'}
                        onPress={() => toggleAccordion('Matching Custom Product')}
                    >
                        {options.map((option) => (
                            <>
                                <View style={styles.divider} />
                                <View key={option.id} style={styles.optionRow}>
                                    <CustomCheckbox
                                        checked={checkedItems[option.id]}
                                        onPress={() => handleCheckboxChange(option.id)}
                                    />
                                    <Text style={styles.optionText}>{option.label}</Text>
                                    <Text style={styles.optionText1}>- {option.label1}</Text>
                                </View>
                            </>
                        ))}
                    </Accordion>

                    {/* Continue Button */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
};

// Custom Image Slider Component
const CustomImageSlider: React.FC<{ images: any[] }> = ({ images }) => {
    const scrollX = new Animated.Value(0);
    const sliderRef = React.useRef<ScrollView>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleScroll = (event: any) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const newIndex = Math.round(contentOffsetX / width);
        setCurrentIndex(newIndex);
    };

    return (
        <View style={styles.sliderContainer}>
            <ScrollView
                ref={sliderRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false,
                    listener: handleScroll,
                })}
                scrollEventThrottle={16}
            >
                {images.map((image, index) => (
                    <View key={index} style={styles.imageWrapper}>
                        <Image source={image} style={styles.image} />
                    </View>
                ))}
            </ScrollView>

            {/* Dots Indicator */}
            <View style={styles.dotContainer}>
                {images.map((_, index) => (
                    <View key={index} style={[styles.dot, currentIndex === index && styles.activeDot]} />
                ))}
            </View>
        </View>
    );
};

// Custom Accordion Component
const Accordion: React.FC<{ title: string; isActive: boolean; onPress: () => void; children: React.ReactNode }> = ({
    title,
    isActive,
    onPress,
    children,
}) => (
    <View style={[styles.accordion, isActive && styles.activeAccordion]}>
        {/* Header */}
        <TouchableOpacity onPress={onPress} style={styles.accordionHeader}>
            <Text style={[styles.accordionTitle, isActive && styles.boldTitle]}>{title}</Text>
            <MaterialIcons
                name={isActive ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                size={24}
                color="#333"
            />
        </TouchableOpacity>

        {/* Content */}
        {isActive && <View style={styles.accordionBody}>{children}</View>}
    </View>
);


const CustomCheckbox: React.FC<{ checked: boolean; onPress: () => void }> = ({ checked, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.checkbox, checked && styles.checked]}>
            {checked && <MaterialIcons name="check" size={18} color="#FFA500" />}
        </TouchableOpacity>
    );
};

// Styles
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFDFBE',
        paddingTop: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    productDetails: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFF',
    },
    productTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    productSubTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
    price: {
        fontSize: 18,
        color: '#FFA500',
        marginBottom: 10,
    },
    imageWrapper: {
        width: width,
        height: height * 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
    },
    dotContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#C4C4C4',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#FFA500',
    },
    accordion: {
        backgroundColor: '#F6F6F6',
        borderRadius: 4,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden',
    },
    activeAccordion: {
        borderColor: '#DDDDDD',
    },
    accordionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 4,
        paddingHorizontal: 15,
    },
    accordionTitle: {
        fontSize: 16,
        // fontWeight: 'bold',
    },
    accordionBody: {
        paddingBottom: 10,
    },
    accordionContent: {
        fontSize: 14,
        paddingVertical: 1,
        color: '#333', // Default text color
        paddingHorizontal: 15,
    },
    activeText: {
        color: '#FFA500', // Orange color for selected item
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#FFA500',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
    divider: {
        height: 1,
        backgroundColor: "#D3D3D3", // Light gray divider
        marginVertical: 10,
    },
    optionRow: {
        flexDirection: "row",
        alignItems: "center",
        // paddingVertical: 1,
        paddingHorizontal: 15,
    },
    optionText: {
        fontSize: 16,
        color: "#444",
        marginLeft: 10,
    },
    optionText1: {
        fontSize: 16,
        color: "#646464",
        marginLeft: 10,
        fontWeight: 700,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#D2CFCF",
        backgroundColor: "#FFF",
        justifyContent: "center",
        alignItems: "center",
    },
    checked: {
        backgroundColor: "#FFF",
        borderColor: "#FFA500",
    },
    boldTitle: {
        fontWeight: 700,
    },
    gradient: {
        position: "absolute",
        minWidth: "120%",
        minHeight: 60, // Height of status bar (adjust if needed)
        top: 2,
        left: 0,
    },
    headerCon: {
        display: 'flex',
        // justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        padding: 20,
    },
    header: {
        color: '#6D6D6D',
        fontSize: 20,
        fontWeight: 900,
    }
});

export default products;