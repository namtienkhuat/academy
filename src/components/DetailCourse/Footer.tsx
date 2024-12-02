import Image from "next/image";
import { categories, newComment, quickAccess } from "../Data/data";

export default function Footer() {
    return (
        <div className="mt-[150px] bg-[#FAFAFA] rounded-t-[40px]">
            <div className="flex items-center pt-[20px] px-[33px] justify-between">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-[25px] py-[30px] rounded-[40px]">
                    <p className="text-[14px] font-normal text-[#080808] leading-[30px] max-w-[1102px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Egestas purus viverra accumsan in nisl
                        nisi. Arcu cursus vitae congue mauris rhoncus aenean vel
                        elit scelerisque. In egestas erat imperdiet sed euismod
                        nisi porta lorem mollis. Morbi tristique senectus et
                        netus. Mattis pellentesque id nibh tortor id aliquet
                        lectus proin. Sapien faucibus et molestie ac feugiat sed
                        lectus vestibulum. Ullamcorper velit sed ullamcorper
                        morbi tincidunt ornare massa eget. Dictum varius duis at
                        consectetur lorem. Nisi vitae suscipit tellus mauris a
                        diam maecenas sed enim. Velit ut tortor pretium
                    </p>
                </div>
                <div className="">
                    <Image
                        src="/logo.svg"
                        width={83.69}
                        height={86}
                        alt=""
                        className="mx-auto"
                    />
                    <h3 className="text-[#080808] font-black text-[32px]">
                        ACADEMY
                    </h3>
                </div>
            </div>
            <div className="grid grid-cols-2 mx-[33px] pt-[60px] gap-x-[127px]">
                <div className="grid grid-cols-[1fr_auto] gap-[44px]">
                    <div className="flex flex-col gap-y-[20px]">
                        <div className="flex items-center gap-x-[6px]">
                            <span className="bg-[#9E5CF2] w-[4px] h-[4px]"></span>
                            <h3 className="font-semibold text-[20px] text-[#080808]">
                                MEMBERSHIP CERTIFICATE
                            </h3>
                        </div>
                        <Image
                            src="/certificate.jpg"
                            width={468}
                            height={360}
                            alt=""
                            className="h-full"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-x-[6px]">
                            <span className="bg-[#9E5CF2] w-[4px] h-[4px]"></span>
                            <h3 className="font-semibold text-[20px] text-[#080808]">
                                CATEGORIES
                            </h3>
                        </div>
                        <div className="flex flex-col gap-y-[15px] pt-[30px] pb-[5px]">
                            {categories.map((item: any) => (
                                <h3
                                    key={item.id}
                                    className="font-medium text-[13px] text-[#080808BF]"
                                >
                                    {item.topics}
                                </h3>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-[87px]">
                    <div className="">
                        <div className="flex items-center gap-x-[6px] w-fit">
                            <span className="bg-[#9E5CF2] w-[4px] h-[4px]"></span>
                            <h3 className="font-semibold text-[20px] text-[#080808]">
                                QUICK ACCESS
                            </h3>
                        </div>
                        <div className="flex flex-col gap-y-[15px] pt-[30px] pb-[5px] w-fit">
                            {quickAccess.map((item: any) => (
                                <h3
                                    key={item.id}
                                    className="font-medium text-[13px] text-[#080808BF]"
                                >
                                    {item.topics}
                                </h3>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-[20px]">
                        <div className="flex items-center gap-x-[6px] w-fit">
                            <span className="bg-[#9E5CF2] w-[4px] h-[4px]"></span>
                            <h3 className="font-semibold text-[20px] text-[#080808]">
                                NEW COMMENT
                            </h3>
                        </div>
                        <div className="flex flex-col h-full justify-between">
                            {newComment.map((item: any) => (
                                <div
                                    key={item.id}
                                    className="bg-[#F5F5F5] rounded-[12px] py-[16px] pl-[16px] flex flex-col gap-y-[8px]"
                                >
                                    <h3 className="font-medium text-[16px] text-[#3E3232]">
                                        {item.name}
                                    </h3>
                                    <p className="font-normal text-[12px] text-[#3E3232BF]">
                                        {item.cmt}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F5F5F5] rounded-[12px] font-normal text-[12px] text-[#3E3232BF] flex justify-between items-center p-[25px] mx-[33px] mt-[60px] mb-[20px]">
                <h3>Privacy Policy | Terms & Conditions</h3>
                <h3>All Copyright (c) 2022 Reserved</h3>
            </div>
        </div>
    );
}
