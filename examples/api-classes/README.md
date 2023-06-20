# api-classes

> use classes built and originate api call

requirement:
    1. TypeScript / classes
    2. axios

1. base axios
    - create base axios with *baseURL*, ex `https://api.github.com`
    - add one or more *prefix* path, ex: `users`, `repos`
    - create `tryCatch` in this layer for catch error under this classes
2. user axios
    - pass the `prefix` path with `super()` methods to father class, ex: `users`
    - create **more specific methods** in this layer
    - just need call this class
