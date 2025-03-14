// Redirect API handler for Farcaster Frame
module.exports = async (req, res) => {
  // Set cache control headers
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS requests for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Log the frame request for debugging
    console.log('Frame request received');

    // Return a redirect in Farcaster v2 format
    return res.status(200).json({
      redirect: 'https://www.crazygames.com/embed/smash-karts'
    });
  } catch (error) {
    console.error('Error in frame handler:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
