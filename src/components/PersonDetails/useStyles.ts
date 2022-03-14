import { IPersonDetailsProps } from './index';
import { ITheme } from '../../App';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme: ITheme) => ({
  detailsContainer: {
    margin: {
      top: '2rem',
      bottom: '10rem'
    }
  },
  detailsImg: (props: IPersonDetailsProps) => ({
    height: props.imgHeight || '250px'
  }),
  imgContainer: {
    padding: {
      bottom: '1rem'
    }
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  navTabs: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: 'unset'
  },

  navItem: {
    backgroundColor: 'transparent',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  selectedNavItem: {
    backgroundColor: theme.color.gray05
  },
  navLink: {
    textDecoration: 'none',
    color: theme.color.primary,
    '&:active': {
      color: theme.color.tertiary
    },
    '&:hover': {
      cursor: 'pointer'
    }
  },
  selectedNavLink: {
    textDecoration: theme.color.tertiary
  }
}));

export default useStyles;
