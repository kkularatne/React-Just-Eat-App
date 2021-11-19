const { default: AvailableMeals } = require("./AvailableMeals");
const { default: MealsSummary } = require("./MealsSummary");

const Meals = (props) => {
  return (
    <>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </>
  );
};
export default Meals;
