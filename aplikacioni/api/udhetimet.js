import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ gabim: "Metodë e palejuar" });
  }

  res.setHeader("Cache-Control", "no-store");

  try {
    const { id } = req.query;

    if (id !== undefined) {
      if (typeof id !== "string" || !/^\d{1,9}$/.test(id)) {
        return res.status(404).json({ gabim: "Udhëtimi nuk u gjet" });
      }
      const rreshta = await sql`
        SELECT id::text AS id, ora, nisja, pikenisja, shoferi, vende
        FROM udhetimet WHERE id = ${Number(id)}`;
      if (rreshta.length === 0) {
        return res.status(404).json({ gabim: "Udhëtimi nuk u gjet" });
      }
      return res.status(200).json(rreshta[0]);
    }

    const rreshta = await sql`
      SELECT id::text AS id, ora, nisja, pikenisja, shoferi, vende
      FROM udhetimet ORDER BY ora`;
    return res.status(200).json(rreshta);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ gabim: "Gabim në server" });
  }
}