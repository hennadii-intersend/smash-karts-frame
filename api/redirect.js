// Redirect API handler for Farcaster Frame
export default function handler(req, res) {
  // Set cache control headers
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Log the frame request for debugging (optional)
    console.log('Frame request received:', req.body);

    // Return an interactive frame response that will open the game
    // This is compatible with both web and iOS clients
    return res.status(200).json({
      image: "https://imgs.crazygames.com/smash-karts_16x9/20250304104934/smash-karts_16x9-cover?metadata=none&quality=70&width=889",
      buttons: [{
        label: "Play Smash Karts",
        action: "link", // Use link action which is more widely supported
        target: "https://www.crazygames.com/embed/smash-karts"
      }]
    });
  } catch (error) {
    console.error('Error in frame handler:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
