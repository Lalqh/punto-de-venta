import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getCategories } from "../services/CategoryServices";

interface Category {
  id: number;
  name: string;
}

interface AutoCompleteCategoryProps {
  changeCategory: any;
  category: any;
  error: boolean;
}

const AutoCompleteCategory: React.FC<AutoCompleteCategoryProps> = ({
  changeCategory,
  category,
  error,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );

  const [categories, setCategories] = useState([] as Category[]);

  const fetchCategories = async () => {
    const response = await getCategories();
    setCategories(response);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <Autocomplete
      id="category-autocomplete"
      options={categories}
      getOptionLabel={(category) => category.name}
      isOptionEqualToValue={(option, value) => {
        return option.id === value.id;
      }}
      value={category ? category : selectedCategory}
      onChange={(_event, newValue) => {
        setSelectedCategory(newValue);
        changeCategory(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          error={error}
          helperText={error ? "Campo requerido" : ""}
          label="Categorías"
          variant="outlined"
        />
      )}
    />
  );
};

export default AutoCompleteCategory;
