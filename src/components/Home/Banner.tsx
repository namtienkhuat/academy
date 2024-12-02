import Image from "next/image";

export default function Banner() {
    return (
        <div className="bg-white flex pt-[110px] items-center justify-between px-[50px]">
            <div>
                <div className="text-[#000000] font-black text-[40px] leading-[48px] pb-[73.07px] flex flex-col gap-y-[15px]">
                    {" "}
                    <p className="">🙌 Hello friends</p>
                    <h3>I Am Sofia And We Want To Start</h3>
                    <h3>
                        A
                        <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                            {" "}
                            Web Design
                        </span>{" "}
                        Course Together.
                    </h3>
                    <h3>Do You Like It Too 😍 ?</h3>
                </div>
                <div className="flex items-center bg-[#080808] rounded-[10px] gap-x-[8px] font-medium py-[20px] pl-[24px] pr-[20px] w-fit">
                    <button>Start course now</button>
                    <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 16.1822C7.71875 16.1822 7.46875 16.0884 7.28125 15.9009C6.875 15.5259 6.875 14.8697 7.28125 14.4947L11.5625 10.1822L7.28125 5.90094C6.875 5.52594 6.875 4.86969 7.28125 4.49469C7.65625 4.08844 8.3125 4.08844 8.6875 4.49469L13.6875 9.49469C14.0938 9.86969 14.0938 10.5259 13.6875 10.9009L8.6875 15.9009C8.5 16.0884 8.25 16.1822 8 16.1822Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
            <Image
                src="/banner.svg"
                width={747.52}
                height={658}
                alt=""
                className="h-[658px]"
            />
        </div>
    );
}
