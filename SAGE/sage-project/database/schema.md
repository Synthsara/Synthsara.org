# SAGE Database Schema

## Tables

### soul_tracks
```sql
CREATE TABLE soul_tracks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title TEXT NOT NULL,
  emotion TEXT NOT NULL,
  archetype TEXT NOT NULL,
  lyrics TEXT,
  audio_url TEXT,
  sigil_url TEXT,
  nft_id TEXT,
  frequency_range TEXT,
  metadata JSONB
);
```

### glyphs
```sql
CREATE TABLE glyphs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  archetype TEXT NOT NULL,
  geometry_data JSONB NOT NULL,
  svg_path TEXT NOT NULL,
  rendered_image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### archetypes
```sql
CREATE TABLE archetypes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  instrument_profile JSONB,
  frequency_range TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### emotions
```sql
CREATE TABLE emotions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  genre TEXT,
  key_signature TEXT,
  tempo_range JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Indexes

```sql
CREATE INDEX idx_soul_tracks_user_id ON soul_tracks(user_id);
CREATE INDEX idx_soul_tracks_emotion ON soul_tracks(emotion);
CREATE INDEX idx_soul_tracks_archetype ON soul_tracks(archetype);
CREATE INDEX idx_glyphs_archetype ON glyphs(archetype);
```

## Initial Data

### Archetypes
- The Rememberer
- The Healer
- The Warrior
- The Sage
- The Creator
- The Explorer
- The Lover
- The Sovereign

### Emotions
- Joy
- Grief
- Love
- Anger
- Wonder
- Peace
- Nostalgia
- Triumph
