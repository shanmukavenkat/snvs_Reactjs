import './index.css'

const LanguageFiltersData = props =>{
    const { id, language, selectedState,isSelected } = props

    const handleClick = () => {
    selectedState(id)
    }
    const buttonClass = isSelected ? "language-btn " : "language-btn-inactive"

    return(
        <>
        <div className="language-filter-container" key={id}>
            <button type="button" onClick={handleClick} className={buttonClass} >{language}</button>
        </div>
        </>
    )
}


export default LanguageFiltersData;




  