import { themeColor } from "@/constants/colors";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";
// import { GestureHandlerRootView } from "react-native-gesture-handler";

export interface ButtonItem {
  id: string;
  label?: string;
  color: string;
}

interface DraggableButtonListProps {
  data: ButtonItem[];
  onReorder: (newData: ButtonItem[]) => void;
}

const DraggableButtonList: React.FC<DraggableButtonListProps> = ({
  data,
  onReorder,
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
  }: RenderItemParams<ButtonItem>) => (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: item.color },
        isActive && styles.activeButton,
      ]}
      onLongPress={drag}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>{item?.label}</Text>
    </TouchableOpacity>
  );

  return (
    // <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>
      <DraggableFlatList
        data={listData}
        keyExtractor={(item) => item.id}
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
