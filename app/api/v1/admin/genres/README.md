# Genre APIs

These APIs handle CRUD operations for movie genres with SEO optimization.

## Access Control

### Admin APIs (Protected)
These APIs require admin authentication:
- `POST /api/v1/genres` - Add new genre
- `PUT /api/v1/genres/:id` - Update genre
- `DELETE /api/v1/genres/:id` - Delete genre

### Public APIs
These APIs are accessible to all users:
- `GET /api/v1/genres` - Get all genres
- `GET /api/v1/genres/:id` - Get single genre

## Add New Genre
`POST /api/v1/genres`

**Request Body:**
```json
{
  "name": "Action",
  "description": "High-energy movies with intense sequences.",
  "status": "active",
  "icon": "https://cdn.example.com/icons/action.png",
  "meta_title": "Best Action Movies Genre",
  "meta_description": "Watch best action movies including thrilling fight scenes, stunts, and explosions.",
  "keywords": ["action", "fight", "thriller"],
  "translations": {
    "en": "Action",
    "hi": "एक्शन"
  }
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "662ffecb",
    "name": "Action",
    "slug": "action",
    ...
  }
}
```

## Get All Genres
`GET /api/v1/genres`

**Query Parameters:**
- `status`: Filter by status (`active` or `inactive`)
- `search`: Search in name and slug

**Example:**
```
/api/v1/genres?status=active&search=comedy
```

**Response:**
```json
{
  "success": true,
  "count": 1,
  "data": [{
    "id": "662ffecb",
    "name": "Comedy",
    "slug": "comedy",
    ...
  }]
}
```

## Get Single Genre
`GET /api/v1/genres/:id`

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "662ffecb",
    "name": "Action",
    "slug": "action",
    ...
  }
}
```

## Update Genre
`PUT /api/v1/genres/:id`

**Request Body:**
Same as POST, all fields optional

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "662ffecb",
    "name": "Action",
    "slug": "action",
    ...
  }
}
```

## Delete Genre
`DELETE /api/v1/genres/:id`

**Query Parameters:**
- `force`: Force delete even if movies are using this genre (boolean)

**Response:**
```json
{
  "success": true,
  "message": "Genre deleted successfully"
}
```

## Error Handling

### Validation Errors (400)
```json
{
  "success": false,
  "error": "Please provide genre name"
}
```

### Not Found (404)
```json
{
  "success": false,
  "error": "Genre not found"
}
```

### Conflict (400)
```json
{
  "success": false,
  "error": "Genre with this name already exists"
}
```

### Server Error (500)
```json
{
  "success": false,
  "error": "Error adding/updating/deleting genre"
}
```

## SEO Features
1. Meta title (max 60 chars)
2. Meta description (max 160 chars)
3. Keywords for search engines
4. SEO-friendly slugs
5. Multi-language support

## Security Features
1. Input validation
2. Safe deletion with movie reference check
3. Status toggle for soft delete
4. URL validation for icons 