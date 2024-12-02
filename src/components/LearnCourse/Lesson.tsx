import { useState } from "react";
import Rating from "./Rating";

export default function Lesson({
    dataLesson,
    rating,
    hover,
    setHover,
    setRating,
    handleRemoveRating,
    commentInput,
    handleCommentChange,
    handleRating,
    commentDB,
    allComment,
    handleEditComment,
    editedComment,
    setEditedComment,
    setEditCommentId,
    handleDeleteComment,
    editCommentId,
}: any) {
    return (
        <div className="pt-[30px]">
            <div className="flex items-center gap-x-[6px]">
                <span className="w-[4px] h-[4px] bg-[#9E5CF2]"></span>
                <h3 className="font-semibold text-[#080808] text-[20px]">
                    Lesson Course
                </h3>
            </div>
            <div className="grid grid-cols-[1fr_1fr] gap-x-[24px]">
                <div>
                    {" "}
                    <div className="rounded-[12px] px-[10px] pt-[10px] border border-[#F1F1F1]">
                        <iframe
                            width="932"
                            height="524"
                            src={dataLesson?.video}
                            title={dataLesson?.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-[12px]"
                        ></iframe>
                    </div>
                    <div className="flex justify-between pt-[35px]">
                        <h3
                            className="text-[#080808] text-[20px]"
                            onClick={handleRemoveRating}
                        >
                            {rating != 0 ? "Remove Rating" : "Chua Danh Gia"}
                        </h3>
                        <Rating
                            rating={rating}
                            hover={hover}
                            setHover={setHover}
                            setRating={setRating}
                            handleRemoveRating={handleRemoveRating}
                            handleRating={handleRating}
                        ></Rating>
                    </div>
                </div>

                <div className="rounded-[12px] px-[10px] pt-[10px] border border-[#F1F1F1] flex flex-col justify-between">
                    {" "}
                    <div className="flex bg-[#FAFAFA] gap-x-[16px] py-[22px] pl-[16px] pr-[20px] rounded-[12px] justify-between">
                        <input
                            placeholder="Enter Your Comment "
                            className="outline-none bg-transparent text-[#080808]"
                            value={commentInput}
                            onChange={handleCommentChange}
                        />
                        <div
                            onClick={() => {
                                commentDB(commentInput);
                            }}
                        >
                            {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-6 text-[#080808]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="flex bg-[#FAFAFA] gap-x-[16px] py-[22px] pl-[16px] pr-[20px] rounded-[12px] justify-between">
                        {/* {comments.map((item: any, index: any) => (
                            <div
                                key={index}
                                className="text-[#080808] flex justify-between"
                            >
                                <div>
                                    {" "}
                                    <h3>{item.name}</h3>
                                    <h3>{item.comment}</h3>
                                </div>
                                <div onClick={() => handleDeleteComment(index)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-6 text-[#080808]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                        />
                                    </svg>
                                </div>
                            </div>
                        ))} */}
                        <div>
                            {/* {allComment?.length > 0 ? (
                                allComment.map((item: any, index: any) => (
                                    <div
                                        key={index}
                                        style={{ marginBottom: "10px" }}
                                    >
                                        {editIndex === index ? (
                                            <div className="text-[#080808]">
                                                <input
                                                    type="text"
                                                    value={editText}
                                                    className="text-[#080808]"
                                                    onChange={(e) =>
                                                        setEditText(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <button
                                                    onClick={handleSaveComment}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        ) : (
                                            <div>
                                                <strong className="text-[#080808]">
                                                    {item.name}:
                                                </strong>{" "}
                                                <span className="text-[#080808]">
                                                    {item.cmt}
                                                </span>
                                                <button
                                                    style={{
                                                        marginLeft: "10px",
                                                        color: "blue",
                                                    }}
                                                    onClick={() =>
                                                        handleEditComment(
                                                            index,
                                                            item.cmt
                                                        )
                                                    }
                                                >
                                                    Sửa
                                                </button>
                                                <button
                                                    style={{
                                                        marginLeft: "10px",
                                                        color: "red",
                                                    }}
                                                    onClick={() =>
                                                        handleDeleteComment(
                                                            item.id
                                                        )
                                                    }
                                                >
                                                    Xóa
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <p>No comments yet</p>
                            )} */}
                            {/* {allComment.map((comment: any) => (
                                <div key={comment.id}>
                                    <p>
                                        {comment.name}: {comment.cmt}
                                    </p>
                                    <button
                                        onClick={() =>
                                            setEditedComment(comment.cmt)
                                        }
                                    >
                                        Edit
                                    </button>
                                    {editedComment === comment.cmt && (
                                        <div>
                                            <input
                                                value={editedComment}
                                                onChange={(e) =>
                                                    setEditedComment(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <button
                                                onClick={() =>
                                                    handleEditComment(
                                                        comment.id
                                                    )
                                                }
                                            >
                                                Save
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))} */}
                            {allComment.map((item: any) => (
                                <div key={item.id} className="text-[#080808]">
                                    {editCommentId === item.id ? (
                                        // Chế độ chỉnh sửa
                                        <div>
                                            <input
                                                value={editedComment}
                                                onChange={(e) =>
                                                    setEditedComment(
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <button
                                                onClick={() =>
                                                    handleEditComment(item.id)
                                                }
                                            >
                                                Save
                                            </button>
                                            <button
                                                onClick={() =>
                                                    setEditCommentId(null)
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    ) : (
                                        // Hiển thị comment
                                        <div>
                                            <p>
                                                {item.name}: {item.cmt}
                                            </p>
                                            <button
                                                onClick={() => {
                                                    setEditCommentId(item.id);
                                                    setEditedComment(item.cmt);
                                                }}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() =>
                                                    handleDeleteComment(
                                                        !item.id
                                                            ? item.commentId
                                                            : item.id
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* {result.comment.map((item: any) => (
                        <div
                            key={item.id}
                            className="bg-[#F5F5F5] rounded-[12px] py-[16px] pl-[16px] flex flex-col gap-y-[8px]"
                        >
                            <h3 className="font-medium text-[16px] text-[#3E3232]">
                                {item.name}
                            </h3>
                            <p className="font-normal text-[12px] text-[#3E3232BF]">
                                {item.item}
                            </p>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
}
