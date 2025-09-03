let currentVideo = null;

export default function handler(req, res) {
  if (req.method === "POST") {
    currentVideo = req.body.url;
    return res.status(200).json({ success: true, url: currentVideo });
  }

  if (req.method === "GET") {
    return res.status(200).json({ url: currentVideo });
  }

  res.status(405).json({ error: "Method not allowed" });
}
