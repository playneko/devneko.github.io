import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Navibar() {
  let [naviData, naviDataSet] = useState([
    {categori: 'Home', path: '/'},
    {categori: 'Rasberry Pi', path: '/rasberry-pi'},
    {categori: 'Python', path: '/python'},
    {categori: 'PHP', path: '/php'},
    {categori: 'Java', path: '/java'},
    {categori: 'Linux', path: '/linux'},
    {categori: 'JavaScript', path: '/java-script'},
    {categori: '아키바 정보', path: '/akihabara'},
    {categori: 'micro:bit', path: '/micro-bit'},
    {categori: '챗봇(ChatBot)', path: '/chat-bot'}
  ]);

  return (
    <List>
      {naviData.map((text, index) => (
          <ListItem button key={text.categori} component={Link} to={text.path}>
            <ListItemText primary={text.categori} />
          </ListItem>
      ))}
    </List>
  );
}
