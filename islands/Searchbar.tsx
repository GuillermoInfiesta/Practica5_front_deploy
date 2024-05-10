import { FunctionComponent } from "preact";
import { Filters } from "../Types.ts";
import { brand, color, f_120, f_35, iso, name } from "../Signals.ts";

export const Searchbar: FunctionComponent<{ filters: Filters }> = (props) => {
  //console.log(props);
  return (
    <div class="search-bar">
      <div class="search-box">
        <label>Brand</label>
        <select
          value={"any"}
          onInput={(e) => {
            brand.value = e.currentTarget.value;
          }}
        >
          {props.filters.brands.map((br) => <option>{br}</option>)}
        </select>
      </div>
      <div class="search-box">
        <label>ISO</label>
        <select
          value={"any"}
          onInput={(e) => {
            iso.value = e.currentTarget.value;
          }}
        >
          {props.filters.ISO.map((iso) => <option>{iso}</option>)}
        </select>
      </div>
      <div class="search-box check-box">
        <label>Format</label>
        <div>
          <span>35mm</span>
          <input
            type="checkbox"
            onChange={(e) => {
              f_35.value = e.currentTarget.checked;
            }}
          />
          <span>120mm</span>
          <input
            type="checkbox"
            onChange={(e) => {
              f_120.value = e.currentTarget.checked;
            }}
          />
        </div>
      </div>
      <div class="search-box">
        <label>Color</label>
        <select
          value={"any"}
          onInput={(e) => {
            color.value = e.currentTarget.value;
          }}
        >
          <option value="true">On color</option>
          <option value="false">Black and white</option>
          <option value="any">any</option>
        </select>
      </div>
      <div class="search-box">
        <label>Name</label>
        <input
          onInput={(e) => {
            name.value = e.currentTarget.value;
          }}
        >
        </input>
      </div>
    </div>
  );
};
