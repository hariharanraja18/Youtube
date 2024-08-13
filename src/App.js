import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import Store from './components/utils/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
// import WatchPage from './components/WatchPage';
import { lazy, Suspense } from 'react';
const WatchPage = lazy(() => import('./components/WatchPage'));
const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <Body />,
		children: [
			{
				path: '/',
				element: <MainContainer />,
			},
			{
				path: '/watch',
				element: (
					<Suspense fallback={<h1>Lazy loading....</h1>}>
						<WatchPage />
					</Suspense>
				),
			},
		],
	},
]);
function App() {
	return (
		<Provider store={Store}>
			<div className="App">
				<Head />
				<RouterProvider router={AppRouter}></RouterProvider>
			</div>
		</Provider>
	);
}
export default App;
