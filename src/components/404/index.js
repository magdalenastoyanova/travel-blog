import style from "./index.module.css";
import { Link } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <>
    <body className={style.error}>
      <div className={style.site}>
        <div className={style.sketch}>
          <div className={style.beeSketch} className={style.red}>
          </div>
          <div className={style.beeSketch} className={style.blue}></div>
        </div>

        <h1 className={style.titleError}>
          404:
          <small>Page Not Found</small>
         <Link to="/"><button className={style.buton} >GO BACK TO HOME PAGE</button></Link> 
        </h1>
      </div>
      </body>
    </>
  );
};

export default ErrorPage;
