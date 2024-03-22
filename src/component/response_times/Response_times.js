import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import './Response_times.css'
import DropDown from './DropDown'


defaults.maintainAspectRatio = false
defaults.responsive = true

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';


const Response_times = () => {

  const GetDayDate = useSelector(store => store.ResponseTimes.day.date)
  const GetDayLabels = useSelector(store => store.ResponseTimes.day.labels)
  const GetWeekLabels = useSelector(store => store.ResponseTimes.week.labels)
  const GetWeekDate = useSelector(store => store.ResponseTimes.week.date)

  const [selectedOption, setSelectedOption] = useState('Day');


  if (GetDayDate === null || GetDayLabels === null || GetWeekLabels === null || GetWeekDate === null) {
    return <h1>Loading...</h1>
  }


  return (
    <section className='ResponseTimesSection'>
      <div className='chart'>
        <Line
          data={{
            labels: selectedOption === 'Day' ? GetDayLabels : GetWeekLabels,
            datasets: [
              {
                label: 'Response Times',
                data: selectedOption === 'Day' ? GetDayDate : GetWeekDate,
                backgroundColor: '#f67e99',
                borderColor: '#f67e99'
              }
            ]
          }}
          options={{
            plugins: {
              title: {
                text: 'Response Times' + ' ' + selectedOption + ' ' +'chart'
              }
            }
          }}
        />
      </div>

      {/* dropdown */}
      <DropDown selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={['Day','Week']} />

    </section>
  )
}

export default Response_times