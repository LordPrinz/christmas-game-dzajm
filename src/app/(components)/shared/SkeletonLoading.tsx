const SkeletonLoading = () => {
	return (
		<>
			<div className="flex items-center justify-between p-4 border rounded-lg">
				<div>
					<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-3"></div>
					<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
				</div>
				<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
			</div>
			<div className="flex items-center justify-between p-4 border rounded-lg">
				<div>
					<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-3"></div>
					<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
				</div>
				<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
			</div>
			<div className="flex items-center justify-between p-4 border rounded-lg">
				<div>
					<div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-3"></div>
					<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
				</div>
				<div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
			</div>
			<span className="sr-only">Loading...</span>
		</>
	);
};

export default SkeletonLoading;
