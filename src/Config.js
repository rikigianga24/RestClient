/**
 * L'url per collegarsi al Web Service
 */
export const URL = "http://ee8ab2dfef19.ngrok.io/api/observation/"

/**
 * Rappresenta il timeout per le richieste asincrone che
 * fa l'applicazione.
 * 16000 => 16 secondi (16 * 1000)
 */
export const TIMEOUT_REQUEST = 16000

/**
 * Array di header da includere nella richiesta.
 * Per indicare un valore deve usare un array formattato così:
 * [
 *      "chiave", "valore"
 * ]
 * come nell'esempio qui sotto con X-AUTH-TOKEN.
 * 
 * N.B.: X-AUTH-TOKEN deve esserci sempre, serve al server per
 * l'autenticazione
 */
export const HEADERS = [
    [
        "X-AUTH-TOKEN", "BANANA-TOKEN-2021"
    ]
]