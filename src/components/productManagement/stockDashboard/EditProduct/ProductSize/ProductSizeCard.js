const ProductSizeCard = (props) => {



    return (
        <div className='product-size-card'>
            <form>
                <div className='product-size-header'>
                    <div className='product-size-field'>
                        <label>Taille:</label>
                        <input
                            defaultValue={props.sizeName}

                        />
                    </div>
                </div>
                <div className='product-size-body'>
                    <div className='product-size-field'>
                        <label>Largeur:</label>
                        <input
                            defaultValue={props.Largeur  + ' cm'}
                        />
                    </div>
                    <div className='product-size-field'>
                        <label>Longueur:</label>
                        <input
                            defaultValue={props.longueur + ' cm'}
                        />
                    </div>
                    <div className='actions'>
                        <div className='product-size-field'>
                            <label>visible: </label>
                            <input type='checkbox'/>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    )
}

export default ProductSizeCard;