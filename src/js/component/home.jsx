import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import ToDoWrapper from "./ToDoWrapper"


//create your first component
const Home = () => {
	return (
		<div className="List">
			<ToDoWrapper/>
		</div>
	);
};

export default Home;
