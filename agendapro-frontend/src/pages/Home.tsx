import ToggleDarkMode from "../components/ToggleDarkMode";

const Home = () => {
	return <>
		<div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 transition-colors">
			<ToggleDarkMode />
		</div>
	</>;
}

export default Home;