This is a starter template for [Learn Next.js](https://nextjs.org/learn).

### 構成

|ディレクトリ|役割|
| ---- | ---- |
|components||
|- atoms|単一のコンポーネントのみ、再利用性が高い。汎用的な機能を有する。状態を持たない。他コンポーネントに依存しない。|
|- molecules|組み合わせて意味のある最小のコンポーネントのみ、ある程度再利用性が高い。汎用的な機能を有する。状態を持たない。他のAtomやMoleculesコンポーネントに依存する。|
|- organisms|サイトとして意味のあるコンポーネントのみ、再現性は低い。状態をもつ。|
|pages|APIなどから実際の値を受け取りtemplatesを生成する|
|- templates|あくまで枠組みのみで実際の値は入らず、値を渡されないと成立しないコンポーネント。ロジックは持たない。|


### 参考

https://blog.logrocket.com/applying-atomic-design-next-js-project/

https://maku.blog/p/4is2ahp/

https://note.com/tabelog_frontend/n/n07b4077f5cf3

https://note.com/tabelog_frontend/n/n4b8bcb44294c