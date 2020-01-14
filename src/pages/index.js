import React from "react"

import GatsdbyLayout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Table, Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Line } from "react-chartjs-2"
import qs from 'query-string'

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

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

function parseJwt(token) {
  try {
    if (token !== undefined) {
      var base64Url = token.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    } else {
      return {};
    }
  } catch (e) {
    return {};
  }
};

const DummyUsers = [
  {
    name: 'Victor Diaz',
    initialInvestment: '$15,000',
    currentInvestment: '$3,43M',
    detailsData: [
      {
        title: 'Total revenue generated',
        amount: '$130,000 USD'
      },
      {
        title: 'Previous month dividends',
        amount: '$7,400 USD'
      },
      {
        title: 'Payment status',
        amount: 'PAID'
      },
      {
        title: 'View receipt',
        amount: 'download'
      },
      {
        title: 'Total dividends generated',
        amount: '$54,000 USD'
      }
    ]
  },
  {
    name: 'Sheldon Richard',
    initialInvestment: '$15,000',
    currentInvestment: '$3,43M',
    detailsData: [
      {
        title: 'Total revenue generated',
        amount: '$130,000 USD'
      },
      {
        title: 'Previous month dividends',
        amount: '$7,400 USD'
      },
      {
        title: 'Payment status',
        amount: 'PAID'
      },
      {
        title: 'View receipt',
        amount: 'download'
      },
      {
        title: 'Total dividends generated',
        amount: '$54,000 USD'
      }
    ]
  }
]

const IndexPage = ({ component: Component, ...rest }) => {

  console.log(rest)

  const columns = [
    {
      title: '',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '',
      dataIndex: 'amount',
      key: 'amount',
      render: text => {
        if (text === 'download') {
          return (<span>
            <a target="_blank" href='https://asset-images-ppg.s3.us-east-1.amazonaws.com/RS.pdf'>
              <Icon type="copy" />
              {' '}
              {text}
            </a>
          </span>)
        } else {
          return <td style={{ color: '#0f4c75' }}>{text}</td>
        }

      }
    }
  ]

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
          callback: function (value, index, values) {
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
        title: function (values) {
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

  const userData = parseJwt(qs.parse(rest.location.search).token);
  const user = DummyUsers[userData.pos - 34];

  if (user === undefined) {
    return <div style={{ position: 'absolute', top: '0', bottom: '0', left: '0', right: '0', margin: 'auto', textAlign: 'center', height: '60px', fontSize: '60px' }}>
      404 NOT FOUND
    </ div>
  } else {
    return (
      <GatsdbyLayout>
        <Layout style={{
          width: '80%',
          minWidth: '320px',
          maxWidth: '960px',
          paddingTop: '60px',
          height: '100vh',
          paddingBottom: '60px',
          margin: `0 auto`
        }}>
          <SEO title="Home" />
          <div>
            <h1 style={{
              fontWeight: '100',
            }}>
              Hello {user.name}
            </h1>
            <h4 style={{ color: 'darkgrey', fontWeight: '300' }}>Invest in your future!</h4>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', marginBottom: '24px' }}>
              <InvestmentBox>
                Initial Investment
              <Money>{user.initialInvestment}</Money>
              </InvestmentBox>
              <InvestmentBox>
                Current investment value
              <Money>{user.currentInvestment}</Money>
              </InvestmentBox>
            </div>
            <Line
              width={100}
              height={50}
              data={data}
              grid
              options={options}
            />
            <h3 style={{ marginTop: '12px' }}>Details</h3>
            <Table columns={columns} dataSource={user.detailsData} pagination={{ disabled: true, hideOnSinglePage: true }} />
          </div>
        </Layout>
      </GatsdbyLayout>
    )
  }
}

export default IndexPage
