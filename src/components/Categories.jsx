import { Link } from "react-router-dom"


export function Categories({categories}){

    return <div className="Categories grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {
            categories.map(el=> <div key={el.idCategory} className=" shadow-md p-2">
                <img src={el.strCategoryThumb} alt={el.strCategory} className=" w-full" />
                <div className=" font-bold italic">{el.strCategory}</div>
                <div>
                    {el.strCategoryDescription.length > 200 ? 
                        el.strCategoryDescription.slice(0, 200) + '...>>>' : 
                        el.strCategoryDescription
                    }
                </div>
                <Link to={'/meals/' + el.strCategory}> Detail {el.strCategory}...</Link>
            </div>)
        }
    </div>
}