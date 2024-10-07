
const Loading = () => {
    return (
        <div className="flex space-x-2 justify-center items-center mt-10">
            <span className="sr-only">Loading...</span>
            <div className="h-3 w-3 bg-[#e06a93] rounded-full animate-ping [animation-delay:-0.9s]"></div>
            <div className="h-3 w-3 bg-[#bb476f] rounded-full animate-ping [animation-delay:-0.5s]"></div>
            <div className="h-3 w-3 bg-[#8c274a] rounded-full animate-ping [animation-delay:-0.1s]"></div>
        </div>
    );
};

export default Loading;
