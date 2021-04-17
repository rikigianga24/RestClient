import { URL } from "../Config"

class Request
{
    /**
     * Ritorna la promise con il risultato della richiesta asincrona
     * che ritorna la media dei valori nell'anno richiesto
     * @param {string} year 
     * @param {string} field 
     * @returns Promise
     */
    async avgOnYear(year, field)
    {
        return await this.__doRequest(`http://ee8ab2dfef19.ngrok.io/api/observation/get-year-avg/${year}/${field}`)
    }

    async avgOnDay(day, field)
    {

    }

    /**
     * Ritorna una promise con il risultato
     * della richiesta asincrona
     * 
     * @param {string} url 
     * @returns Promise
     */
    async __doRequest (url)
    {
        return new Promise(
            (resolve, reject) => {
                let xml = new XMLHttpRequest()

                xml.onload = data => {
                    if (xml.status >= 400)
                    {
                        reject(xml.status)
                    }

                    resolve(JSON.parse(xml.responseText))
                }
                
                xml.open("GET", url, true)
                xml.setRequestHeader("X-AUTH-TOKEN", "BANANA-TOKEN-2021")
                xml.send()
            }
        )
    }
}

export default Request