import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Row, Col, Card, Divider } from 'antd';
import { Doughnut } from 'react-chartjs-2';

const { Title, Link } = Typography;

const data = {
	labels: [
		'Paid',
		'Unpaid',
		'Arbitration Review',
		'Arbitration Approval',
		'Ready for Payment',
	],
	datasets: [
		{
			data: [45, 10, 5, 4, 7],
			backgroundColor: ['#FF0000', '#CCCCCC', '#999999', '#666666', '#333333'],
			hoverBackgroundColor: [
				'#FF0000',
				'#CCCCCC',
				'#999999',
				'#666666',
				'#333333',
			],
			borderColor: '#ffffff',
		},
	],
};

const options = {
	legend: { display: false },
	tooltips: {
		callbacks: {
			label: function (tooltipItem, data) {
				var dataset = data.datasets[tooltipItem.datasetIndex];
				var meta = dataset._meta[Object.keys(dataset._meta)[0]];
				var total = meta.total;
				var currentValue = dataset.data[tooltipItem.index];
				var percentage = parseFloat(((currentValue / total) * 100).toFixed(1));
				return ' ' + currentValue + ' Claims (' + percentage + '%)';
			},
			title: function (tooltipItem, data) {
				return data.labels[tooltipItem[0].index];
			},
		},
	},
};

const ClaimsCard = (props) => {
	return (
		<Fragment>
			<Card title="Your Claim Statuses" style={{ borderRadius: 5 }}>
				<Row style={{ marginBottom: 20 }}>
					<Col span={24}>
						<Doughnut data={data} options={options} />
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<Row gutter={16}>
							<Col span={1} style={{ backgroundColor: '#FF0000' }}></Col>
							<Col span={16}>Unpaid</Col>
							<Col span={6} style={{ textAlign: 'right' }}>
								<Link strong>45</Link>
							</Col>
						</Row>
						<Divider style={{ marginTop: 10, marginBottom: 10 }} />
						<Row gutter={16}>
							<Col span={1} style={{ backgroundColor: '#CCCCCC' }}></Col>
							<Col span={16}>In Progress</Col>
							<Col span={6} style={{ textAlign: 'right' }}>
								<Link strong>10</Link>
							</Col>
						</Row>
						<Divider style={{ marginTop: 10, marginBottom: 10 }} />
						<Row gutter={16}>
							<Col span={1} style={{ backgroundColor: '#999999' }}></Col>
							<Col span={16}>Arbitration Review</Col>
							<Col span={6} style={{ textAlign: 'right' }}>
								<Link strong>5</Link>
							</Col>
						</Row>
						<Divider style={{ marginTop: 10, marginBottom: 10 }} />
						<Row gutter={16}>
							<Col span={1} style={{ backgroundColor: '#666666' }}></Col>
							<Col span={16}>Arbitration Approved</Col>
							<Col span={6} style={{ textAlign: 'right' }}>
								<Link strong>4</Link>
							</Col>
						</Row>
						<Divider style={{ marginTop: 10, marginBottom: 10 }} />
						<Row gutter={16}>
							<Col span={1} style={{ backgroundColor: '#333333' }}></Col>
							<Col span={16}>Ready for Payment</Col>
							<Col span={6} style={{ textAlign: 'right' }}>
								<Link strong>7</Link>
							</Col>
						</Row>
						<Divider style={{ marginTop: 10, marginBottom: 10 }} />
						<Row gutter={16}>
							<Col span={1} style={{ backgroundColor: '#525FE5' }}></Col>
							<Col span={16}>Paid</Col>
							<Col span={6} style={{ textAlign: 'right' }}>
								<Link strong>1035</Link>
							</Col>
						</Row>
					</Col>
				</Row>
			</Card>
		</Fragment>
	);
};

ClaimsCard.propTypes = {};

export default ClaimsCard;
