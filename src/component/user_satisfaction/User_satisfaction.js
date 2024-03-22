import React, { useState } from 'react'
import './User_satisfaction.css'
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Pie, Line, Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import DropDown from '../response_times/DropDown'


defaults.maintainAspectRatio = false
defaults.responsive = true

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';


const User_satisfaction = () => {

  const GetLabels = useSelector(store => store.UserSatisfaction.labels)
  const GetData = useSelector(store => store.UserSatisfaction.data)
  const [selectedOption, setSelectedOption] = useState('Pie');

  if (GetData === null || GetLabels === null) {
    return <h1>Loading...</h1>
  }


  let ChartComponent;
  switch (selectedOption) {
    case 'Pie':
      ChartComponent = Pie;
      break;
    case 'Line':
      ChartComponent = Line;
      break;
    case 'Bar':
      ChartComponent = Bar;
      break;
    default:
      ChartComponent = Pie; // Default to Pie chart
  }

  return (
    <section className='UserSatisfactionSection'>
      <div className='UserSatisfactionchart'>
        <ChartComponent
          data={{
            labels: GetLabels,
            datasets: [
              {
                label: 'Response Times',
                data: GetData,
                backgroundColor: [
                  '#4e5bdc',
                  '#006f80',
                  '#9c36b5',
                  '#19e68c',
                  '#f67e99'
                ],
                borderColor: [
                  '#4e5bdc',
                  '#006f80',
                  '#9c36b5',
                  '#19e68c',
                  '#f67e99'
                ]
              }
            ]
          }}
          options={{
            plugins: {
              title: {
                text: 'User Satisfaction Ratings with' + ' ' + selectedOption + ' ' + 'chart'
              }
            }
          }}
        />
      </div>


      {/* dropdown */}
      <DropDown selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={['Pie', 'Line', 'Bar']} />
    </section>
  )
}

export default User_satisfaction