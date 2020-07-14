import { StyleSheet } from "react-native";
import { colors } from "../../assets/styles/global.styles";

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.statusBarColor
  },
  headerTitle: {
    alignSelf: 'center'
  },
  scrollView: {
    backgroundColor: colors.bgColor
  },
  body: {
    minHeight: '100%'
  },
  footer: {
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  appWrapper: {
    maxHeight: '100%'
  }
})

export default styles
