import { Request, Response, NextFunction } from 'express';
import useragent from 'useragent';

const blockBrowser: any = (req: Request, res: Response, next: NextFunction) => {
  const agent = useragent.parse(req.headers['user-agent'] || '');

  if (agent.family !== 'Other') {
    return res.status(403).send('Access denied from browser');
  }

  next();
};

export default blockBrowser;