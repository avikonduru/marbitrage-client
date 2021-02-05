import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Card, Divider } from 'antd';
import { Bar } from 'react-chartjs-2';

const { Title, Link } = Typography;

var randomColorGenerator = function () {
	return '#' + (Math.random().toString(16) + '0000000').slice(2, 8);
};

const data = {
	labels: ['0 to 4 Days', '5 to 10 Days', '11 to 20 Days', '21 to 30 Days'],
	datasets: [
		{
			label: '1',
			data: [10, 2, 5, 7, 3],
			backgroundColor: ['#CCCCCC', '#999999', '#666666', '#FF0000'],
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
									xAxes: [
										{
											stacked: true,
										},
									],
									yAxes: [
										{
											ticks: {
												beginAtZero: true,
											},
											stacked: true,
										},
									],
								},
							}}
						/>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col
						span={2}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								backgroundColor: '#cccccc',
								width: '17px',
								height: '17px',
								margin: 'auto',
							}}
						></div>
					</Col>
					<Col span={16} style={{ margin: 'auto' }}>
						Less than 5 Days Late
					</Col>
					<Col span={6} style={{ textAlign: 'right' }}>
						<Link strong>10</Link>
					</Col>
				</Row>
				<Divider style={{ marginTop: 10, marginBottom: 10 }} />
				<Row gutter={16}>
					<Col
						span={2}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								backgroundColor: '#999999',
								width: '17px',
								height: '17px',
								margin: 'auto',
							}}
						></div>
					</Col>
					<Col span={16} style={{ margin: 'auto' }}>
						5 to 10 Days Late
					</Col>
					<Col span={6} style={{ textAlign: 'right' }}>
						<Link strong>2</Link>
					</Col>
				</Row>
				<Divider style={{ marginTop: 10, marginBottom: 10 }} />
				<Row gutter={16}>
					<Col
						span={2}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								backgroundColor: '#666666',
								width: '17px',
								height: '17px',
								margin: 'auto',
							}}
						></div>
					</Col>
					<Col span={16} style={{ margin: 'auto' }}>
						11 to 20 Days Late
					</Col>
					<Col span={6} style={{ textAlign: 'right' }}>
						<Link strong>5</Link>
					</Col>
				</Row>
				<Divider style={{ marginTop: 10, marginBottom: 10 }} />
				<Row gutter={16}>
					<Col
						span={2}
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
						}}
					>
						<div
							style={{
								backgroundColor: '#fd0000',
								width: '17px',
								height: '17px',
								margin: 'auto',
							}}
						></div>
					</Col>
					<Col span={16} style={{ margin: 'auto' }}>
						21 or 30 Days Late
					</Col>
					<Col span={6} style={{ textAlign: 'right' }}>
						<Link strong>7</Link>
					</Col>
				</Row>
				<Divider style={{ marginTop: 10, marginBottom: 10 }} />
				<Row gutter={16}>
					<Col span={18} style={{ marginRight: 'auto' }}>
						More than 30 Days Late
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
