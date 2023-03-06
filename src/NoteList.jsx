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
                return (
                    <div id={i} key={e.id} className="items" >
                    <Link  to={`/notes/${i+1}`} >
                    <p >{e.title}</p>
                    {e.title !== "" && <p>{e.time}</p>}
                    {e.text !== "" && <div dangerouslySetInnerHTML={{__html: e.text.slice(0,25) }}></div>}
                   
                    </Link>
                    </div>)
            }) : <p>There are no notes</p>}
        </div>
    )
}

export default NoteList;