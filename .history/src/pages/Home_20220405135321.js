import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setItems(json))
        .catch((error) => {
          setIsError(true);
        });
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isError && <div>Something went wrong ...</div>}
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Layout(Home);
