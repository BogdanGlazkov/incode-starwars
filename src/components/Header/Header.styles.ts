import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 42,
    color: "rgba(0,0,0,0.9)",
  },

  clearBtn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 4,
  },

  clearBtnText: {
    textTransform: "uppercase",
    letterSpacing: 1,
    color: "red",
  },

  genderBoxes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  genderBox: {
    width: "32%",
    height: 90,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 4,
    backgroundColor: "#fff",
  },

  genderNumber: {
    fontSize: 36,
  },

  genderName: {
    fontSize: 16,
  },

  elevation: {
    elevation: 20,
    shadowColor: "#000",
  },
});

export { styles };
