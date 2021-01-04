import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Typography, Row, Col, Card, Divider, Button } from 'antd';
import { RightOutlined } from '@ant-design/icons';

//Components
import ClaimHighlightCard from '../components/ClaimsListComponents/ClaimHighlightCard';

const { Title, Text } = Typography;

const ClaimsListPage = (props) => {
	return (
		<Fragment>
			<Card title="Claims" style={{ borderRadius: 5 }}>
				<Row gutter={16}>
					<Col span={3}>
						<Title level={5}>Filter: Unpaid</Title>
					</Col>
					<Col span={3}>
						<Title level={5}>Amount: 20</Title>
					</Col>
				</Row>
				<Divider />
				<Row>
					<Col span={24}>
						<ClaimHighlightCard
							claimID={'XXX-XX-XXXX'}
							targetPrice={12345.65}
							settledPrice={NaN}
							settledPercentage={NaN}
							status={'Unpaid'}
							provider={'Genesis Physicians Group'}
							timeStamp={'December 27th 2020, 11:07:42 pm'}
						/>
					</Col>
				</Row>
				<Row style={{ marginTop: 20 }}>
					<Col span={24}>
						<ClaimHighlightCard
							claimID={'XXX-XX-XXXX'}
							targetPrice={12345.65}
							settledPrice={NaN}
							settledPercentage={NaN}
							status={'Unpaid'}
							provider={'Genesis Physicians Group'}
							timeStamp={'December 27th 2020, 11:07:42 pm'}
						/>
					</Col>
				</Row>
				<Row style={{ marginTop: 20 }}>
					<Col span={24}>
						<ClaimHighlightCard
							claimID={'XXX-XX-XXXX'}
							targetPrice={12345.65}
							settledPrice={NaN}
							settledPercentage={NaN}
							status={'Unpaid'}
							provider={'Genesis Physicians Group'}
							timeStamp={'December 27th 2020, 11:07:42 pm'}
						/>
					</Col>
				</Row>
				<Row style={{ marginTop: 20 }}>
					<Col span={24}>
						<ClaimHighlightCard
							claimID={'XXX-XX-XXXX'}
							targetPrice={12345.65}
							settledPrice={NaN}
							settledPercentage={NaN}
							status={'Unpaid'}
							provider={'Genesis Physicians Group'}
							timeStamp={'December 27th 2020, 11:07:42 pm'}
						/>
					</Col>
				</Row>
			</Card>
		</Fragment>
	);
};

ClaimsListPage.propTypes = {};

export default ClaimsListPage;
