import React, { useState } from "react";
import "./App.css";

interface Person {
	name: string;
	age: number;
	city: string;
}

function PersonCard(props: Person) {
	return (
		<div className="person-card" style={{ width: "500px" }}>
			<h2>{props.name}</h2>
			<p>Age: {props.age}</p>
			<p>City: {props.city}</p>
		</div>
	);
}

interface PersonCard2Props {
	names: string[];
}

function PersonCard2({ names }: PersonCard2Props) {
	return (
		<div className="person-card" style={{ width: "500px" }}>
			{names.map((name) => (
				<h1 key={name}>{name}</h1>
			))}
		</div>
	);
}

interface DropDownProps {
	options: string[];
}

function DropDown({ options }: DropDownProps) {
	return (
		<select name="PeopleDD" id="People-Dropdown">
			{options.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
}

interface DropDown2Props {
	names: string[];
	selectedName: string;
	setSelectedName: (name: string) => void;
}

function DropDown2({ names, selectedName, setSelectedName }: DropDown2Props) {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedName(event.target.value);
		alert("Hi, " + event.target.value);
	};

	return (
		<select value={selectedName} onChange={handleChange}>
			{names.map((name) => (
				<option key={name} value={name}>
					{name}
				</option>
			))}
		</select>
	);
}

const people: Person[] = [
	{ name: "Alice", age: 30, city: "New York" },
	{ name: "Bob", age: 25, city: "Los Angeles" },
	{ name: "Charlie", age: 35, city: "Chicago" },
	{ name: "David", age: 40, city: "Houston" },
];

const names = people.map((person) => person.name); // Extract names

function App() {
	const [selectedName, setSelectedName] = useState(names[0]);

	return (
		<>
			<div>
				<button onClick={() => alert("Hi, " + selectedName)}>
					Click Me, {selectedName}
				</button>
				<DropDown2
					names={names}
					selectedName={selectedName}
					setSelectedName={setSelectedName}
				/>
				<PersonCard2 names={names} />
				{people.map((person) => (
					<PersonCard key={person.name} {...person} />
				))}
			</div>
		</>
	);
}

export default App;
