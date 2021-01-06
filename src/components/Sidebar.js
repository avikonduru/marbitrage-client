import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import {
	ProfileOutlined,
	CreditCardOutlined,
	DatabaseOutlined,
	CalendarOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const Sidebar = (props) => {
	return (
		<Fragment>
			<Sider
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					backgroundColor: '#525FE5',
					left: 0,
				}}
			>
				<Menu theme="dark" mode="inline" style={{ backgroundColor: '#525FE5' }}>
					<Menu.Item key="1" icon={<ProfileOutlined />}>
						Claims
					</Menu.Item>
					<Menu.Item key="2" icon={<CreditCardOutlined />}>
						Payments
					</Menu.Item>
					<Menu.Item key="3" icon={<DatabaseOutlined />}>
						Storage
					</Menu.Item>
					<Menu.Item key="4" icon={<CalendarOutlined />}>
						Calender
					</Menu.Item>
				</Menu>
			</Sider>
		</Fragment>
	);
};

Sidebar.propTypes = {};

export default Sidebar;
