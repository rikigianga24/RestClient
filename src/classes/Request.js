import { URL, TIMEOUT_REQUEST, HEADERS } from "../Config";

class Request {
  /**
   * Ritorna la promise con il risultato della richiesta asincrona
   * che ritorna la media dei valori nell'anno richiesto
   * @param {string} year
   * @param {string} field
   * @returns Promise
   */
  async avgOnYear(year, field) {
    return await this.__doRequest(`${URL}get-year-avg/${year}/${field}`);
  }

  /**
   * Ritorna la media dei valori nel giorno tot.
   * Il formato della data deve essere "YYYY-mm-dd"
   * @param {date} day
   * @param {string} field
   * @returns Promise
   */
  async avgOnDay(day, field) {
    return await this.__doRequest(`${URL}get-avg-on/${day}/${field}`);
  }

  /**
   * Ritorna la media di un campo
   * nel mese selezionato
   * @param {string} month
   * @param {string} year
   * @param {string} field
   * @return Promise
   */
  async avgOnMonth(month, year, field){
    return await this.__doRequest(`${URL}get-month-avg/${year}/${month}/${field}`)
  }

  /**
   * Ritorna tutti i dati in uno specifico anno
   * @param {string} year
   * @returns Promise
   */
  async allDataInYear(year)
  {
    return await this.__doRequest(`${URL}get-by-year/${year}`)
  }

  /**
   * Restituisce tutti i dati nel giorno selezionato
   * @param {string} day
   * @returns Promise
   */
  async allDataInDay(day)
  {
    return await this.__doRequest(`${URL}get-by-day/${day}`)
  }

  /**
   * Restituisce tutti i dati nel mese selezionato
   * @param {string} year
   * @param {string} month
   * @returns Promise
   */
  async allDataInMonth(year, month)
  {
    return await this.__doRequest(`${URL}get-by-month/${year}/${month}`)
  }

  /**
   * Restituisce tutti i dati da caricare nel Chart
   * @returns Promise
   */
  async getAllData() {
    return await this.__doRequest(URL);
  }

  async getAllAvailableYear() {
    return await this.__doRequest(`${URL}get-available-year`);
  }

  insertData(_time, _aTemp, _aHum, _bTemp, _bHum, _extTemp, _extHum) {
    let date = new Date();

    let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();

    let minute =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

    let sec =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    return this.__doPost(
      JSON.stringify({
        time: `${_time} ${hour}:${minute}:${sec}`,
        aTemp: _aTemp,
        aHum: _aHum,
        bTemp: _bTemp,
        bHum: _bHum,
        extTemp: _extTemp,
        extHum: _extHum,
      })
    );
  }

  /**
   * Ritorna una promise con il risultato
   * della richiesta asincrona
   *
   * @param {string} url
   * @returns Promise
   */
  async __doRequest(url) {
    return new Promise((resolve, reject) => {
      let xml = new XMLHttpRequest();

      xml.onload = (data) => {
        if (xml.status >= 400) {
          reject(xml.status);
        }

        resolve(JSON.parse(xml.responseText));
      };

      xml.ontimeout = () => {
        reject({ error: "server timed out" });
      };

      xml.open("GET", url, true);
      xml.timeout = TIMEOUT_REQUEST;
      for (let header of HEADERS) {
        xml.setRequestHeader(header[0], header[1]);
      }
      xml.send();
    });
  }

  __doPost(data) {
    let xml = new XMLHttpRequest();

    xml.open("POST", URL, false);
    for (let header of HEADERS) {
      xml.setRequestHeader(header[0], header[1]);
    }
    xml.send(data);

    return xml.status;
  }
}

export default Request;
