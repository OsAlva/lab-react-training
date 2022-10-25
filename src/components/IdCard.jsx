// import berlinData from '../data/berlin.json';

function IdCard({lastName, firstName,gender, height, birth, picture}){
    
    return (
        <div className="id-card">
            <img src={picture} alt="profile-pic"/> 
        <span>
           <p>Last name: {lastName}</p>
           <p>First name: {firstName}</p>
           <p>Gender: {gender}</p>
           <p>Height: {height}</p>
           <p>Birth: {birth}</p>
        </span>
            
        </div>
        
    );
}

export default IdCard;