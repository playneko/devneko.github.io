import React from 'react';
import clsx from 'clsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles, useTheme, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// 컴포넌트
// 타이틀
import Title from "./component/Title";
// 네비게이션
import Navibar from "./component/Navibar";
// 스크롤탑 
import ScrollToTop from './component/ScrollToTop';
// 카테고리
import Category from "./component/Category";
// 상세페이지
import Detail from "./component/Detail";
// 검색
import Search from "./component/Search";
// Footer
import Footer from "./component/Footer";
// NotFound
// import NotFound from "./component/NotFound"
// CSS
import './styles/App.css';

const drawerWidth = 240;

// 타이틀 세팅
const useTitle = Title();
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarFlex: {
    display: 'flex',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
}));

const colorTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: '#4e342e',
    },
  },
});

function App() {
  // 타이틀 변경
  useTitle("Playneko - 아키하바라와 개발정보를 공유하는 블로그 입니다.");

  // 스타일/테마 정보
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [myTheme, setMyTheme] = React.useState(colorTheme);

  // 네비게이션 열기
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // 네비게이션 닫기
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <ThemeProvider theme={myTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title + " headerTitle"} variant="h6" noWrap>
              여러가지 개발정보를 공유하는 블로그 입니다.
            </Typography>
            <Search />
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <div className={classes.toolbar} />
          <Divider />
          <Navibar />
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Typography paragraph>
            <Switch>
              <ScrollToTop>
                <Route exact path="/" render={() => <Category catpage="0" />} />
                <Route path="/rasberry-pi" render={() => <Category catpage="1" />} />
                <Route path="/python" render={() => <Category catpage="2" />} />
                <Route path="/php" render={() => <Category catpage="3" />} />
                <Route path="/java" render={() => <Category catpage="4" />} />
                <Route path="/linux" render={() => <Category catpage="5" />} />
                <Route path="/java-script" render={() => <Category catpage="6" />} />
                <Route path="/akihabara" render={() => <Category catpage="7" />} />
                <Route path="/micro-bit" render={() => <Category catpage="8" />} />
                <Route path="/chat-bot" render={() => <Category catpage="9" />} />
                <Route path="/search/:keyword" component={Category} />
                <Route path="/detail/:id" component={Detail} />
                {/* <Route component={NotFound} /> */}
              </ScrollToTop>
            </Switch>
          </Typography>
        </main>
      </div>
      <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
