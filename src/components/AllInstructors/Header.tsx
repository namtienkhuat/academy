import Image from "next/image";

export default function Header() {
    return (
        <div className="bg-white pt-[48px] flex justify-between border-b border-[#F1F1F1] pb-[35px]">
            <div className="flex gap-x-[50px] items-center">
                <div className="flex gap-x-[6.83px]">
                    <Image src="/logo.svg" width={30.17} height={31} alt="" />
                    <h3 className="font-black text-[32px] text-[#080808]">
                        ACADEMY
                    </h3>
                </div>
                <div className="flex gap-x-[30px] text-[#08080880] items-center font-medium">
                    <div className="flex gap-x-[2px] items-center">
                        <h3>Categories</h3>
                        <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M8 11.75C7.75391 11.75 7.53516 11.668 7.37109 11.5039L2.99609 7.12891C2.64063 6.80078 2.64063 6.22656 2.99609 5.89844C3.32422 5.54297 3.89844 5.54297 4.22656 5.89844L8 9.64453L11.7461 5.89844C12.0742 5.54297 12.6484 5.54297 12.9766 5.89844C13.332 6.22656 13.332 6.80078 12.9766 7.12891L8.60156 11.5039C8.4375 11.668 8.21875 11.75 8 11.75Z"
                                fill="#3E3232"
                                fill-opacity="0.5"
                            />
                        </svg>
                    </div>
                    <h3>Teach</h3>
                    <h3>Contact Us</h3>
                    <h3>About Us</h3>
                </div>
            </div>
            <div className="flex gap-x-[55px] items-center">
                <div className="flex bg-[#FAFAFA] gap-x-[16px] py-[22px] pl-[16px] pr-[20px] rounded-[12px]">
                    <input
                        placeholder="Search anything"
                        className="outline-none bg-transparent "
                    />
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20.5312 18.3438L15.8438 13.6562C16.8984 12.0938 17.4453 10.1406 17.1719 8.03125C16.6641 4.4375 13.7344 1.54688 10.1797 1.07812C4.86719 0.414062 0.375 4.90625 1.03906 10.2188C1.50781 13.7734 4.39844 16.7031 7.99219 17.2109C10.1016 17.4844 12.0547 16.9375 13.6562 15.8828L18.3047 20.5703C18.9297 21.1562 19.9062 21.1562 20.5312 20.5703C21.1172 19.9453 21.1172 18.9688 20.5312 18.3438ZM4.08594 9.125C4.08594 6.39062 6.3125 4.125 9.08594 4.125C11.8203 4.125 14.0859 6.39062 14.0859 9.125C14.0859 11.8984 11.8203 14.125 9.08594 14.125C6.3125 14.125 4.08594 11.8984 4.08594 9.125Z"
                            fill="#080808"
                            fill-opacity="0.25"
                        />
                    </svg>
                </div>
                <div className="flex border-l border-[#F1F1F1] gap-x-[50px]">
                    <div className="flex pl-[55px] gap-x-[12px] items-center">
                        <Image
                            src="/avt.png"
                            width={64}
                            height={64}
                            alt=""
                            className="rounded-[12px]"
                        />{" "}
                        <div>
                            <h3 className="font-medium text-[#080808]">
                                Behzad pashaei
                            </h3>
                            <h3 className="font-medium text-[#08080880]">
                                ui & ux designer
                            </h3>
                        </div>
                    </div>
                    <div className="bg-[#9E5CF20D] p-[22px] rounded-[12px]">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.25 1.25V2.03125C14.1016 2.61719 16.25 5.11719 16.25 8.125V8.86719C16.25 10.7031 16.9141 12.5 18.125 13.8672L18.3984 14.1797C18.75 14.5703 18.8281 15.0781 18.6328 15.5469C18.4375 15.9766 17.9688 16.25 17.5 16.25H2.5C1.99219 16.25 1.52344 15.9766 1.32812 15.5469C1.13281 15.0781 1.21094 14.5703 1.5625 14.1797L1.83594 13.8672C3.04688 12.5 3.75 10.7031 3.75 8.86719V8.125C3.75 5.11719 5.85938 2.61719 8.75 2.03125V1.25C8.75 0.585938 9.29688 0 10 0C10.6641 0 11.25 0.585938 11.25 1.25ZM10 20C9.33594 20 8.67188 19.7656 8.20312 19.2969C7.73438 18.8281 7.5 18.1641 7.5 17.5H12.5C12.5 18.1641 12.2266 18.8281 11.7578 19.2969C11.2891 19.7656 10.625 20 10 20Z"
                                fill="#9E5CF2"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
