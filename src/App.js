import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

//Components
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';

//Pages
import Dashboard from './pages/Dashboard';
import ClaimsListPage from './pages/ClaimsListPage';
import ClaimPage from './pages/ClaimPage';

const { Content } = Layout;

function App() {
	return (
		<Router>
			<Layout>
				<TopNav />
				<Layout style={{ marginTop: 64 }}>
					<Sidebar />
					<Content
						style={{
							marginLeft: 200,
							overflow: 'initial',
							padding: '20px 30px',
						}}
					>
						<Switch>
							<Route exact path="/" component={Dashboard} />
							<Route exact path="/claims" component={ClaimsListPage} />
							<Route exact path="/claim" component={ClaimPage} />
						</Switch>
					</Content>
				</Layout>
			</Layout>
		</Router>
	);
}

export default App;
