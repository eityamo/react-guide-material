import { render, screen } from "@testing-library/react";
import GetUserData from "./GetUserData";
import { ENDPOINT_URL } from "../Example";

describe("GetUserDataコンポーネントの動作確認", () => {
  test("外部データ取得中", () => {
    render(<GetUserData url={ENDPOINT_URL} />);
    const H1El = screen.getByRole("heading", { name: "通信中です！" });
    expect(H1El).toBeInTheDocument();
  });
});
