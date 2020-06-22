import { StyleSheet, Dimensions } from 'react-native';
import Color from '../utils/Color';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.DEFAULT_BG,
  },
  splitLine: {
    height: 1,
    width: Dimensions.get('window').width - 56,
    marginLeft: 28,
    backgroundColor: Color.SPLIT_LINE,
  },
  circleSpecialWrapper: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  specialText: {
    fontSize: 20,
    color: Color.WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 23,
  },
  articleTitle: {
    fontSize: 28,
    color: Color.TEXT_MAIN,
    fontWeight: 'bold',
  },
});
