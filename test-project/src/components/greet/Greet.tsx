import React from "react";

const Greet = () => {
  return (
    // Helloという文字列が含まれているか？
    <div>Hello</div>
    // Stmts
    // Branch
    // Funcs
    // Lines
    // Uncovered Line

    /**
     * カバレッジレポートの各項目について説明します。

1. **Stmts（Statements, 文）**:
   - プログラム内のすべてのステートメント（文）のうち、テストが実行されたステートメントの割合を示します。たとえば、関数呼び出しや変数の代入などが含まれます。

2. **Branch（分岐）**:
   - 条件分岐（if文、三項演算子、switch文など）のうち、テストが実行された分岐の割合を示します。各分岐の真と偽のパスをカバーすることが求められます。

3. **Funcs（Functions, 関数）**:
   - プログラム内のすべての関数のうち、テストが実行された関数の割合を示します。関数が呼び出されたかどうかをチェックします。

4. **Lines（行）**:
   - プログラム内のすべての行のうち、テストが実行された行の割合を示します。具体的には、実行可能なコード行が対象です。

これらの指標は、コードがどれだけテストされているかを評価するためのもので、コードの品質やテストのカバレッジを確認するために使用されます。

具体的なレポート結果の解釈は以下の通りです：

- **All files（全ファイル）**:
  - **25% Statements**：全ステートメントのうち25%がテストでカバーされている。
  - **0% Branch**：分岐のカバレッジが0%、つまり条件分岐がテストされていない。
  - **40% Functions**：関数の40%がテストでカバーされている。
  - **25% Lines**：全行の25%がテストでカバーされている。

- **src/App.tsx**:
  - **0% Statements**：このファイルの全ステートメントがテストされていない。
  - **100% Branch**：このファイルには分岐が1つあり、それが100%カバーされている。（ただし、全体のカバレッジが0%なので、他の要素が欠けている可能性があります）
  - **0% Functions**：このファイルの関数はテストされていない。
  - **0% Lines**：このファイルの行はテストされていない。
  - **Uncovered Line #s（カバーされていない行番号）**：行番号6がテストでカバーされていない。

他のファイルについても同様に解釈できます。

何か他に質問があれば教えてください。
     */
  );
};

export default Greet;
