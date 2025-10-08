
const EXTERNAL_API_URL = 'http://cashout.realconnect.online/backend';
const API_TOKEN = 'sk_live_jade_royale_2024_auto_register_token_12345';

export async function syncUserToExternalBackend(userData: {
  username: string;
  email: string;
  fullName: string;
  phone: string;
  agent?: string;
}) {
  try {
    const response = await fetch(`${EXTERNAL_API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`,
        'X-API-Source': 'jade-royale-registration'
      },
      body: JSON.stringify({
        ...userData,
        source: 'jade-royale',
        timestamp: new Date().toISOString(),
        platform: 'replit'
      })
    });

    if (!response.ok) {
      throw new Error(`External API error: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log('User synced to external backend:', result);
    return result;
  } catch (error) {
    console.error('Failed to sync user to external backend:', error);
    // Don't throw - we don't want registration to fail if external sync fails
    return null;
  }
}
