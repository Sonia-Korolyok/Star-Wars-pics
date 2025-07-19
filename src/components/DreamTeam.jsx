import {dreamTeam} from "../utils/constants.js";
import Friend from "./Friend.jsx";


const DreamTeam = ({setSelectedImg}) => {
    
    return (
        <section className="justify-self-center mt-10 w-1/2 border rounded-2xl mr-0 ml-2 grid grid-cols-3 gap-1">
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>

            {(dreamTeam.map((f, i) => <Friend picture={f} key={i} pos={i + 1} setSelectedImg={setSelectedImg} />))}
        </section>
    );
};

export default DreamTeam;