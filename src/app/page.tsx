"use client";
import Banner from "@/components/Home/Banner";
import BestInstructors from "@/components/Home/BestInstructors";
import Find from "@/components/Home/Find";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Navbar from "@/components/Home/Navbar";
import NewCourses from "@/components/Home/NewCourses";
import Search from "@/components/Home/Search";
import SeverData from "@/components/Home/SeverData";
import TopCourses from "@/components/Home/TopCourses";
import YourCourses from "@/components/Home/YourCourses";
import { userStore } from "@/components/Store/user";
import { useRouter } from "next/navigation";
import { stringify } from "querystring";
import { useEffect, useState } from "react";
// import { data } from "@/components/Data/data";

export default function Home() {
    // Test fetching data with an API
    const [dataPrime, setDataPrime] = useState<any>([]);
    useEffect(() => {
        const url = "http://localhost:8080/about";

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

    // Test fetching data with an API
    const [dataServer, setDataServer] = useState<any>([]);
    useEffect(() => {
        const url = "http://localhost:8081/api/courses";

        fetch(url)
            .then((response) => response.json()) // Parse JSON response
            .then((param) => {
                const result = param;
                setDataServer(result);
            })
            .catch((error) => {
                console.error("Error fetching dataServer:", error);
            });
    }, []);
    const testData = dataServer.result;
    const newData = testData?.filter((element: any) => element.image != null);

    // -----------------------------------------
    const categories = dataPrime
        .filter((element: any) => element.topics)
        .flatMap((element: any) => element.topics);

    const handleCategories = (array: string[]): string[] => {
        const newArr: string[] = [];
        for (let i = 0; i < array.length; i++) {
            if (!newArr.includes(array[i])) {
                newArr.push(array[i]);
            }
        }
        return newArr;
    };

    const newCategories = handleCategories(categories);

    // ----------------------------------------------NEW COURSES---------------------------------------------------
    // new courses
    const [select, setSelect] = useState("All Courses");
    const handleSelect = (item: any) => {
        const value = item;
        setSelect(value);
    };

    // filter new courses
    const [filter, setFilter] = useState<any>(dataPrime);

    useEffect(() => {
        setFilter(
            select == "All Courses"
                ? dataPrime
                : dataPrime.filter((element: any) => element.topics == select)
        );
    }, [dataPrime, select]);

    const [focus, setFocus] = useState(false);
    const handleFocus = () => {
        setFocus(!focus);
    };

    // check
    const [listFilter, setListFilter] = useState<any>([]);
    const handleCheck = (event: any) => {
        const check = event.target.checked;
        const value = event.target.value;
        check
            ? setListFilter([...listFilter, value])
            : setListFilter(
                  listFilter.filter((element: any) => element != value)
              );
    };
    const [resultListFilter, setResultListFilter] = useState<any>(dataPrime);
    useEffect(() => {
        const filteredResults = listFilter.flatMap((item: any) =>
            dataPrime.filter((element: any) => element.topics === item)
        );

        setResultListFilter(filteredResults);
    }, [dataPrime, listFilter]);

    // ---------------------------------------------------------------------BEST INSTRUCTORS-----------------------------------------------
    const router = useRouter();
    const handleAllInstructors = () => {
        router.push("/allInstructors");
    };

    // ---------------------------------------------------------------------COURSE DETAIL--------------------------------------------------

    const handleDetailCourse = (item: any) => {
        router.push(`/detailCourse/${item}`);
    };

    // Login
    const [display, setDisplay] = useState(false);

    const handleDisplay = () => {
        setDisplay(!display);
    };
    const [userName, setUserName] = useState("");
    const handleUserName = (event: any) => {
        const result = event.target.value;
        setUserName(result);
    };

    const [passWord, setPassWord] = useState("");
    const handlePassWord = (event: any) => {
        const result = event.target.value;
        setPassWord(result);
    };

    const { store, setStore } = userStore();
    useEffect(() => {}, [passWord, userName]);
    const handleLogin = () => {
        setDisplay(false);
        const url = `http://localhost:8081/api/login?userName=${userName}&passWord=${passWord}`;

        fetch(url)
            .then((response) => response.json()) // Parse JSON response
            .then((param) => {
                const value = param;
                setStore(value.result);
                localStorage.setItem("user", JSON.stringify(value.result));
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        const save = localStorage.getItem("user");
        const reSave = JSON.parse(save || "{}");

        setStore(reSave);
    }, []);

    // Log Out

    const handleLogOut = () => {
        setDisplay(false);
        localStorage.removeItem("user");
        setStore({});
    };

    // call

    const [yourCourse, setYourCourse] = useState<any>([]);

    useEffect(() => {
        if (store.id) {
            const url = `http://localhost:8081/api/users/${store.id}`;
            fetch(url)
                .then((response) => response.json()) // Parse JSON response
                .then((param) => {
                    const result = param.result.courses;
                    setYourCourse(result);
                })
                .catch((error) => {
                    console.error("Error fetching dataServer:", error);
                });
        }
    }, [store]);
    return (
        <main className="bg-white">
            {/* Header */}
            <Header
                userName={userName}
                handleUserName={handleUserName}
                passWord={passWord}
                handlePassWord={handlePassWord}
                store={store}
                handleLogin={handleLogin}
                display={display}
                handleDisplay={handleDisplay}
                handleLogOut={handleLogOut}
            ></Header>

            {/* Navbar */}
            <Navbar></Navbar>

            {/* Banner */}
            <Banner></Banner>

            {/* Search */}
            <Search></Search>

            {/* New Courses */}
            <NewCourses
                newCategories={newCategories}
                select={select}
                handleSelect={handleSelect}
                filter={filter}
                handleFocus={handleFocus}
                focus={focus}
                handleCheck={handleCheck}
                resultListFilter={resultListFilter}
                handleDetailCourse={handleDetailCourse}
            ></NewCourses>

            {/* Best Instructors */}
            <BestInstructors
                handleAllInstructors={handleAllInstructors}
            ></BestInstructors>

            {/* Your Courses */}
            <YourCourses
                yourCourse={yourCourse}
                handleDetailCourse={handleDetailCourse}
            ></YourCourses>

            {/* {Test sever} */}
            <SeverData newData={newData}></SeverData>

            {/* Find */}
            <Find></Find>

            {/* Top Courses */}
            <TopCourses></TopCourses>

            {/* Footer */}
            <Footer></Footer>
        </main>
    );
}
