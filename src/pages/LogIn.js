import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
	Row,
	Col,
	Card,
	Divider,
	Image,
	Typography,
	Input,
	Form,
	Button,
} from 'antd';

const { Title, Text, Link } = Typography;

const LogIn = (props) => {
	const [form] = Form.useForm();
	return (
		<div>
			<Row style={{ margin: 0, padding: 0, height: '100vh' }}>
				<Col
					span={18}
					style={{
						backgroundImage: 'url("/images/Rectangle.png")',
						borderStyle: 'solid',
						borderColor: 'white',
					}}
				>
					<Row>
						<Col span={24}>
							<div
								style={{
									float: 'left',
									fontSize: 25,
									color: '#525FE5',
									fontFamily: 'Roboto Condensed',
									marginTop: 20,
									marginLeft: 70,
								}}
							>
								mArbitrage
							</div>
						</Col>
						<Col
							span={24}
							style={{
								height: '87vh',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}
						>
							<Image
								width={500}
								src="/images/Medicine-amico.png"
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							/>
						</Col>
						<Col
							span={24}
							style={{
								color: '#999999',
								textAlign: 'center',
								marginTop: 'auto',
								marginBottom: 'auto',
							}}
						>
							© Copyright 2021 Manalink - All rights reserved
						</Col>
					</Row>
				</Col>
				<Col
					span={6}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Card
						style={{
							marginTop: 'auto',
							marginBottom: 'auto',
						}}
					>
						<Form form={form} layout="vertical">
							<Row style={{ marginBottom: 20 }}>
								<Col span={24}>
									<Title level={5}>Log In</Title>
									<Text type="secondary">
										Enter your email address and password to access account.
									</Text>
								</Col>
							</Row>
							<Row>
								<Col span={24}>
									<Row>
										<Col span={24}>
											<Form.Item label="Email Address" required>
												<Input placeholder="Enter your email" />
											</Form.Item>
										</Col>
									</Row>
									<Row>
										<Col span={24}>
											<Form.Item label="Password" required>
												<Input placeholder="Enter your password" />
											</Form.Item>
										</Col>
									</Row>
									<Row>
										<Col span={24}>
											<Form.Item>
												<Button
													type="primary"
													style={{
														backgroundColor: '#525FE5',
														borderColor: '#525FE5',
													}}
												>
													LOG IN
												</Button>
											</Form.Item>
										</Col>
									</Row>
								</Col>
							</Row>
						</Form>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

LogIn.propTypes = {};

export default LogIn;
