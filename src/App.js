import "./App.css"
import Card from "./components/Card"

function App() {
  const props = [
    {
      img: (
        <img
          src="http://placehold.it/280x280"
          className="card-img-top"
          alt="..."
        />
      ),
      href: "#",
      title: "Card1",
      text: "text",
    },
    {
      href: "#",
      title: "Card2",
      text: "text2",
    },
  ]
  return (
    <div className="App">
      {props.map((item) => (
        <Card image={item.img}>
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.text}</p>
          <a href={item.href} className="btn btn-primary">
            Go somewhere
          </a>
        </Card>
      ))}
    </div>
  )
}

export default App
