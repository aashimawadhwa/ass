// Dummy data to be replaced with your database\

export interface UserData {
    name: string;
    subname:string,
    phoneNumber: string;
    email: string;
    description: string;
    subdomain: string;
    customDomain?: string;
    message: string;
    photoUrl: any; // Change the type to string
    defaultForPreview?: boolean;
  }
  
const hostnamesDB: UserData[] = [
    {
      name: 'Tenant-1',
      subname:'john',
      phoneNumber: "1234567890",
      email: "john@example.com",
      description: 'Subdomain + custom domain',
      subdomain: 'test1',
      customDomain: 'custom-domain-1.com',
      message: "I am looking for a shared PG room",
      photoUrl: "logo-1.png",
      // Default subdomain for Preview deployments and for local development
      defaultForPreview: true,
    },
    {
      name: 'Tenant-2',
      subname:'sara',
      phoneNumber: "1231231231",
      email: "sara@example.com",
      message: "I want to find a pet friendly society",
      description: 'Subdomain only',
      subdomain: 'test2',
      photoUrl:"logo-2.png"
    },
    {
      name: 'Tenant-3',
      subname:'uncle',
      phoneNumber: "1237897891",
      email: "uncle@example.com",
      message: "I can rent you my property",
      description: 'Subdomain only',
      subdomain: 'test3',
      photoUrl: "logo-3.png"
    },
  ];
  
  const DEFAULT_HOST = hostnamesDB.find((h) => h.defaultForPreview);
  
  /**
   * Returns the data of the hostname based on its subdomain or custom domain
   * or the default host if there's no match.
   */
  export async function getHostnameDataOrDefault(subdomainOrCustomDomain?: string) {
    if (!subdomainOrCustomDomain) return DEFAULT_HOST;
  
    const customDomain = subdomainOrCustomDomain.includes('.');
  
    return (
      hostnamesDB.find((item) =>
        customDomain
          ? item.customDomain === subdomainOrCustomDomain
          : item.subdomain === subdomainOrCustomDomain
      ) ?? DEFAULT_HOST
    );
  }
  
  /**
   * Returns the data of the hostname based on its subdomain.
   */
  export async function getHostnameDataBySubdomain(subdomain: string) {
    return hostnamesDB.find((item) => item.subdomain === subdomain);
  }
  
  export default hostnamesDB;
  