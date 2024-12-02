import Image from "next/image";

export default function YourCourses({ yourCourse, handleDetailCourse }: any) {
    console.log("Your Course: ", yourCourse);
    return (
        <div className="pt-[150px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-[6px]">
                    <span className="w-[4px] h-[4px] bg-[#9E5CF2]"></span>
                    <h3 className="font-semibold text-[#080808] text-[20px]">
                        YOUR COURSES
                    </h3>
                </div>
                <h3 className="py-[10px] px-[24px] bg-[#F5F5F5] rounded-[10px] text-[#3E3232BF] font-medium text-[14px]">
                    See All
                </h3>
            </div>
            <div className="pt-[35px] grid grid-cols-4 gap-[24px]">
                {yourCourse.map((item: any) => (
                    <div
                        key={item.id}
                        className="rounded-[12px] px-[10px] pt-[10px] border border-[#F1F1F1]"
                        onClick={() => handleDetailCourse(item.id)}
                    >
                        <Image
                            src={item.image != null ? item.image : undefined}
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
