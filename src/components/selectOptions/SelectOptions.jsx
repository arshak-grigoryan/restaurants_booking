import { useDispatch, useSelector } from "react-redux";
import { useFetch, useMount } from "../../hooks";
import { KITCHEN_TYPES_URL } from "../../constants";
import { selectKitchenType } from "../../store/actions";
import { getSelectedKitchenType } from "../../store/selectors";
import "./selectOptions.scss";

const SelectOptions = () => {
  const dispatch = useDispatch();

  const kitchenTypes = useFetch(KITCHEN_TYPES_URL);

  const { selectedKitchenType } = useSelector((state) => ({
    selectKitchenType: getSelectedKitchenType(state),
  }));

  const onSelectChange = (e) => {
    dispatch(selectKitchenType(e.target.value));
  };

  useMount(() => {
    // reset selected option for current page when page visited for first time reloaded
    if (selectedKitchenType && selectedKitchenType !== "all") {
      dispatch(selectKitchenType("all"));
    }
  });

  return (
    <div className="selectOptions">
      <select id="kitchens" onChange={(e) => onSelectChange(e)}>
        <option value="all">All</option>
        {kitchenTypes &&
          kitchenTypes.map((kitchen, i) => {
            return (
              <option value={kitchen.abbr} key={i}>
                {kitchen.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default SelectOptions;
