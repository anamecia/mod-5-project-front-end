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
        if(this.state.searchTerm)
            return this.state.medicines.filter(medicine =>
                    medicine.brand_name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) 
                    || medicine.drug_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) 
        return []

    }

    componentDidMount = () => {
        API.getMedicines().then((data) => this.setState({medicines:data }))
    }

    render(){
        const searchedMedicines = this.searchMedicinesByBrandOrDrugName()
        return(
            <div id='search-form-container'>
                <input id='search-form'onChange={this.handleChange} type='text'/>
                <div id='search-results'>
                {searchedMedicines.map(medicine => <SearchResults medicine={medicine} key={medicine.id}/>)}
                </div>
            </div>
        )
    }
}

export default SearchForm