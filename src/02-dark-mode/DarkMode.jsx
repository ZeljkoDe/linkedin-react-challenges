import { useState } from 'react';

export default function DarkMode() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const className = `${isDarkMode && 'dark-mode'} page`;
	return (
		<div className={className}>
			<button
				onClick={() => setIsDarkMode(true)}
				className='dark-mode-button'
			>
				Dark Mode
			</button>
			<button
				onClick={() => setIsDarkMode(false)}
				className='light-mode-button'
			>
				Light Mode
			</button>
		</div>
	);
}
