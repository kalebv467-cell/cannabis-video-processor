export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { audioData, scriptText, title } = req.body;
    
    // For now, just return success - we'll build the video processing
    res.json({ 
      success: true,
      message: 'Webhook received successfully',
      receivedData: {
        hasAudio: !!audioData,
        hasScript: !!scriptText,
        hasTitle: !!title
      }
    });
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
