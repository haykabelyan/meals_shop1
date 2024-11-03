import { useState, useEffect } from "react";
import {getAllCategories} from '../api';
import { Categories } from "../components/Categories";

export function HomePage(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        getAllCategories().then(data=>{
            console.log(data.categories);
            setCategories(data.categories)
        });
    }, []);


    return <div className="HomePage container mx-auto">
        <Categories categories={categories} />
    </div>
}

