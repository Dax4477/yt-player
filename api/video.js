let lastUrl = "";

export default function handler(req, res) {
  if (req.method === "POST") {
    lastUrl = req.body.url || "";
    return res.status(200).json({ success: true, url: lastUrl });
  }
  if (req.method === "GET") {
    return res.status(200).json({ url: lastUrl });
  }
  res.status(405).json({ error: "Method not allowed" });
}
