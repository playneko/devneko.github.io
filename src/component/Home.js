import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import axios from 'axios'

// axios.post('url/signin', { id : id, password : password }).then((response)=> {
// 	// 성공 시
// }).catch((e) => {
// 	// 실패 시
// });

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
    width: 55,
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
        <div className={classes.mediaLeft}>
            <Card className={classes.root}>
            <CardHeader
                avatar={
                <Avatar aria-label="recipe">
                    <img src='https://playneko.com/wp-content/uploads/2020/04/cropped-avatarimg_user1.png' className={classes.avatar} />
                </Avatar>
                }
                title="라즈베리파이에서 Nyan Cat 테마 설치후 사용하기"
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image="https://playneko.com/wp-content/uploads/2020/09/89e1b67580dc297198e1c8aa76d49d21.png"
                title="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    이번에 소개할 내용은 라즈베리파이에서 Nyan Cat 테마 설치후 사용하기 입니다.
                </Typography>
            </CardContent>
            </Card>
        </div>
    </>
  );
}