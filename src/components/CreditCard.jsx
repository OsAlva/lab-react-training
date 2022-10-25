function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
  return (
    <div className="credit-card">
        {/* <div>
            
        </div> */}
        <div>
            <h1>•••• •••• •••• {number.substr(-4)}</h1>
        </div>
        <div>
            <h3>Expires {expirationMonth}/{expirationYear.toString().substr(-2)} {bank}</h3>
        </div>
        <div>
            <p>{owner}</p>
        </div>
        {/* <div>
            <p>{bgColor}</p>
        </div>
        <div>
            <p>{color}</p>
        </div> */}
    </div>
  );
}

export default CreditCard;


