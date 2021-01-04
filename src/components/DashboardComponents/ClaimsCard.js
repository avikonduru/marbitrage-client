import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Row, Col, Card, Divider } from 'antd';
import { Doughnut } from 'react-chartjs-2';

const { Title, Link } = Typography;

var unpaidPercent = Math.floor((25 / 45) * 100);
var paidPercent = Math.floor((20 / 45) * 100);

const data = {
	labels: ['Paid Claims Percentage', 'Unpaid Claims Percentage'],
	datasets: [
		{
			data: [unpaidPercent, paidPercent],
			backgroundColor: ['#999999', '#fd0000'],
			hoverBackgroundColor: ['#999999', '#fd0000'],
		},
	],
};

const ClaimsCard = (props) => {
	return (
		<Fragment>
			<Card title="Your claims" style={{ borderRadius: 5 }}>
				<Row gutter={16}>
					<Col span={8}>
						<Title level={5}>Total Claims</Title>
						<Link strong style={{ fontSize: 27 }}>
							45
						</Link>
					</Col>
					<Col span={8}>
						<Title level={5}>Unpaid Claims</Title>
						<Link strong style={{ fontSize: 27 }}>
							<RouterLink to="/claims">20</RouterLink>
						</Link>
					</Col>
					<Col span={8}>
						<Title level={5}>Paid Claims</Title>
						<Link strong style={{ fontSize: 27 }}>
							25
						</Link>
					</Col>
				</Row>
				<Row style={{ marginTop: 20 }}>
					<Col span={24}>
						<Doughnut data={data} />
					</Col>
				</Row>
			</Card>
		</Fragment>
	);
};

ClaimsCard.propTypes = {};

export default ClaimsCard;
