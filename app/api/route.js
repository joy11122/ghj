
import connectToDatabase from '@/src/lib/db';
import Product from '@/src/lib/model/Product';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await connectToDatabase();
      const product = await Product.create(req.body);
      res.status(201).json({ success: true, data: product });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ success: false });
  }
}

