const Header = (props) => {
  return /*html*/ `
    <header>
        <h1>${props.h1}</h1>
        <p>${props.subtitle1}</p>
        <p>${props.subtitle2}</p>   
        <button id="testButton">bouton de test</button>  
        <p id="count"></p>           
    </header>
    `;
};

module.exports = Header;
