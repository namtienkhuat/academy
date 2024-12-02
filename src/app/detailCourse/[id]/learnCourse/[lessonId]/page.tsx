"use client";

import Footer from "@/components/LearnCourse/Footer";
import Header from "@/components/LearnCourse/Header";
import Lesson from "@/components/LearnCourse/Lesson";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
    const param = useParams();
    const local = localStorage.getItem("course");
    const newLocal = JSON.parse(local || "{}");
    const result = newLocal?.lesson?.find(
        (element: any) => element.id == param.id
    );

    const [dataLesson, setDataLesson] = useState<any>([]);
    useEffect(() => {
        const url = `http://localhost:8081/api/courses/${param.id}/lessons/${param.lessonId}`;
        fetch(url)
            .then((response) => response.json()) // Parse JSON response
            .then((param) => {
                const result = param.lesson;
                setDataLesson(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    // Rating
    const [rating, setRating] = useState(0); // trạng thái lưu số sao được chọn
    const [hover, setHover] = useState(0); // trạng thái lưu số sao đang hover
    const handleRemoveRating = () => {
        setRating(0);
    };

    const handleRating = (star: any) => {
        const url = `http://localhost:8081/api/lessons/${param.lessonId}/rating/${star}`;
        fetch(url, {
            method: "POST",
        })
            .then((response) => response.json()) // Parse JSON response
            .then((param) => {
                const result = param.lesson;
                setDataLesson(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    // get user from local storage
    const [user, setUser] = useState<any>({});
    useEffect(() => {
        const userFromStorage = localStorage.getItem("user");
        if (userFromStorage) {
            setUser(JSON.parse(userFromStorage)); // Chuyển chuỗi JSON thành đối tượng và cập nhật state
        }
    }, []); // Chỉ chạy 1 lần khi component được render

    // comment
    const [currentUser, setCurrentUser] = useState<any>(null);

    // State cho comment
    const [commentInput, setCommentInput] = useState("");
    const [comments, setComments] = useState<
        { name: string; comment: string }[]
    >([]);

    // Lấy thông tin user từ localStorage khi component được render
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setCurrentUser(JSON.parse(storedUser));
        }
    }, []);

    // Hàm cập nhật giá trị của comment
    const handleCommentChange = (event: any) => {
        setCommentInput(event.target.value);
    };

    // Thêm comment mới
    const [allComment, setAllComment] = useState<any>([]);

    // Xóa comment
    // const handleDeleteComment = async (index: number) => {
    //     try {
    //         const url = `http://localhost:8081/api/comment/${index}`;
    //         const response = await fetch(url, {
    //             method: "DELETE",
    //         });

    //         if (!response.ok) {
    //             throw new Error("Failed to delete comment");
    //         }

    //         // Cập nhật danh sách comment sau khi xóa
    //         setAllComment(
    //             allComment.filter((comment: any) => comment.id !== index)
    //         );
    //     } catch (error) {
    //         console.error("Error deleting comment:", error);
    //     }
    // };

    // Sửa comment
    // const [editedComment, setEditedComment] = useState("");

    // const handleEditComment = async (commentId: number) => {
    //     const url = `http://localhost:8081/api/comment/${commentId}`;

    //     try {
    //         const response = await fetch(url, {
    //             method: "PUT", // Sử dụng phương thức PUT để sửa comment
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 newComment: editedComment, // Nội dung comment mới
    //             }),
    //         });

    //         const data = await response.json();

    //         // Cập nhật danh sách comment sau khi comment đã được chỉnh sửa
    //         setAllComment((prevComments: any[]) =>
    //             prevComments.map((comment) =>
    //                 comment.id === commentId
    //                     ? { ...comment, cmt: editedComment }
    //                     : comment
    //             )
    //         );
    //     } catch (error) {
    //         console.error("Error updating comment:", error);
    //     }
    // };
    const [editedComment, setEditedComment] = useState<string>(""); // Trạng thái chứa nội dung chỉnh sửa
    const [editCommentId, setEditCommentId] = useState<number | null>(null); // Trạng thái lưu ID của comment đang chỉnh sửa

    // Hàm gọi API xóa comment
    const handleDeleteComment = async (commentId: number) => {
        const url = `http://localhost:8081/api/comment/${commentId}`;
        try {
            const response = await fetch(url, { method: "DELETE" });

            if (response.ok) {
                setAllComment((prevComments: any) =>
                    prevComments.filter(
                        (comment: any) => comment.id !== commentId
                    )
                );
            } else {
                console.error("Failed to delete comment");
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    // Hàm gọi API chỉnh sửa comment
    const handleEditComment = async (commentId: number) => {
        const url = `http://localhost:8081/api/comment/${commentId}`;

        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    newComment: editedComment, // Nội dung comment mới
                }),
            });

            if (response.ok) {
                // Cập nhật danh sách comment sau khi chỉnh sửa thành công
                setAllComment((prevComments: any) =>
                    prevComments.map((comment: any) =>
                        comment.id === commentId
                            ? { ...comment, cmt: editedComment }
                            : comment
                    )
                );
                setEditCommentId(null); // Đóng chế độ chỉnh sửa
                setEditedComment(""); // Reset nội dung chỉnh sửa
            } else {
                console.error("Failed to update comment");
            }
        } catch (error) {
            console.error("Error updating comment:", error);
        }
    };

    const userId = user.id;
    const commentDB = (result: any) => {
        const url = `http://localhost:8081/api/comment/lesson/${param.lessonId}/user/${userId}`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: user.name,
                cmt: result, // Nội dung comment
            }),
        })
            .then((response) => response.json()) // Parse JSON response
            .then((param) => {
                const value = param.result.lesson;
                const commentId = param.result.id;
                setDataLesson(value);
                setAllComment((prevComments: any) => [
                    ...prevComments, // Giữ lại các comment cũ
                    { name: user.name, cmt: result, commentId: commentId }, // Thêm comment mới
                ]);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const url = `http://localhost:8081/api/comment/lesson/${param.lessonId}/user/${userId}`;
                const response = await fetch(url); // Gọi API
                if (!response.ok) {
                    throw new Error("Failed to fetch comments");
                }
                const data = await response.json(); // Parse JSON response
                const value = data.result; // Truy xuất result từ response
                setAllComment(value); // Cập nhật state với dữ liệu comments
            } catch (error) {
                console.error("Error fetching data:", error); // Xử lý lỗi
            }
        };

        fetchComments(); // Gọi hàm fetchComments
    }, [param.lessonId, userId]); // Chạy lại khi lessonId hoặc userId thay đổi

    console.log("all Comments: ", allComment);
    return (
        <main className="bg-white">
            {/* Header */}
            <Header></Header>

            {/* Lesson */}
            <Lesson
                result={result}
                dataLesson={dataLesson}
                rating={rating}
                hover={hover}
                handleRemoveRating={handleRemoveRating}
                setHover={setHover}
                setRating={setRating}
                commentInput={commentInput}
                handleCommentChange={handleCommentChange}
                user={user}
                comments={comments}
                handleRating={handleRating}
                commentDB={commentDB}
                allComment={allComment}
                handleEditComment={handleEditComment}
                editedComment={editedComment}
                setEditedComment={setEditedComment}
                setEditCommentId={setEditCommentId}
                handleDeleteComment={handleDeleteComment}
                editCommentId={editCommentId}
            ></Lesson>

            {/* AllLesson */}

            {/* Footer */}
            <Footer></Footer>
        </main>
    );
}
