import "./CookieConsent.scss";
import { useEffect } from "react";
import setCookies from "../helpers/set-cookies";

function CookieConsent() {
  useEffect(function() {
    document.body.className = "modal--open";
  }, []);


  function allowAll() {
    var now = Date.now();
    var expires = new Date(now + 60 * 1000).toUTCString();
    var payload = {
      acceptnecessary:true,
      acceptanalytics:true
    };
    setCookies(payload)
      document.cookie = `landingpagedemo=${JSON.stringify(payload)}; expires=${expires}; path=/`
      document.body.className = "";
      document.querySelector(".overlay").style.display = "none"; 
  }


  return(
    <div className="overlay">
      <section className="cookieConsentModal">
        <header className="cookieConsentModal__header">
          <h1>Hvad bruger vi cookies til?</h1>
        </header>

        <article className="cookieConsentModal__content">
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" id="cookie__necessary" disabled checked/>
                  <label className="consentToggle" htmlFor="cookie__necessary" />
                </td>
                <td>
                  <p>Tillad alle nødvendige cookies. Dette er cookies, som er nødvendige for at denne hjemmeside virker korrekt. Der forgår ingen sporing ced hjælp af denne slags cookie</p>
                </td>
              </tr>
              <tr>
                <td>
                  <input type="checkbox" id="cookie__analytics"/>
                  <label className="consentToggle" htmlFor="cookie__analytics"/>
                </td>
                <td>
                  <p>Tillad analytics. Vi bruger tredjepartcookies fra Google til at spore og lave statistik over vores besøgende. Dette gør vis for hele tiden at kunne forbedre din oplevelse på vores hjemmeside.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>


          <div className="content__buttons">
            <button className="buttons__cookie">Tillad valgte</button>
            <button className="buttons__cookie buttons__highlight " onClick={() => allowAll()}>Tillad alle</button>
          </div>

        </article>
      </section>
    </div>
  );
}

export default CookieConsent;