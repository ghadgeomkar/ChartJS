import React from 'react'
import './Category_distribution.css'
import { Chart as ChartJS, defaults } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

defaults.maintainAspectRatio = false
defaults.responsive = true

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';

const Category_distribution = () => {

  const GetLabels = useSelector(store => store.CategoryDistribution.labels)
  const GetData = useSelector(store => store.CategoryDistribution.data)


  if (GetLabels === null || GetData === null) {
    return <h1>Loading...</h1>
  }


  return (
    <section className='CategoryDistributionSection'>
      <div className='CategoryDistributionChart'>
        <Bar
          data={{
            labels: GetLabels,
            datasets: [
              {
                label: 'Category Distribution',
                data: GetData,
                backgroundColor: '#f67e99',
                borderRadius: 10,
              }
            ]
          }}
          options={{
            plugins: {
              title: {
                text: 'Category Distribution' 
              }
            }
          }}
        />
      </div>
    </section>
  )
}

export default Category_distribution