import './App.css';


function App() {
	return (
		<div className="App">	
			{/*Function Call*/}
			<Person name="Rubel" nayika="moushumi"></Person>
			<Person name="BappaRaz" nayika="cheka"></Person>
			<Person name="kuber" nayika="kopila"></Person>

			<h5>New Component YAY</h5>
			<p id="totoCompany">Rock Mara React Mama</p>
			<Friend movie="Shingam" phone="01753732068"></Friend>
			<Friend phone="01516111123"></Friend>
		</div>
	);
}

/*Create Function*/
function Person(props){
	// Showing data in Props
	console.log(props);

	return (
		<div className='person'>
			<h1>{props.name}</h1>
			<p>nayika: {props.nayika}</p>
		</div>
	)
}
function Friend(props){
	console.log(props)
	return (
		<div className="container">
			<h3>Name: {props.movie}</h3>
			<p>Phone: {props.phone}</p>
		</div>
	)
}



export default App;
