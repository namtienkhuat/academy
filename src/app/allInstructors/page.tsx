"use client";
import Footer from "@/components/AllInstructors/Footer";
import Header from "@/components/AllInstructors/Header";
import Instructors from "@/components/AllInstructors/Instructors";
import { allInstructors } from "@/components/Data/data";
import { useEffect, useState } from "react";

export default function AllInstructors() {
    // filter career
    const career = allInstructors.map((item: any) => item.career);
    const handleCareer = (arr: any) => {
        let newArr: any[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (!newArr.includes(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    };
    const newCareer = handleCareer(career);
    const newArray = ["All Careers", ...newCareer];

    // new courses
    const [select, setSelect] = useState("All Careers");
    const handleSelect = (item: any) => {
        const value = item;
        setSelect(value);
    };

    // filter new courses
    const [filter, setFilter] = useState<any>(allInstructors);

    useEffect(() => {
        setFilter(
            select == "All Careers"
                ? allInstructors
                : allInstructors.filter(
                      (element: any) => element.career == select
                  )
        );
    }, [select]);

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
    const [resultListFilter, setResultListFilter] = useState<any>([]);
    useEffect(() => {
        const filteredResults = listFilter.flatMap((item: any) =>
            allInstructors.filter((element: any) => element.career === item)
        );

        setResultListFilter(filteredResults);
    }, [listFilter]);

    return (
        <main className="bg-white">
            {/* Header */}
            <Header></Header>

            {/* All Instructors */}
            <Instructors
                newArray={newArray}
                select={select}
                handleSelect={handleSelect}
                focus={focus}
                handleFocus={handleFocus}
                handleCheck={handleCheck}
                filter={filter}
                resultListFilter={resultListFilter}
            ></Instructors>
            {/* Pagination */}

            {/* Footer */}
            <Footer></Footer>
        </main>
    );
}
