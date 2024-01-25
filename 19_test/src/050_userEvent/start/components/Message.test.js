import { render, screen } from "@testing-library/react";
import Message from "./Message";
import userEvent from "@testing-library/user-event";

describe("Messageコンポーネントの動作確認", () => {
  describe("初期表示の正常性確認", () => {
    test("入力された文字が画面上に存在", () => {
      render(<Message />);
      const h2El = screen.getByRole("heading", { name: "入力された文字:" });
      expect(h2El).toBeInTheDocument();
    });
  });
});
test("ダミーテスト:削除して記載してください。", () => {});
