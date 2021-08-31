import { useState } from 'react';

interface Options {
	multiple?: boolean;
	accept?: string;
}

const DEFAULT_OPTIONS: Options = {
	multiple: true,
	accept: '*',
};

const useFileDialog = (
	onSelectFile?: (files: FileList) => void,
	options?: Partial<Options>,
) => {
	const [files, setFiles] = useState<FileList | null>(null);

	const openFileDialog = (localOptions?: Partial<Options>) => {
		const _options: Options = {
			...DEFAULT_OPTIONS,
			...options,
			...localOptions,
		};
		const input = document.createElement('input');
		input.type = 'file';
		input.multiple = _options.multiple;
		input.accept = _options.accept;

		input.onchange = (event: Event) => {
			const {
				files,
			}: { files: FileList } = event.target as HTMLInputElement;
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
