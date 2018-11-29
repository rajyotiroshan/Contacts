import React, {Component} from "react"
import PropTypes from "prop-types"
//using stateless functional component 
/*function ListContacts(props) {
	return (<ol className="contact-list">
				{props.contacts.map(contact => (
					<li key={contact.name} className="contact-list-item">
						
						<div className="contact-avatar" style={{
							backgroundImage:`url(${contact.avatarURL})`
						}}></div>
						
						<div className="contact-details">
							<p>{contact.name}</p>
							<p>{contact.email}</p>
						</div>
						<button className="contact-remove">Remove</button>
					</li>))}
			</ol>)
}*/
//using class component
//managing state
class ListContacts extends Component {
	render(){
		//console.log(this.props);
		return (<ol className="contact-list">
				{this.props.contacts.map(contact => (
					<li key={contact.name} className="contact-list-item">
						
						<div className="contact-avatar" style={{
							backgroundImage:`url(${contact.avatarURL})`
						}}></div>
						
						<div className="contact-details">
							<p>{contact.name}</p>
							<p>{contact.email}</p>
						</div>
						<button onClick={()=>this.props.onDeleteContact(contact)} className="contact-remove">Remove</button>
					</li>))}
			</ol>)
	}

	

}
ListContacts.propTypes = {
		contacts: PropTypes.array.isRequired,
		onDeleteContact: PropTypes.func.isRequired
	}
export default ListContacts