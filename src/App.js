import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

//Components
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';

//Pages
import Dashboard from './pages/Dashboard';
import ClaimsPage from './pages/ClaimsPage';
import ClaimPage from './pages/ClaimPage';
import LogIn from './pages/LogIn';
import PaymentOptionPage from './pages/PaymentPages/PaymentOptionPage';

const { Content } = Layout;

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/login" component={LogIn} />
				<Layout style={{ backgroundColor: 'black' }}>
					<TopNav />
					<Layout style={{ marginTop: 64 }}>
						<Sidebar />
						<Content
							style={{
								marginLeft: 200,
								overflow: 'initial',
								minHeight: '92vh',
							}}
						>
							<Switch>
								<Route exact path="/" component={Dashboard} />
								<Route exact path="/claims" component={ClaimsPage} />
								<Route exact path="/claim" component={ClaimPage} />
								<Route exact path="/payments" component={PaymentOptionPage} />
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</Switch>
		</Router>
	);
}

export default App;
