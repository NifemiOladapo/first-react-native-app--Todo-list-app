import { Button, Modal, Text, View } from "react-native";

const SettingsModal = ({
  settingsIsOpen,
  setSettingsIsOpen,
  setCloseOnaddGoal,
  closeOnaddGoal,
}) => {
  return (
    <Modal
      visible={settingsIsOpen}
      animationType="slide"
      onRequestClose={() => setSettingsIsOpen(false)}
    >
      <View style={{ padding: 20 }}>
        <View style={{ marginBottom: 35 }}>
          <Text style={{ fontSize: 36 }}>Settings</Text>
        </View>
        <View>
          <Text style={{ fontSize: 22, paddingBottom: 10 }}>
            On add of a goal
          </Text>
          <View style={{ marginLeft: 18 }}>
            <Text
              onPress={() => setCloseOnaddGoal(true)}
              style={{
                fontSize: closeOnaddGoal ? 17 : 15,
                padding: 5,
                fontWeight: closeOnaddGoal ? "bold" : "normal",
              }}
            >
              Close Modal
            </Text>
            <Text
              onPress={() => setCloseOnaddGoal(false)}
              style={{
                fontSize: closeOnaddGoal ? 15 : 17,
                padding: 5,
                fontWeight: closeOnaddGoal ? "normal" : "bold",
              }}
            >
              Do not Close Modal
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 300 }}>
          <Button onPress={() => setSettingsIsOpen(false)} title="Close" />
        </View>
      </View>
    </Modal>
  );
};

export default SettingsModal;
