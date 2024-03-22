import React from 'react'
import './Category.css'
import { Link, useLocation } from 'react-router-dom'

const Category = () => {

  const location = useLocation();
  return (<>
    <section className='CategorySection'>
      <ul>
        <Link to="/" activeClassName="active">
          <li className={location.pathname === "/" ? "active" : ""}>Category Distribution</li>
        </Link>
        <Link to="/response_times" activeClassName="active">
          <li className={location.pathname === "/response_times" ? "active" : ""} >Response Times</li>
        </Link>
        <Link to="/user_satisfaction" activeClassName="active">
          <li className={location.pathname === "/user_satisfaction" ? "active" : ""} >User Satisfaction</li>
        </Link>
        <Link to="/usage_statistics" activeClassName="active">
          <li className={location.pathname === "/usage_statistics" ? "active" : ""} >Usage Statistics</li>
        </Link>
      </ul>

    </section>
  </>
  )
}


export default Category;
