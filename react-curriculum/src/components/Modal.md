React で上記のコードを実装するには、まず React アプリケーションを作成し、必要なパッケージをインストールします。CDN の代わりに、`micromodal`パッケージをインストールして使用します。

[Modal.jsの使い方](https://junpei-sugiyama.com/micromodal-js/)

1. React アプリケーションを作成する (すでに作成済みの場合はスキップ):

```
npx create-react-app my-app
cd my-app
```

2. `micromodal`パッケージをインストール:

```
npm install micromodal --save
```

3. `App.js`ファイルを以下のように編集:

```jsx
import React, { useEffect } from 'react';
import MicroModal from 'micromodal';
import './App.css';

function App() {
  useEffect(() => {
    MicroModal.init({
      disableScroll: true,
      awaitOpenAnimation: true,
      awaitCloseAnimation: true
    });
  }, []);

  return (
    <div className="App">
      {/* ここにコンポーネントや要素を追加 */}
      <button data-micromodal-trigger="modal-1" className="modal-open">
        open
      </button>
      {/* ここにモーダル要素を追加 */}
    </div>
  );
}

export default App;
```

4. 必要な CSS ファイルと Tailwind CSS をインポートする:

`index.html`ファイルの`<head>`内に以下のコードを追加:

```html
<link rel="stylesheet" href="src/style.css" />
<link
  href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css"
  rel="stylesheet"
/>
```

これで、React アプリケーションで MicroModal を使用できるようになります。`App.js`ファイルでコンポーネントや要素を追加し、モーダル要素を作成できます。
