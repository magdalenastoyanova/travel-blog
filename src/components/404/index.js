import style from "./index.module.css";
import {Button} from 'antd';
import { Link } from 'react-router-dom'
import photo from '../images/404page.png'
const ErrorPage = () => {
  return (
    <>
    <div style={{
         backgroundImage: `url(${photo})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover',position: 'relative', width:'70%',height:'80vh',color:'white', marginLeft:'8rem'
      }}/>
      <Button className={style.backBtn}> <Link to='/'>GO BACK TO HOME PAGE</Link></Button>
    </>
  );
};

export default ErrorPage;
