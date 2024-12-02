export default function Search() {
    return (
        <div className="">
            <p className="text-center font-black leading-[68px] text-[#080808] text-[36px] max-w-[569px] mx-auto">
                Search Among{" "}
                <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    58340
                </span>{" "}
                Courses And Find Your Favorite Course
            </p>
            <div className="grid grid-cols-[1fr_auto] items-center px-[128px] gap-x-[16px] pt-[32px]">
                {" "}
                <div className="flex gap-x-[16px] items-center bg-[#FAFAFA] py-[12px] px-[16px] rounded-[12px]">
                    <button className="rounded-[10px] py-[10px] px-[24px] bg-[#080808]">
                        Categories
                    </button>
                    <input
                        placeholder="Search anything"
                        className="w-full outline-none bg-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent"
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
                <h3 className="text-[#3E3232BF] font-medium">
                    Or view the following courses...
                </h3>
            </div>
        </div>
    );
}
