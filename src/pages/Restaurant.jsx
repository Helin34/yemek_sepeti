
import Container from "../components/Container"
import ProductList from "../components/ProductList"
import RestaurantDetail from "../components/RestaurantDetail"
const Restaurant = () => {
 
  return (
    <div>
      <div className="shadow">


    <Container >
      <RestaurantDetail/>
    </Container>
      </div>
    <Container>
      <ProductList/>
    </Container>
    </div>

  )
}

export default Restaurant
