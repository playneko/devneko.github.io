import axios from 'axios'

const PagingListModel = ({page, jsonData, pagingData, setJsonData, setPagingData}) => {
    var globalPage = page;
    let limitPageNum = 8;

    // 메인 리스트 취득
    const pagingFetchData = async () => {
        try {
            const response = await axios.get('https://cocoa.akibatv.net/?/api/blog/playneko/main?page=' + globalPage + '&limitpage=' + limitPageNum);
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

    // 페이지별 리스트 가져오기
    pagingFetchData();

    return {list: jsonData, paging: pagingData};
}

export default PagingListModel;
