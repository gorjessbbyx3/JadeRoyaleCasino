export function getSubdomain(): string {
  if (typeof window === 'undefined') return '';
  
  const hostname = window.location.hostname;
  const parts = hostname.split('.');
  
  if (parts.length > 2) {
    return parts[0];
  }
  
  return '';
}

export function isAgentSubdomain(subdomain: string): boolean {
  const agentSubdomains = ['genai', 'test'];
  return agentSubdomains.includes(subdomain);
}

export function isMasterSubdomain(subdomain: string): boolean {
  return subdomain === 'webmasterx3';
}

export function isMainDomain(subdomain: string): boolean {
  return subdomain === '' || subdomain === 'www' || subdomain === 'jaderoyale';
}
