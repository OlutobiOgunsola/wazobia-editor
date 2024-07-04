import React from "react";
import TextArea from "./components/TextArea";

const Editor = function ({}): React.JSX.Element {
	const [title, setTitle] = React.useState("");
	const HandleTitle = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setTitle(event?.target?.value);
	};
	const HandleSubmit = (event: React.SyntheticEvent): void => {
		event.preventDefault();
	};
	return (
		<form
			className="mx-auto w-96 border-solid bg-gray-50 border border-gray-300 h-96 mt-10"
			onSubmit={HandleSubmit}
		>
			<span className="border-b-2 h-10 w-auto block"></span>
			<div className="px-2 w-auto">
				<div>
					<label htmlFor="title"></label>
					<input
						value={title}
						onChange={HandleTitle}
						placeholder="Add post title"
						title="Add post title"
						name="title"
						type="text"
						className="bg-gray-50 h-10 w-auto placeholder-black placeholder-opacity-100 font-bold outline-none"
					/>
				</div>
                {
                    !title && <span className="text-slate-400 text-xs italic">
                        Add content
                    </span>
                }
                {
                    title && <TextArea />
                }
			</div>
		</form>
	);
};

export default Editor;
