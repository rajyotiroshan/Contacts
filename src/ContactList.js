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
	clearQuery = (event) =>{this.setState({query: ''})}
	render(){
		let showingContacts ;
		const {contacts, onDeleteContact} = this.props;
		const {query} = this.state;
		if(query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingContacts = contacts.filter((contact)=> match.test(contact.name))

		}else {
			showingContacts = contacts;
		}
		showingContacts.sort(sortBy('name'))
		//console.log(this.props);
		return (<div className='list-contacts'>
					<div className="list-contacts-top">
						<input className="search-contacts" type="text" placeholder="search contacts" value={query} onChange={(event)=>this.updateQuery(event.target.value)}/>
					</div>

					{showingContacts.length != contacts.length && (
						<div className="showing-contacts">
						<span>showing {showingContacts.length} of total {contacts.length} items.</span>
						<button onClick= {this.clearQuery}>show all</button>
						</div>)}
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
						<button onClick={()=>onDeleteContact(contact)} className="contact-remove">Remove</button>
					</li>))}
			</ol>

			</div>)
	}

}
export default ListContacts