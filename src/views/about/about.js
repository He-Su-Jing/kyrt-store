import "./about.scss"
import { useSelector, useDispatch } from "react-redux";

import { menulistAsync } from "../../store/modules/menulistSlice";

function About() {

    const menulist = useSelector(state => JSON.stringify(state.menulisttit.menulist));

    return (
        <>
            <h1>About</h1>
            <div>{menulist}</div>
        </>
    )
}
export default About