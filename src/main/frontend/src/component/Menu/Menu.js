import { Link } from "react-router-dom";
import './Menu.css'

export default function Menu() {
  return (<>
        <div className="menuBar">
            <Link className="menuBarContent" to={'/'}>Main</Link>
            <Link className="menuBarContent" to={'./Record'}>Record</Link>
        </div>
     </>
  );
}