import { useState, useEffect } from 'react';
import axios from 'axios'

export default function MainListModel() {
    // 추가 데이터를 로드하는지 아닌지를 담기위한 state
    const [fetching, setFetching] = useState(false);
    // 리스트 데이터 저장
    const [jsonData, setJsonData] = useState([]);
    // 페이지 데이터 저장
    const [pagingData, setPagingData] = useState([]);

    var globalData = null;
    var globalPage = 1;
    let limitPageNum = 2;
    
    // 메인 리스트 취득
    const mainFetchData = async () => {
        try {
            const response = await axios.get('https://cocoa.akibatv.net/?/api/blog/playneko/main?page=' + globalPage + '&limitpage=' + limitPageNum);
            if (response.data != null) {
                const fetchedData = response.data.list;
                const pagingData = response.data.paging;
                // console.log(fetchedData);
                // console.log(pagingData);
                // console.log(mergedData);
                // globalData = response.data.list;
                // globalPage = globalData.length;
                setJsonData(fetchedData);
                setPagingData(pagingData);
            }
        } catch(e) {
            console.log(e);
        }
    }

    // 추가 리스트 취득
    const moreFetchData = async () => {
        // 추가 데이터를 로드하는 상태로 전환
        setFetching(true);

        try {
            const response = await axios.get('https://cocoa.akibatv.net/?/api/blog/playneko/main?page=' + globalPage + '&limitpage=' + limitPageNum);
            if (response.data != null) {
                // 추가 데이터 부분
                const fetchedData = response.data.list;
                // 기존 데이터 배열과 새로 받아온 데이터 배열을 합쳐 새 배열을 만들고 state에 저장한다.
                const mergedData = globalData.concat(...fetchedData);
                globalData = mergedData;
                globalPage = globalData.length;
                setJsonData(globalData);
            }
        } catch(e) {
            console.log(e);
        }

        // 추가 데이터 로드 끝
        setFetching(false);
    }

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
            // 페이지 끝에 도달하면 추가 데이터를 받아온다
            moreFetchData();
        }
    };

    useEffect(() => {
        // 메인 리스트 가져오기
        mainFetchData();
        // scroll event listener 등록
        // window.addEventListener("scroll", handleScroll);
        // return () => {
        //     // scroll event listener 해제
        //     window.removeEventListener("scroll", handleScroll);
        // };
    }, []);

    return {list: jsonData, paging: pagingData};
}
