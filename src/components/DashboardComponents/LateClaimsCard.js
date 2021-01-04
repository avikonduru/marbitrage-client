import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Card, Divider } from 'antd';
import { Bar } from 'react-chartjs-2';

const { Title, Link } = Typography;

const data = {
	labels: ['10 Days', '15 Days', '30 Days', '60 Days'],
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
			<Card title="Late Claims" style={{ borderRadius: 5 }}>
				<Row>
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
				<Row gutter={16} style={{ marginTop: 20 }}>
					<Col span={2} style={{ backgroundColor: '#cccccc' }}></Col>
					<Col span={6} style={{ margin: 'auto' }}>
						<span style={{ fontWeight: 'bold' }}>10</span> Days Late
					</Col>
					<Col span={16} style={{ textAlign: 'right' }}>
						<Link
							strong
							href="https://ant.design"
							target="_blank"
							style={{ fontSize: 17 }}
						>
							10
						</Link>
					</Col>
				</Row>
				<Divider style={{ marginTop: 5, marginBottom: 5 }} />
				<Row gutter={16}>
					<Col span={2} style={{ backgroundColor: '#999999' }}></Col>
					<Col span={6} style={{ margin: 'auto' }}>
						<span style={{ fontWeight: 'bold' }}>15</span> Days Late
					</Col>
					<Col span={16} style={{ textAlign: 'right' }}>
						<Link
							strong
							href="https://ant.design"
							target="_blank"
							style={{ fontSize: 17 }}
						>
							2
						</Link>
					</Col>
				</Row>
				<Divider style={{ marginTop: 5, marginBottom: 5 }} />
				<Row gutter={16}>
					<Col span={2} style={{ backgroundColor: '#666666' }}></Col>
					<Col span={6} style={{ margin: 'auto' }}>
						<span style={{ fontWeight: 'bold' }}>30</span> Days Late
					</Col>
					<Col span={16} style={{ textAlign: 'right' }}>
						<Link
							strong
							href="https://ant.design"
							target="_blank"
							style={{ fontSize: 17 }}
						>
							5
						</Link>
					</Col>
				</Row>
				<Divider style={{ marginTop: 5, marginBottom: 5 }} />
				<Row gutter={16}>
					<Col span={2} style={{ backgroundColor: '#fd0000' }}></Col>
					<Col span={6} style={{ margin: 'auto' }}>
						<span style={{ fontWeight: 'bold' }}>60</span> Days Late
					</Col>
					<Col span={16} style={{ textAlign: 'right' }}>
						<Link
							strong
							href="https://ant.design"
							target="_blank"
							style={{ fontSize: 17 }}
						>
							3
						</Link>
					</Col>
				</Row>
			</Card>
		</Fragment>
	);
};

LateClaimsCard.propTypes = {};

export default LateClaimsCard;
