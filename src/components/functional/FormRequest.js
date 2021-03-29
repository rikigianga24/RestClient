function FormRequest (props)
{
    return (
        <div className="input-group mb-2">
            <input type="text" value="http://94.176.46.49:8000/api/observation" readonly className="form-control" id="input_url" />
            <button type="button" className="btn btn-success" onClick={props.onClick}>Manda</button>    
        </div>
    );
}

export default FormRequest;