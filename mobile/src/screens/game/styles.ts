import { THEME } from './../../theme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between',
  },
  logo: {
    width: 72,
    height: 40,
  },
  right: {
    width: 20,
    height: 20,
  },
  cover: {
    width: 311,
    height: 160,
    borderRadius: 8,
    marginTop: 32,
  },
  containerList: {
    width: '100%',
  },
  contentListMultipleCards: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexGrow: 1,
  },
  contentListSingleCard: {
    paddingLeft: 16,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexGrow: 1,
  },
  contentNoCards: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 200,
  },
  emptyListText: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    width: 250,
    // paddingTop: 100,
    // justifyContent: 'center',
    textAlign: 'center',
  },
});
