import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Service } from "../Service";

export function List() {
  const services = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(services);
  }, [services]);
  return (
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
  );
}
