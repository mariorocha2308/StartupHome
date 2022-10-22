import { StyleSheet } from "react-native";

const sx = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  title: {
    fontSize: 35,
    fontWeight: "bold"
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '23%'
  }
});

export { sx }