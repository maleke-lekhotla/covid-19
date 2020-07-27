import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";

const CountryPicker = ({handleCountryChange}) => {
  const [coutries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };
		fetchAPI();
  },[setCountries]);
	// console.log(coutries)

	return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
				{coutries.map((country, i) => (<option key = {i} value={country}>{country}</option>))}
      </NativeSelect>
    </FormControl>
  )
};

export default CountryPicker;
