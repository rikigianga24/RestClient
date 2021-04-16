class Request
{
    avgOnYear(year, field)
    {
        return this.__doRequest(`http://ee8ab2dfef19.ngrok.io/api/observation/get-year-avg/${year}/${field}`)
    }

    __doRequest (url)
    {
        let xml = new XMLHttpRequest()

        let res = null

        xml.onload = data => {
            res = JSON.parse(xml.responseText)
        }
        
        xml.open("GET", url, false)
        xml.setRequestHeader("X-AUTH-TOKEN", "BANANA-TOKEN-2021")
        xml.send()

        return res
    }
}

export default Request