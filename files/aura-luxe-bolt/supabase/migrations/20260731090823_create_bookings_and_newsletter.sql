/*
# Create bookings and newsletter tables (single-tenant, no auth)

1. New Tables
- `bookings` — appointment requests submitted from the public booking form.
  - id (uuid, primary key)
  - name (text, not null) — client full name
  - email (text, not null) — client email
  - phone (text, not null) — client phone
  - service (text, not null) — selected service name
  - stylist (text, not null) — selected stylist name
  - date (date, not null) — appointment date
  - time (text, not null) — appointment time slot
  - notes (text) — special requests / optional message
  - status (text, default 'pending') — pending/confirmed/cancelled
  - created_at (timestamptz, default now())
- `newsletter` — email subscriptions from the footer newsletter form.
  - id (uuid, primary key)
  - email (text, unique, not null)
  - created_at (timestamptz, default now())
2. Security
- Enable RLS on both tables.
- Allow anon + authenticated CRUD because the booking form is intentionally public (no sign-in).
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  stylist text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_bookings" ON bookings;
CREATE POLICY "anon_select_bookings" ON bookings FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_bookings" ON bookings;
CREATE POLICY "anon_update_bookings" ON bookings FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_bookings" ON bookings;
CREATE POLICY "anon_delete_bookings" ON bookings FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS newsletter (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter;
CREATE POLICY "anon_insert_newsletter" ON newsletter FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_newsletter" ON newsletter;
CREATE POLICY "anon_select_newsletter" ON newsletter FOR SELECT
  TO anon, authenticated USING (true);
