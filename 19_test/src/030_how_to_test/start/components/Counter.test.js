import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

/* POINT テストコードを書く際の注意点
Arrage:(テストデータ、条件、環境の設定).
Act:(ロジックの実行、関数の実行).
Assertion:(実行結果と期待する結果の比較).
*/
test("カウントアップボタンで「現在のカウント」が+1されるかどうか", () => {
  // Arrange
  render(<Counter originCOunt={0} />);

  // 更新前
  const spanElBeforeUpdate = screen.getByText('現在のカウント:');
  expect(spanElBeforeUpdate).toBeInTheDocument();

  // Act
  const btn = screen.getByRole('button', { name: 'カウントアップ'});
  fireEvent.click(btn);

  // Assertion
  const spanEl = screen.getByText('現在のカウント:NaN');
  expect(spanEl).toBeInTheDocument();
});
