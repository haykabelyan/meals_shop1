import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {getFilteredCategory} from '../api';
import { Meals } from "../components/Meals";


export function MealsPage(){

    const [meals, setMeals] = useState([]);
    const {name} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getFilteredCategory(name).then(data=>{
            console.log(data.meals);
            setMeals(data.meals);
        });
    }, [name]);



    return <div className="MealsPage container mx-auto">
        <button className=" bg-orange-700 py-2 px-4 m-4" onClick={()=> navigate(-1)}> GO TO BACK </button>
        <Meals meals={meals} />
    </div>
}