function FormRequest (props)
{
    return (
        <div className="input-group mb-2">
            <select className="" id="method">
                <option value="GET">GET</option>
                <option value="POST"> POST</option>
                <option value="DELETE"> DELETE</option>
            </select>
            <input type="text" className="form-control" id="input_url" placeholder="Inserisci qui il tuo Banana URL"/>
            <button type="button" className="btn btn-success" onClick={props.onClick}>Manda</button>    
        </div>
    );
}

export default FormRequest;