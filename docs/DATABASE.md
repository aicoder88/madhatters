# Mad Hatter Pub - Database Schema Documentation

## Overview

The application uses Supabase as its backend-as-a-service platform. Currently, the database schema is not yet implemented - the app uses static data defined in React components.

## Current State

**Status:** Not configured

The project has Supabase client installed (`@supabase/supabase-js`) and a placeholder for generated types at `src/types/supabase.ts`, but no actual database tables have been created.

## Generating Types

Once a Supabase project is configured, types can be generated using:

```bash
# Set your project ID
export SUPABASE_PROJECT_ID=your-project-id

# Generate TypeScript types
npm run types:supabase
```

This will populate `src/types/supabase.ts` with type definitions matching your database schema.

## Proposed Schema

Below is a recommended database schema for future implementation:

### Tables

#### `menu_categories`

Stores food and drink menu categories.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier |
| name | text | NOT NULL | Category name (e.g., "Appetizers") |
| type | text | NOT NULL, CHECK (type IN ('food', 'drinks')) | Menu type |
| sort_order | integer | DEFAULT 0 | Display order |
| created_at | timestamptz | DEFAULT now() | Creation timestamp |
| updated_at | timestamptz | DEFAULT now() | Last update timestamp |

#### `menu_items`

Stores individual menu items.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier |
| category_id | uuid | REFERENCES menu_categories(id) ON DELETE CASCADE | Parent category |
| name | text | NOT NULL | Item name |
| description | text | | Item description |
| price | text | NOT NULL | Price display text (e.g., "$14.99") |
| image_url | text | | Image URL |
| is_available | boolean | DEFAULT true | Availability status |
| sort_order | integer | DEFAULT 0 | Display order within category |
| created_at | timestamptz | DEFAULT now() | Creation timestamp |
| updated_at | timestamptz | DEFAULT now() | Last update timestamp |

#### `menu_item_tags`

Stores tags for menu items (many-to-many).

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier |
| menu_item_id | uuid | REFERENCES menu_items(id) ON DELETE CASCADE | Menu item reference |
| tag | text | NOT NULL | Tag name (e.g., "Vegetarian", "Shareable") |
| created_at | timestamptz | DEFAULT now() | Creation timestamp |

#### `gallery_images`

Stores gallery/atmosphere images.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier |
| src | text | NOT NULL | Image URL or path |
| alt | text | NOT NULL | Alt text |
| caption | text | | Image caption |
| category | text | CHECK (category IN ('games', 'nightlife', 'staff', 'team')) | Image category |
| sort_order | integer | DEFAULT 0 | Display order |
| is_visible | boolean | DEFAULT true | Visibility status |
| created_at | timestamptz | DEFAULT now() | Creation timestamp |

#### `staff_members`

Stores team/staff member information.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier |
| name | text | NOT NULL | Display name or title |
| image_url | text | NOT NULL | Profile image URL |
| caption | text | | Description/caption |
| sort_order | integer | DEFAULT 0 | Display order |
| is_visible | boolean | DEFAULT true | Visibility on site |
| created_at | timestamptz | DEFAULT now() | Creation timestamp |

#### `site_settings`

Stores configurable site settings.

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | uuid | PRIMARY KEY, DEFAULT uuid_generate_v4() | Unique identifier |
| key | text | UNIQUE, NOT NULL | Setting key |
| value | jsonb | NOT NULL | Setting value (flexible JSON) |
| updated_at | timestamptz | DEFAULT now() | Last update timestamp |

Example settings:
- `address`: Pub address
- `phone`: Phone number
- `email`: Contact email
- `hours`: Operating hours object
- `social_links`: Social media URLs

### SQL Migration

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Menu Categories
CREATE TABLE menu_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('food', 'drinks')),
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Menu Items
CREATE TABLE menu_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id UUID REFERENCES menu_categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price TEXT NOT NULL,
  image_url TEXT,
  is_available BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Menu Item Tags
CREATE TABLE menu_item_tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  menu_item_id UUID REFERENCES menu_items(id) ON DELETE CASCADE,
  tag TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Gallery Images
CREATE TABLE gallery_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  src TEXT NOT NULL,
  alt TEXT NOT NULL,
  caption TEXT,
  category TEXT CHECK (category IN ('games', 'nightlife', 'staff', 'team')),
  sort_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Staff Members
CREATE TABLE staff_members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  image_url TEXT NOT NULL,
  caption TEXT,
  sort_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Site Settings
CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes for performance
CREATE INDEX idx_menu_items_category ON menu_items(category_id);
CREATE INDEX idx_menu_item_tags_item ON menu_item_tags(menu_item_id);
CREATE INDEX idx_gallery_images_category ON gallery_images(category);

-- Row Level Security (RLS) policies
ALTER TABLE menu_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_item_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Public read access for all tables
CREATE POLICY "Public read access" ON menu_categories FOR SELECT USING (true);
CREATE POLICY "Public read access" ON menu_items FOR SELECT USING (true);
CREATE POLICY "Public read access" ON menu_item_tags FOR SELECT USING (true);
CREATE POLICY "Public read access" ON gallery_images FOR SELECT USING (is_visible = true);
CREATE POLICY "Public read access" ON staff_members FOR SELECT USING (is_visible = true);
CREATE POLICY "Public read access" ON site_settings FOR SELECT USING (true);
```

## Entity Relationship Diagram

```
┌─────────────────────┐
│   menu_categories   │
├─────────────────────┤
│ id (PK)             │
│ name                │
│ type                │
│ sort_order          │
└─────────┬───────────┘
          │ 1:N
          ▼
┌─────────────────────┐       ┌─────────────────────┐
│     menu_items      │       │   menu_item_tags    │
├─────────────────────┤       ├─────────────────────┤
│ id (PK)             │──1:N─▶│ id (PK)             │
│ category_id (FK)    │       │ menu_item_id (FK)   │
│ name                │       │ tag                 │
│ description         │       └─────────────────────┘
│ price               │
│ image_url           │
│ is_available        │
└─────────────────────┘

┌─────────────────────┐       ┌─────────────────────┐
│   gallery_images    │       │    staff_members    │
├─────────────────────┤       ├─────────────────────┤
│ id (PK)             │       │ id (PK)             │
│ src                 │       │ name                │
│ alt                 │       │ image_url           │
│ caption             │       │ caption             │
│ category            │       │ sort_order          │
│ is_visible          │       │ is_visible          │
└─────────────────────┘       └─────────────────────┘

┌─────────────────────┐
│    site_settings    │
├─────────────────────┤
│ id (PK)             │
│ key (UNIQUE)        │
│ value (JSONB)       │
└─────────────────────┘
```

## Implementation Notes

### Connecting to Supabase

1. Create a Supabase project at https://supabase.com
2. Add environment variables:
   ```env
   VITE_SUPABASE_URL=your-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```
3. Create a Supabase client:
   ```typescript
   // src/lib/supabase.ts
   import { createClient } from '@supabase/supabase-js'
   import type { Database } from '@/types/supabase'

   const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
   const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

   export const supabase = createClient<Database>(supabaseUrl, supabaseKey)
   ```

### Data Fetching Pattern

Example of fetching menu data:

```typescript
// src/hooks/useMenu.ts
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export function useMenu() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMenu() {
      const { data, error } = await supabase
        .from('menu_categories')
        .select(`
          *,
          menu_items (
            *,
            menu_item_tags (tag)
          )
        `)
        .order('sort_order')

      if (!error) setCategories(data)
      setLoading(false)
    }

    fetchMenu()
  }, [])

  return { categories, loading }
}
```

## Security Considerations

1. **Row Level Security (RLS):** All tables have RLS enabled
2. **Public Access:** Read-only access for public-facing data
3. **Admin Access:** Would require authenticated users with admin role
4. **Image Storage:** Consider using Supabase Storage for uploaded images
5. **Environment Variables:** Never commit API keys to version control
