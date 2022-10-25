function Greetings({lang, children}) {
    return (
        <div className="saludo">
            <p>{lang === "de" ? "Hallo" : lang === "en" ? "Hello" : lang === "es" ? "Hola" : lang === "fr" ? "Bonjour" : "Hi"} {children}</p>
        </div>
    );
}

export default Greetings;