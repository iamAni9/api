export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Use POST method" });
  }

  const { strings = [] } = req.body || {};
  const lengths = strings.map(s => s.length);

  res.status(200).json({ lengths });
}
