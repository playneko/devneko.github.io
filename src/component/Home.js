import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Homes from "./json/Homes";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  mediaLeft: {
    float: 'left',
    paddingRight: '20px',
    paddingBottom: '20px',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: '55px',
  },
}));

export default function Home() {
  const classes = useStyles();
  // 메인 리스트 취득
  const listData = Homes();
  console.log(listData);

  return (
    <>
    {
      listData.map(list => (
        <div className={classes.mediaLeft}>
          <Card className={classes.root}>
          <CardHeader
              avatar={
                <Avatar aria-label="recipe">
                    <img src='https://playneko.com/wp-content/uploads/2020/04/cropped-avatarimg_user1.png' className={classes.avatar} />
                </Avatar>
              }
              title={list.subject}
              subheader="September 14, 2016"
          />
          <CardMedia
              className={classes.media}
              image={list.thumbnail}
              title="Paella dish"
          />
          <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                  이번에 소개할 내용은 라즈베리파이에서 Nyan Cat 테마 설치후 사용하기 입니다.
              </Typography>
          </CardContent>
          </Card>
        </div>
      ))
    }
    </>
  );
}
