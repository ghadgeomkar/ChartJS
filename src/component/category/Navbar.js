import React, { useEffect, useState } from 'react'
import Dark_menu from '../../images/Dark_menu.png'
import { useDispatch } from 'react-redux'
import { addData, addLabels } from '../../store/CategoryDistributionSlice'
import data from '../../ai-data.json'
import { addDayData, addDayLabels, addWeekData, addWeekLabels } from '../../store/ResponseTimesSlice'
import { Link, useLocation } from 'react-router-dom'
import { addUserData, addUserLabels } from '../../store/UserSatisfactionSlice'
import { addCountryData, addCountryLabels, addPlatformData, addPlatformLabels } from '../../store/UsageStatisticsSlice'


const Navbar = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const [ToggelCategory, setToggelCategory] = useState(false)



    useEffect(() => {
        // store category_distribution data into redux 
        dispatch(addLabels(Object.keys(data.category_distribution)))
        dispatch(addData(Object.values(data.category_distribution)))

        // store category_distribution data into redux 
        dispatch(addDayLabels(data.response_times.day_wise.map(val => val.date)))
        dispatch(addDayData(data.response_times.day_wise.map(val => val.average_time)))
        dispatch(addWeekLabels(data.response_times.week_wise.map(val => val.week)))
        dispatch(addWeekData(data.response_times.week_wise.map(val => val.average_time)))

        // store User_satisfaction data into redux 
        dispatch(addUserLabels(data.user_satisfaction.ratings.map(val => val.rating)))
        dispatch(addUserData(data.user_satisfaction.ratings.map(val => val.count)))

        // store Usage_Statistics data into redux 
        dispatch(addPlatformLabels(Object.keys(data.usage_statistics.by_platform)))
        dispatch(addPlatformData(Object.values(data.usage_statistics.by_platform)))
        dispatch(addCountryLabels(Object.keys(data.usage_statistics.by_country)))
        dispatch(addCountryData(Object.values(data.usage_statistics.by_country)))


    }, [])




    return (
        <nav className='NavbarSection'>
            <div className='NavbarMenu'>
                <img src={Dark_menu} alt="Dark_menu" onClick={() => setToggelCategory((prev) => !prev)} />
            </div>
            <img src="https://www.chartjs.org/img/chartjs-logo.svg" alt="chart.js-logo" />
            <h1 className='LogoName' >Chart.js</h1>


            {/* this Category is show when user use small device  */}

            {
                ToggelCategory && <div className='MobileNavbar' onClick={() => setToggelCategory(false)}>
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
                </div>
            }

        </nav>
    )
}

export default Navbar