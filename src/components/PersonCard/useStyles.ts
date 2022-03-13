import { IPropsCard } from './index';
import { ITheme } from '../../App';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: ITheme) => ({
  card: (props: IPropsCard) => ({
    maxHeight: props.maxHeight || '400px',
    marginTop: '0.8rem',
    width: '70% !important'
  }),
  cardRow: {
    padding: '15px 20px'
  },
  cardImgContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  cardStats: {
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  cardItem: (props: IPropsCard) => ({
    backgroundColor: props.cardStatsBgColor || 'transparent',
    fontSize: '0.76rem'
  }),
  cardBtns: {
    paddingRight: '10px'
  },
  cardImg: (props: IPropsCard) => ({
    objectFit: 'cover',
    width: '225px',
    height: '250px'
  })
}));

export default useStyles;
