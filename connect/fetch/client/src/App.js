import axios from 'axios';

function getCommu(url) {
  // 지정된 ID를 가진 유저에 대한 요청
  axios.get(`${url}`)
    .then(function (response) {
      // 성공 핸들링
      console.log(response);
    })
    .catch(function (error) {
      // 에러 핸들링
      console.log(error);
    })
    .finally(function () {
      // 항상 실행되는 영역
    });
}

function Header() {
  return (
    <header>
      <h1>Server Connection Test</h1>
    </header>
  );
}

function Main() {
  return (
    <main>
      <div>
        divTest
        {getCommu('https://arjstest.r-e.kr/api/response_ok')}
      </div>
    </main>
  );
}

function App() {
  return (
    <>
      <Header></Header>
      <Main></Main>
    </>
  );
}

export default App;
