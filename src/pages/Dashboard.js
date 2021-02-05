import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col } from 'antd';

//Components
import ClaimsCard from '../components/DashboardComponents/ClaimsCard';
import SettledCard from '../components/DashboardComponents/SettledComponents/SettledCard';
import LateClaimsCard from '../components/DashboardComponents/LateClaimsCard';
import TopProvidersCard from '../components/DashboardComponents/TopProvidersComponents/TopProvidersCard';

const { Title, Text, Link } = Typography;

const Dashboard = (props) => {
	return (
		<div style={{ padding: '20px 30px' }}>
			<Row gutter={16}>
				<Col span={9}>
					<Row>
						<Col span={24}>
							<ClaimsCard />
						</Col>
					</Row>
					<Row style={{ marginTop: 20 }}>
						<Col span={24}>
							<LateClaimsCard />
						</Col>
					</Row>
				</Col>
				<Col span={15}>
					<Row>
						<Col span={24}>
							<SettledCard />
						</Col>
					</Row>
					<Row style={{ marginTop: 20 }}>
						<Col span={24}>
							<TopProvidersCard />
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

Dashboard.propTypes = {};

export default Dashboard;
