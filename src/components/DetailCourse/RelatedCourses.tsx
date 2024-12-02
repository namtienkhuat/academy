import Image from "next/image";

export default function RelatedCourses({ relate }: any) {
    return (
        <div className="pt-[150px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                    <span className="w-[4px] h-[4px] bg-[#9E5CF2]"></span>
                    <h3 className="font-semibold text-[#080808] text-[20px]">
                        Related Course
                    </h3>
                </div>
                <div className="flex gap-x-[25px]">
                    <div className="bg-[#FAFAFA] rounded-[10px] p-[8px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14 18C13.7188 18 13.4688 17.9062 13.2812 17.7188L8.28125 12.7188C7.875 12.3438 7.875 11.6875 8.28125 11.3125L13.2812 6.3125C13.6562 5.90625 14.3125 5.90625 14.6875 6.3125C15.0938 6.6875 15.0938 7.34375 14.6875 7.71875L10.4062 12L14.6875 16.3125C15.0938 16.6875 15.0938 17.3438 14.6875 17.7188C14.5 17.9062 14.25 18 14 18Z"
                                fill="#080808"
                                fill-opacity="0.5"
                            />
                        </svg>
                    </div>
                    <div className="bg-[#FAFAFA] rounded-[10px] p-[8px]">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 18C9.71875 18 9.46875 17.9062 9.28125 17.7188C8.875 17.3438 8.875 16.6875 9.28125 16.3125L13.5625 12L9.28125 7.71875C8.875 7.34375 8.875 6.6875 9.28125 6.3125C9.65625 5.90625 10.3125 5.90625 10.6875 6.3125L15.6875 11.3125C16.0938 11.6875 16.0938 12.3438 15.6875 12.7188L10.6875 17.7188C10.5 17.9062 10.25 18 10 18Z"
                                fill="#080808"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="pt-[35px] grid grid-cols-4 gap-[24px]">
                {relate?.map((item: any) => (
                    <div
                        key={item.id}
                        className="rounded-[12px] px-[10px] pt-[10px] border border-[#F1F1F1]"
                    >
                        <Image
                            src={item.image}
                            width={340}
                            height={240}
                            alt=""
                            className="rounded-[12px] h-[240px]"
                        />
                        <h3 className="font-medium text-[#080808] text-[16px] truncate py-[16px] px-[6px]">
                            {item.content}
                        </h3>
                        <div className="text-[#080808BF] font-medium text-[13px] flex items-center justify-between px-[6px] pt-[10px] pb-[26px]">
                            <div className="flex items-center gap-x-[8px]">
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
                                <h3>Lesson: {item.lesson.length}</h3>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <svg
                                    width="14"
                                    height="16"
                                    viewBox="0 0 14 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M7 8C9.1875 8 11 6.21875 11 4C11 1.8125 9.1875 0 7 0C4.78125 0 3 1.8125 3 4C3 6.21875 4.78125 8 7 8ZM8.5625 9.5H5.40625C2.40625 9.5 0 11.9375 0 14.9375C0 15.5312 0.46875 16 1.0625 16H12.9062C13.5 16 14 15.5312 14 14.9375C14 11.9375 11.5625 9.5 8.5625 9.5Z"
                                        fill="#080808"
                                        fill-opacity="0.25"
                                    />
                                </svg>
                                <h3>Student: {item.student.length}</h3>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <svg
                                    width="20"
                                    height="16"
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.875 2.59375C18.7812 2.25 18.4688 2 18.125 2H14.9688C15 1.625 15 1.28125 14.9688 0.96875C14.9688 0.4375 14.5312 0 13.9688 0H6C5.4375 0 5 0.4375 5 0.96875C4.96875 1.28125 4.96875 1.625 5 2H1.84375C1.5 2 1.1875 2.25 1.09375 2.59375C1.09375 2.6875 0.5 5.25 2.15625 7.6875C3.3125 9.4375 5.28125 10.6562 8 11.375C8.59375 11.5312 8.96875 12.0625 8.96875 12.6562C9 13.4062 8.375 14 7.625 14H7.5C6.65625 14 6 14.6875 6 15.5C6 15.7812 6.21875 16 6.46875 16H13.4375C13.7188 16 13.9062 15.7812 13.9062 15.5C13.9062 14.6875 13.2188 14 12.4062 14H12.25C11.5 14 10.9062 13.4062 10.9062 12.6562C10.9062 12.0625 11.3125 11.5312 11.875 11.375C14.5938 10.6562 16.5625 9.4375 17.75 7.6875C19.4688 5.25 18.875 2.6875 18.875 2.59375ZM3.40625 6.875C2.53125 5.59375 2.46875 4.25 2.5 3.5H5C5.1875 5.375 5.65625 7.625 6.8125 9.4375C5.28125 8.8125 4.125 7.96875 3.40625 6.875ZM16.5625 6.875C15.8438 7.96875 14.6875 8.8125 13.1562 9.4375C14.3125 7.625 14.7812 5.375 14.9688 3.5H17.4688C17.5 4.25 17.4375 5.59375 16.5625 6.875Z"
                                        fill="#080808"
                                        fill-opacity="0.25"
                                    />
                                </svg>
                                <h3>{item.level}</h3>
                            </div>
                        </div>
                        <div className="flex items-center justify-between pb-[20px]">
                            <div className="flex items-center gap-x-[8px] bg-[#080808] py-[10px] pl-[24px] pr-[16px] rounded-[10px]">
                                <button className="text-[14px] font-medium">
                                    Start course
                                </button>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6.25 13C6.00391 13 5.78516 12.918 5.62109 12.7539C5.26562 12.4258 5.26562 11.8516 5.62109 11.5234L9.36719 7.75L5.62109 4.00391C5.26562 3.67578 5.26562 3.10156 5.62109 2.77344C5.94922 2.41797 6.52344 2.41797 6.85156 2.77344L11.2266 7.14844C11.582 7.47656 11.582 8.05078 11.2266 8.37891L6.85156 12.7539C6.6875 12.918 6.46875 13 6.25 13Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                            <div className="flex items-center gap-x-[5px]">
                                <Image
                                    src="/rating.png"
                                    width={16}
                                    height={16}
                                    alt=""
                                />
                                <h3 className="text-[16px] font-medium text-[#000000]">
                                    {item.rate}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
