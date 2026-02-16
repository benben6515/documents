# cURL 使用指南

使用 curl 進行 API 測試的完整指南，採用類似 Postman 的工作流程。

---

## 目錄

- [快速開始](#快速開始)
  - [基本語法](#基本語法)
  - [你的第一個請求](#你的第一個請求)
- [HTTP 方法](#http-方法)
  - [GET - 獲取資料](#get---獲取資料)
  - [POST - 建立資料](#post---建立資料)
  - [PUT - 更新資料](#put---更新資料)
  - [PATCH - 部分更新](#patch---部分更新)
  - [DELETE - 刪除資料](#delete---刪除資料)
- [標頭與認證](#標頭與認證)
  - [自訂標頭](#自訂標頭)
  - [基本認證](#基本認證)
  - [Bearer Token 認證](#bearer-token-認證)
  - [API Key 認證](#api-key-認證)
- [請求主體](#請求主體)
  - [JSON 資料載荷](#json-資料載荷)
  - [表單資料](#表單資料)
  - [檔案上傳](#檔案上傳)
- [進階功能](#進階功能)
  - [詳細除錯 (-v)](#詳細除錯--v)
  - [儲存回應 (-o)](#儲存回應--o)
  - [跟隨重新導向 (-L)](#跟隨重新導向--l)
  - [處理 Cookies (-c, -b)](#處理-cookies--c--b)
  - [逾時與重試](#逾時與重試)
  - [SSL/TLS 選項](#ssltls-選項)
- [Postman ↔️ cURL 對應](#postman--curl-對應)
- [實際範例](#實際範例)
  - [REST API 測試工作流程](#rest-api-測試工作流程)
  - [檔案上傳工作流程](#檔案上傳工作流程)
  - [OAuth2 流程](#oauth2-流程)
  - [Webhook 測試](#webhook-測試)
  - [API 除錯](#api-除錯)
- [最佳實踐](#最佳實踐)
  - [指令組織](#指令組織)
  - [腳本撰寫技巧](#腳本撰寫技巧)
  - [錯誤處理](#錯誤處理)
  - [效能技巧](#效能技巧)
- [快速參考](#快速參考)

---

## 快速開始

### 基本語法

```bash
curl [選項] [URL]
```

**關鍵組成部分：**
- `options`：修改行為的標誌（標頭、方法、資料等）
- `URL`：你目標的端點

**最常用的標誌：**
```bash
-X <方法>    # HTTP 方法（GET、POST 等）
-H <標頭>    # 新增標頭
-d <資料>      # 請求主體資料
-o <檔案>      # 將回應儲存到檔案
-v             # 用於除錯的詳細輸出
```

### 你的第一個請求

**簡單的 GET 請求（就像在 Postman 點擊「Send」）：**

```bash
curl https://jsonplaceholder.typicode.com/posts/1
```

**回應：**
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

**使用詳細輸出（等同於 Postman Console）：**

```bash
curl -v https://jsonplaceholder.typicode.com/posts/1
```

---

## HTTP 方法

### GET - 獲取資料

**基本 GET 請求：**

```bash
curl -X GET https://jsonplaceholder.typicode.com/posts
```

**帶有查詢參數的 GET：**

```bash
curl -X GET "https://jsonplaceholder.typicode.com/posts?userId=1&_limit=5"
```

**帶有自訂標頭的 GET：**

```bash
curl -X GET \
  -H "Accept: application/json" \
  -H "User-Agent: MyClient/1.0" \
  https://jsonplaceholder.typicode.com/posts
```

---

### POST - 建立資料

**帶有 JSON 主體的 POST：**

```bash
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "foo",
    "body": "bar",
    "userId": 1
  }'
```

**回應：**
```json
{
  "title": "foo",
  "body": "bar",
  "userId": 1,
  "id": 101
}
```

**從檔案 POST：**

```bash
# 建立 data.json
echo '{"title": "foo", "body": "bar", "userId": 1}' > data.json

# 使用 @ 從檔案讀取
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d @data.json
```

**帶有表單資料的 POST：**

```bash
curl -X POST https://httpbin.org/post \
  -d "username=john" \
  -d "password=secret"
```

---

### PUT - 更新資料

**PUT 請求（取代整個資源）：**

```bash
curl -X PUT https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "id": 1,
    "title": "updated title",
    "body": "updated body",
    "userId": 1
  }'
```

---

### PATCH - 部分更新

**PATCH 請求（僅更新指定的欄位）：**

```bash
curl -X PATCH https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "patched title"
  }'
```

---

### DELETE - 刪除資料

**DELETE 請求：**

```bash
curl -X DELETE https://jsonplaceholder.typicode.com/posts/1
```

**回應：**
```json
{}
```

---

## 標頭與認證

### 自訂標頭

**單一標頭：**

```bash
curl -X GET \
  -H "Accept: application/json" \
  https://jsonplaceholder.typicode.com/posts
```

**多個標頭：**

```bash
curl -X GET \
  -H "Accept: application/json" \
  -H "Authorization: Bearer token123" \
  -H "User-Agent: MyApp/1.0" \
  https://api.example.com/data
```

**從檔案讀取標頭：**

```bash
# 建立 headers.txt
cat << EOF > headers.txt
Accept: application/json
Authorization: Bearer token123
User-Agent: MyApp/1.0
EOF

curl -X GET -H @headers.txt https://api.example.com/data
```

---

### 基本認證

**基本認證（username:password）：**

```bash
curl -u username:password https://httpbin.org/basic-auth/user/pass
```

**互動式（提示輸入密碼）：**

```bash
curl -u username https://api.example.com/secure
```

---

### Bearer Token 認證

**Authorization 標頭中的 Bearer Token：**

```bash
curl -X GET \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" \
  https://api.example.com/protected
```

**OAuth2 Access Token 範例：**

```bash
# 從 OAuth2 端點獲取 token
TOKEN=$(curl -X POST https://oauth.example.com/token \
  -d "grant_type=client_credentials" \
  -d "client_id=your_client_id" \
  -d "client_secret=your_client_secret" \
  | jq -r '.access_token')

# 在請求中使用 token
curl -X GET \
  -H "Authorization: Bearer $TOKEN" \
  https://api.example.com/protected
```

---

### API Key 認證

**標頭中的 API Key：**

```bash
curl -X GET \
  -H "X-API-Key: your_api_key_here" \
  https://api.example.com/data
```

**作為查詢參數的 API Key：**

```bash
curl -X GET "https://api.example.com/data?api_key=your_api_key_here"
```

---

## 請求主體

### JSON 資料載荷

**內聯 JSON：**

```bash
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Post",
    "body": "This is content",
    "userId": 1
  }'
```

**指令中的格式化 JSON：**

```bash
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Post",
    "body": "This is content",
    "userId": 1
  }'
```

**從檔案讀取 JSON：**

```bash
# 建立 payload.json
cat << EOF > payload.json
{
  "title": "My Post",
  "body": "This is content",
  "userId": 1
}
EOF

curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d @payload.json
```

---

### 表單資料

**URL 編碼的表單資料：**

```bash
curl -X POST https://httpbin.org/post \
  -d "username=john" \
  -d "password=secret" \
  -d "remember_me=1"
```

**帶有多個值的表單資料：**

```bash
curl -X POST https://httpbin.org/post \
  -d "tags=javascript" \
  -d "tags=python" \
  -d "tags=react"
```

**帶有特殊字元的 URL 編碼：**

```bash
curl -X POST https://httpbin.org/post \
  --data-urlencode "name=John Doe" \
  --data-urlencode "email=john@example.com"
```

---

### 檔案上傳

**單一檔案上傳（multipart/form-data）：**

```bash
curl -X POST https://httpbin.org/post \
  -F "file=@/path/to/file.jpg" \
  -F "description=My upload"
```

**多個檔案：**

```bash
curl -X POST https://httpbin.org/post \
  -F "files=@/path/to/file1.jpg" \
  -F "files=@/path/to/file2.jpg" \
  -F "description=Multiple files"
```

**帶有元資料的檔案上傳：**

```bash
curl -X POST https://httpbin.org/post \
  -F "upload=@document.pdf;type=application/pdf" \
  -F "title=Important Document" \
  -F "author=John Doe"
```

**二進位檔案上傳：**

```bash
curl -X POST https://api.example.com/upload \
  -H "Content-Type: application/octet-stream" \
  --data-binary @/path/to/binaryfile.bin
```

---

## 進階功能

### 詳細除錯 (-v)

**查看完整的請求/回應細節：**

```bash
curl -v https://jsonplaceholder.typicode.com/posts/1
```

**輸出包括：**
- 請求標頭
- 回應標頭
- 連線細節
- SSL 憑證資訊

**僅顯示回應標頭：**

```bash
curl -I https://jsonplaceholder.typicode.com/posts/1
```

**顯示請求標頭：**

```bash
curl -v --trace-ascii /dev/stderr https://example.com 2>&1 | grep "^<"
```

---

### 儲存回應 (-o)

**將回應儲存到檔案：**

```bash
curl -o response.json https://jsonplaceholder.typicode.com/posts
```

**使用自訂檔名儲存（使用變數）：**

```bash
curl -o "response_$(date +%Y%m%d_%H%M%S).json" \
  https://jsonplaceholder.typicode.com/posts
```

**儲存到檔案但顯示進度：**

```bash
curl -o output.json https://example.com/large-file.zip
```

**下載並顯示進度列：**

```bash
curl -# -o file.zip https://example.com/large-file.zip
```

**恢復中斷的下載：**

```bash
curl -C - -o file.zip https://example.com/large-file.zip
```

---

### 跟隨重新導向 (-L)

**跟隨 HTTP 重新導向：**

```bash
curl -L https://bit.ly/example
```

**最大重新導向次數：**

```bash
curl -L --max-redirs 5 https://example.com
```

**顯示重新導向鏈：**

```bash
curl -vL https://example.com
```

---

### 處理 Cookies (-c, -b)

**將 Cookies 儲存到檔案：**

```bash
curl -c cookies.txt https://httpbin.org/cookies/set/name/value
```

**從檔案發送 Cookies：**

```bash
curl -b cookies.txt https://httpbin.org/cookies
```

**設定單一 Cookie：**

```bash
curl -b "name=value" https://httpbin.org/cookies
```

**多個 Cookies：**

```bash
curl -b "name1=value1; name2=value2" https://httpbin.org/cookies
```

**發送並儲存 Cookies：**

```bash
curl -b cookies.txt -c cookies.txt https://api.example.com/session
```

---

### 逾時與重試

**連線逾時：**

```bash
curl --connect-timeout 10 https://api.example.com/data
```

**整個請求的最大時間：**

```bash
curl --max-time 30 https://api.example.com/data
```

**重試失敗的請求：**

```bash
curl --retry 3 --retry-delay 2 https://api.example.com/data
```

**僅在特定錯誤時重試：**

```bash
curl --retry 3 --retry-all-errors https://api.example.com/data
```

---

### SSL/TLS 選項

**跳過 SSL 驗證（不建議用於生產環境）：**

```bash
curl -k https://self-signed-cert.example.com
```

**使用自訂 CA 憑證：**

```bash
curl --cacert /path/to/ca.pem https://api.example.com
```

**使用用戶端憑證：**

```bash
curl --cert /path/to/client.pem \
  --key /path/to/client.key \
  https://api.example.com
```

**檢查 SSL 憑證細節：**

```bash
curl -vI https://example.com 2>&1 | grep -E "(SSL|TLS|Certificate)"
```

---

## Postman ↔️ cURL 對應

| Postman UI 元素 | cURL 等效指令 | 範例 |
|-------------------|----------------|---------|
| **方法選擇器** | `-X <方法>` | `-X POST` |
| **請求 URL** | `URL` | `https://api.example.com/data` |
| **Params 分頁** | `URL 查詢字串` | `?id=1&name=test` |
| **Headers 分頁** | `-H "Key: Value"` | `-H "Content-Type: application/json"` |
| **Authorization 分頁** | 各種方式 | `-u user:pass` 或 `-H "Authorization: Bearer token"` |
| **Body 分頁 > raw > JSON** | `-d '{...}' -H "Content-Type: application/json"` | 參見上面的 JSON 範例 |
| **Body 分頁 > x-www-form-urlencoded** | `-d "key=value"` | `-d "name=John&age=30"` |
| **Body 分頁 > form-data** | `-F "key=value"` 或 `-F "file=@path"` | `-F "file=@doc.pdf"` |
| **Tests 分頁** | Shell 腳本/管道到工具 | `curl ... | jq` |
| **Pre-request Script** | Shell 指令 | `TOKEN=$(curl ...)` |

### 將 Postman 轉換為 cURL

**Postman 請求：**
- 方法：POST
- URL：https://api.example.com/users
- 標頭：Content-Type: application/json, Authorization: Bearer token123
- 主體 (JSON)：`{"name": "John", "email": "john@example.com"}`

**等效的 cURL：**

```bash
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer token123" \
  -d '{
    "name": "John",
    "email": "john@example.com"
  }'
```

---

## 實際範例

### REST API 測試工作流程

**完整的 CRUD 操作：**

```bash
# 1. GET 所有資源
echo "=== GET All ==="
curl -s https://jsonplaceholder.typicode.com/posts | jq '.[:3]'

# 2. GET 單一資源
echo -e "\n=== GET Single ==="
curl -s https://jsonplaceholder.typicode.com/posts/1 | jq '.'

# 3. POST 建立資源
echo -e "\n=== POST Create ==="
curl -s -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "Test Post", "body": "Test body", "userId": 1}' \
  | jq '.'

# 4. PUT 更新資源
echo -e "\n=== PUT Update ==="
curl -s -X PUT https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"id": 1, "title": "Updated Title", "body": "Updated body", "userId": 1}' \
  | jq '.'

# 5. DELETE 刪除資源
echo -e "\n=== DELETE ==="
curl -s -X DELETE https://jsonplaceholder.typicode.com/posts/1 | jq '.'
```

---

### 檔案上傳工作流程

**多步驟上傳流程：**

```bash
# 1. 準備檔案
echo "Sample content" > upload.txt

# 2. 上傳檔案
echo "=== Uploading File ==="
curl -X POST https://httpbin.org/post \
  -F "file=@upload.txt" \
  -F "metadata={\"description\":\"Test upload\"}" \
  | jq '.files, .form'

# 3. 驗證上傳
echo -e "\n=== Verify Upload ==="
curl -s https://httpbin.org/post \
  | jq '.files.file'
```

---

### OAuth2 流程

**Client Credentials 流程：**

```bash
#!/bin/bash

# 獲取 access token
echo "=== Getting Access Token ==="
RESPONSE=$(curl -s -X POST https://httpbin.org/post \
  -d "grant_type=client_credentials" \
  -d "client_id=your_client_id" \
  -d "client_secret=your_client_secret")

TOKEN=$(echo $RESPONSE | jq -r '.access_token // .form.client_id')

# 使用 token
echo -e "\n=== Using Token ==="
curl -s -X GET https://httpbin.org/headers \
  -H "Authorization: Bearer $TOKEN" \
  | jq '.headers'
```

---

### Webhook 測試

**測試 Webhook 端點：**

```bash
# 使用重試邏輯測試 webhook
for i in {1..3}; do
  echo "Attempt $i: Sending webhook..."
  RESPONSE=$(curl -s -w "\n%{http_code}" \
    -X POST https://webhook.site/your-unique-id \
    -H "Content-Type: application/json" \
    -d '{"event": "user.created", "data": {"user_id": 123}}')

  HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
  BODY=$(echo "$RESPONSE" | sed '$d')

  echo "HTTP Code: $HTTP_CODE"
  echo "Response: $BODY"

  if [ "$HTTP_CODE" -eq 200 ]; then
    echo "Webhook delivered successfully!"
    break
  else
    echo "Retrying in 2 seconds..."
    sleep 2
  fi
done
```

---

### API 除錯

**除錯認證問題：**

```bash
# 1. 測試不帶認證（應該失敗）
echo "=== Without Auth ==="
curl -v https://httpbin.org/basic-auth/user/pass 2>&1 | grep -E "(HTTP|401)"

# 2. 測試錯誤的憑證
echo -e "\n=== Wrong Credentials ==="
curl -v -u user:wrong https://httpbin.org/basic-auth/user/pass 2>&1 | grep -E "(HTTP|401)"

# 3. 測試正確的憑證
echo -e "\n=== Correct Credentials ==="
curl -v -u user:pass https://httpbin.org/basic-auth/user/pass 2>&1 | grep -E "(HTTP|200)"
```

**除錯標頭：**

```bash
echo "=== Testing Custom Headers ==="
curl -v https://httpbin.org/headers \
  -H "X-Custom-Header: test-value" \
  -H "Authorization: Bearer test-token" \
  2>&1 | grep -A 20 ">"
```

---

## 最佳實踐

### 指令組織

**使用反斜線的多行指令：**

```bash
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com"
  }'
```

**使用 Shell 變數儲存可重用的值：**

```bash
API_URL="https://api.example.com"
TOKEN="your_token_here"

curl -X GET "$API_URL/users" \
  -H "Authorization: Bearer $TOKEN"
```

---

### 腳本撰寫技巧

**將設定儲存在變數中：**

```bash
#!/bin/bash

API_BASE="https://api.example.com"
TOKEN="your_token_here"
OUTPUT_DIR="./api_responses"

# 建立輸出目錄
mkdir -p "$OUTPUT_DIR"

# 獲取使用者並儲存
curl -s "$API_BASE/users" \
  -H "Authorization: Bearer $TOKEN" \
  -o "$OUTPUT_DIR/users.json"

# 獲取單一使用者
curl -s "$API_BASE/users/1" \
  -H "Authorization: Bearer $TOKEN" \
  -o "$OUTPUT_DIR/user_1.json"
```

**使用 jq 處理 JSON：**

```bash
# 提取特定欄位
curl -s https://jsonplaceholder.typicode.com/posts/1 \
  | jq '{id, title, userId}'

# 過濾陣列
curl -s https://jsonplaceholder.typicode.com/posts \
  | jq '[.[] | select(.userId == 1)]'
```

---

### 錯誤處理

**檢查 HTTP 狀態碼：**

```bash
RESPONSE=$(curl -s -w "\n%{http_code}" https://api.example.com/data)
HTTP_CODE=$(echo "$RESPONSE" | tail -n1)
BODY=$(echo "$RESPONSE" | sed '$d')

if [ "$HTTP_CODE" -eq 200 ]; then
  echo "Success: $BODY"
else
  echo "Error: HTTP $HTTP_CODE"
  echo "Response: $BODY"
fi
```

**錯誤時退出：**

```bash
curl -f https://api.example.com/data || {
  echo "Request failed!"
  exit 1
}
```

---

### 效能技巧

**使用壓縮：**

```bash
curl --compressed https://api.example.com/large-data
```

**平行請求（使用 xargs）：**

```bash
echo "https://api.example.com/users/1" \
  "https://api.example.com/users/2" \
  "https://api.example.com/users/3" \
  | xargs -P 3 -I {} curl -s {}
```

**快取結果：**

```bash
CACHE_FILE="cache.json"

if [ -f "$CACHE_FILE" ] && [ $(find "$CACHE_FILE" -mmin -5 | wc -l) -gt 0 ]; then
  echo "Using cached data..."
  cat "$CACHE_FILE"
else
  echo "Fetching fresh data..."
  curl -s https://api.example.com/data -o "$CACHE_FILE"
  cat "$CACHE_FILE"
fi
```

---

## 快速參考

### 重要 cURL 標誌

| 標誌 | 說明 | 範例 |
|------|-------------|---------|
| `-X` | HTTP 方法 | `-X POST` |
| `-H` | 新增標頭 | `-H "Content-Type: application/json"` |
| `-d` | 請求主體 | `-d '{"key": "value"}'` |
| `-u` | 使用者認證 | `-u user:pass` |
| `-v` | 詳細模式 | `-v` |
| `-o` | 輸出到檔案 | `-o response.json` |
| `-O` | 使用遠端檔名儲存 | `-O` |
| `-L` | 跟隨重新導向 | `-L` |
| `-k` | 跳過 SSL 驗證 | `-k` |
| `-I` | 僅標頭 | `-I` |
| `-s` | 靜默模式 | `-s` |
| `--compressed` | 使用壓縮 | `--compressed` |
| `-f` | HTTP 錯誤時失敗 | `-f` |
| `--connect-timeout` | 連線逾時 | `--connect-timeout 10` |
| `--max-time` | 最大時間 | `--max-time 30` |
| `-c` | 儲存 Cookies | `-c cookies.txt` |
| `-b` | 發送 Cookies | `-b cookies.txt` |
| `-F` | Multipart 表單 | `-F "file=@path"` |
| `--data-urlencode` | URL 編碼資料 | `--data-urlencode "name=John Doe"` |
| `-#` | 進度列 | `-# -o file.zip` |
| `-C -` | 恢復下載 | `-C - -o file.zip` |

### 常見模式

**帶有認證的 GET：**
```bash
curl -H "Authorization: Bearer $TOKEN" https://api.example.com/data
```

**POST JSON：**
```bash
curl -X POST -H "Content-Type: application/json" -d '{"key": "value"}' https://api.example.com/data
```

**上傳檔案：**
```bash
curl -F "file=@path/to/file" https://api.example.com/upload
```

**除錯請求：**
```bash
curl -v https://api.example.com/data
```

**儲存回應：**
```bash
curl -o output.json https://api.example.com/data
```

**跟隨重新導向：**
```bash
curl -L https://example.com/redirect
```

---

**快樂的 API 測試！🚀**
