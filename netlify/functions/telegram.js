exports.handler = async (event) => {
  const TG_TOKEN = process.env.TG_TOKEN;
  const body = JSON.parse(event.body);
  
  const response = await fetch(
    `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
  );
  
  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
