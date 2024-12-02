"use client";

import { data } from "@/components/Data/data";
import Footer from "@/components/DetailCourse/Footer";
import Header from "@/components/DetailCourse/Header";
import RelatedCourses from "@/components/DetailCourse/RelatedCourses";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DetailCourse from "@/components/DetailCourse/DetailCourse";
import { useStore } from "@/components/Store/Store";

export default function Home() {
    const param = useParams();
    console.log("param: ", param);

    const [dataPrime, setDataPrime] = useState<any>([]);
    useEffect(() => {
        const url = `http://localhost:8081/api/courses/${param.id}/lesson`;
        fetch(url)
            .then((response) => response.json()) // Parse JSON response
            .then((param) => {
                const result = param;
                setDataPrime(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    console.log("dataPrime: ", dataPrime);

    //
    const router = useRouter();
    const course = data.find((element: any) => element.id == param.id);
    const { storeCourse, setStore }: any = useStore();
    const lesson = course?.lesson;
    useEffect(() => {
        setStore(course);
    }, [setStore, course]);
    const [selectLesson, setSelectLesson] = useState(1);
    const value = lesson?.find((element: any) => element.id == 1);
    const [displayLesson, setDisplayLesson] = useState<any>(value);
    const handleSelectLesson = (item: any) => {
        setSelectLesson(item);
        router.push(`/detailCourse/${param.id}/learnCourse/${item}`);
    };
    useEffect(() => {
        const result = lesson?.find(
            (element: any) => element.id == selectLesson
        );
        setDisplayLesson(result);
    }, [lesson, selectLesson]);

    // Local storage
    localStorage.setItem("course", JSON.stringify(course));

    // Related Courses
    const relate = data.filter(
        (element: any) => element.topics == course?.topics
    );

    // Related instructor
    const relatedInstructor = data.filter(
        (element: any) => element.instructor.name == course?.instructor.name
    );
    const uniqueNames = new Set();
    const newArr = relate.filter((item: any) => {
        if (!uniqueNames.has(item.name)) {
            uniqueNames.add(item.name);
            return true;
        }
        return false;
    });

    // Pagination of course
    // const number = relatedInstructor.length;
    const number = relate.length;
    const [page, setPage] = useState(1);
    const [sumPage, setSumPage] = useState(1);
    useEffect(() => {
        setSumPage(Math.ceil(number / 2));
    }, [number]);
    let array = [];
    for (let i = 1; i <= sumPage; i++) {
        array.push(i);
    }
    const handleNext = () => {
        setPage((prevPage) => (prevPage === sumPage ? 1 : prevPage + 1));
    };
    const handlePrev = () => {
        setPage((prevPage) => (prevPage === 1 ? sumPage : prevPage - 1));
    };

    // Pagination of lesson
    const numberLesson = lesson?.length || 0;
    const [pageLesson, setPageLesson] = useState(1);
    const [sumPageLesson, setSumPageLesson] = useState(1);
    useEffect(() => {
        setSumPageLesson(Math.ceil(numberLesson / 2));
    }, [numberLesson]);
    let arrayLesson = [];
    for (let i = 1; i <= sumPageLesson; i++) {
        arrayLesson.push(i);
    }
    const handleNextLesson = () => {
        setPageLesson((prevPage) =>
            prevPage === sumPageLesson ? 1 : prevPage + 1
        );
    };

    const handlePrevLesson = () => {
        setPageLesson((prevPage) =>
            prevPage === 1 ? sumPageLesson : prevPage - 1
        );
    };

    // Back
    const handleBack = () => {
        router.push(`/`);
    };

    // Rating
    const [rating, setRating] = useState(0); // trạng thái lưu số sao được chọn
    const [hover, setHover] = useState(0); // trạng thái lưu số sao đang hover
    const handleRemoveRating = () => {
        setRating(0);
    };
    const [idLesson, setIdLesson] = useState();
    const [newLesson, setNewLesson] = useState<any>([]);
    useEffect(() => {
        const url = `http://localhost:8081/api/lessons/${idLesson}/rating/${rating}`;
        fetch(url)
            .then((response) => response.json()) // Parse JSON response
            .then((param) => {
                const result = param.result;
                setNewLesson(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);
    console.log("New Lesson: ", newLesson);

    return (
        <main className="bg-white">
            {/* Header */}
            <Header></Header>

            {/* Course */}
            <DetailCourse
                course={course}
                relate={relate}
                relatedInstructor={relatedInstructor}
                array={array}
                handleNext={handleNext}
                handlePrev={handlePrev}
                page={page}
                arrayLesson={arrayLesson}
                handleNextLesson={handleNextLesson}
                handlePrevLesson={handlePrevLesson}
                pageLesson={pageLesson}
                // handleStartCourse={handleStartCourse}
                displayLesson={displayLesson}
                lesson={lesson}
                newArr={newArr}
                handleSelectLesson={handleSelectLesson}
                handleBack={handleBack}
                dataPrime={dataPrime}
                rating={rating}
                hover={hover}
                setHover={setHover}
                setRating={setRating}
                handleRemoveRating={handleRemoveRating}
            ></DetailCourse>

            {/* Related Courses */}
            <RelatedCourses relate={relate}></RelatedCourses>

            {/* Footer */}
            <Footer></Footer>
        </main>
    );
}
