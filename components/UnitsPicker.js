import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function UnitsPicker({ unitSystem, setUnitSystem }) {
  return (
    <View style={styles.unitSystem}>
      <Picker
        mode="dropdown"
        selectedValue={unitSystem}
        onValueChange={(item) => setUnitSystem(item)}
      >
        <Picker.Item label="C" value="metric" />
        <Picker.Item label="F" value="imperial" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  unitSystem: {
    width: 100,
    position: "absolute",
    top: 40,
    left: 20,
  },
});
