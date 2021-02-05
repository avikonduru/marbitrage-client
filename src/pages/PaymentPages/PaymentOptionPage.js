import React from 'react';
import PropTypes from 'prop-types';
import {
	Typography,
	Row,
	Col,
	Card,
	Divider,
	Button,
	Table,
	Tag,
	Space,
} from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const dataSource = [
	{
		key: '1',
		name: 'Company Card 1',
		type: 'Debit/Credit Card',
		status: 'Enabled',
	},
	{
		key: '2',
		name: 'Company Bank Account 1',
		type: 'Bank Account',
		status: 'Disabled',
	},
];

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: 'Type',
		dataIndex: 'type',
		key: 'type',
	},
	{
		title: 'Status',
		dataIndex: 'status',
		key: 'status',
		filters: [
			{
				text: 'Enabled',
				value: 'Enabled',
			},
			{
				text: 'Disabled',
				value: 'Disabled',
			},
		],
		onFilter: (value, record) => record.status.indexOf(value) === 0,
		render: (text) => {
			let color = 'volcano';
			if (text === 'Enabled') {
				color = 'green';
			} else if (text === 'Disabled') {
				color = 'volcano';
			}

			return (
				<Tag color={color} key={text} style={{ fontSize: 10 }}>
					{text.toUpperCase()}
				</Tag>
			);
		},
	},
	{
		title: 'Action',
		key: 'action',
		render: (text) => (
			<Button type="primary" icon={<EditOutlined />}>
				Edit
			</Button>
		),
	},
];

const PaymentOptionPage = (props) => {
	return (
		<div style={{ padding: '20px 30px' }}>
			<Row style={{ marginBottom: 20 }}>
				<Col span={12}>
					<Title level={4}>Payment Options</Title>
				</Col>
				<Col span={12} style={{ textAlign: 'right' }}>
					<Button
						type="primary"
						style={{
							backgroundColor: '#525FE5',
							borderColor: '#525FE5',
							marginRight: 10,
						}}
					>
						Add Payment Option
					</Button>
				</Col>
			</Row>
			<Row>
				<Col span={24}>
					<Table dataSource={dataSource} columns={columns} />
				</Col>
			</Row>
		</div>
	);
};

PaymentOptionPage.propTypes = {};

export default PaymentOptionPage;
