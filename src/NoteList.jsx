import { Link, useNavigate } from "react-router-dom";

const NoteList = props => {
    const navigate = useNavigate();
    return(
        <div>
            <div id="topBar">
                <h3>Notes</h3>
            <button onClick={() => navigate(`/notes/1337/edit`)}>Add</button>
            </div>
            
            {props.notes.length !== 0 ? props.notes.map((e,i) => {
                return <p class="items" id={i} key={e.id}><Link to={`/notes/${i+1}`} >{e.title}</Link></p>
            }) : <p>There are no notes</p>}
        </div>
    )
}

export default NoteList;