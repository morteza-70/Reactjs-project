const Navbar = ({products}) => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand' href="#">
                    Navbar: calculate sum: {calculateSum()}
                </a>
            </div>
        </nav>
    );

    // calculateSum via reduce array
    function calculateSum () {
       const sum =  products.reduce((previousValue, currentValue) =>
            previousValue +
            currentValue.count,
            0
        );
        return sum;
    };

    // calculateSum via foreach
    // function calculateSum () {
    //     let sum = 0;
    //     products.forEach(p => {
    //         sum += p.count;
    //     });
    //     return sum;
    //  };
}

export default Navbar;