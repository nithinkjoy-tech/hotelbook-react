import React from "react";
import Multiselect from "multiselect-react-dropdown";

function FilterComponent() {
  return (
    <div style={{backgroundColor: "#F8F9FA"}}>
      <Multiselect
        displayValue="key"
        groupBy="cat"
        onRemove={function noRefCheck() {}}
        onSelect={function noRefCheck() {}}
        closeOnSelect={false}
        showArrow={true}
        style={{
            searchBox: {
              width:"83vw",
              margin:"auto",
              border: "2px solid blue",
              "text-align":"center",
              "border-radius": "0px"
            },
            multiselectContainer: {
                width:"83vw",
              margin:"auto",
              }
          }}
        placeholder="Select your filter choice"
        options={[
          {
            cat: "Group 1",
            key: "Option 1",
          },
          {
            cat: "Group 1",
            key: "Option 2",
          },
          {
            cat: "Group 1",
            key: "Option 3",
          },
          {
            cat: "Group 2",
            key: "Option 4",
          },
          {
            cat: "Group 2",
            key: "Option 5",
          },
          {
            cat: "Group 2",
            key: "Option 6",
          },
          {
            cat: "Group 2",
            key: "Option 7",
          },
        ]}
        showCheckbox
      />
    </div>
  );
}

export default FilterComponent;
