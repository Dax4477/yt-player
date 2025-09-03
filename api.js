let lastUrl = ""; // memory store (resets if server restarts)

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ url: lastUrl });
  } else if (req.method === "POST") {
    lastUrl = req.body.url || "";
    res.status(200).json({ success: true, url: lastUrl });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
