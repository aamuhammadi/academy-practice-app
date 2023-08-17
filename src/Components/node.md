import ReactConfetti from "react-confetti";
const [title, setTitle] = useState("A Closer Look at the useState Hook");
const clickMe = () => {
setTitle("Muhammadi Clicked Me!");
};

<h1>Welcome to the Confetti Party!</h1> 
<ReactConfetti /> 
<h1>{title}</h1>
<button className="edit-button" onClick={clickMe}>
Click Me!
</button>
