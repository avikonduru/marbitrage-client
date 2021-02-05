import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Card, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

const ProviderCard = (props) => {
	return (
		<Fragment>
			<Card size="small" style={{ borderRadius: 5 }} hoverable={true}>
				<Row gutter={16}>
					<Col span={10}>
						<Row>
							<Col span={24}>
								<Text style={{ fontSize: 12 }}>
									Baylor Scott & White Health
								</Text>
							</Col>
						</Row>
						<Row>
							<Col span={24} style={{}}>
								<Text style={{ color: '#999999', fontSize: 10 }}>
									Provider Group Name
								</Text>
							</Col>
						</Row>
					</Col>
					<Col span={7}>
						<Row>
							<Col span={24}>
								<Text style={{ fontSize: 12 }}>$1,000,000</Text>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Text style={{ color: '#999999', fontSize: 10 }}>
									Total Claimed Amount
								</Text>
							</Col>
						</Row>
					</Col>
					<Col span={7}>
						<Row>
							<Col span={24}>
								<Link strong style={{ fontSize: 12 }}>
									10
								</Link>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<Text style={{ color: '#999999', fontSize: 10 }}>
									Number of Claims
								</Text>
							</Col>
						</Row>
					</Col>
				</Row>
			</Card>
		</Fragment>
	);
};

ProviderCard.propTypes = {};

export default ProviderCard;
