export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, password, loginTime } = req.body;
    
    // Logging data to the console
    console.log(`Email: ${email}, Password: ${password}, Login Time: ${loginTime}`);

    res.status(200).json({ status: 'success' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
