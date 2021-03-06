import React, { Component } from 'react'
import API from '../API'
import SearchResults from './SearchResults'

class SearchForm extends Component{
    state = {
        searchTerm: '',
        medicines: []
    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    searchMedicinesByBrandOrDrugName = () => {
        if(this.state.searchTerm){
            const filteredMedicinesBySearchTerm = () => this.state.medicines.filter(medicine =>
                medicine.brand_name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) 
                // || medicine.drug_name.map(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
                )  
            const filteredUserDrugs= () => this.props.userDrugs.map(drug => `${drug.medicine.brand_name} ${drug.medicine.dosage}`)
           
            return filteredMedicinesBySearchTerm().filter( medicine => !filteredUserDrugs().includes(`${medicine.brand_name} ${medicine.dosage}`))
        }

        return []
    }

    componentDidMount = () => {
        API.getMedicines().then((data) => this.setState({medicines:data }))
    }

    render(){
        const { user, medicineType,addNewMedicineToUserDrugs, closeSearchForm} = this.props
        const searchedMedicines = this.searchMedicinesByBrandOrDrugName()
        return(
            <div id='search-form-container'>
                <input id='search-form' autoFocus="autofocus" onChange={this.handleChange} value={this.state.searchTerm} type='text' placeholder='Search by brand name'/>
                <div id='search-results'>
                {searchedMedicines.map(medicine => <SearchResults 
                    user={user}
                    medicine={medicine} 
                    key={medicine.id} 
                    medicineType={medicineType} 
                    addNewMedicineToUserDrugs={addNewMedicineToUserDrugs}
                    closeSearchForm={closeSearchForm}/>)}
                </div>
            </div>
        )
    }
}

export default SearchForm