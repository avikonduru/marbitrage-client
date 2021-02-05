import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
	Typography,
	Row,
	Col,
	Card,
	Divider,
	Button,
	Breadcrumb,
	Form,
	Input,
} from 'antd';
import {
	SendOutlined,
	FolderAddOutlined,
	DollarOutlined,
} from '@ant-design/icons';

const { Title, Text } = Typography;

const ClaimPage = (props) => {
	return (
		<div style={{ padding: '20px 30px' }}>
			<Row style={{ marginBottom: 10 }}>
				<Col span={24}>
					<Breadcrumb>
						<Breadcrumb.Item>
							<a href="">Claims</a>
						</Breadcrumb.Item>
						<Breadcrumb.Item>Claim 356-855-2657</Breadcrumb.Item>
					</Breadcrumb>
				</Col>
			</Row>
			<Row>
				<Col span={8}>
					<Card style={{ minHeight: '450px' }}>
						<Row>
							<Col span={24}>
								<Title level={5}>Claim Details</Title>
								<div style={{ fontSize: 12 }}>
									<p>
										<Text type="secondary">Claim ID: </Text>
										<Text strong>356-855-2657</Text>
									</p>
									<p>
										<Text type="secondary">Claimed Price: </Text>
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
										<Text type="secondary">Status: </Text>
										<Text strong>Unpaid</Text>
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
								</div>
							</Col>
						</Row>
					</Card>
				</Col>
				<Col span={16}>
					<Row>
						<Col span={24}>
							<div
								style={{
									minHeight: '590px',
									backgroundColor: 'white',
								}}
							>
								<Row>
									<Col span={24}>
										<Card size="small">
											<Row>
												<Col span={18}>
													<h5>
														Blue Cross Blue Sheild of Texas: Kumaravinash
														Konduru
													</h5>
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
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<Card size="small">
								<Row
									type="flex"
									align="middle"
									style={{
										textAlign: 'center',
										justifyContent: 'center',
									}}
								>
									<Col span={2}>
										<Button
											size="large"
											shape="circle"
											icon={<FolderAddOutlined />}
										/>
									</Col>
									<Col span={2}>
										<Button
											size="large"
											shape="circle"
											icon={<DollarOutlined />}
										/>
									</Col>

									<Col span={18}>
										<Input.TextArea
											size="large"
											autoSize={{ minRows: 1, maxRows: 3 }}
											placeholder="Type your message"
											style={{ borderRadius: 10 }}
										/>
									</Col>
									<Col span={2} style={{ textAlign: 'right' }}>
										<Button type="link" size="large" icon={<SendOutlined />} />
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};

ClaimPage.propTypes = {};

export default ClaimPage;
