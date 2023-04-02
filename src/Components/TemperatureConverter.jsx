
import { useState } from "react";

function TemperatureConverter() {

  const [search, setSearch] = useState("");
    const [conversionResult, setConversionResult] = useState(null);

  const handleConversionSubmit = (event) => {
    event.preventDefault();
    const conversionValue = event.target.convert.value;
    const isToCelsius = event.target.conversionType.value === "toCelsius";
    const result = isToCelsius
      ? ((conversionValue - 32) * 5) / 9
      : conversionValue * (9 / 5) + 32;
    setConversionResult({ value: result.toFixed(2), isToCelsius });
    setSearch("");
  };

  return (
    <section className="left-container">
      <h2>Convert Temperature</h2>
      <form id="conversionForm" onSubmit={handleConversionSubmit}>
        <label>
          <input type="radio" name="conversionType" value="toCelsius" />
          Fahrenheit to Celsius
        </label>
        <label>
          <input type="radio" name="conversionType" value="toFahrenheit" />
          Celsius to Fahrenheit
          <br></br><br></br>
        </label>
        <input type="number" name="convert" style={{ fontSize: "25px" }} value={search} onChange={(event) => setSearch(event.target.value)} />
        <button type="submit" style={{ fontSize: "25px" }}>Convert</button>
      </form>
      {conversionResult && (
        <div className="convResults">
          <p>
            {conversionResult.isToCelsius
              ? `${conversionResult.value}°C`
              : `${conversionResult.value}°F`}
          </p>
          <button style={{ fontSize: "25px" }} onClick={() => setConversionResult(null)}>
            Clear Conversion
          </button>
        </div>
      )}
    </section>
  );
}

export default TemperatureConverter;
