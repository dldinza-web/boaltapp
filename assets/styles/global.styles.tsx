import { StyleSheet } from "react-native"

const colors = {
  statusBarColor: "#3C4750",
  bgColor: "#586169",
  cardInfoBg: "#EFEFF4",
  cardInfoTitle: '#E09A24',
  cardInfoTitle2: '#3F5D70',
  gray: '#A0A0A0'
}

const commonStyles = StyleSheet.create({
  debugBorder: {
    borderWidth: 1,
    borderColor: 'blue',
    borderStyle: "solid"
  },
  appBg: {
    backgroundColor: colors.bgColor
  },
  p5: {
    padding: 5
  },
  p10: {
    padding: 10
  },
  pb10: {
    paddingBottom: 10
  },
  pb20: {
    paddingBottom: 20
  },
  horizontal: {
    flexDirection: 'row'
  },
  strongText: {
    fontWeight: 'bold'
  },
  textWhite: {
    color: 'white'
  },
  fontSizeX: {
    fontSize: 16
  }
})

export default commonStyles

export {
  colors
}
