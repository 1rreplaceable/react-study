import './App.css';
import {useState} from "react";

function App() {

    let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
    let [like, setLike] = useState(0);

    function change() {
        let copy = [...title];
        if (copy[0] === '남자 코트 추천') {
            copy[0] = '여자 코트 추천';
        } else {
            copy[0] = '남자 코트 추천';
        }
        setTitle(copy);
    }

    function sort() {
        let copy = [...title];
        copy.sort();
        setTitle(copy);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            <button onClick={sort}>가나다순정렬</button>
            <button onClick={change}>변경</button>
            <div className="list">
                <h4>{title[0]} <span style={{cursor: 'pointer'}} onClick={() => {
                    setLike(like + 1)
                }}>👍</span>{like}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{title[1]}</h4>
                <p>2월 17일 발행</p>
            </div>
            <div className="list">
                <h4>{title[2]}</h4>
                <p>2월 17일 발행</p>
            </div>

            <Modal/>


        </div>
    );
}

function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
