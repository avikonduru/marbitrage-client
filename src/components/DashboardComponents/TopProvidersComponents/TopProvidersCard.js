import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Card, Button, Divider } from 'antd';

const { Title, Text, Link } = Typography;

const TopProvidersCard = (props) => {
	return (
		<Fragment>
			<Card title="Unpaid Claims by Provider Group" style={{ borderRadius: 5 }}>
				<Row>
					<Col span={24}>
						<Title level={5}>Top 4 Providers</Title>
					</Col>
				</Row>
				<Row gutter={16} style={{ marginTop: 20 }}>
					<Col span={8} style={{ margin: 'auto' }}>
						Baylor Scott & White Health
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
				<Row gutter={16} style={{ marginTop: 20 }}>
					<Col span={8} style={{ margin: 'auto' }}>
						Texas Health Physicians Group
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
				<Row gutter={16} style={{ marginTop: 20 }}>
					<Col span={8} style={{ margin: 'auto' }}>
						Genesis Physicians Group
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
				<Divider style={{ marginTop: 5, marginBottom: 5 }} />
				<Row gutter={16} style={{ marginTop: 20 }}>
					<Col span={8} style={{ margin: 'auto' }}>
						Texas Medical Association
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
				<Row style={{ marginTop: 20 }}>
					<Col span={24}>
						<Button type="primary">View All Providers</Button>
					</Col>
				</Row>
			</Card>
		</Fragment>
	);
};

TopProvidersCard.propTypes = {};

export default TopProvidersCard;
