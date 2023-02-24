import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';


export default function IconSwitch(props) {
    const {icon, onSwitch} = props
  return (
    <button className='btn-change' onClick={onSwitch}>
        {icon === "view_list" ? <ViewListIcon/> : <ViewModuleIcon/>} 
    </button>
  );
}
