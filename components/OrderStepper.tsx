import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Modal,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

type Step = {
  title: string;
  description?: string;
  isCompleted: boolean;
};

const assignedDate = new Date("2025-02-03"); 

const initialSteps: Step[] = [
  { title: "Order Confirmed", description: "Your order has been placed", isCompleted: true },
  { title: "Shipped", isCompleted: false },
  { title: "Out for Delivery", isCompleted: false },
  { title: `Delivery, ${assignedDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })} by 11 PM`, isCompleted: false },
];

const OrderStepper = () => {
  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    assignedDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  );

  const pointerPosition = useRef(new Animated.Value(0)).current;

  let latestCompletedIndex = -1;
  for (let i = 0; i < steps.length - 1; i++) {
    if (steps[i].isCompleted && !steps[i + 1].isCompleted) {
      latestCompletedIndex = i;
      break;
    }
  }

  useEffect(() => {
    if (latestCompletedIndex !== -1) {
      Animated.timing(pointerPosition, {
        toValue: 31,
        duration: 1500,
        useNativeDriver: true,
      }).start();
    }
  }, [latestCompletedIndex]);

  const getNextFiveDays = () => {
    const datesArray = [];
    for (let i = 0; i < 6; i++) {
      const nextDate = new Date(assignedDate);
      nextDate.setDate(assignedDate.getDate() + i);

      const formattedDate = nextDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      datesArray.push(formattedDate);
    }
    return datesArray;
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setIsModalVisible(false);

    const updatedSteps = [...steps];
    updatedSteps[3] = { ...updatedSteps[3], title: `Delivery, ${date} by 11 PM` };
    setSteps(updatedSteps);
  };

  return (
    <View style={styles.container}>
      {steps.map((step, index) => (
        <View key={index} style={styles.stepContainer}>
          <View style={styles.lineContainer}>
            <View style={styles.circleWrapper}>
              {step.isCompleted ? (
                <>
                  <View style={[styles.circle, styles.completedCircle]}>
                    <AntDesign name="check" size={10} color="white" />
                  </View>
                  {index === latestCompletedIndex && (
                    <Animated.View
                      style={[
                        styles.pointerDot,
                        { transform: [{ translateY: pointerPosition }] },
                      ]}
                    >
                      <View style={styles.pointerInnerDot} />
                    </Animated.View>
                  )}
                </>
              ) : (
                <View style={styles.circle} />
              )}
              {index !== steps.length - 1 && <View style={styles.line} />}
            </View>
          </View>
          <View style={[styles.textContainer, step.isCompleted && styles.highlightedText]}>
            <Text style={styles.title}>{step.title}</Text>
            {step.description && <Text style={styles.description}>{step.description}</Text>}
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.changeDateButton} onPress={() => setIsModalVisible(true)}>
        <Text style={styles.changeDateText}>Change Date</Text>
      </TouchableOpacity>

      <Modal visible={isModalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Delivery Date</Text>
            <FlatList
              data={getNextFiveDays()} 
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.dateItem} onPress={() => handleDateSelect(item)}>
                  <Text style={styles.dateText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  lineContainer: {
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  circleWrapper: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  circle: {
    width: 18,
    height: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#A7A7A7",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  completedCircle: {
    backgroundColor: "#FD8204",
    borderColor: "#FD8204",
    zIndex: 15,
  },
  pointerDot: {
    position: "absolute",
    top: 0,
    width: 18,
    height: 18,
    borderRadius: 12,
    backgroundColor: "#FDAB57",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pointerInnerDot: {
    width: 8,
    height: 8,
    borderRadius: 12,
    backgroundColor: "#FD8204",
    zIndex: 10,
  },
  line: {
    width: 1,
    height: 31,
    backgroundColor: "#A7A7A7",
  },
  textContainer: {
    flex: 1,
  },
  highlightedText: {
    backgroundColor: "#FD82046B",
    padding: 8,
    borderRadius: 8,
    marginLeft: -35,
    paddingLeft: 40,
    marginTop: -6,
  },
  title: {
    fontSize: 12,
    fontWeight: "400",
    color: "#131313",
  },
  description: {
    fontSize: 10,
    color: "#252525",
    fontWeight: "400",
  },
  changeDateButton: {
    marginTop: -30,
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "#FD8204",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 2,
    backgroundColor: "#FFFFFF",
  },
  changeDateText: {
    color: "#FD8204",
    fontWeight: "400",
    fontSize: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
},
  dateItem: {
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  dateText: {
    fontSize: 14,
    color: "#333",
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: "red",
  },
});

export default OrderStepper;
