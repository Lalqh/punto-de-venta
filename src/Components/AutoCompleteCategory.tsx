import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getCategorires } from "../services/CategoryServices";

interface Category {
  id: number;
  name: string;
}

const AutoCompleteCategory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const [categories, setCtegories] = useState([] as Category[]);

  const fetchCategories = async () => {
    const response = await getCategorires();
    setCtegories(response);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Autocomplete
      id="category-autocomplete"
      options={categories}
      getOptionLabel={(category) => category.name}
      value={selectedCategory}
      onChange={(_event, newValue) => {
        setSelectedCategory(newValue);
      }}
      renderInput={(params) => (
        <TextField {...params} label="Categorías" variant="outlined" />
      )}
    />
  );
};

export default AutoCompleteCategory;
