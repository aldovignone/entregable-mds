import { Request, Response } from 'express';

export const getHelloWorld = (req: Request, res: Response) => {
  res.json({ message: 'HelloWorld Test 01', data: { foo: 'foo' } });
};
