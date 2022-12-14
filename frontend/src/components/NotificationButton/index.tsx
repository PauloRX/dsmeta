import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css'

type Props = {
  saleId: number;
}

function handleClick(saleId : number) {
  axios.get(`${BASE_URL}/sales/${saleId}/notification`)
  .then(response =>{
    console.log("SUUUUUUUUCESSO");
  });
}
  

function NotificationButton( {saleId}: Props ) {
    return(
      <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
        <img src={icon} alt="Notification" />
      </div>
    );
  }
  
  export default NotificationButton