import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Product 1",
      image: "https://picsum.photos/id/100/2500/1656",
      info: "bla bla bla",
      number: 1,
    },
    {
      id: 2,
      title: "Product 2",
      image: "https://picsum.photos/id/1001/5616/3744",
      info: "bla bla bla",
      number: 1,
    },
    {
      id: 3,
      title: "Product 3",
      image: "https://picsum.photos/id/1002/4312/2868",
      info: "bla bla bla",
      number: 1,
    },
    {
      id: 4,
      title: "Product 4",
      image: "https://picsum.photos/id/1005/5760/3840",
      info: "bla bla bla",
      number: 1,
    },
    {
      id: 5,
      title: "Product 5",
      image: "https://picsum.photos/id/1011/5472/3648",
      info: "bla bla bla",
      number: 1,
    },
  ]);

  const [basket, setBasket] = useState([]);


  return (
    <div className="App">
      <h1>React Basket Application</h1>
      <h2>Listed Products</h2>
      <div className="products">
        {product.map((item, index) => {
          return (
            <Card
              onClick={() => {
                const arr = [...basket]
                if(arr.indexOf((ind) => {
                  return item.id===ind.id
                })===-1) {
                  arr.push(item)
                  setBasket(arr)
                } else {
                  arr.map((element)=> {
                    if(item.id === element.id) {
                      return (item.number += 1)
                    }
                    setBasket(arr)
                  })
                }
                console.log(arr)

                
              }}
              key={index}
              title={item.title}
              image={item.image}
              info={item.info}
            />
          );
        })}
      </div>
      <div className="basket">

      </div>
    </div>
  );
}

export default App;
