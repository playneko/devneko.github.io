import { useState, useEffect } from 'react';
import axios from 'axios'

export default function Homes() {
  const [jsonData, jsonDataSet] = useState([]);

  // 메인 리스트 취득
  useEffect(() => {
      const fetchHomes = async () => {
          try {
              const response = await axios.get('http://');
              jsonDataSet(response.data);
          } catch(e) {
              console.log(e);
          }
      }
      fetchHomes();
  }, []);

  return jsonData;
}
