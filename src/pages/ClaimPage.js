import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Card, Divider, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const ClaimPage = (props) => {
	return (
		<Fragment>
			<Card title="Claim: XXX-XX-XXXX" style={{ borderRadius: 5 }}>
				<Row>
					<Col span={24}>
						<Title level={5}>Claim Details</Title>
						<p>
							<Text type="secondary">Claim ID: </Text>
							<Text strong>XXX-XX-XXXX</Text>
						</p>
						<p>
							<Text type="secondary">Target Price: </Text>
							<Text strong>$12,345.65</Text>
						</p>
						<p>
							<Text type="secondary">Settled Price: </Text>
							<Text strong>NaN</Text>
						</p>
						<p>
							<Text type="secondary">Settled Percentage: </Text>
							<Text strong>NaN</Text>
						</p>
						<p>
							<Text type="secondary">Provider: </Text>
							<Text strong>Genesis Physicians Group</Text>
						</p>
						<p>
							<Text type="secondary">NCI ID: </Text>
							<Text strong>XXXXXXXXXXXX</Text>
						</p>
						<p>
							<Text type="secondary">Patient Name: </Text>
							<Text strong>Kumaravinash Konduru</Text>
						</p>
						<p>
							<Text type="secondary">Claim Creation Date: </Text>
							<Text strong>December 27th 2020, 11:07:42 pm</Text>
						</p>
						<p>
							<Text type="secondary">Description: </Text>
							<Text strong>
								This claim was created by the Genesis Physicians Group to
								provide an emergency surgery for your patient Kumaravinash
								Konduru
							</Text>
						</p>
					</Col>
				</Row>
				<Divider />
				<Row>
					<Col span={24}>
						<Title level={5}>Payment Details</Title>
						<Button type="primary">No Payment Made - Pay Claim Now</Button>
					</Col>
				</Row>
			</Card>
		</Fragment>
	);
};

ClaimPage.propTypes = {};

export default ClaimPage;
