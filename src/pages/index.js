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
            <a target="_blank" href='https://asset-images-ppg.s3.us-east-1.amazonaws.com/RS.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCWV1LXdlc3QtMyJGMEQCIC18DUwePxZj9VVfYvhgnrECNafylDhA3heP0gNXxuYkAiBv6eBpYlZ0DsIzomWuVE2qbIu8DhMjIaR2vrwvuUhPWSqNAghTEAEaDDY2MTgyNzE4NjczNyIMlS1damiS%2FS3lnudSKuoBTRETuvsxr0QJ8jGkrdLPd9%2Bq2bev%2BGbn5g9lPyLnh1ggOqOMuvBc7GUBJSiAJ1b6RC925Ah2PyDqOBmA4VJaZqxIu%2BasS7KxTLhW2pK0UdntJM7tyO2USc7w73BOJQNR2rXcHHWFh8MYuyL%2FlTB9n7SUUMXyM17T5ldS6Sb%2FK4%2FXfvJBKPACzKPc78QIAPfRAZ5hYkUYL8IQIziuLyXyJee6TyKJNVFc77NpGBmISsO%2FV15IA%2F525JLynXw7hntlgBIm1OtATZo8jETvl%2BlmXcjnVvKHAL0YX90auffJIZzWWj%2Fm43WrwP1yMNfC9PAFOoMDVKeXRp3Q5%2FmBtHt6kl7YoZaXO1%2FueNRNuX63aFBMgSCbTMb3zWQ89b6MVkdCoV96tIfaFiTB%2F8cU4M%2Bvat6W6xdSGcIsk5ZoS4nipf%2BwJhV0rcVz1lXGg02U%2FRuBbsmPu5ROyeFZro6n0hzKewqDKGqaeZXf0F2P9xlKjAisM3PXGq72ln0uHAN6sy3XrObTD5NeNyOUYHhQ9rLnq2doYG7QlQ8RF%2FJXFbonvCvu65OjkT89aDs8%2FP4mrZfqpJKzLkfNFSunnvf9rlCxN3E77guCeYn2n01aRGODjZRJjZy0sYKE3HPeHZuKH088yXUSsSeyqxI9%2FM0zvwhZA3kqcqjQVXIZmVY71AbfPDEaKVZDa%2B8TaZmgdVa6mHonUcEWxbBhPkPIXyyYdm%2FAyOv2K1%2Fh6iFLbYhXsFHWgrW7z9Y7xM2T%2F7dbo%2BLGIUeRFpItn8xYjwAD87i0uU5HR0c7pEZH6g2KRsDXf720bjvLRBCkk9xIUuq8RIhauCbwBgRSUBc9&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200114T020911Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAZUF7ZOAYQJ4QSSKK%2F20200114%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c3a20fba853da003f6557921a44474c11a99fe71aaffda9bb6bc8e815e2fe267'>
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

export default IndexPage
