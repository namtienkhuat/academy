export default function Find() {
    return (
        <div className="mt-[150px] pt-[109px] pb-[102px] bg-gradient-to-r from-purple-100 to-pink-100 font-black rounded-[40px] grid grid-cols-[auto_1fr] items-center  gap-x-[153px]">
            <h3 className="font-black text-[#000000] leading-[68px] max-w-[744px] text-[36px] text-center">
                Find Out About The Latest Courses With The{" "}
                <span className="text-[#5A69F2]">Academy</span> Newsletter
            </h3>
            <div className="flex items-center gap-x-[16px] bg-[#FFFFFF] border border-[#F1F1F1] rounded-[12px] pl-[16px] pr-[20px] mr-[129px]">
                <input
                    placeholder="Email address..."
                    className="outline-none bg-transparent w-full font-medium text-[13px] text-[#08080840]"
                />
                <button className="text-[14px] font-medium bg-[#080808] rounded-[10px] py-[10px] px-[24px] my-[12px]">
                    SUBMIT
                </button>
            </div>
        </div>
    );
}
