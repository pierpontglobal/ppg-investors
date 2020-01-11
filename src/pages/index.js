import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

import { Line } from "react-chartjs-2"

const InvestmentBox = styled.div`
  border-radius: 8px;
  background: #edf7fa;
  padding: 8px;
  font-size: 12px;
  margin-right: 16px;
  color: #0f4c75;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Money = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

const IndexPage = () => {

  const options = {
    maintainAspectRatio: true,
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          drawBorder: false,
          drawTicks: false
        },
        ticks: {
          callback: function(value, index, values) {
              return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
          padding: 10,
          maxTicksLimit: 5
      }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
    tooltips: {
      callbacks: {
        title: function(values) {
          values.forEach(element => {
            element.value = '$' + element.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          });
        }
      },
      intersect: false,
      xPadding: 15,
      yPadding: 15,
      mode: 'index'
    }
  }

  const data = {
    labels: ['March', 'April', 'May', 'June', 'July', 'September', 'October', 'November', 'December', 'January'],
    datasets: [
      {
        label: 'Monthly dividens',
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'rgba(15, 76, 117, 0.6)',
        borderColor: 'rgb(15, 76, 117)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'round',
        pointBorderColor: 'rgb(15, 76, 117)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(15, 76, 117)',
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [1230, 1450, 320, 1009, 805, 704, 985, 1009, 805, 704]
      }
    ]
  };

  return (
    <Layout>
      <SEO title="Home" />
      <h1 style={{
        fontWeight: '100',
      }}>
        Hello Hector Acosta
    </h1>
      <h4 style={{ color: 'darkgrey', fontWeight: '300' }}>Invest in your future!</h4>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginBottom: '24px' }}>
        <InvestmentBox>
          Initial Investment
          <Money>$15,000</Money>
        </InvestmentBox>
        <InvestmentBox>
          Current investment value
          <Money>$3,43M</Money>
        </InvestmentBox>
      </div>
      <Line
        width={100}
        height={50}
        data={data}
        grid
        options={options}
      />
      <h3 style={{marginTop: '12px'}}>Details</h3>
    </Layout>
  )
}

export default IndexPage
