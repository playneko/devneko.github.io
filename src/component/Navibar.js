import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Navibar() {
  let [naviData, naviDataSet] = useState([
    {categori: 'Home', path: '/', component: ''},
    {categori: 'Rasberry Pi', path: '/rasberry-pi', component: 'RasberryPi'},
    {categori: 'Python', path: '/python', component: 'RasberryPi'},
    {categori: 'PHP', path: '/php', component: 'RasberryPi'},
    {categori: 'Java', path: '/java', component: 'RasberryPi'},
    {categori: 'Linux', path: '/linux', component: 'RasberryPi'},
    {categori: 'JavaScript', path: '/java-script', component: 'RasberryPi'},
    {categori: '아키바 정보', path: '/akihabara', component: 'RasberryPi'},
    {categori: 'micro:bit', path: '/micro-bit', component: 'RasberryPi'},
    {categori: '챗봇(ChatBot)', path: '/chat-bot', component: 'RasberryPi'}
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
