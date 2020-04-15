// expressモジュールを読み込む
const express = require('express')

// expressアプリを生成する
const app = express()

// ルート（http://localhost:3000）にアクセスしてきたときに「Hello」を返す
app.get('/', (req, res) => {
  res.send('Hello')
})

// （http://localhost:3000/json） jsonを返したい時は、オブジェクト型を send に渡せばOK
app.get('/json', (req, res) => {
  const response = {
    hello: 'World',
  }
  res.send(response)
})

// （http://localhost:3000/double?num=1） queryパラメータを取得する時は、req.query.**** で取得
app.get('/double', (req, res) => {
  const double = Number(req.query.num) * 2
  const response = {
    double: double,
  }
  res.send(response)
})

// （http://localhost:3000/triple?num=1） POST の APIを作る時は app.post にする
app.post('/triple', (req, res) => {
  const triple = Number(req.query.num) * 3
  const response = {
    triple: triple,
  }
  res.send(response)
})

// サーバを起動する（ポート3000を指定）
app.listen(3000, () => {
  console.log('Listening on port 3000')
})
