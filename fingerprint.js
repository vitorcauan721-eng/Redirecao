async function getFingerprint(){
  const agent = navigator.userAgent.toLowerCase();
  const botKeywords = [
    "bot","crawler","spider","preview","fetch","curl","python","node",
    "facebook","tiktok","meta","whatsapp","telegram","ahrefs","semrush",
    "bingbot","googlebot","yahoobot"
  ];

  const isBot = botKeywords.some(b=>agent.includes(b));

  // geolock client → sem servidor
  let country = "XX";
  try {
    const ipRes = await fetch("https://ipwho.is/");
    const ipData = await ipRes.json();
    country = ipData.country_code || "XX";
  }catch(e){}

  return {
    isBot,
    isCrawler:isBot,
    country
  };
}
