import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const hostedManifestUrl = process.env.FARCASTER_HOSTED_MANIFEST_URL;
  
  if (hostedManifestUrl) {
    // Temporary redirect for Farcaster Hosted Manifest verification
    return res.redirect(307, hostedManifestUrl);
  }
  
  // If no hosted manifest URL is set, return 404
  // This allows the static file to be served if it exists
  return res.status(404).json({ error: 'Manifest not configured' });
}

