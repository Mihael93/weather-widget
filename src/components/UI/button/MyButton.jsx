import ss from "./MyButton.module.css";

const MyButton = ({ children, ...props }) => {
   return (
      <button {...props} className={ss.myBtn}>
         {children}
      </button>
   )
};
export default MyButton;