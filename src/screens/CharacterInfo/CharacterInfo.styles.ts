import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaf1f1",
  },

  header: {
    height: 88,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },

  headerFlex: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 16,
  },

  headerTitle: {
    fontSize: 17,
    fontWeight: "500",
  },

  exit: {
    width: 24,
    height: 24,
  },

  mainContainer: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },

  card: {},

  name: {
    fontSize: 36,
    fontWeight: "bold",
    alignSelf: "center",
  },

  info: {
    marginTop: 12,
    fontSize: 18,
    alignSelf: "center",
  },
});

export { styles };
