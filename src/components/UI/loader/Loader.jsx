import ss from './Loader.module.css';

const Loader = () => {
   return (
      <div>
         <h3 className={ss.title}>Loading...</h3>
         <div className={ss.loader}>
         </div>
      </div>
   )
};

export default Loader;