import React from 'react'
import './Main.css'
import { useState } from 'react'
export default function Main(props) {

    const [expert, setExpert] = useState('');
    const [traningTime,setTraningTime] = useState(0);
    const [dday, setDday] = useState(0);
    const [showResult, setShowResult] = useState(false);

    function ResultShow() {
        setShowResult(true);
    }

    function ResultClose() {
        setShowResult(false);
    }

    const handleSubmit = (event) => {
        event.preventDefalut();
        setDday(Math.ceil(10000 / traningTime));
    }


  return (
    <main>
        <h2 className="a11y-hidden">필요한 시간 알아보기</h2>
        <form className="cont-input" onSubmit={handleSubmit}>
            <p className="txt-wannabe">나는 
                <input type="text" placeholder="예&#41프로그래밍" required value={expert} onChange={(event) => props.setExpert(event.target.value)}/> 
                전문가가 될 것이다.
            </p>
            <p c lass="txt-time">그래서 앞으로 매일 하루에 
                <input type="number" placeholder="예&#41 5시간" required value={traningTime} onChange={(event) => props.setTime(event.target.value)}/> 시간씩 훈련할 것이다.</p>
            <button type="button" className="btn-exc">나는 며칠동안 훈련을 해야 1만시간이 될까?</button>
        </form>

        {((dday > 1) && (dday < 24)) && <section className="cont-section">
            <h3 className="a11y-hidden">결과 확인</h3>
            <p className="txt-wannabe">
                당신은 <strong>{expert}</strong> 전문가가 되기 위해서
            </p>
            <p className="txt-time">
                대략 <strong>{dday}</strong> 일 이상 훈련하셔야 합니다! :&#41
            </p>
            <button className="btn-go" type="button" onClick={props.modalOpen}>훈련하러가기 GO!GO!</button>
            <button className="btn-share" type="button">공유하기</button>
        </section>}
    </main>
  )
}
