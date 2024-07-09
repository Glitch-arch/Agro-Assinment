import React from "react";

const CheckBox = ({ data, checkBoxHandler, name }) => {
  const displayData = () => {
    let processedData = data;

    if (data.includes(" - ")) {
      processedData = data
        .split(" - ")
        .map((part) => {
          const currencySymbolMatch = part.match(/^[^\d-]+/);
          const currencySymbol = currencySymbolMatch
            ? currencySymbolMatch[0]
            : "";
          const numericPartMatch = part.match(/-?\d+(\.\d+)?/);
          if (!numericPartMatch) return part;

          const number = Math.floor(parseFloat(numericPartMatch[0]));
          return `${currencySymbol}${number}`;
        })
        .join(" - ");
    }

    return processedData;
  };

  return (
    <div className="w-60">
      <label className="flex gap-2">
        <input
          type="checkbox"
          value={data}
          onChange={checkBoxHandler}
          name={name}
        />
        {displayData()}
      </label>
    </div>
  );
};

export default CheckBox;
