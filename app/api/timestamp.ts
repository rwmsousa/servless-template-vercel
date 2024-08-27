import { NextApiRequest, NextApiResponse } from 'next';
import { StatusCodes } from 'http-status-codes';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const nextYear = currentYear + 1;
  const nextJune25th = new Date(nextYear, 5, 25); // June 25th of the next year

  const daysToNextJune25th = Math.ceil((nextJune25th.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  switch (req.method) {
    case 'GET':
      const currentHour = new Date();
      return res.status(StatusCodes.OK).json({ data: currentHour });

    case 'POST':
      const nextJune25th = new Date(new Date().getFullYear(), 5, 25); // June 25th of the current year
      const today = new Date();
      const daysToNextJune25th = Math.ceil((nextJune25th.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      return res.status(StatusCodes.OK).json({ data: `Days to next June 25th: ${daysToNextJune25th}` });

    default:
      return res.status(StatusCodes.METHOD_NOT_ALLOWED).end();
  }
}
