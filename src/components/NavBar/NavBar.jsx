import CartWidget from "../CartWidget/CartWidget";

export default function NavBar(){

    return (

        <nav>
            <ul>
                <li>Home</li>
                <li>Phones</li>
                <li>Laptops</li>
                <li>Tablets</li>
            </ul>
            <CartWidget></CartWidget>
        </nav>
    )
}

