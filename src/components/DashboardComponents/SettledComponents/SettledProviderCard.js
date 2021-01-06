import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Card, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const SettledProviderCard = ({ provider, averageTarget, averageSettled }) => {
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	}

	var settledPercentage = Math.floor((averageSettled / averageTarget) * 100);

	return (
		<Fragment>
			<Card style={{ borderRadius: 5 }} hoverable={true}>
				<Row gutter={16}>
					<Col span={8}>
						<Row>
							<Col span={24}>
								<Text style={{ fontSize: 12 }}>{provider}</Text>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Text style={{ color: '#999999', fontSize: 8 }}>Provider</Text>
							</Col>
						</Row>
					</Col>
					<Col span={4}>
						<Row>
							<Col span={24}>
								<Text style={{ fontSize: 12 }}>
									${numberWithCommas(averageTarget)}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Text style={{ color: '#999999', fontSize: 8 }}>
									Average Asked Amount
								</Text>
							</Col>
						</Row>
					</Col>
					<Col span={5}>
						<Row>
							<Col span={24}>
								<Text style={{ fontSize: 12 }}>
									${numberWithCommas(averageSettled)}
								</Text>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Text style={{ color: '#999999', fontSize: 8 }}>
									Average Settled Amount
								</Text>
							</Col>
						</Row>
					</Col>
					<Col span={5}>
						<Row>
							<Col span={24}>
								<Text style={{ fontSize: 12 }}>{settledPercentage}%</Text>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Text style={{ color: '#999999', fontSize: 8 }}>
									Average Settled Percentage
								</Text>
							</Col>
						</Row>
					</Col>
					<Col span={2}>
						<Row>
							<Col span={24} style={{ margin: 'auto' }}>
								<Button type="link" icon={<RightOutlined />} size={'large'} />
							</Col>
						</Row>
					</Col>
				</Row>
			</Card>
		</Fragment>
	);
};

SettledProviderCard.propTypes = {
	provider: PropTypes.string,
	averageTarget: PropTypes.number,
	averageSettled: PropTypes.number,
};

export default SettledProviderCard;
