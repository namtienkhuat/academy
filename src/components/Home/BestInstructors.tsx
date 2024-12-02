import Image from "next/image";
import { bestInstructors } from "../Data/data";

export default function BestInstructors({ handleAllInstructors }: any) {
    return (
        <div className="pt-[150px] grid grid-cols-[auto_1fr] items-center gap-x-[103px] justify-between">
            <div className="font-black text-[36px] text-[#080808] max-w-[408px] text-center">
                <h1>
                    <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        Best
                    </span>{" "}
                    Instructors
                </h1>
                <p className="text-[#000000BF] text-[14px] font-normal leading-[20px] pt-[12px] pb-[83px]">
                    At The Academy, We Strive To Bring Together The Best
                    Professors For The Best Courses
                </p>
                <div className="flex gap-x-[12px] rounded-[10px] bg-[#080808] py-[16px] pl-[20px] pr-[16px] w-fit mx-auto">
                    <button
                        className="text-[14px] font-medium text-white"
                        onClick={handleAllInstructors}
                    >
                        All Instructors
                    </button>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 16C7.71875 16 7.46875 15.9062 7.28125 15.7188C6.875 15.3438 6.875 14.6875 7.28125 14.3125L11.5625 10L7.28125 5.71875C6.875 5.34375 6.875 4.6875 7.28125 4.3125C7.65625 3.90625 8.3125 3.90625 8.6875 4.3125L13.6875 9.3125C14.0938 9.6875 14.0938 10.3438 13.6875 10.7188L8.6875 15.7188C8.5 15.9062 8.25 16 8 16Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
            <div className="bg-gradient-to-r from-purple-300 to-pink-300 rounded-[40px]">
                <div className="bg-white m-[10px] rounded-[40px] py-[30px]">
                    {" "}
                    <div className="grid grid-cols-3 grid-rows-2 gap-[24px] mx-auto w-fit">
                        {bestInstructors.map((item: any) => (
                            <div
                                key={item.id}
                                className="rounded-[12px] px-[10px] pt-[10px] pb-[20px] border border-[#F1F1F1] bg-[#FAFAFA] mx-auto"
                            >
                                <Image
                                    src={item.image}
                                    width={212}
                                    height={161}
                                    alt=""
                                    className="rounded-[12px]"
                                />
                                <div className="flex items-center justify-between pt-[26px]">
                                    <h3 className="text-[13px] font-medium text-[#3E3232]">
                                        {item.name}
                                    </h3>
                                    <h3 className="font-normal text-[12px] text-[#3E3232BF]">
                                        {item.career}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
