import { StyleSheet } from "react-native"
import { colors } from "../../../assets/styles/global.styles"

const styles = StyleSheet.create({
  videoWrapper: {
    minHeight: 288,
  },
  activityIndicator: {
    alignSelf: 'center',
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  broadcastingBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 5,
    marginBottom: 5,
    alignItems: 'center',
    paddingVertical: 5
  },
  broadcastingBtn: {
    backgroundColor: colors.cardInfoBg,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 32
  },
  broadcastingBtnLeft: {
    marginLeft: 5,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    paddingHorizontal: 2,
    borderRightWidth: 1,
    borderRightColor: 'rgba(255, 255, 255, 0.2)'
  },
  broadcastingBtnRight: {
    marginRight: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 5
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
