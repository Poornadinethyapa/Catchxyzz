export default function handler(req: any, res: any) {
  const hostedManifestUrl = process.env.FARCASTER_HOSTED_MANIFEST_URL;
  
  if (hostedManifestUrl) {
    // Redirect to Farcaster Hosted Manifest for verification
    return res.redirect(307, hostedManifestUrl);
  }
  
  // If no hosted manifest URL is set, return 404
  return res.status(404).json({ error: 'Manifest not configured' });
}

