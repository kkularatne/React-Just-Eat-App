import { render, screen } from "@testing-library/react";
import MealItem from "./MealItem";

describe("Meal Item compenent", () => {
  test("renders a name", () => {
    render(
      <MealItem
        key="key1"
        id="id1"
        name="Meal Name"
        description="Meal description"
        price="39.99"
      />
    );
    expect(screen.getByText("Meal Name")).toBeInTheDocument();
  });
  test("renders a description", () => {
    render(
      <MealItem
        key="key1"
        id="id1"
        name="Meal Name"
        description="Meal description"
        price="39.99"
      />
    );
    expect(screen.getByText("Meal description")).toBeInTheDocument();
  });
  test("renders a price", () => {
    render(
      <MealItem
        key="key1"
        id="id1"
        name="Meal Name"
        description="Meal description"
        price="39.99"
      />
    );
    expect(screen.getByText("£39.99")).toBeInTheDocument();
  });
});
