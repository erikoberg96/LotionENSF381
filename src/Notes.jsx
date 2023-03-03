import NoteList from "./NoteList";
import { useState,useEffect } from 'react';
import { Outlet, useLocation } from "react-router";



const Notes = () => {
    const location = useLocation();
    const listInStorage = JSON.parse(localStorage.getItem("noteList"));
    const [list, setList] = useState(listInStorage === null ? [] : listInStorage)
    const [show, setShow] = useState(true)

    useEffect(() => {
        localStorage.setItem("noteList", JSON.stringify(list))
      }, [list])


    const isAtRoot = location.pathname === "/notes" || location.pathname === "/notes/" || location.pathname === "/"
    return (
        <>  
        <div className="topBar">
        <button id="hideShow" onClick={() => setShow(!show)}>&#9776;</button>
        <h1 >Lotion</h1>
        </div>          

        
        <div id="mainDiv">
            <div className="noteList">
            {show ? <NoteList  notes={list}/> : null}   
            </div>
            <div className="nodeview">
            { isAtRoot ?  <h1>Select or create a note to view it</h1> : null}
                <Outlet context={[list, setList]}/> 
            </div>        
        </div>
        </>
    )
}

export default Notes;