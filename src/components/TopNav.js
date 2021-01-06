import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Layout, Menu, Badge } from 'antd';
import {
	BellOutlined,
	CreditCardOutlined,
	DatabaseOutlined,
	CalendarOutlined,
} from '@ant-design/icons';

const { Header } = Layout;

const TopNav = (props) => {
	return (
		<Fragment>
			<Header
				style={{
					backgroundColor: 'white',
					position: 'fixed',
					zIndex: 1,
					width: '100%',
				}}
			>
				<div
					style={{
						float: 'left',
						fontSize: 25,
						color: '#525FE5',
						fontFamily: 'Roboto Condensed',
					}}
				>
					mArbitrage
				</div>
				<Menu theme="light" mode="horizontal" style={{ float: 'right' }}>
					<Menu.Item key="1">
						<Link to="/">My Dashboard</Link>
					</Menu.Item>
					<Menu.Item key="2">
						<Badge count={1} dot>
							<BellOutlined />
						</Badge>
					</Menu.Item>
					<Menu.Item key="3">Settings</Menu.Item>
				</Menu>
			</Header>
		</Fragment>
	);
};

TopNav.propTypes = {};

export default TopNav;
