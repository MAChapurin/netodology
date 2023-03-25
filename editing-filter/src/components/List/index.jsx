import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Service } from "../Service";
import {} from '../../store' 

export function List() {
  const services = useSelector((state) => state.serviceAdd);
  const servicesCopy = [...services];
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('List: ',servicesCopy);
  }, [services]);
  return (
    <>
    {services.length === 0 ? <h2>Список пуст</h2> : null}
    <ul>
      {services.map((service) => (
        <Service
        key={service.id}
        id={service.id}
        name={service.name}
        price={service.price}
        />
        ))}
    </ul>
        </>
  );
}
