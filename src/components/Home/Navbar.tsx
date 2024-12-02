export default function Navbar() {
    return (
        <div className="bg-white pt-[36px] justify-between flex items-center">
            <div className="flex gap-x-[38px] items-center">
                <div className="font-medium text-[#080808] flex gap-x-[16px] items-center">
                    <div className="bg-[#EBFAF5] py-[21.71px] px-[17.5px] rounded-[12px]">
                        <svg
                            width="33"
                            height="25"
                            viewBox="0 0 33 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M22.2943 5.70099L22.2943 5.70101L28.613 11.9678L28.792 12.1453L28.6131 12.3228L22.2943 18.5937L22.2874 18.6006L22.2873 18.6005C22.1458 18.7303 22.0324 18.8869 21.9536 19.0609C21.8748 19.235 21.8323 19.4229 21.8285 19.6135C21.8248 19.8041 21.8598 19.9935 21.9317 20.1704C22.0035 20.3474 22.1107 20.5083 22.2469 20.6434C22.3831 20.7785 22.5455 20.8851 22.7244 20.9567C22.9034 21.0282 23.0951 21.0633 23.2882 21.0596C23.4812 21.0559 23.6715 21.0137 23.8475 20.9354C24.0236 20.8571 24.1817 20.7444 24.3126 20.6043L24.3192 20.5972L24.3193 20.5973L31.8317 13.1477C32.0998 12.8816 32.25 12.5212 32.25 12.1458C32.25 11.7706 32.0998 11.4103 31.8318 11.1441L22.2943 5.70099ZM22.2943 5.70099L22.2916 5.69844C22.0872 5.50155 21.9469 5.24887 21.8884 4.97288C21.8298 4.6969 21.8557 4.40987 21.9627 4.14844C22.0697 3.88699 22.2531 3.66283 22.4897 3.5049C22.7263 3.34699 23.0053 3.26257 23.2908 3.26269C23.4824 3.26316 23.6718 3.30166 23.8479 3.37587C24.0242 3.45011 24.1835 3.55855 24.3165 3.69468L24.3165 3.6947L24.3193 3.69749L31.8317 11.144L22.2943 5.70099ZM19.0084 0.962657L19.0092 0.962609L19.1516 0.961703C19.1517 0.961707 19.1518 0.961712 19.1519 0.961717C19.3678 0.971609 19.5785 1.02972 19.7683 1.13162C19.9582 1.23356 20.1223 1.37664 20.2483 1.55004C20.3743 1.72343 20.4591 1.92268 20.4965 2.13289C20.5339 2.34309 20.5229 2.55894 20.4643 2.76437L20.4634 2.7677L15.0144 22.9277L15.0142 22.9277L15.0121 22.9368C14.9693 23.1225 14.8891 23.2978 14.7763 23.4523C14.6635 23.6068 14.5204 23.7372 14.3553 23.8358L14.4835 24.0505L14.3553 23.8358C14.1903 23.9344 14.0068 23.999 13.8158 24.0257C13.6248 24.0524 13.4304 24.0406 13.2441 23.9911C13.0578 23.9416 12.8837 23.8553 12.732 23.7376C12.5804 23.62 12.4544 23.4732 12.3614 23.3064C12.2684 23.1395 12.2104 22.9559 12.1906 22.7664C12.1709 22.577 12.1899 22.3855 12.2465 22.2035L12.2467 22.2035L12.2492 22.1944L17.694 2.03547L17.694 2.03548L17.6949 2.03204C17.7696 1.73872 17.9372 1.47648 18.1735 1.28392C18.4098 1.09133 18.7024 0.978628 19.0084 0.962657ZM9.66435 3.26257L9.6647 3.26256C9.95413 3.25336 10.2394 3.33126 10.4831 3.48578C10.7267 3.64028 10.9172 3.86407 11.0298 4.12745C11.1424 4.39081 11.1719 4.68166 11.1146 4.96186C11.0574 5.24208 10.9159 5.49886 10.7085 5.69831L10.7085 5.69829L10.7058 5.70095L4.38284 11.9678L4.20375 12.1453L4.38279 12.3228L10.7056 18.5937C10.8385 18.7257 10.9439 18.8822 11.0156 19.0543C11.0874 19.2265 11.1242 19.4108 11.1241 19.597C11.1239 19.7831 11.0868 19.9674 11.0148 20.1394C10.9428 20.3115 10.8373 20.4679 10.7042 20.5997C10.5711 20.7315 10.4129 20.8361 10.2388 20.9074L10.3336 21.1387L10.2388 20.9074C10.0647 20.9787 9.87803 21.0154 9.68951 21.0152C9.50099 21.015 9.31441 20.978 9.14044 20.9063C8.96646 20.8346 8.80857 20.7296 8.67572 20.5976L8.67556 20.5974L1.1683 13.1477C0.900209 12.8816 0.75 12.5212 0.75 12.1458C0.75 11.7706 0.900178 11.4102 1.16822 11.144C1.16824 11.144 1.16827 11.144 1.1683 11.144L8.67552 3.69743L8.67554 3.69746L8.67837 3.69456C8.93747 3.42912 9.29112 3.27392 9.66435 3.26257Z"
                                fill="#009E68"
                                stroke="#EBFAF5"
                                stroke-width="0.5"
                            />
                        </svg>
                    </div>
                    <div className="px-[32px] py-[23px] rounded-[12px] bg-[#FAFAFA]">
                        Python
                    </div>
                    <div className="px-[32px] py-[23px] rounded-[12px] bg-[#FAFAFA]">
                        React
                    </div>
                    <div className="px-[32px] py-[23px] rounded-[12px] bg-[#FAFAFA]">
                        Unity
                    </div>
                </div>
                <div className="font-medium text-[#080808] flex gap-x-[16px] items-center">
                    <div className="bg-[#9E5CF20D] py-[17.5px] px-[17.5px] rounded-[12px]">
                        <svg
                            width="33"
                            height="33"
                            viewBox="0 0 33 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.3393 8.51979C16.9964 7.83142 16.0068 7.82479 15.6607 8.51979L9.09821 21.7073C8.94934 22.0064 8.9709 22.3621 9.15484 22.641L12.75 28.0937V31.5625C12.75 32.0802 13.1697 32.5 13.6875 32.5H19.3125C19.8302 32.5 20.25 32.0802 20.25 31.5625V28.0937L23.8451 22.641C24.029 22.3621 24.0506 22.0064 23.9017 21.7073L17.3393 8.51979ZM18.375 30.625H14.625V28.75H18.375V30.625ZM18.8077 26.875H14.1923L11.0173 22.0595L15.5625 12.9257V22.125C15.5625 22.6427 15.9822 23.0625 16.5 23.0625C17.0177 23.0625 17.4375 22.6427 17.4375 22.125V12.9257L21.9827 22.0595L18.8077 26.875Z"
                                fill="#9E5CF2"
                            />
                            <path
                                d="M29.6875 0.5C28.4653 0.5 27.4232 1.28381 27.0362 2.375H19.3125V1.4375C19.3125 0.91975 18.8927 0.5 18.375 0.5H14.625C14.1073 0.5 13.6875 0.91975 13.6875 1.4375V2.375H5.96375C5.57675 1.28381 4.53469 0.5 3.3125 0.5C1.76169 0.5 0.5 1.76169 0.5 3.3125C0.5 4.86331 1.76169 6.125 3.3125 6.125C4.53469 6.125 5.57675 5.34056 5.96375 4.24938H9.47081C5.10231 6.75819 2.375 11.3929 2.375 16.4375C2.375 16.9552 2.79475 17.375 3.3125 17.375C3.83025 17.375 4.25 16.9552 4.25 16.4375C4.25 10.781 8.23744 5.86125 13.6875 4.57613V5.1875C13.6875 5.70525 14.1073 6.125 14.625 6.125H18.375C18.8927 6.125 19.3125 5.70525 19.3125 5.1875V4.57606C24.7626 5.86125 28.75 10.781 28.75 16.4375C28.75 16.9552 29.1698 17.375 29.6875 17.375C30.2052 17.375 30.625 16.9552 30.625 16.4375C30.625 11.3994 27.9031 6.76194 23.5292 4.25H27.0362C27.4232 5.34119 28.4653 6.125 29.6875 6.125C31.2383 6.125 32.5 4.86331 32.5 3.3125C32.5 1.76169 31.2383 0.5 29.6875 0.5ZM3.3125 4.25C2.79556 4.25 2.375 3.82944 2.375 3.3125C2.375 2.79556 2.79556 2.375 3.3125 2.375C3.82944 2.375 4.25 2.79556 4.25 3.3125C4.25 3.82944 3.82944 4.25 3.3125 4.25ZM17.4375 4.25H15.5625V2.375H17.4375V4.25ZM29.6875 4.25C29.1706 4.25 28.75 3.82944 28.75 3.3125C28.75 2.79556 29.1706 2.375 29.6875 2.375C30.2044 2.375 30.625 2.79556 30.625 3.3125C30.625 3.82944 30.2044 4.25 29.6875 4.25Z"
                                fill="#9E5CF2"
                            />
                        </svg>
                    </div>
                    <div className="px-[32px] py-[23px] rounded-[12px] bg-[#FAFAFA]">
                        ui & ux{" "}
                    </div>
                    <div className="px-[32px] py-[23px] rounded-[12px] bg-[#FAFAFA]">
                        Vector
                    </div>
                </div>
                <div className="font-medium text-[#080808] flex gap-x-[16px] items-center">
                    <div className="bg-[#FFF5F5] py-[23.39px] px-[17.5px] rounded-[12px]">
                        <svg
                            width="33"
                            height="21"
                            viewBox="0 0 33 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.5698 4.5117C23.5698 2.23765 21.7376 0.394745 19.4767 0.394745H4.59302C2.33219 0.394745 0.5 2.23765 0.5 4.5117V16.4883C0.5 18.7624 2.33219 20.6053 4.59302 20.6053H19.4767C21.7376 20.6053 23.5698 18.7624 23.5698 16.4883V4.5117ZM21.3372 4.5117V16.4883C21.3372 17.5213 20.5037 18.3597 19.4767 18.3597H4.59302C3.56605 18.3597 2.73256 17.5213 2.73256 16.4883V4.5117C2.73256 3.47872 3.56605 2.64036 4.59302 2.64036H19.4767C20.5037 2.64036 21.3372 3.47872 21.3372 4.5117Z"
                                fill="#FF3C31"
                            />
                            <path
                                d="M32.4999 16.8761V4.12402C32.4999 3.18535 32.0013 2.32004 31.1932 1.85295C30.3835 1.38437 29.3878 1.38886 28.5826 1.86044C25.9377 3.41291 21.8908 5.78727 21.8908 5.78727C21.5485 5.98937 21.3372 6.35765 21.3372 6.75737V14.2428C21.3372 14.6425 21.5485 15.0108 21.8908 15.2129C21.8908 15.2129 25.9377 17.5872 28.5826 19.1397C29.3878 19.6113 30.3835 19.6158 31.1932 19.1472C32.0013 18.6801 32.4999 17.8148 32.4999 16.8761ZM30.2674 4.12402V16.8761C30.2674 17.0108 30.1959 17.1336 30.0813 17.201C29.9653 17.2668 29.8224 17.2668 29.7078 17.1995L23.5697 13.5975V7.40261L29.7078 3.80065C29.8224 3.73328 29.9653 3.73328 30.0813 3.79915C30.1959 3.86652 30.2674 3.98928 30.2674 4.12402Z"
                                fill="#FF3C31"
                            />
                            <path
                                d="M16.5001 4.88591H13.5234C12.9072 4.88591 12.4071 5.38893 12.4071 6.00872C12.4071 6.62851 12.9072 7.13152 13.5234 7.13152H16.5001C17.1163 7.13152 17.6164 6.62851 17.6164 6.00872C17.6164 5.38893 17.1163 4.88591 16.5001 4.88591Z"
                                fill="#FF3C31"
                            />
                        </svg>
                    </div>
                    <div className="px-[32px] py-[23px] rounded-[12px] bg-[#FAFAFA]">
                        After Effects{" "}
                    </div>
                    <div className="px-[32px] py-[23px] rounded-[12px] bg-[#FAFAFA]">
                        Lightroom
                    </div>
                    <div className="px-[32px] py-[23px] rounded-[12px] bg-[#FAFAFA]">
                        Photography
                    </div>
                </div>
            </div>
            <div className="p-[7.5px]">
                {" "}
                <svg
                    width="53"
                    height="53"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M23.5 35.5C23.0781 35.5 22.7031 35.3594 22.4219 35.0781C21.8125 34.5156 21.8125 33.5312 22.4219 32.9688L28.8438 26.5L22.4219 20.0781C21.8125 19.5156 21.8125 18.5312 22.4219 17.9688C22.9844 17.3594 23.9688 17.3594 24.5312 17.9688L32.0312 25.4688C32.6406 26.0312 32.6406 27.0156 32.0312 27.5781L24.5312 35.0781C24.25 35.3594 23.875 35.5 23.5 35.5Z"
                        fill="#080808"
                    />
                </svg>
            </div>
        </div>
    );
}
