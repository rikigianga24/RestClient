function FormRequest (props)
{
    return (
        <div class="input-group mb-2">
            <input type="text" className="form-control" id="input_url" placeholder="DACCI URL"/>
            <button type="button" className="btn btn-primary" onClick={props.onClick}>MANDAAAAA</button>    
        </div>
    );
}

export default FormRequest;