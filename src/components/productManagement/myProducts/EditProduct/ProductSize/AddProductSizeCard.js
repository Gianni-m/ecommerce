const AddProductSizeCard = (props) => {

    return (
        <div className='product-size-card add-card'>
            <div onClick={() => props.addProductSize()}>
                <span>+</span>
            </div>

        </div>
    )
}

export default AddProductSizeCard;