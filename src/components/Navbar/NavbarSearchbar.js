import React, {Fragment} from "react";


function NavbarSearchbar(props) {

    return (
        <Fragment>
            <div className='searchbar'>
                <form action='/' method="get">
                    <div className="searchbar-field">
                        <input type="text" placeholder="Search..." name="s"/>
                    </div>
                    <div className="searchbutton" >
                        <button type='submit'> Search</button>
                    </div>
                </form>
            </div>

        </Fragment>
    )
}

export default NavbarSearchbar