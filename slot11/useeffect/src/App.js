import logo from './logo.svg';
import './App.css';
import UserPosts from './components/UserPosts';
import { useState } from 'react';
import ValidatedInput from './components/ValidatedInput';
import ValidatedLogin from './components/ValidatedLogin';
import UpdateInfo from './components/UpdateInfor';
function App() {
  const [userId, setUserId] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <h2>---------- Ex1 ----------</h2>
        <UserPosts userId={null} />
      <button onClick={() => setUserId(userId + 1)}>
        Xem bài viết của người dùng khác
      </button>

        <h2>---------- Ex4 ----------</h2>
        <ValidatedInput />
        <h2>---------- Ex5 ----------</h2>
        <ValidatedLogin />
        <h2>---------- Ex6 ----------</h2>
        <UpdateInfo />


      </header>
    </div>
  );
}

export default App;
