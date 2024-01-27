import { render, screen } from "@testing-library/react";
import GetUserData from "./GetUserData";
import { ENDPOINT_URL } from "../Example";

describe("GetUserDataコンポーネントの動作確認", () => {
  test("外部データ取得中", () => {
    render(<GetUserData url={ENDPOINT_URL} />);
    const H1El = screen.getByRole("heading", { name: "通信中です！" });
    expect(H1El).toBeInTheDocument();
  });

  test("外部データ取得後", async () => {
    render(<GetUserData url={ENDPOINT_URL} />);
    const H2El = await screen.findByRole("heading", { name: "プロフィール" });
    expect(H2El).toBeInTheDocument();

    const itemEls = await screen.findAllByRole("listitem");
    expect(itemEls[0].textContent).toBe("ID: 1");
    expect(itemEls[1].textContent).toBe("Name: CodeMafia");
  });
});
