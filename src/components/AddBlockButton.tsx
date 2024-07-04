import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
	faPlus,
	faImage,
	faVideo,
	faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { Switch } from "@material-tailwind/react";

const AddBlockButton = ({
	HandleImageUpload,
	HandleVideoUpload,
}: {
	HandleImageUpload: (imageBlob: string | ArrayBuffer) => any;
	HandleVideoUpload: (videoURL: string) => any;
}): React.JSX.Element => {
	const [selectFile, setSelectFile] = React.useState<File | null>();
	const [videoURL, setVideoURL] = React.useState<string>("");
	const [socialsURL, setSocialsURL] = React.useState<string>("");
	const [socialsCode, setSocialsCode] = React.useState<string>("");
	const [showMenu, setShowMenu] = React.useState<Boolean>(false);
	const [showImageModal, setShowImageModal] = React.useState<Boolean>(false);
	const [showVideoModal, setShowVideoModal] = React.useState<Boolean>(false);
	const [showSocialsModal, setShowSocialsModal] =
		React.useState<Boolean>(false);
	const imageRef = React.useRef<HTMLInputElement>(null);
	const imageClickProxy = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log("image click proxy");
		const file = event?.target?.files || [];
		const selectedFile = file[0];
		setSelectFile(selectedFile);
        setShowImageModal(false);
	};
	const handleImages = (): void => {
		console.log("handling images", imageRef);
		imageRef?.current?.click();
	};
	React.useEffect(() => {
		const reader = new FileReader();
		if (selectFile) {
			reader.readAsDataURL(selectFile);
			reader.onload = () => {
				if (reader.result) {
					HandleImageUpload(reader.result);
				}
			};
		}
	}, [selectFile]);

	const toggleMenu = (): void => {
		return setShowMenu(!showMenu);
	};

	const toggleImageModal = (): void => {
		setShowMenu(false);
		return setShowImageModal(!showImageModal);
	};
	const toggleVideoModal = (): void => {
		setShowMenu(false);
		return setShowVideoModal(!showVideoModal);
	};
	const toggleSocialsModal = (): void => {
		setShowMenu(false);
		return setShowSocialsModal(!showSocialsModal);
	};

	const embedVideo = (): void => {
		HandleVideoUpload(videoURL);
		setShowVideoModal(false);
		setShowMenu(false);
	};
	const embedSocials = (): void => {
		HandleVideoUpload(videoURL);
		setShowSocialsModal(false);
		setShowMenu(false);
	};
	const handleVideoURL = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setVideoURL(value);
	};
	const handleSocialsURL = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSocialsURL(value);
	};
	const handleSocialsCode = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSocialsCode(value);
	};
	return (
		<div>
			<input
				className="hidden"
				title="image upload"
				type="file"
				ref={imageRef}
				accept="image/*"
				onChange={imageClickProxy}
			/>
			{showImageModal && (
				<div className="modal-background fixed top-0 left-0 right-0 w-screen h-screen flex justify-center items-center ">
					<div className="w-[659px] h-[336px] bg-white shadow-sm flex flex-col p-6 rounded">
						<span className="w-auto flex flex-row justify-between mb-4">
							<span className="font-bold text-base">Embed</span>
							<span
								className="cursor-pointer"
								onClick={() => setShowImageModal(false)}
							>
								x
							</span>
						</span>
						<span className="mb-4 text-sm">Upload Image</span>
						<span className="text-[10px] font-light mb-2">
							FILE UPLOAD
						</span>
						<span
							className="bg-slate-100 w-full h-[141px] border rounded border-dashed border-green-700 border-spacing-1 cursor-pointer flex justify-center items-center mb-6"
							onClick={handleImages}
						>
							<span
								className="bg-white border border-green-700 rounded h-[30px] w-[146px] text-[10px] text-center leading-[30px]"
								onClick={handleImages}
							>
								Import Image from Device
							</span>
						</span>
						<span>
							<span className="px-4 py-2 bg-green-700 rounded text-white mr-2 font-semibold cursor-pointer">
								Embed
							</span>

							<span className="px-4 py-2 border border-green-200 rounded font-semibold cursor-pointer">
								Cancel
							</span>
						</span>
					</div>
				</div>
			)}
			{showVideoModal && (
				<div className="modal-background fixed top-0 left-0 right-0 w-screen h-screen flex justify-center items-center ">
					<div className="w-[659px] bg-white shadow-sm flex flex-col p-6 rounded">
						<span className="w-auto flex flex-row justify-between mb-4">
							<span className="font-bold text-base">Embed</span>
							<span
								className="cursor-pointer"
								onClick={() => setShowVideoModal(false)}
							>
								x
							</span>
						</span>
						<span className="text-[10px] font-light mb-2">
							VIDEO PROVIDER
						</span>
						<select
							title="video provider"
							className="bg-slate-100 w-auto px-[12px] py-2 mb-4 outline-none"
						>
							<option value="youtube">Youtube</option>
						</select>
						<span className="text-[10px] font-light mb-2">URL</span>
						<input
							type="text"
							title="video url"
							className="w-auto bg-slate-100 px-[12px] py-2 mb-4 outline-none"
							value={videoURL}
							onChange={handleVideoURL}
						/>
						<span>
							<span
								className="px-4 py-2 bg-green-700 rounded text-white mr-2 font-semibold cursor-pointer"
								onClick={embedVideo}
							>
								Embed
							</span>

							<span
								className="px-4 py-2 border border-green-200 rounded font-semibold cursor-pointer"
								onClick={() => setShowVideoModal(false)}
							>
								Cancel
							</span>
						</span>
					</div>
				</div>
			)}
			{showSocialsModal && (
				<div className="modal-background fixed top-0 left-0 right-0 w-screen h-screen flex justify-center items-center ">
					<div className="w-[659px] bg-white shadow-sm flex flex-col p-6 rounded">
						<span className="w-auto flex flex-row justify-between mb-4">
							<span className="font-bold text-base">Embed</span>
							<span
								className="cursor-pointer"
								onClick={() => setShowSocialsModal(false)}
							>
								x
							</span>
						</span>
						<span className="text-[10px] font-light mb-2">
							SOCIAL MEDIA PLATFORM
						</span>
						<select
							title="video provider"
							className="bg-slate-100 w-auto px-[12px] py-2 mb-4 outline-none"
						>
							<option value="youtube">Facebook</option>
						</select>
						<span className="text-[10px] font-light mb-2">URL</span>
						<input
							type="text"
							title="video url"
							className="w-auto bg-slate-100 px-[12px] py-2 mb-4 outline-none"
							value={socialsURL}
							onChange={handleSocialsURL}
						/>
						<span className="text-[10px] font-light mb-2">
							CODE
						</span>
						<input
							type="text"
							title="video url"
							className="w-auto bg-slate-100 px-[12px] py-2 mb-4 outline-none"
							value={socialsCode}
							onChange={handleSocialsCode}
						/>
						<span className="w-auto flex flex-row justify-between mb-4">
							<span className="text-sm">Disable caption</span>
							<input
								title="disable captions"
								type="checkbox"
								className="toggle bg-white [--tglbg:green] hover:bg-white toggle-sm"
								defaultChecked
							/>
						</span>
						<span>
							<span
								className="px-4 py-2 bg-green-700 rounded text-white mr-2 font-semibold cursor-pointer"
								onClick={embedSocials}
							>
								Embed
							</span>

							<span
								className="px-4 py-2 border border-green-200 rounded font-semibold cursor-pointer"
								onClick={() => setShowSocialsModal(false)}
							>
								Cancel
							</span>
						</span>
					</div>
				</div>
			)}
			<span
				onClick={toggleMenu}
				className="bg-green-50 w-5 h-5 my-2 rounded-full flex justify-center items-center cursor-pointer"
			>
				<FontAwesomeIcon icon={faPlus} size="xs" />
			</span>
			{showMenu && (
				<div className="bg-white w-40 shadow">
					<p className="p-2 text-slate-400 text-[10px]">EMBEDS</p>

					<div
						className="w-auto p-2 flex flex-row items-start hover:bg-green-50 cursor-pointer"
						onClick={toggleImageModal}
					>
						<FontAwesomeIcon
							className="mr-2 text-slate-600"
							icon={faImage}
							size="xs"
							fixedWidth
						/>
						<div className="flex flex-col">
							<p className="text-xs text-slate-600 font-semibold leading-3 mb-1">
								Picture
							</p>
							<p className="text-[8px] text-slate-300">
								jpeg, png
							</p>
						</div>
					</div>

					<div
						className="w-auto p-2 flex flex-row items-start hover:bg-green-50 cursor-pointer"
						onClick={toggleVideoModal}
					>
						<FontAwesomeIcon
							className="mr-2 text-slate-600"
							icon={faVideo}
							size="xs"
							fixedWidth
						/>
						<div className="flex flex-col">
							<p className="text-xs text-slate-600 font-semibold leading-3 mb-1">
								Video
							</p>
							<p className="text-[8px] text-slate-300">
								Embed a Youtube Video
							</p>
						</div>
					</div>

					<div
						className="w-auto p-2 flex flex-row items-start hover:bg-green-50 cursor-pointer"
						onClick={toggleSocialsModal}
					>
						<FontAwesomeIcon
							className="mr-2 text-slate-600"
							icon={faShareNodes}
							size="xs"
							fixedWidth
						/>
						<div className="flex flex-col">
							<p className="text-xs text-slate-600 font-semibold leading-3 mb-1">
								Social
							</p>
							<p className="text-[8px] text-slate-300">
								Embed a Facebook Video
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default AddBlockButton;
