export default function Pagination({
    array,
    handleNext,
    handlePrev,
    page,
}: any) {
    return (
        <div className="flex items-center gap-x-[24px] justify-center">
            <button
                className=" bg-gradient-to-r from-purple-200 to-pink-200 p-[5px] rounded-[10px]"
                onClick={handlePrev}
            >
                {" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                </svg>
            </button>

            <div className="flex text-[#080808BF] font-medium text-[20px] gap-x-[24px]">
                {array.map((item: any, index: any) =>
                    page == item ? (
                        <button
                            className="h-[38px] px-[13px] rounded-[10px] bg-gradient-to-r from-purple-200 to-pink-200"
                            key={index}
                        >
                            {item}
                        </button>
                    ) : (
                        <button
                            className="h-[38px] px-[13px] rounded-[10px]"
                            key={index}
                        >
                            {item}
                        </button>
                    )
                )}
            </div>

            <button
                className=" bg-gradient-to-r from-purple-200 to-pink-200 p-[5px] rounded-[10px]"
                onClick={handleNext}
            >
                {" "}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-7 "
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                </svg>
            </button>
        </div>
    );
}
