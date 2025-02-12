import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
// import { Button } from "react-native-paper";

type Player = {
  id: string;
  name: string;
  quantity: number;
  size: string;
};

const RosterBuilder = () => {
  const [players, setPlayers] = useState<Player[]>([
    { id: "101", name: "Yuppy", quantity: 2, size: "L" },
    { id: "102", name: "Ruby", quantity: 2, size: "M" },
    { id: "103", name: "Ottawa", quantity: 2, size: "S" },
  ]);

  const addRow = (index: number) => {
    const newId = (parseInt(players[players.length - 1].id) + 1).toString();
    const newRow: Player = { id: newId, name: "", quantity: 1, size: "S" };

    const updatedPlayers = [...players];
    updatedPlayers.splice(index + 1, 0, newRow);
    setPlayers(updatedPlayers);
  };

  const removeRow = (id: string) => {
    if (players.length > 1) {
      setPlayers(players.filter((player) => player.id !== id));
    }
  };

  const updatePlayer = (
    id: string,
    field: keyof Player,
    value: string | number
  ) => {
    setPlayers(
      players.map((player) =>
        player.id === id ? { ...player, [field]: value } : player
      )
    );
  };

  const renderItem = ({ item, index }: { item: Player; index: number }) => (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        value={item.id}
        onChangeText={(text) => updatePlayer(item.id, "id", text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={item.name}
        onChangeText={(text) => updatePlayer(item.id, "name", text)}
      />
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          onPress={() =>
            updatePlayer(item.id, "quantity", Math.max(1, item.quantity - 1))
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={item.quantity.toString()}
          keyboardType="numeric"
          onChangeText={(text) =>
            updatePlayer(item.id, "quantity", parseInt(text) || 1)
          }
        />
        <TouchableOpacity
          onPress={() => updatePlayer(item.id, "quantity", item.quantity + 1)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        value={item.size}
        onChangeText={(text) => updatePlayer(item.id, "size", text)}
      />
      <TouchableOpacity
        onPress={() => addRow(index)}
        style={[styles.actionButton, { backgroundColor: "green" }]}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => removeRow(item.id)}
        style={[styles.actionButton, { backgroundColor: "red" }]}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/* <Button mode="contained" style={styles.submitButton} onPress={() => console.log(players)}>
        Submit
      </Button> */}
    </View>
  );
};

const styles = {
  container: {
    padding: 20,
    backgroundColor: "#333",
    borderRadius: 10,
    margin: 10,
  },
  row: {
    flexDirection: "row" as "row",
    alignItems: "center" as "center",
    marginBottom: 10,
    backgroundColor: "#444",
    padding: 10,
    borderRadius: 5,
  },
  input: {
    backgroundColor: "#555",
    color: "white",
    flex: 1,
    padding: 5,
    textAlign: "center" as "center",
    borderRadius: 5,
  },
  quantityContainer: {
    flexDirection: "row" as "row",
    alignItems: "center" as "center",
    flex: 2,
    justifyContent: "center" as "center",
  },
  button: {
    backgroundColor: "#777",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  actionButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  submitButton: {
    backgroundColor: "#FFA500",
    marginTop: 20,
  },
};

export default RosterBuilder;
