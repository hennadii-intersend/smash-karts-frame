// Redirect API handler for Farcaster Frame
export default function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Log the frame request for debugging (optional)
    console.log('Frame request received:', req.body);

    // Return a redirect response to the game URL
    return res.status(200).json({
      redirect: 'https://www.crazygames.com/embed/smash-karts'
    });
  } catch (error) {
    console.error('Error in frame handler:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
