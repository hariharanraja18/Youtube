import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import Store from './components/utils/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <Body />,
		children: [
			{
				path: "/",
				element: <MainContainer/>
			},
			{
				path: "/watch",
				element: <WatchPage/>
			}
		]
	},
]);
function App() {
	return (
		<Provider store={Store}>
			<div className="App">
				<Head />
				<RouterProvider router={AppRouter}>
					<Body />
				</RouterProvider>
			</div>
		</Provider>
	);
}
export default App;
