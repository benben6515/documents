# cURL Usage Guide

A comprehensive guide to using curl for API testing, mapped to Postman-like workflow.

---

## Table of Contents

- [Quick Start](#quick-start)
  - [Basic Syntax](#basic-syntax)
  - [Your First Request](#your-first-request)
- [HTTP Methods](#http-methods)
  - [GET - Fetching Data](#get---fetching-data)
  - [POST - Creating Data](#post---creating-data)
  - [PUT - Updating Data](#put---updating-data)
  - [PATCH - Partial Updates](#patch---partial-updates)
  - [DELETE - Removing Data](#delete---removing-data)
- [Headers & Authentication](#headers--authentication)
  - [Custom Headers](#custom-headers)
  - [Basic Authentication](#basic-authentication)
  - [Bearer Token Authentication](#bearer-token-authentication)
  - [API Key Authentication](#api-key-authentication)
- [Request Body](#request-body)
  - [JSON Payloads](#json-payloads)
  - [Form Data](#form-data)
  - [File Uploads](#file-uploads)
- [Advanced Features](#advanced-features)
  - [Verbose Debugging (-v)](#verbose-debugging--v)
  - [Saving Responses (-o)](#saving-responses--o)
  - [Following Redirects (-L)](#following-redirects--l)
  - [Handling Cookies (-c, -b)](#handling-cookies--c--b)
  - [Timeouts & Retries](#timeouts--retries)
  - [SSL/TLS Options](#ssltls-options)
- [Postman ↔️ cURL Mapping](#postman--curl-mapping)
- [Real-World Examples](#real-world-examples)
  - [REST API Testing Workflow](#rest-api-testing-workflow)
  - [File Upload Workflow](#file-upload-workflow)
  - [OAuth2 Flow](#oauth2-flow)
  - [Webhook Testing](#webhook-testing)
  - [API Debugging](#api-debugging)
- [Best Practices](#best-practices)
  - [Command Organization](#command-organization)
  - [Scripting Tips](#scripting-tips)
  - [Error Handling](#error-handling)
  - [Performance Tips](#performance-tips)
- [Quick Reference](#quick-reference)

---

## Quick Start

### Basic Syntax

```bash
curl [options] [URL]
```

**Key Components:**
- `options`: Flags to modify behavior (headers, method, data, etc.)
- `URL`: The endpoint you're targeting

**Most Common Flags:**
```bash
-X <method>    # HTTP method (GET, POST, etc.)
-H <header>    # Add header
-d <data>      # Request body data
-o <file>      # Save response to file
-v             # Verbose output for debugging
```

### Your First Request

**Simple GET Request (like clicking "Send" in Postman):**

```bash
curl https://jsonplaceholder.typicode.com/posts/1
```

**Response:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

**With verbose output (Postman Console equivalent):**

```bash
curl -v https://jsonplaceholder.typicode.com/posts/1
```

---

## HTTP Methods

### GET - Fetching Data

**Basic GET Request:**

```bash
curl -X GET https://jsonplaceholder.typicode.com/posts
```

**GET with Query Parameters:**

```bash
curl -X GET "https://jsonplaceholder.typicode.com/posts?userId=1&_limit=5"
```

**GET with Custom Headers:**

```bash
curl -X GET \
  -H "Accept: application/json" \
  -H "User-Agent: MyClient/1.0" \
  https://jsonplaceholder.typicode.com/posts
```

---

### POST - Creating Data

**POST with JSON Body:**

```bash
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "foo",
    "body": "bar",
    "userId": 1
  }'
```

**Response:**
```json
{
  "title": "foo",
  "body": "bar",
  "userId": 1,
  "id": 101
}
```

**POST from File:**

```bash
# Create data.json
echo '{"title": "foo", "body": "bar", "userId": 1}' > data.json

# Use @ to read from file
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d @data.json
```

**POST with Form Data:**

```bash
curl -X POST https://httpbin.org/post \
  -d "username=john" \
  -d "password=secret"
```

---

### PUT - Updating Data

**PUT Request (Replace entire resource):**

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

### PATCH - Partial Updates

**PATCH Request (Update only specified fields):**

```bash
curl -X PATCH https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "patched title"
  }'
```

---

### DELETE - Removing Data

**DELETE Request:**

```bash
curl -X DELETE https://jsonplaceholder.typicode.com/posts/1
```

**Response:**
```json
{}
```

---

## Headers & Authentication

### Custom Headers

**Single Header:**

```bash
curl -X GET \
  -H "Accept: application/json" \
  https://jsonplaceholder.typicode.com/posts
```

**Multiple Headers:**

```bash
curl -X GET \
  -H "Accept: application/json" \
  -H "Authorization: Bearer token123" \
  -H "User-Agent: MyApp/1.0" \
  https://api.example.com/data
```

**Headers from File:**

```bash
# Create headers.txt
cat << EOF > headers.txt
Accept: application/json
Authorization: Bearer token123
User-Agent: MyApp/1.0
EOF

curl -X GET -H @headers.txt https://api.example.com/data
```

---

### Basic Authentication

**Basic Auth (username:password):**

```bash
curl -u username:password https://httpbin.org/basic-auth/user/pass
```

**Interactive (prompt for password):**

```bash
curl -u username https://api.example.com/secure
```

---

### Bearer Token Authentication

**Bearer Token in Authorization Header:**

```bash
curl -X GET \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" \
  https://api.example.com/protected
```

**OAuth2 Access Token Example:**

```bash
# Get token from OAuth2 endpoint
TOKEN=$(curl -X POST https://oauth.example.com/token \
  -d "grant_type=client_credentials" \
  -d "client_id=your_client_id" \
  -d "client_secret=your_client_secret" \
  | jq -r '.access_token')

# Use token in requests
curl -X GET \
  -H "Authorization: Bearer $TOKEN" \
  https://api.example.com/protected
```

---

### API Key Authentication

**API Key in Header:**

```bash
curl -X GET \
  -H "X-API-Key: your_api_key_here" \
  https://api.example.com/data
```

**API Key as Query Parameter:**

```bash
curl -X GET "https://api.example.com/data?api_key=your_api_key_here"
```

---

## Request Body

### JSON Payloads

**Inline JSON:**

```bash
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Post",
    "body": "This is the content",
    "userId": 1
  }'
```

**Pretty-printed JSON in command:**

```bash
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Post",
    "body": "This is the content",
    "userId": 1
  }'
```

**JSON from File:**

```bash
# Create payload.json
cat << EOF > payload.json
{
  "title": "My Post",
  "body": "This is the content",
  "userId": 1
}
EOF

curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d @payload.json
```

---

### Form Data

**URL-encoded Form Data:**

```bash
curl -X POST https://httpbin.org/post \
  -d "username=john" \
  -d "password=secret" \
  -d "remember_me=1"
```

**Form Data with Multiple Values:**

```bash
curl -X POST https://httpbin.org/post \
  -d "tags=javascript" \
  -d "tags=python" \
  -d "tags=react"
```

**URL-encoded with Special Characters:**

```bash
curl -X POST https://httpbin.org/post \
  --data-urlencode "name=John Doe" \
  --data-urlencode "email=john@example.com"
```

---

### File Uploads

**Single File Upload (multipart/form-data):**

```bash
curl -X POST https://httpbin.org/post \
  -F "file=@/path/to/file.jpg" \
  -F "description=My upload"
```

**Multiple Files:**

```bash
curl -X POST https://httpbin.org/post \
  -F "files=@/path/to/file1.jpg" \
  -F "files=@/path/to/file2.jpg" \
  -F "description=Multiple files"
```

**File Upload with Metadata:**

```bash
curl -X POST https://httpbin.org/post \
  -F "upload=@document.pdf;type=application/pdf" \
  -F "title=Important Document" \
  -F "author=John Doe"
```

**Binary File Upload:**

```bash
curl -X POST https://api.example.com/upload \
  -H "Content-Type: application/octet-stream" \
  --data-binary @/path/to/binaryfile.bin
```

---

## Advanced Features

### Verbose Debugging (-v)

**See Full Request/Response Details:**

```bash
curl -v https://jsonplaceholder.typicode.com/posts/1
```

**Output includes:**
- Request headers
- Response headers
- Connection details
- SSL certificate information

**Show Response Headers Only:**

```bash
curl -I https://jsonplaceholder.typicode.com/posts/1
```

**Show Request Headers:**

```bash
curl -v --trace-ascii /dev/stderr https://example.com 2>&1 | grep "^<"
```

---

### Saving Responses (-o)

**Save Response to File:**

```bash
curl -o response.json https://jsonplaceholder.typicode.com/posts
```

**Save with Custom Filename (using variables):**

```bash
curl -o "response_$(date +%Y%m%d_%H%M%S).json" \
  https://jsonplaceholder.typicode.com/posts
```

**Save to File but Print Progress:**

```bash
curl -o output.json https://example.com/large-file.zip
```

**Download and Show Progress Bar:**

```bash
curl -# -o file.zip https://example.com/large-file.zip
```

**Resume Interrupted Download:**

```bash
curl -C - -o file.zip https://example.com/large-file.zip
```

---

### Following Redirects (-L)

**Follow HTTP Redirects:**

```bash
curl -L https://bit.ly/example
```

**Maximum Redirects:**

```bash
curl -L --max-redirs 5 https://example.com
```

**Show Redirect Chain:**

```bash
curl -vL https://example.com
```

---

### Handling Cookies (-c, -b)

**Save Cookies to File:**

```bash
curl -c cookies.txt https://httpbin.org/cookies/set/name/value
```

**Send Cookies from File:**

```bash
curl -b cookies.txt https://httpbin.org/cookies
```

**Set Single Cookie:**

```bash
curl -b "name=value" https://httpbin.org/cookies
```

**Multiple Cookies:**

```bash
curl -b "name1=value1; name2=value2" https://httpbin.org/cookies
```

**Send and Save Cookies:**

```bash
curl -b cookies.txt -c cookies.txt https://api.example.com/session
```

---

### Timeouts & Retries

**Connection Timeout:**

```bash
curl --connect-timeout 10 https://api.example.com/data
```

**Maximum Time for Entire Request:**

```bash
curl --max-time 30 https://api.example.com/data
```

**Retry Failed Requests:**

```bash
curl --retry 3 --retry-delay 2 https://api.example.com/data
```

**Retry Only on Specific Errors:**

```bash
curl --retry 3 --retry-all-errors https://api.example.com/data
```

---

### SSL/TLS Options

**Skip SSL Verification (not recommended for production):**

```bash
curl -k https://self-signed-cert.example.com
```

**Use Custom CA Certificate:**

```bash
curl --cacert /path/to/ca.pem https://api.example.com
```

**Use Client Certificate:**

```bash
curl --cert /path/to/client.pem \
  --key /path/to/client.key \
  https://api.example.com
```

**Check SSL Certificate Details:**

```bash
curl -vI https://example.com 2>&1 | grep -E "(SSL|TLS|Certificate)"
```

---

## Postman ↔️ cURL Mapping

| Postman UI Element | cURL Equivalent | Example |
|-------------------|----------------|---------|
| **Method Selector** | `-X <method>` | `-X POST` |
| **Request URL** | `URL` | `https://api.example.com/data` |
| **Params Tab** | `URL query string` | `?id=1&name=test` |
| **Headers Tab** | `-H "Key: Value"` | `-H "Content-Type: application/json"` |
| **Authorization Tab** | Various | `-u user:pass` or `-H "Authorization: Bearer token"` |
| **Body Tab > raw > JSON** | `-d '{...}' -H "Content-Type: application/json"` | See JSON examples above |
| **Body Tab > x-www-form-urlencoded** | `-d "key=value"` | `-d "name=John&age=30"` |
| **Body Tab > form-data** | `-F "key=value"` or `-F "file=@path"` | `-F "file=@doc.pdf"` |
| **Tests Tab** | Shell scripting/pipe to tools | `curl ... | jq` |
| **Pre-request Script** | Shell commands | `TOKEN=$(curl ...)` |

### Converting Postman to cURL

**Postman Request:**
- Method: POST
- URL: https://api.example.com/users
- Headers: Content-Type: application/json, Authorization: Bearer token123
- Body (JSON): `{"name": "John", "email": "john@example.com"}`

**Equivalent cURL:**

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

## Real-World Examples

### REST API Testing Workflow

**Complete CRUD Operations:**

```bash
# 1. GET all resources
echo "=== GET All ==="
curl -s https://jsonplaceholder.typicode.com/posts | jq '.[:3]'

# 2. GET single resource
echo -e "\n=== GET Single ==="
curl -s https://jsonplaceholder.typicode.com/posts/1 | jq '.'

# 3. POST create resource
echo -e "\n=== POST Create ==="
curl -s -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "Test Post", "body": "Test body", "userId": 1}' \
  | jq '.'

# 4. PUT update resource
echo -e "\n=== PUT Update ==="
curl -s -X PUT https://jsonplaceholder.typicode.com/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"id": 1, "title": "Updated Title", "body": "Updated body", "userId": 1}' \
  | jq '.'

# 5. DELETE resource
echo -e "\n=== DELETE ==="
curl -s -X DELETE https://jsonplaceholder.typicode.com/posts/1 | jq '.'
```

---

### File Upload Workflow

**Multi-step Upload Process:**

```bash
# 1. Prepare file
echo "Sample content" > upload.txt

# 2. Upload file
echo "=== Uploading File ==="
curl -X POST https://httpbin.org/post \
  -F "file=@upload.txt" \
  -F "metadata={\"description\":\"Test upload\"}" \
  | jq '.files, .form'

# 3. Verify upload
echo -e "\n=== Verify Upload ==="
curl -s https://httpbin.org/post \
  | jq '.files.file'
```

---

### OAuth2 Flow

**Client Credentials Flow:**

```bash
#!/bin/bash

# Get access token
echo "=== Getting Access Token ==="
RESPONSE=$(curl -s -X POST https://httpbin.org/post \
  -d "grant_type=client_credentials" \
  -d "client_id=your_client_id" \
  -d "client_secret=your_client_secret")

TOKEN=$(echo $RESPONSE | jq -r '.access_token // .form.client_id')

# Use token
echo -e "\n=== Using Token ==="
curl -s -X GET https://httpbin.org/headers \
  -H "Authorization: Bearer $TOKEN" \
  | jq '.headers'
```

---

### Webhook Testing

**Test Webhook Endpoint:**

```bash
# Test webhook with retry logic
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

### API Debugging

**Debug Authentication Issues:**

```bash
# 1. Test without auth (should fail)
echo "=== Without Auth ==="
curl -v https://httpbin.org/basic-auth/user/pass 2>&1 | grep -E "(HTTP|401)"

# 2. Test with wrong credentials
echo -e "\n=== Wrong Credentials ==="
curl -v -u user:wrong https://httpbin.org/basic-auth/user/pass 2>&1 | grep -E "(HTTP|401)"

# 3. Test with correct credentials
echo -e "\n=== Correct Credentials ==="
curl -v -u user:pass https://httpbin.org/basic-auth/user/pass 2>&1 | grep -E "(HTTP|200)"
```

**Debug Headers:**

```bash
echo "=== Testing Custom Headers ==="
curl -v https://httpbin.org/headers \
  -H "X-Custom-Header: test-value" \
  -H "Authorization: Bearer test-token" \
  2>&1 | grep -A 20 ">"
```

---

## Best Practices

### Command Organization

**Use Backslashes for Multi-line Commands:**

```bash
curl -X POST https://api.example.com/users \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com"
  }'
```

**Use Shell Variables for Reusable Values:**

```bash
API_URL="https://api.example.com"
TOKEN="your_token_here"

curl -X GET "$API_URL/users" \
  -H "Authorization: Bearer $TOKEN"
```

---

### Scripting Tips

**Store Config in Variables:**

```bash
#!/bin/bash

API_BASE="https://api.example.com"
TOKEN="your_token_here"
OUTPUT_DIR="./api_responses"

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Get users and save
curl -s "$API_BASE/users" \
  -H "Authorization: Bearer $TOKEN" \
  -o "$OUTPUT_DIR/users.json"

# Get single user
curl -s "$API_BASE/users/1" \
  -H "Authorization: Bearer $TOKEN" \
  -o "$OUTPUT_DIR/user_1.json"
```

**Use jq for JSON Processing:**

```bash
# Extract specific fields
curl -s https://jsonplaceholder.typicode.com/posts/1 \
  | jq '{id, title, userId}'

# Filter array
curl -s https://jsonplaceholder.typicode.com/posts \
  | jq '[.[] | select(.userId == 1)]'
```

---

### Error Handling

**Check HTTP Status Code:**

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

**Exit on Error:**

```bash
curl -f https://api.example.com/data || {
  echo "Request failed!"
  exit 1
}
```

---

### Performance Tips

**Use Compression:**

```bash
curl --compressed https://api.example.com/large-data
```

**Parallel Requests (with xargs):**

```bash
echo "https://api.example.com/users/1" \
  "https://api.example.com/users/2" \
  "https://api.example.com/users/3" \
  | xargs -P 3 -I {} curl -s {}
```

**Cache Results:**

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

## Quick Reference

### Essential cURL Flags

| Flag | Description | Example |
|------|-------------|---------|
| `-X` | HTTP Method | `-X POST` |
| `-H` | Add Header | `-H "Content-Type: application/json"` |
| `-d` | Request Body | `-d '{"key": "value"}'` |
| `-u` | User Authentication | `-u user:pass` |
| `-v` | Verbose | `-v` |
| `-o` | Output File | `-o response.json` |
| `-O` | Save with Remote Filename | `-O` |
| `-L` | Follow Redirects | `-L` |
| `-k` | Skip SSL Verification | `-k` |
| `-I` | Headers Only | `-I` |
| `-s` | Silent Mode | `-s` |
| `--compressed` | Use Compression | `--compressed` |
| `-f` | Fail on HTTP Errors | `-f` |
| `--connect-timeout` | Connection Timeout | `--connect-timeout 10` |
| `--max-time` | Maximum Time | `--max-time 30` |
| `-c` | Save Cookies | `-c cookies.txt` |
| `-b` | Send Cookies | `-b cookies.txt` |
| `-F` | Multipart Form | `-F "file=@path"` |
| `--data-urlencode` | URL-encode Data | `--data-urlencode "name=John Doe"` |
| `-#` | Progress Bar | `-# -o file.zip` |
| `-C -` | Resume Download | `-C - -o file.zip` |

### Common Patterns

**GET with Authentication:**
```bash
curl -H "Authorization: Bearer $TOKEN" https://api.example.com/data
```

**POST JSON:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{"key": "value"}' https://api.example.com/data
```

**Upload File:**
```bash
curl -F "file=@path/to/file" https://api.example.com/upload
```

**Debug Request:**
```bash
curl -v https://api.example.com/data
```

**Save Response:**
```bash
curl -o output.json https://api.example.com/data
```

**Follow Redirects:**
```bash
curl -L https://example.com/redirect
```

---

**Happy API Testing! 🚀**
