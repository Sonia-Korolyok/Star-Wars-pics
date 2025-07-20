import {useState} from 'react'
import './App.css'
import DreamTeam from "./components/DreamTeam.jsx";

function App() {
    const [selectedImg, setSelectedImg] = useState(null)

    return (
        <>

            <h1 className="text-center text-3xl mt-5">For the first intergalactic empire!</h1>


            <main className="clear-both">
                <DreamTeam setSelectedImg={setSelectedImg}/>
                {
                    selectedImg && (
                        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
                            <img
                                src={selectedImg}
                                alt="Selected"
                                className="w-1/2 h-3/4"
                                onClick={() => setSelectedImg(null)}
                            />
                        </div>

                    )}


            </main>

        </>
    )
}

export default App
