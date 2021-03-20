import { useState } from 'react';

const useFileDialog = (onSelectFile?: (files: any) => void) => {
	const [files, setFiles] = useState(null);

	const openFileDialog = () => {
		const input = document.createElement('input');
		input.type = 'file';

		input.onchange = (event: Event) => {
			const { files } = event.target as HTMLInputElement;
			setFiles(files);
			if (onSelectFile) {
				onSelectFile(files);
			}
		};

		input.click();
	};

	return { files, openFileDialog };
};

export default useFileDialog;
