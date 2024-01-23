import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("h1が存在するかどうか", () => {
  const { debug, container } = render(<Greet />);
  // const h1E1 = screen.getByText("こんにちは");
  // expect(h1E1).toBeInTheDocument();

  // const radioE1 = screen.getByRole('radio');
  // screen.debug(radioE1);
  // expect(radioE1).toBeInTheDocument();

  // const imgE1 = screen.getByRole('img');
  // screen.debug(imgE1);
  // expect(imgE1).toBeInTheDocument();

  // const imgE1 = screen.getAllByAltText('React Logo');
  // debug(imgE1);

  // const headingE1 = screen.getByRole("heading", { name: 'こんにちは' });
  // debug(container);
  const h2E1 = container.querySelector('h2');
  debug(h2E1);
});
