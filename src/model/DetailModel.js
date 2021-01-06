import { useState, useEffect } from 'react';
import axios from 'axios'

const DetailModel = (id) => {
    const [jsonData, setJsonData] = useState([]);

    // 메인 리스트 취득
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://akibatv.playneko.com/?/api/blog/detail?id=' + id + '&projectid=9a27a65f138f8f6f4991323212ebb408');
                // console.log(response);
                setJsonData(response.data.detail);
            } catch(e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    return jsonData;
}

export default DetailModel;
