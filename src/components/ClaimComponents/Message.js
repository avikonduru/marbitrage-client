import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';
const { Title, Text } = Typography;

const Message = (props) => {
	return (
		<div>
			<Row>
				<Col span={24}>
					<Card size="small">
						<Row>
							<Col span={18}>
								<Title level={5}>
									Blue Cross Blue Sheild of Texas: Kumaravinash Konduru
								</Title>
							</Col>
							<Col
								span={6}
								style={{
									fontSize: 10,
									color: '#999999',
									textAlign: 'right',
								}}
							>
								January 7th 2021, 01:34:52 am
							</Col>
						</Row>
						<Row>
							<Col span={24} style={{ color: '#666666' }}>
								<p>Let's do this!</p>
							</Col>
						</Row>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

Message.propTypes = {};

export default Message;
