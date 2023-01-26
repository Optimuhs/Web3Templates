import Content from "./Content";
import Header from "./Header";

export default function Layout(){
   return(
    <div>
        <div className="header"><Header/></div>
        <div><Content/></div>
    </div>
   )
}