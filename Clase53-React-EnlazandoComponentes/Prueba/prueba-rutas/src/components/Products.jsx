import { Link } from 'react-router-dom'
const productsList = [
    {
        id:1,
        name: 'Televisor',
        price: 123,
        description: 'Televisor - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam saepe sequi eligendi itaque mollitia ea facere ut, optio necessitatibus rem dolore alias inventore iure nisi quia ex maiores. Beatae, temporibus.'
    },
    {
        id:2,
        name: 'Computadora',
        price: 456,
        description: 'Computadora - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam saepe sequi eligendi itaque mollitia ea facere ut, optio necessitatibus rem dolore alias inventore iure nisi quia ex maiores. Beatae, temporibus.'
    },
    {
        id:3,
        name: 'Celular',
        price: 789,
        description: 'Celular - Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam saepe sequi eligendi itaque mollitia ea facere ut, optio necessitatibus rem dolore alias inventore iure nisi quia ex maiores. Beatae, temporibus.'
    },

];

function Products(props) {
	const id = Number(props.match.params.id);
	const product = productsList.find(product => product.id === id);

	return (
		<div>
			<h2>Soy el componente PRODUCTS</h2>
        
            <Link to="/products/1">Producto 1</Link>
            <Link to="/products/2">Producto 2</Link>
            <Link to="/products/3">Producto 3</Link>
        
			{
                product && 
                <>
                    <p><b>ID: {product.id}</b></p>
			        <p><b>Nombre: {product.name}</b></p>
			        <p><b>Precio: ${product.price}</b></p>
			        <p><b>Descripción: {product.description}</b></p>
                </>
            }{
                !product && <p>No hay productos con ese ID</p>
            }
		</div>
	)
}
export default Products;