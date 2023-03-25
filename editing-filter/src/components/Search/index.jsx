import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {searchService} from '../../store' 

export function Search() {
    const dispatch = useDispatch();
    // const servicesCopy = 
    const services = useSelector((state) => state.serviceAdd);
    let servicesCopy = [...services]

    useEffect(()=> {
        servicesCopy = [...services]
        console.log('Search: ',servicesCopy)
    }, [services])
    return (
        <input className="search" type="text" placeholder="Поиск" onChange={(e)=> {
            dispatch(searchService(e.target.value))
            console.log(e.target.value)
        }}/>
    )
}