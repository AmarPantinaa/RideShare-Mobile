CREATE TABLE IF NOT EXISTS udhetimet (
  id          INTEGER PRIMARY KEY,
  ora         TEXT    NOT NULL,
  nisja       TEXT    NOT NULL,
  pikenisja   TEXT    NOT NULL,
  shoferi     TEXT    NOT NULL,
  vende       INTEGER NOT NULL CHECK (vende >= 0)
);

INSERT INTO udhetimet (id, ora, nisja, pikenisja, shoferi, vende) VALUES
  (1, '07:30', 'Pejë',  'Sheshi i qytetit', 'Arben',  3),
  (2, '08:00', 'Istog', 'Stacioni kryesor', 'Vjosa',  1),
  (3, '08:15', 'Klinë', 'Qendra',           'Besnik', 0)
ON CONFLICT (id) DO NOTHING;