import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Card, Divider } from 'antd';
import { Bar } from 'react-chartjs-2';

const { Title, Link } = Typography;

const data = {
	labels: ['0 to 9 Days', '10 to 29 Days', '30 to 59 Days', '60+ Days'],
	datasets: [
		{
			label: 'Number of Claims',
			backgroundColor: ['#cccccc', '#999999', '#666666', '#fd0000'],
			data: [10, 2, 5, 3],
		},
	],
};

const LateClaimsCard = (props) => {
	return (
		<Fragment>
			<Card title="Unpaid Claim by Late Days" style={{ borderRadius: 5 }}>
				<Row style={{ marginBottom: 20 }}>
					<Col span={24}>
						<Bar
							data={data}
							options={{
								legend: { display: false },
								scales: {
									yAxes: [
										{
											ticks: {
												beginAtZero: true,
											},
										},
									],
								},
							}}
						/>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col span={1} style={{ backgroundColor: '#cccccc' }}></Col>
					<Col span={16} style={{ margin: 'auto' }}>
						Less than 10 Days Late
					</Col>
					<Col span={6} style={{ textAlign: 'right' }}>
						<Link strong>10</Link>
					</Col>
				</Row>
				<Divider style={{ marginTop: 10, marginBottom: 10 }} />
				<Row gutter={16}>
					<Col span={1} style={{ backgroundColor: '#999999' }}></Col>
					<Col span={16} style={{ margin: 'auto' }}>
						10 to 29 Days Late
					</Col>
					<Col span={6} style={{ textAlign: 'right' }}>
						<Link strong>2</Link>
					</Col>
				</Row>
				<Divider style={{ marginTop: 10, marginBottom: 10 }} />
				<Row gutter={16}>
					<Col span={1} style={{ backgroundColor: '#666666' }}></Col>
					<Col span={16} style={{ margin: 'auto' }}>
						30 to 59 Days Late
					</Col>
					<Col span={6} style={{ textAlign: 'right' }}>
						<Link strong>5</Link>
					</Col>
				</Row>
				<Divider style={{ marginTop: 10, marginBottom: 10 }} />
				<Row gutter={16}>
					<Col span={1} style={{ backgroundColor: '#fd0000' }}></Col>
					<Col span={16} style={{ margin: 'auto' }}>
						60 or More Days Late
					</Col>
					<Col span={6} style={{ textAlign: 'right' }}>
						<Link strong>3</Link>
					</Col>
				</Row>
			</Card>
		</Fragment>
	);
};

LateClaimsCard.propTypes = {};

export default LateClaimsCard;
