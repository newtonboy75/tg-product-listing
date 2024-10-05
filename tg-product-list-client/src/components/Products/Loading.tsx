
const Loading = () => {
    return (
        <div className="flex space-x-2 justify-center items-center mt-10">
            <span className="sr-only">Loading...</span>
            <div className="h-4 w-4 bg-[#e06a93] rounded-full animate-bounce [animation-delay:-0.2s]"></div>
            <div className="h-4 w-4 bg-[#bb476f] rounded-full animate-bounce [animation-delay:-0.10s]"></div>
            <div className="h-4 w-4 bg-[#8c274a] rounded-full animate-bounce"></div>
        </div>
    );
};

export default Loading;
