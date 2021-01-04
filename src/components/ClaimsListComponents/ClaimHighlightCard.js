import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Typography, Row, Col, Card, Divider, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ClaimHighlightCard = ({
	claimID,
	targetPrice,
	settledPrice,
	settledPercentage,
	status,
	provider,
	timeStamp,
}) => {
	let history = useHistory();

	function handleClick() {
		history.push('/claim');
	}

	return (
		<Fragment>
			<Card
				title={`Claims ID: ${claimID}`}
				style={{ width: '100%', borderRadius: 5 }}
			>
				<Row gutter={16}>
					<Col span={3}>
						<Row>
							<Col span={24}>
								<Text style={{ fontSize: 12 }}>${`${targetPrice}`}</Text>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Text style={{ color: '#999999', fontSize: 10 }}>
									Target Price
								</Text>
							</Col>
						</Row>
					</Col>
					<Col span={3}>
						<Row>
							<Col span={24}>
								<Text style={{ fontSize: 12 }}>{settledPrice}</Text>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Text style={{ color: '#999999', fontSize: 10 }}>
									Settled Price
								</Text>
							</Col>
						</Row>
					</Col>
					<Col span={3}>
						<Row>
							<Col span={24}>
								<Text style={{ fontSize: 12 }}>{settledPercentage}</Text>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Text style={{ color: '#999999', fontSize: 10 }}>
									Settled Percentage
								</Text>
							</Col>
						</Row>
					</Col>
					<Col span={3}>
						<Row>
							<Col span={24}>
								<Text style={{ fontSize: 12 }}>{status}</Text>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Text style={{ color: '#999999', fontSize: 10 }}>Status</Text>
							</Col>
						</Row>
					</Col>
					<Col span={4}>
						<Row>
							<Col span={24}>
								<Text style={{ fontSize: 12 }}>{provider}</Text>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Text style={{ color: '#999999', fontSize: 10 }}>Provider</Text>
							</Col>
						</Row>
					</Col>
					<Col span={6}>
						<Row>
							<Col span={24}>
								<Text style={{ fontSize: 12 }}>{timeStamp}</Text>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Text style={{ color: '#999999', fontSize: 10 }}>
									Time Stamp
								</Text>
							</Col>
						</Row>
					</Col>
					<Col span={2} style={{ textAlign: 'right' }}>
						<Row>
							<Col span={24} style={{ margin: 'auto' }}>
								<Button
									type="link"
									icon={<RightOutlined />}
									size={'large'}
									onClick={handleClick}
								/>
							</Col>
						</Row>
					</Col>
				</Row>
			</Card>
		</Fragment>
	);
};

ClaimHighlightCard.propTypes = {
	claimID: PropTypes.string,
	targetPrice: PropTypes.number,
	settledPrice: PropTypes.number,
	settledPercentage: PropTypes.number,
	status: PropTypes.string,
	provider: PropTypes.string,
	timeStamp: PropTypes.string,
};

export default ClaimHighlightCard;
