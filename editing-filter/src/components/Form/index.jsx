import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addService} from '../../store' 

export function Form() {
  const [service, setService] = useState({name: '', price: ''});
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(service)
  }, [service])
  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      console.log(service)
      dispatch(addService(service))
      setService({name: '', price: ''})
    }}>
      <input name="name" type="text" placeholder="Наименование услуги" value={service.name} onChange={(e)=> {
        setService({...service, name: e.target.value});
      }}/>
      <input name="price" type="number" placeholder="Цена услуги" value={service.price} onChange={(e)=> {
        setService({...service, price: e.target.value});
      }}/>
      <button type="submit">Save</button>
    </form>
  );
}
