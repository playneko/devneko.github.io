import { useState, useEffect } from 'react';
import axios from 'axios'

export default function DetailModel(id) {
    const [jsonData, jsonDataSet] = useState([]);

    // 메인 리스트 취득
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://cocoa.akibatv.net/?/api/blog_playneko_detail?id=' + id);
                jsonDataSet(response.data.detail);
            } catch(e) {
                console.log(e);
            }
        }
        fetchData();
    }, []);

    return jsonData;
}
