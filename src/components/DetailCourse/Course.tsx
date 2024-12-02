import Image from "next/image";

export default function Course({
    lesson,
    handleSelectLesson,
    arrayLesson,
    handleNextLesson,
    handlePrevLesson,
    pageLesson,
    lessonDB,
}: any) {
    return (
        <div className="">
            <div className="">
                <div className="grid grid-cols-2 gap-x-[24px]">
                    {lessonDB?.map((item: any, index: any) =>
                        pageLesson * 2 - 2 <= index &&
                        index < pageLesson * 2 ? (
                            <div
                                onClick={() => handleSelectLesson(item.id)}
                                key={item.id}
                                className="flex flex-col gap-y-[16px] justify-between py-[10px] pl-[10px] pr-[10px] bg-[#FAFAFA]  border border-[#F1F1F1] rounded-[12px]"
                            >
                                <Image
                                    src={item.image}
                                    width={340}
                                    height={240}
                                    alt=""
                                    className="rounded-[10px]"
                                />
                                <div className="flex flex-col gap-y-[16px] justify-between">
                                    <div className="flex gap-x-[8px] items-center">
                                        <svg
                                            width="14"
                                            height="16"
                                            viewBox="0 0 14 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M14 10.5V1.5C14 0.6875 13.3125 0 12.5 0H11V6C11 6.40625 10.5 6.625 10.1875 6.375L8.5 5L6.78125 6.40625C6.46875 6.65625 6 6.4375 6 6V0H3C1.3125 0 0 1.34375 0 3V13C0 14.6875 1.3125 16 3 16H13C13.5312 16 14 15.5625 14 15C14 14.6562 13.7812 14.3438 13.5 14.1562V11.625C13.7812 11.3438 14 10.9688 14 10.5ZM12 14H3C2.4375 14 2 13.5625 2 13C2 12.4688 2.4375 12 3 12H12V14Z"
                                                fill="#080808"
                                                fill-opacity="0.25"
                                            />
                                        </svg>
                                        <h3 className="font-medium text-[16px] text-[#080808BF]">
                                            Lesson: {item.curLesson}
                                        </h3>
                                    </div>
                                    <h3 className="font-medium text-[16px] text-[#080808]">
                                        {item.content}
                                    </h3>

                                    <div className="p-[3px] bg-gradient-to-r from-purple-300 to-pink-300 rounded-[12px]">
                                        {" "}
                                        <div className="flex items-center bg-white rounded-[10px] p-[10px] gap-x-[24px] justify-center">
                                            <h3 className="font-medium text-[15px] text-[#080808]">
                                                Lets Go
                                            </h3>

                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                className="size-7 bg-gradient-to-r from-purple-300 to-pink-300 rounded-[50%]"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : undefined
                    )}
                </div>

                {/* Pagination */}
                <div className="flex items-center pt-[24px] gap-x-[24px] justify-center">
                    <button
                        className=" bg-gradient-to-r from-purple-200 to-pink-200 p-[5px] rounded-[10px]"
                        onClick={handlePrevLesson}
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
                        {arrayLesson.map((item: any, index: any) =>
                            pageLesson == item ? (
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
                        onClick={handleNextLesson}
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
            </div>
        </div>
    );
}
