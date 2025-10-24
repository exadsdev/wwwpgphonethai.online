export const site = {
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || 'PG MOBILE LIMITED PARTNERSHIP',
  companyRegNo: process.env.NEXT_PUBLIC_COMPANY_REGNO || '0473560000846',
  companyAddress: process.env.NEXT_PUBLIC_COMPANY_ADDRESS || '183 หมู่ที่ 1 ตำบลคำตากล้า อำเภอคำตากล้า จ.สกลนคร 47250',
  name: process.env.NEXT_PUBLIC_NAME || '',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mypgphone.shop',
  logo: process.env.NEXT_PUBLIC_BRAND_LOGO || '/logo.svg',
  phone: process.env.NEXT_PUBLIC_PHONE || '',
  line: process.env.NEXT_PUBLIC_LINE || '',
  email: process.env.NEXT_PUBLIC_EMAIL || '',
  address: process.env.NEXT_PUBLIC_ADDRESS || 'Bangkok, Thailand',
  ogImage: '/og-default.jpg',
  ga4: process.env.NEXT_PUBLIC_GA4_ID || '',
  gtag: process.env.NEXT_PUBLIC_GTAG_ID || '',
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  bingVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || '',
  facebookAppId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''
}

export const defaultImages = {
  og: [{ url: site.ogImage, width: 1200, height: 630, alt: site.name }]
}
