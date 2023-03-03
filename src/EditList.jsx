import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {v4 as uuidv4} from "uuid";
import { useNavigate,useParams, useOutletContext } from "react-router-dom";

const EditList = () => {
    
    const getDate = () => {
        let currentDate = new Date()
        return new Date(currentDate.getTime() -currentDate.getTimezoneOffset() * 6000).toJSON().substring(0,10);
    }

    const navigate = useNavigate();
    const { id } = useParams();
    const [list, setList ] = useOutletContext();
    const currentNote = list[id-1];
    const [ mainText, setMainText] = useState(currentNote === undefined ? "" : currentNote.text);
    const [title, setTitle] = useState(currentNote === undefined ? "Untitiled" : currentNote.title);
    const [date, setDate] = useState(currentNote === undefined ? getDate() :  currentNote.time)

    const save = () => {
        if(currentNote === undefined){
            setList([{id:uuidv4(), title: title, text:mainText,time:date},...list])
            navigate(`/notes/${1}`)
        } else {
            list[id-1] = {id: currentNote.id, title: title, text:mainText, time:date}
            setList([...list])
            navigate(`/notes/${id}`)
        }
    }

    const deleteNote = () => {
        if( window.confirm("Are you sure you want to delete this note?") === false) return;
            setList(list.filter(e => e.id !== currentNote.id))
            list.length -1  === 0 ? navigate("/notes") : navigate(`/notes/1`)
             
    }

    return (
        <div className='quillDiv'>
            <input value={title} onChange={(event) => setTitle(event.target.value) } type="text"/>
            <input type="date" value={date} onChange={(event) => setDate(event.target.value)} />
            <button  onClick={save}>Save</button>
            <button  onClick={deleteNote}>Delete</button>
            <ReactQuill theme="snow" value={mainText} onChange={setMainText} bounds="#scrolling-container"/>
            
         </div>
    )
}

export default EditList;