import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    fontFamily: "sans-serif",
    backgroundColor: "#eaf1f1",
  },

  table: {},

  row: {
    height: 50,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
  },

  icon: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    flexDirection: "row",
    flexGrow: 1,
  },

  ceil: {
    width: "15%",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 8,
  },

  headCeil: {
    borderLeftWidth: 1,
    borderLeftColor: "gray",
  },

  name: {
    width: "35%",
    flexShrink: 1,
  },

  text: {
    fontSize: 12,
  },

  input: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  inputText: {
    width: "100%",
    padding: 6,
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
  },
  pageLabel: { fontSize: 16 },
});

export { styles };
