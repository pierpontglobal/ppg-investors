import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

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
          Net worth today
        <Money>$544,560</Money>
        </InvestmentBox>
        <InvestmentBox>
          Net worth at investment
        <Money>$3,43M</Money>
        </InvestmentBox>
      </div>
    </Layout>
  )
}

export default IndexPage
