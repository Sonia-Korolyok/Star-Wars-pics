import {dreamTeam} from "../utils/constants.js";
import Friend from "./Friend.jsx";
import {useState} from "react";

const DreamTeam = () => {

    const [selectedImg, setSelectedImg] = useState();

    function handleClick(picture) {
        setSelectedImg(picture);
    }

    return (
        <section className="justify-self-center mt-10 w-1/2 border rounded-2xl mr-0 ml-2 grid grid-cols-3 gap-1">
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>

            {selectedImg ? (
                <Friend picture={selectedImg} setSelectedImg={() => handleClick(null)} isFullWidth={true} />
            ) : (
                dreamTeam.map((f, i) => <Friend picture={f} key={i} pos={i + 1} setSelectedImg={() => handleClick(f)} isFullWidth={false} />)
            )}
        </section>
    );
};

export default DreamTeam;