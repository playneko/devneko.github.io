import { useEffect } from 'react';
import axios from 'axios'

const PageListModel = ({page, jsonData, pagingData, setJsonData, setPagingData, catpage, keyword}) => {
    let limitPageNum = 8;
    var globalPage = page;

    // 메인 리스트 취득
    const pageFetchData = async () => {
        try {
            const response = await axios.get('https://cocoa.akibatv.net/?/api/blog/playneko/category?page=' + globalPage + '&limitpage=' + limitPageNum + '&catpage=' + catpage + '&keyword=' + keyword);
            if (response.data != null) {
                const fetchedJsonData = response.data.list;
                const fetchedPagingData = response.data.paging;
                setJsonData(fetchedJsonData);
                setPagingData(fetchedPagingData);
            }
        } catch(e) {
            console.log(e);
        }
    }

    useEffect(() => {
        pageFetchData();
    }, []);

    return {list: jsonData, paging: pagingData};
}

export default PageListModel;
