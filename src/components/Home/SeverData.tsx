import Image from "next/image";
import { topCourses } from "../Data/data";

export default function ServerData({ newData }: any) {
    return (
        <div className="pt-[150px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                    <span className="w-[4px] h-[4px] bg-[#9E5CF2]"></span>
                    <h3 className="font-semibold text-[#080808] text-[20px]">
                        Server Data
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
                {newData?.map((item: any) => (
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
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
