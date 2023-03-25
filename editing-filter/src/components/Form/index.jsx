import {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addService, editService, changeName, changePrice, searchService} from '../../store';
import {Search} from '../Search'

export function Form() {
  const refInputSearch = useRef();
  const refInputName = useRef();
  // const [service, setService] = useState({name: '', price: ''});
  const service = useSelector(state => state.serviceForm);
  const editMode = useSelector((state) => state.serviceEdit);
  const dispatch = useDispatch();
  const services = useSelector((state) => state.serviceAdd);
  

  useEffect(() => {
    console.log('Form: ',services)
    
  }, [services])
  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      if (editMode) {
        console.log('Edit mode', service)
        dispatch(editService(service))
      } else {
        dispatch(addService(service));
      }
      dispatch(changeName(''));
      dispatch(changePrice(''));
      dispatch({type: 'ADD_MODE'})
      refInputName.current.focus();
    }}>

      <input className="search" type="text" placeholder="Поиск" onChange={(e)=> {
            dispatch(searchService(e.target.value))
            console.log(e.target.value, services);
            
        }} ref={refInputSearch}/><br/>

      <input name="name" type="text" placeholder="Наименование услуги" value={service.name} onChange={(e)=> {      
        dispatch(changeName(e.target.value))
      }} ref={refInputName}/>

      <input name="price" type="number" placeholder="Цена услуги" value={service.price} onChange={(e)=> {
        dispatch(changePrice(e.target.value))
      }}/>
      <button type="submit">Save</button>
      {editMode && <button onClick={()=> dispatch({type: 'ADD_MODE'})}>Cancel</button>}
    </form>
  );
}
