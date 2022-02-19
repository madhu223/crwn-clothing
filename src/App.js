import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in and sign-up/sign-in and sign-up.component';
import Header from './componente/header/header.component';
// const HomePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <button onClick={() => props.history.push('/topics')}>Topics</button>
//       {/* <Link to='topics'>Topics</Link> */}
//       <h1>HOME PAGE</h1>
//     </div>
//   );
// };

// const TopicsList = (props) => {
//   console.log(props);
//   return (
//     <div>
//       props
//       <h1>Topics List PAGE</h1>
//     </div>
//   );
// };

// const TopicDetail = () => (
//   <div>
//     <h1>TopicDetail PAGE</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/signin' element={<SignInAndSignUpPage />} />
        {/* <Route exact path='/' element={<HomePage />} />
        <Route exact path='/topics/:topicId' element={<TopicDetail />} /> */}
      </Routes>
      {/* <Routes>
        <Route exact path='/' component={<Homepage />} />
        <Route exact path='/hats' component={HatsPage} />
      </Routes> */}
    </div>
  );
}

export default App;
