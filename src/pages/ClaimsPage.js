import React, { Fragment, useState, useRef } from 'react';
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
	Input,
} from 'antd';
import Highlighter from 'react-highlight-words';
import { RightOutlined, SearchOutlined } from '@ant-design/icons';

//Components
import ClaimHighlightCard from '../components/ClaimsListComponents/ClaimHighlightCard';

const { Title, Text } = Typography;

const data = [
	{
		key: '1',
		claimId: '123-456-7890',
		claimedAmount: 10000.0,
		settledAmount: 8000.0,
		settledPercentage: 50.0,
		status: 'Paid',
		provider: 'Baylor Scott & White Health',
		creationDate: 'December 27th 2020, 11:07:42 pm',
	},
	{
		key: '2',
		claimId: '274-543-2345',
		claimedAmount: 1000.0,
		settledAmount: 750.0,
		settledPercentage: 50.0,
		status: 'Ready for Payment',
		provider: 'Genesis Physicians Group',
		creationDate: 'November 14th 2020, 04:17:34 am',
	},
	{
		key: '3',
		claimId: '323-565-4657',
		claimedAmount: 6000.0,
		settledAmount: 3000.0,
		settledPercentage: 50.0,
		status: 'Paid',
		provider: 'Texas Health Physicians Group',
		creationDate: 'October 27th 2020, 11:07:42 pm',
	},
	{
		key: '4',
		claimId: '344-363-6789',
		claimedAmount: 2000.0,
		settledAmount: 500.0,
		settledPercentage: 75.0,
		status: 'Paid',
		provider: 'Texas Health Physicians Groupp',
		creationDate: 'December 27th 2020, 11:07:42 pm',
	},
	{
		key: '5',
		claimId: '356-855-2657',
		claimedAmount: 5000.0,
		settledAmount: NaN,
		settledPercentage: NaN,
		status: 'Unpaid',
		provider: 'Baylor Scott & White Health',
		creationDate: 'January 7th 2021, 01:34:52 am',
	},
	{
		key: '6',
		claimId: '264-464-8653',
		claimedAmount: 50000.0,
		settledAmount: NaN,
		settledPercentage: NaN,
		status: 'In Progress',
		provider: 'Texas Health Physicians Group',
		creationDate: 'July 27th 2020, 11:07:42 pm',
	},
	{
		key: '7',
		claimId: '256-464-8787',
		claimedAmount: 1000000.0,
		settledAmount: NaN,
		settledPercentage: NaN,
		status: 'In Progress',
		provider: 'Texas Health Physicians Group',
		creationDate: 'December 17th 2020, 11:07:42 pm',
	},
	{
		key: '8',
		claimId: '365-215-4456',
		claimedAmount: 1000000.0,
		settledAmount: NaN,
		settledPercentage: NaN,
		status: 'Unpaid',
		provider: 'Baylor Scott & White Health',
		creationDate: 'December 22th 2020, 11:07:42 pm',
	},
	{
		key: '9',
		claimId: '352-768-9755',
		claimedAmount: 100.0,
		settledAmount: 95.0,
		settledPercentage: 95.0,
		status: 'Paid',
		provider: 'Texas Medical Association',
		creationDate: 'August 27th 2020, 11:07:42 pm',
	},
];

const ClaimsPage = (props) => {
	const [searchText, setSearchText] = useState('');
	const [searchedColumn, setSearchedColumn] = useState('');
	const searchInput = useRef(null);

	function getColumnSearchProps(dataIndex) {
		return {
			filterDropdown: ({
				setSelectedKeys,
				selectedKeys,
				confirm,
				clearFilters,
			}) => (
				<div style={{ padding: 8 }}>
					<Input
						ref={searchInput}
						placeholder={`Search ${dataIndex}`}
						value={selectedKeys[0]}
						onChange={(e) =>
							setSelectedKeys(e.target.value ? [e.target.value] : [])
						}
						onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
						style={{ width: 188, marginBottom: 8, display: 'block' }}
					/>
					<Space>
						<Button
							type="primary"
							onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
							icon={<SearchOutlined />}
							size="small"
							style={{ width: 90 }}
						>
							Search
						</Button>
						<Button
							onClick={() => handleReset(clearFilters)}
							size="small"
							style={{ width: 90 }}
						>
							Reset
						</Button>
					</Space>
				</div>
			),
			filterIcon: (filtered) => (
				<SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
			),
			onFilter: (value, record) =>
				record[dataIndex]
					.toString()
					.toLowerCase()
					.includes(value.toLowerCase()),
			onFilterDropdownVisibleChange: (visible) => {
				if (visible) {
					setTimeout(() => searchInput.current.select());
				}
			},
			render: (text) =>
				searchedColumn === dataIndex ? (
					<Highlighter
						highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
						searchWords={[searchText]}
						autoEscape
						textToHighlight={text.toString()}
					/>
				) : (
					text
				),
		};
	}

	function handleSearch(selectedKeys, confirm, dataIndex) {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	}

	function handleReset(clearFilters) {
		clearFilters();
		setSearchText('');
	}

	function onChange(pagination, filters, sorter, extra) {
		console.log('params', pagination, filters, sorter, extra);
	}

	function currencyFormat(num) {
		return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
	}

	const columns = [
		{
			title: 'Claim Id',
			dataIndex: 'claimId',
			key: 'claimId',
			render: (text) => <span style={{ fontSize: 12 }}>{text}</span>,
			...getColumnSearchProps('claimId'),
		},
		{
			title: 'Claimed Amount',
			dataIndex: 'claimedAmount',
			key: 'claimedAmount',
			render: (text) => (
				<span style={{ fontSize: 12 }}>
					{text ? currencyFormat(text) : text}
				</span>
			),
			sorter: {
				compare: (a, b) => a.claimedAmount - b.claimedAmount,
			},
		},
		{
			title: 'Settled Amount',
			dataIndex: 'settledAmount',
			key: 'settledAmount',
			render: (text) => (
				<span style={{ fontSize: 12 }}>
					{text ? currencyFormat(text) : text}
				</span>
			),
			sorter: {
				compare: (a, b) => a.settledAmount - b.settledAmount,
			},
		},
		{
			title: 'Settled Percentage',
			dataIndex: 'settledPercentage',
			key: 'settledPercentage',
			render: (text) => (
				<span style={{ fontSize: 12 }}>
					{text ? parseFloat(text).toFixed(2) + '%' : text}
				</span>
			),
			sorter: {
				compare: (a, b) => a.settledAmount - b.settledAmount,
			},
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			filters: [
				{
					text: 'Unpaid',
					value: 'Unpaid',
				},
				{
					text: 'In Progress',
					value: 'In Progress',
				},
				{
					text: 'Ready for Payment',
					value: 'Ready for Payment',
				},
				{
					text: 'Paid',
					value: 'Paid',
				},
			],
			onFilter: (value, record) => record.status.indexOf(value) === 0,
			render: (text) => {
				let color = 'volcano';
				if (text === 'Unpaid') {
					color = 'volcano';
				} else if (text === 'In Progress' || text === 'Ready for Payment') {
					color = 'geekblue';
				} else if (text === 'Paid') {
					color = 'green';
				}

				return (
					<Tag color={color} key={text} style={{ fontSize: 10 }}>
						{text.toUpperCase()}
					</Tag>
				);
			},
		},
		{
			title: 'Provider',
			dataIndex: 'provider',
			key: 'provider',
			render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
			...getColumnSearchProps('provider'),
		},
		{
			title: 'Creation Date',
			dataIndex: 'creationDate',
			key: 'creationDate',
			render: (text) => <span style={{ fontSize: 10 }}>{text}</span>,
		},
		{
			title: 'Action',
			key: 'action',
			render: (text, record) => (
				<Button
					type="primary"
					shape="circle"
					icon={<RightOutlined />}
					size={'large'}
					onClick={console.log('clicked')}
				/>
			),
		},
	];

	return (
		<div style={{ padding: '20px 30px' }}>
			<Row>
				<Col span={24}>
					<Table
						columns={columns}
						dataSource={data}
						pagination={{ pageSize: 10 }}
						scroll={{ y: 590 }}
						onChange={onChange}
					/>
				</Col>
			</Row>
		</div>
	);
};

ClaimsPage.propTypes = {};

export default ClaimsPage;
