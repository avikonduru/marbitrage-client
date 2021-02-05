import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Card, Button, Divider } from 'antd';

//Components
import ProviderCard from './ProviderCard';

const { Title, Text, Link } = Typography;

const TopProvidersCard = (props) => {
	return (
		<Fragment>
			<Card title="Unpaid Claims by Provider Group" style={{ borderRadius: 5 }}>
				<Row>
					<Col span={24}>
						<Title level={5}>Top 4 Providers by Unpaid Claims</Title>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col span={24}>
						<ProviderCard />
					</Col>
				</Row>
				<Divider style={{ marginTop: 5, marginBottom: 5 }} />
				<Row gutter={16}>
					<Col span={24}>
						<ProviderCard />
					</Col>
				</Row>
				<Divider style={{ marginTop: 5, marginBottom: 5 }} />
				<Row gutter={16}>
					<Col span={24}>
						<ProviderCard />
					</Col>
				</Row>
				<Divider style={{ marginTop: 5, marginBottom: 5 }} />
				<Row gutter={16}>
					<Col span={24}>
						<ProviderCard />
					</Col>
				</Row>
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
