import "./ExpanceDetails.css";


const ExpanceDetails=(props)=> {
  
  return (
    <div className="expance-details">
      <div className="expance-details-title">{props.title}</div>
      <div className="expance-details-location">{props.location}</div>
      <div className="expance-details-amount">${props.amount}</div>
      
    </div>
  );
}

export default ExpanceDetails;
