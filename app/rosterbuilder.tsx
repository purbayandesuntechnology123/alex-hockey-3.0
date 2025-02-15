import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, Animated, StatusBar, FlatList, ImageBackground, TextInput } from 'react-native';
import Header from '@/components/Header';
import { useNavigation } from '@react-navigation/native';
import PlayerList from '@/components/BottomSheetComponent/PlayerList';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const sizes = ["S", "M", "L", "XL", "XXL"];

interface Jersey {
    id: string;
    name: string;
    price: string;
    image: any;
}

const jerseys: Jersey[] = [
    {
        id: '1',
        name: 'Hockey Sport T-Shirt',
        price: '$99.00',
        image: require('../assets/images/tshirt/HOCKEY_JERSEY_EDGE.png'),
    },
    {
        id: '2',
        name: 'Hockey Ground T-Shirt',
        price: '$99.00',
        image: require('../assets/images/tshirt/HOCKEY_JERSEY_EDGE.png'),
    },
];

const rosterbuilder: React.FC = () => {
    const router = useRouter()
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const [selectedFabric, setSelectedFabric] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedQuantity, setSelectedQuantity] = useState<string | null>(null);
    const [selectedQuantityPrice, setSelectedQuantityPrice] = useState<string | null>(null);

    const navigation = useNavigation();

    const toggleAccordion = (section: string) => {
        setActiveAccordion(activeAccordion === section ? null : section);
    };

    const handleAddToCart = () => {
        if (!selectedSize || !selectedQuantity || !selectedQuantityPrice) {
            alert('Please select a size and quantity before adding to cart.');
            return;
        }

        const cartItem = {
            size: selectedSize,
            quantity: selectedQuantity,
            price: selectedQuantityPrice,
            product: {
                id: '1',
                name: 'Hockey Polo T-Shirt',
                price: '$195.00',
                image: require('../assets/images/tshirt/HOCKEY_JERSEY_EDGE.png'),
            },
        };

        console.log('Added to Cart:', cartItem);
        router.push("/Cart")
    };

    const handleUploadFile = () => {
        router.push("/rosterBuilderImport")
    }

    return (
        <View style={styles.mainContainer}>
            <StatusBar
                translucent
                backgroundColor="transparent"
                barStyle="dark-content"
            />
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerCon} >
                    <AntDesign name="arrowleft" size={24} color="#666666" />
                    <Header text="Roster Builder" style={styles.header} />
                </TouchableOpacity>

                {/* Custom Image Slider */}
                {/* <View style={styles.sliderContainer}>
                    <CustomImageSlider
                        images={[
                            require('../assets/images/tshirt/HOCKEY_JERSEY_EDGE.png'),
                            require('../assets/images/tshirt/HOCKEY_JERSEY_EDGE.png'),
                            require('../assets/images/tshirt/HOCKEY_JERSEY_EDGE.png'),
                        ]}
                    />
                </View> */}

                {/* Product Details */}
                <ScrollView style={styles.productDetails} contentContainerStyle={{ paddingBottom: 50 }}>
                    <Text style={styles.productTitle}>Hockey Polo T-Shirt</Text>
                    <Text style={styles.price}>$195.00</Text>
                    <Text style={styles.productSubTitle}>Available Size</Text>

                    <View style={styles.buttonContainer}>
                        {sizes.map((size) => (
                            <TouchableOpacity
                                key={size}
                                style={[
                                    styles.sizebutton,
                                    selectedSize === size && styles.selectedButton,
                                ]}
                                onPress={() => setSelectedSize(size)}
                            >
                                <Text
                                    style={[
                                        styles.sizebuttonText,
                                        selectedSize === size && styles.selectedText,
                                    ]}
                                >
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    {/* Accordion Sections */}
                    <View style={{ marginTop: 20 }}>
                        <Accordion
                            title="Select Quantity"
                            activeTitle="Choose Your Quantity Range"
                            isActive={activeAccordion === 'Select Quantity'}
                            onPress={() => toggleAccordion('Select Quantity')}
                        >
                            {[
                                { label: '1 to 5', price: '$69.99' },
                                { label: '6 to 24', price: '$49.99' },
                                { label: '25 to 75', price: '$38.99' },
                                { label: '75 to 150', price: '$29.99' },
                                { label: 'Above 150+', price: '$24.99' }
                            ].map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        setSelectedFabric(item.label);
                                        setSelectedQuantity(item.label);
                                        setSelectedQuantityPrice(item.price);
                                    }}
                                >
                                    <View style={[
                                        styles.row,
                                        selectedFabric === item.label && styles.selectedRow 
                                    ]}>
                                        <Text style={[styles.accordionContent,
                                            //  selectedFabric === item.label && styles.activeText
                                             ]}>
                                            {item.label}
                                        </Text>
                                        <Text style={[styles.priceText, 
                                            // selectedFabric === item.label && styles.activeText
                                            ]}>
                                            {item.price}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </Accordion>
                    </View>
                    
                    <Text style={styles.titleQuantity}>Enter Quantity</Text>
                    <TextInput style={styles.input} keyboardType='numeric' />

                    <View style={{flexDirection: "row", marginBottom: 10}}>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <Text>Selected Quantity: 20</Text>
                        </View>
                        <TouchableOpacity activeOpacity={.5} style={{flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#4E4E4F", padding: 5, borderRadius: 2, paddingHorizontal: 10}}
                        onPress={handleUploadFile}
                        >
                            <Feather name="upload" size={18} color="#fff" />
                            <Text style={{color: "#fff", fontSize: 10}}>Upload Roster File</Text>
                        </TouchableOpacity>
                    </View>
                    <PlayerList />
                    {/* <Text style={styles.title}>Similar Jersey</Text>
                    <FlatList
                        data={jerseys}
                        horizontal
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View>
                                <ImageBackground source={require('../assets/images/rosterCardBG.png')} style={styles.card}>
                                    <Image source={item.image} style={styles.cardImage} />
                                </ImageBackground>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.cardPrice}>{item.price}</Text>
                            </View>
                        )}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                    /> */}
                    {/* Add to Cart Button */}
                    <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
                        <Text style={styles.buttonText}>Add to Cart</Text>
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
                    <View key={index} style={currentIndex === index ? styles.activeDot : styles.dot}>
                        {currentIndex === index && <View style={styles.activeDotInner} />}
                    </View>
                ))}
            </View>
        </View>
    );
};

// Custom Accordion Component
const Accordion: React.FC<{
    title: string;
    activeTitle: string;
    isActive: boolean;
    onPress: () => void;
    children: React.ReactNode
}> = ({
    title,
    activeTitle,
    isActive,
    onPress,
    children,
}) => (
        <View style={[styles.accordion, isActive && styles.activeAccordion]}>
            {/* Header */}
            <TouchableOpacity onPress={onPress} style={styles.accordionHeader}>
                <Text style={[styles.accordionTitle, isActive && styles.boldTitle]}>
                    {isActive ? activeTitle : title}
                </Text>
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


// Styles
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FD8204',
        paddingTop: 30,
    },
    container: {
        flex: 1,
        backgroundColor: '#FCFCFC',
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
        // padding: 20,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
    },
    productTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    productSubTitle: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '700',
        color: "#646464",
        paddingBottom: 10,
    },
    price: {
        fontSize: 14,
        color: '#FD8204',
        lineHeight: 29,
        marginBottom: 5,
        fontWeight: '700',
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
        alignItems: 'center',
    },
    dot: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: '#C4C4C4',
        marginHorizontal: 8,
    },
    activeDot: {
        width: 15,
        height: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FD8204',
        justifyContent: 'center',
        alignItems: 'center',
    },

    activeDotInner: {
        width: 7,
        height: 7,
        borderRadius: 4,
        backgroundColor: '#FD8204',
    },
    accordion: {
        backgroundColor: '#F6F6F6',
        borderRadius: 4,
        marginBottom: 15,
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
        paddingHorizontal: 10,
    },
    accordionTitle: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '700',
        color: "#646464",
        // fontWeight: 'bold',
    },
    accordionBody: {
        // paddingBottom: 10,
    },
    accordionContent: {
        fontSize: 14,
        paddingVertical: 1,
        color: '#333',
        // paddingHorizontal: 10,
    },
    activeText: {
        color: '#FD8204',
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderTopWidth: 1,       
        borderBottomWidth: 0,    
        borderLeftWidth: 0,      
        borderRightWidth: 0,    
        borderColor: "#DDDDDD",
    },
    selectedRow: {
        borderColor: "#FD8204",
        backgroundColor: "#FD820412",
        borderLeftWidth: 1,      
        borderRightWidth: 1, 
        borderBottomWidth: 1,
    },
    priceText: {
        fontSize: 14,
        color: '#333',
        fontWeight: '700',
    },
    button: {
        backgroundColor: '#FD8204',
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
        backgroundColor: "#D3D3D3",
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
    boldTitle: {
        fontWeight: 700,
    },
    gradient: {
        position: "absolute",
        minWidth: "120%",
        minHeight: 60,
        top: 2,
        left: 0,
    },
    headerCon: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    header: {
        color: '#6D6D6D',
        fontSize: 18,
        lineHeight: 37,
        fontWeight: 900,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 15,
    },
    sizebutton: {
        width: 40,
        height: 40,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
    },
    selectedButton: {
        borderColor: "#000",
        backgroundColor: "#000",
    },
    sizebuttonText: {
        fontSize: 14,
        lineHeight: 21,
        fontWeight: '600',
        color: "#888888",
    },
    selectedText: {
        color: "#fff",
        fontWeight: "600",
    },
    separator: {
        width: 29,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    titleQuantity: {
        fontSize: 16,
        fontWeight: '500',
        color: "#383838",
        marginBottom: 4,
    },
    input: {
        backgroundColor: "#FCFCFC",
        padding: 10,
        borderRadius: 4,
        marginTop: 2,
        borderColor: "#D3D3D3",
        borderWidth: 1,
        height: 45,
        marginBottom: 10,
    },
    card: {
        padding: 16,
        borderRadius: 22,
        alignItems: 'center',
        width: 170,
        height: 190,
        justifyContent: "center",
    },
    cardImage: {
        width: 107,
        height: 129,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center',
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ff8800',
        marginTop: 4,
        textAlign: 'center',
    },
});

export default rosterbuilder;