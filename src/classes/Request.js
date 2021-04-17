import { URL, TIMEOUT_REQUEST, HEADERS } from "../Config"

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
        return await this.__doRequest(`${URL}/get-year-avg/${year}/${field}`)
    }

    /**
     * Ritorna la media dei valori nel giorno tot.
     * Il formato della data deve essere "YYYY-mm-dd"
     * @param {date} day 
     * @param {string} field 
     * @returns Promise
     */
    async avgOnDay(day, field)
    {
        return await this.__doRequest(`${URL}/get-avg-on/${day}/${field}`)
    }

    /**
     * Restituisce tutti i dati da caricare nel Chart
     * @returns Promise
     */
    async getAllData()
    {
        return await this.__doRequest(URL)
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

                xml.ontimeout = () => {
                    reject({error: "server timed out"})
                }
                
                xml.open("GET", url, true)
                xml.timeout = TIMEOUT_REQUEST
                for (let header of HEADERS)
                {
                    xml.setRequestHeader(header[0], header[1])
                }
                xml.send()
            }
        )
    }
}

export default Request