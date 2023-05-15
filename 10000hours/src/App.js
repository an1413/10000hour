import { useState } from "react";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Main from "./Components/main/Main";
import Modal from "./Components/modal/Modal";
import './index.css'


function App() {
  // 모달을 껐다 켰다 하려면 모달의 상태 저장  기본 값은 false! 모달 열려있지 않음
  // const [modalShow, setModalShow] = useState(false);  

  const [modalShow, setModalShow] = useState(false);

  function modalClose() {
    setModalShow(false);
  }

  function modalOpen() {
    setModalShow(true);
  }
  // function modalClose() {
  //   setModalShow(false);
  // }

  // function modalOpen() {
  //   setModalShow(true);
  // }

  return (
    <div className="wrapper">
      <Header />
      <Main modalOpen={modalOpen}/>
      <Footer />
      {modalShow && < Modal modalClose={modalClose}/> }
    </div>
  );
}
export default App;
