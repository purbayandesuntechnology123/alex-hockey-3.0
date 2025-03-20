import { themeColor } from "@/constants/colors";
import { Color } from "@/interface/tshirtinterface";
// import { wordmarkColor } from "@/interface/tshirtinterface";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

export interface ButtonItem {
  id: number;
  label?: string;
  color: string;
  canChange: boolean;
}

interface DraggableButtonListProps {
  data: Color[];
  onReorder: (newData: ButtonItem[]) => void;
  onPress: (id: string) => void;
}

const DraggableButtonList: React.FC<DraggableButtonListProps> = ({
  data,
  onReorder,
  onPress,
}) => {   
  // console.log("color===>",data)

  const [listData, setListData] = useState<ButtonItem[]>(data);

  useEffect(() => {
    setListData(data);
  }, [data]);  

  const renderItem = ({
    item,
    drag,
    isActive,
    getIndex,
  }: RenderItemParams<ButtonItem>) => (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: item.color },
        isActive && styles.activeButton,
      ]}
      onPress={() => {
        const index = getIndex();
        if (index !== undefined) {     
            onPress(index.toString());
        }
      }}
      onLongPress={drag}
      activeOpacity={0.8}
    >   
      <Text style={styles.buttonText}>
        {item?.id}
      </Text>
    </TouchableOpacity>    
  );          

  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
      <DraggableFlatList     
        data={listData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onDragEnd={({ data }) => {
          setListData(data);
          onReorder(data);
        }}
        horizontal={true}
        contentContainerStyle={styles.listContent}       
      />
    </View>    
    // </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff00",
  },
  listContent: {
    flexDirection: "row",  
    alignItems: "center",    
    // paddingHorizontal: 10,     
  },
  button: {
    padding: 10,
    margin: 5,
    backgroundColor: "#007bff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 70,  
  },
  activeButton: {
    backgroundColor: "#0056b3",
  },
  buttonText: {
    color: themeColor.white,
    fontSize: 16,
  },
});

export default DraggableButtonList;
