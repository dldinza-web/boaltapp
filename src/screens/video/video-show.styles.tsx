import { StyleSheet } from "react-native"
import { colors } from "../../../assets/styles/global.styles"

const styles = StyleSheet.create({
  backgroundVideo: {
    minHeight: 288,
  },
  cardInfo: {
    backgroundColor: colors.cardInfoBg,
    marginVertical: 2.5
  },
  cardHeaderTitle: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    color: 'white'
  },
  cardContentTitleBg1: {
    backgroundColor: colors.cardInfoTitle,
  },
  cardContentTitleBg2: {
    backgroundColor: colors.cardInfoTitle2,
  },
  cardHeaderDate: {
    flex: 1,
    textAlign: 'right',
    paddingVertical: 2,
    paddingRight: 20
  },
  cardContent: {
    padding: 20
  },
  cardContentLeft: {
    flex: 1
  },
  cardContentRight: {
    flex: 1,
    paddingLeft: 10
  },
  cardContentRightText: {
    textAlign: 'right',
    color: colors.gray
  },
  commentsTitle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5
  }
})

export default styles
