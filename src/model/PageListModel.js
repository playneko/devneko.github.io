import { useEffect } from 'react';
import axios from 'axios'

const PageListModel = ({page, jsonData, pagingData, setJsonData, setPagingData, catpage, keyword}) => {
    let limitPageNum = 8;
    var globalPage = page;

    // 메인 리스트 취득
    const pageFetchData = async () => {
        try {
            const response = await axios.get(
                'https://akibatv.playneko.com/?/api/blog/category?page=' + globalPage 
                + '&limitpage=' + limitPageNum 
                + '&catpage=' + catpage 
                + '&keyword=' + keyword
                + '&projectid=9a27a65f138f8f6f4991323212ebb408'
            );
            if (response.data != null) {
                const fetchedJsonData = response.data.list;
                const fetchedPagingData = response.data.paging;
                // console.log(fetchedJsonData);
                setJsonData(fetchedJsonData);
                setPagingData(fetchedPagingData);
            }
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        pageFetchData();
    }, [keyword]);

    return {list: jsonData, paging: pagingData};
}

export default PageListModel;
