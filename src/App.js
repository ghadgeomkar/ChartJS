import './App.css';
import Navbar from './component/category/Navbar';
import CategoryDistribution from './component/category_distribution/Category_distribution'
import Category from './component/category/Category';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ResponseTimes from './component/response_times/Response_times';
import UsageStatistics from './component/usage_statistics/Usage_statistics';
import UserSatisfaction from './component/user_satisfaction/User_satisfaction';

function App() {


  return (

    <Router>
      <section className="App">
        <div className='Navbar'>
          <Navbar />

          {/* this Category is show when user use mid or large size device like laptop or tablet */}
          <Category />
        </div>
        <div className='Container'>
          <Routes>
            <Route path="/" element={<CategoryDistribution />} />
            <Route path="/response_times" element={<ResponseTimes />} />
            <Route path="/usage_statistics" element={<UsageStatistics />} />
            <Route path="/user_satisfaction" element={<UserSatisfaction />} />
          </Routes>
        </div>
      </section>
    </Router>
  );
}

export default App;
