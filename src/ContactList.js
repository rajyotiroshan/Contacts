import React, {Component} from "react"
import PropTypes from "prop-types"
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
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
	static PropTypes = {
		contacts: PropTypes.array.isRequired,
		onDeleteContact: PropTypes.func.isRequired
	}

	state= {
		query: ''
	}

	updateQuery = (query)=>{ this.setState({query: query.trim()})}
	render(){
		let showingContacts ;
		if(this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			showingContacts = this.props.contacts.filter((contact)=> match.test(contact.name))

		}else {
			showingContacts = this.props.contacts;
		}
		showingContacts.sort(sortBy('name'))
		//console.log(this.props);
		return (<div className='list-contacts'>
					<div className="list-contacts-top">
						<input className="search-contacts" type="text" placeholder="search contacts" value={this.state.query} onChange={(event)=>this.updateQuery(event.target.value)}/>
					</div>
					<ol className="contact-list">
				{showingContacts.map(contact => (
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
			</ol>

			</div>)
	}

}
export default ListContacts