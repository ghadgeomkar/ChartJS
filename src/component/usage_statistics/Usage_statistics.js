import React, { useState } from 'react'
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
import './Usage_statistics.css'
import { useSelector } from 'react-redux'
import DropDown from '../response_times/DropDown'


defaults.maintainAspectRatio = false
defaults.responsive = true

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';


const Usage_statistics = () => {

  const GetPlatformLabels = useSelector(store => store.UsageStatistics.platform.labels)
  const GetPlatformData = useSelector(store => store.UsageStatistics.platform.data)
  const GetCountryData = useSelector(store => store.UsageStatistics.country.data)
  const GetCountryLabels = useSelector(store => store.UsageStatistics.country.labels)
  const [selectedOption, setSelectedOption] = useState('Platform');


  if (GetPlatformLabels === null || GetPlatformData === null || GetCountryData === null || GetCountryLabels === null) {
    return <h1>Loading...</h1>
  }



  return (
    <section className='UsageStatisticsSection'>
      <div className='UsageStatisticsChart'>
        <Doughnut
          data={{
            labels: selectedOption === 'Platform' ? GetPlatformLabels : GetCountryLabels,
            datasets: [
              {
                label: 'Usage Statistics of',
                data: selectedOption === "Platform" ? GetPlatformData : GetCountryData,
                backgroundColor: selectedOption === 'Platform' ? [
                  '#4e5bdc',
                  '#006f80',
                  '#9c36b5'
                ] : [
                  '#4e5bdc',
                  '#006f80',
                  '#9c36b5',
                  '#19e68c',
                  '#f67e99'
                ],
                borderColor: selectedOption === 'Platform' ? [
                  '#4e5bdc',
                  '#006f80',
                  '#9c36b5'
                ] : [
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
                text: 'Usage Statistic of' + ' ' + selectedOption
              }
            }
          }}
        />
      </div>

      {/* dropdown */}
      <DropDown selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={['Platform', 'Country']} />

    </section>

  )
}

export default Usage_statistics