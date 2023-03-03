import { useNavigate,useParams, useOutletContext } from "react-router-dom";

const ViewNote = () => {
    const { id } = useParams();
    const [list, setList] = useOutletContext();
    const currentNote = list[id-1];
    const navigate = useNavigate();

    const deleteNote = () => {
        if( window.confirm("Are you sure you want to delete this note?") === false) return;
            setList(list.filter(e => e.id !== currentNote.id))
            list.length -1  === 0 ? navigate("/notes") : navigate(`/notes/1`)
             
    }

    return ( 
    <div >
            {list.length === 0 ? <h1>There are no notes to display</h1> :
            <div>
                <div id="header">
                <h1 >{currentNote !== undefined ? currentNote.title: ""}</h1>
                <button class="headerButton" onClick={deleteNote}>Delete</button>
                <button class="headerButton" onClick={() => navigate(`edit`)}>Edit</button>
                <p>{currentNote !== undefined ? currentNote.time : ""}</p>
                </div>

            <div id="rawHtmlDiv" dangerouslySetInnerHTML={{__html: currentNote.text}} />
            </div>
            }
    </div>
    )  
}

export default ViewNote