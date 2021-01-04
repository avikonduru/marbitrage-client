import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Card, Divider, Button } from 'antd';

//Components
import SettledProviderCard from './SettledProviderCard';

const { Title, Text } = Typography;

const SettledCard = (props) => {
	return (
		<Fragment>
			<Card title="Settled Percentage" style={{ borderRadius: 5 }}>
				<Row>
					<Col span={24}>
						<Title level={5}>Top 4 Providers</Title>
					</Col>
				</Row>
				<Row>
					<Col span={24}>
						<SettledProviderCard
							provider={'Baylor Scott & White Health'}
							averageTarget={10000}
							averageSettled={8000}
						/>
						<Divider style={{ marginTop: 5, marginBottom: 5 }} />
						<SettledProviderCard
							provider={'Texas Health Physicians Group'}
							averageTarget={20000}
							averageSettled={14000}
						/>
						<Divider style={{ marginTop: 5, marginBottom: 5 }} />
						<SettledProviderCard
							provider={'Genesis Physicians Group'}
							averageTarget={1000}
							averageSettled={600}
						/>
						<Divider style={{ marginTop: 5, marginBottom: 5 }} />
						<SettledProviderCard
							provider={'Texas Medical Association'}
							averageTarget={100}
							averageSettled={50}
						/>
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

SettledCard.propTypes = {};

export default SettledCard;
