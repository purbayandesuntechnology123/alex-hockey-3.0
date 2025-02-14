import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

interface Player {
  id: number;
  name: string;
  quantity: string;
  size: string;
}

const availableSizes = ["S", "M", "L", "XL", "XXL"];

const PlayerList = () => {
  const [players, setPlayers] = useState<Player[]>([
    { id: 101, name: "", quantity: "1", size: "S" },
  ]);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const addPlayer = () => {
    const newId = players.length > 0 ? players[players.length - 1].id + 1 : 101;
    setPlayers([...players, { id: newId, name: "", quantity: "1", size: "S" }]);
  };

  const removePlayer = (id: number) => {
    setPlayers(players.filter((player) => player.id !== id));
    if (openDropdownId === id) {
      setOpenDropdownId(null);
    }
  };

  const updatePlayer = (id: number, key: keyof Player, value: string) => {
    setPlayers(
      players.map((player) =>
        player.id === id ? { ...player, [key]: value } : player
      )
    );
  };

  const toggleDropdown = (id: number) => {
    setOpenDropdownId(openDropdownId === id ? null : id);
  };

  return (
    <View style={{ padding: 8, backgroundColor: "#656569", borderRadius: 8 }}>
      <View style={[styles.container, { maxHeight: 320 }]}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Player #</Text>
          <Text style={[styles.headerText, { flex: 1 }]}>Player Name</Text>
          <Text style={styles.headerText}>Quantity</Text>
          <Text style={[styles.headerText]}>Size</Text>
          <View style={{ width: 25 }} />
        </View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          scrollEnabled={true}
          nestedScrollEnabled={true}
        >
          {players.map((item, index) => (
            <View key={item.id} style={styles.row}>
              <TextInput
                style={styles.input}
                value={item.id.toString()}
                editable={false}
              />
              <TextInput
                style={[styles.input, { flex: 1 }]}
                placeholder="Name"
                placeholderTextColor={"#fff"}
                value={item.name}
                onChangeText={(text) => updatePlayer(item.id, "name", text)}
              />
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={item.quantity}
                onChangeText={(text) => updatePlayer(item.id, "quantity", text)}
              />

              {/* Size Dropdown Button */}
              <View style={styles.sizeDropdownContainer}>
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: 40,
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderRadius: 2,
                    borderColor: "#fff",
                  }}
                  onPress={() => toggleDropdown(item.id)}
                >
                  <TouchableOpacity
                    style={styles.sizeButton}
                    onPress={() => toggleDropdown(item.id)}
                  >
                    <Text style={styles.buttonText}>{item.size}</Text>
                  </TouchableOpacity>
                  <Ionicons name="chevron-down" size={10} color="black" />
                </TouchableOpacity>

                {/* Dropdown List */}
                {openDropdownId === item.id && (
                  <View style={styles.dropdown}>
                    <ScrollView>
                      {availableSizes.map((size) => (
                        <TouchableOpacity
                          key={size}
                          style={styles.dropdownItem}
                          onPress={() => {
                            updatePlayer(item.id, "size", size);
                            setOpenDropdownId(null);
                          }}
                        >
                          <Text style={styles.dropdownText}>{size}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                )}
              </View>
              {index === 0 ? (
                <TouchableOpacity style={styles.addButton} onPress={addPlayer}>
                  <Octicons name="plus" size={18} color="black" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => removePlayer(item.id)}
                >
                  <Feather name="minus" size={18} color="#fff" />
                </TouchableOpacity>
              )}
            </View>
          ))}

          {/* <TouchableOpacity style={styles.addButton} onPress={addPlayer}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity> */}
          {/* <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity> */}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: "#1D1F24", borderRadius: 10 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    gap: 10,
  },
  headerText: {
    color: "#fff",
    // fontWeight: "bold",
    // flex: 1,
    textAlign: "left",
    width: 50,
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // marginBottom: 10,
    gap: 10,
  },
  input: {
    backgroundColor: "#8B8888",
    color: "#fff",
    // flex: 1,
    width: 50,
    // margin: 5,
    marginBottom: 10,
    padding: 6,
    borderRadius: 2,
    minHeight: 30,
    borderWidth: 1,
    borderColor: "#fff",
  },
  sizeDropdownContainer: {
    position: "relative",
    marginBottom: 10,
  },
  sizeButton: {
    flex: 1,
    backgroundColor: "#8B8888",
    justifyContent: "center",
    // padding: 5,
    minHeight: 30,
    borderRadius: 2,
    // width: 40,
    borderWidth: 1,
    borderColor: "#fff",
  },
  dropdown: {
    position: "absolute",
    top: 35,
    left: 0,
    right: 15,
    backgroundColor: "#444",
    borderRadius: 5,
    padding: 5,
    zIndex: 10, // Ensures dropdown stays on top
    elevation: 5, // Shadow effect
    width: 40,
    height: 140,
  },
  dropdownItem: {
    padding: 2,
    alignItems: "center",
  },
  dropdownText: {
    color: "#fff",
    fontSize: 14,
  },
  removeButton: {
    backgroundColor: "#FF3D3D",
    // padding: 6,
    justifyContent: "center",
    borderRadius: 5,
    width: 35,
    height: 35,
    alignItems: "center",
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#ffff",
    // padding: 4,
    justifyContent: "center",
    width: 35,
    height: 35,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 10,
    // marginTop: 20,
  },
  submitButton: {
    backgroundColor: "#FFA500",
    padding: 15,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 12, textAlign: "center" },
  submitText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
});

export default PlayerList;
