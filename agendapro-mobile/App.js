import { ThemeProvider } from './src/contexts/ThemeContext';
import Routes from './src/navigation';

export default function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

