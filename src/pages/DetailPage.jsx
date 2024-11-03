import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import { useNavigate } from "react-router-dom";

export function DetailPage(){

    const [meal, setMeal] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        getMealById(id).then(data=>{
            console.log(data.meals[0]);
            setMeal(data.meals[0])
        });
    }, [id]);


    return <div className="DetailPage container mx-auto">
        <button className=" bg-orange-700 py-2 px-4 m-4" onClick={()=> navigate(-1)}> GO TO BACK </button>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div>Name: {meal.strMeal}</div>
        <div>Category: {meal.strCategory}</div>
        <div>Area: {meal.strArea}</div>
    </div>;
}