import '../styles/cart.css'


function Cart() {
    const monsteraPrice = 8
    const lierrePrice = 10
    const bouquetFleursPrice = 15
    
    return (<div className='lmj-cart'>
                <h2>Panier</h2>
                <ul>
                    <li>Monstera : { monsteraPrice }€</li>
                    <li>Lierre : { lierrePrice }€</li>
                    <li>Fleurs : { bouquetFleursPrice }€</li>
                </ul>
                Total : {monsteraPrice + lierrePrice + bouquetFleursPrice }€
                </div>)
}

export default Cart