import { getHelloWorld } from '../../../src/controllers/helloworld.controller.js';
import { Request, Response } from 'express';

describe('getHelloWorld Controller', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let jsonSpy: jest.Mock;

  beforeEach(() => {
    jsonSpy = jest.fn().mockReturnValue({});
    mockRes = {
      json: jsonSpy
    };
    mockReq = {};
  });

  it('should call res.json with correct payload', () => {
    getHelloWorld(mockReq as Request, mockRes as Response);
    expect(jsonSpy).toHaveBeenCalledWith({ message: 'HelloWorld' });
  });

  it('should call res.json exactly once', () => {
    getHelloWorld(mockReq as Request, mockRes as Response);
    expect(jsonSpy).toHaveBeenCalledTimes(1);
  });

  it('should return HelloWorld message', () => {
    getHelloWorld(mockReq as Request, mockRes as Response);
    const callArgs = jsonSpy.mock.calls[0][0];
    expect(callArgs.message).toBe('HelloWorld');
  });

  it('should return object with only message property', () => {
    getHelloWorld(mockReq as Request, mockRes as Response);
    const callArgs = jsonSpy.mock.calls[0][0];
    expect(Object.keys(callArgs)).toEqual(['message']);
  });
});
