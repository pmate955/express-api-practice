import { Request, Response } from "express";
import { database } from '../lib/database';
import Axios from "axios";
import * as locationSerializer from '../serializers/location';
import { Location } from "../models/location";

const weatherApiUrl = 'https://www.metaweather.com/api';

export const index = async (req: Request, res: Response) => {
  const locations = await database('locations').select();
  res.json(locations);
};

export const show = async (req: Request, res: Response) => {
  const woeid = req.params.woeid;
  const date = new Date().toISOString().replace(/-/g, '/').split('T')[0];
  console.log(date);
  const predictions = await Axios({
    method: 'get',
    url: `${weatherApiUrl}/location/${woeid}/${date}`
  });
  console.log(predictions.data);
  res.json(locationSerializer.show(predictions.data[0]));
};

export const create = async (req: Request, res: Response) => {
  const result = await Axios({
    method: 'get',
    url: `${weatherApiUrl}/location/search/?query=${req.body.name}`    
  });
  if(result.data.length > 0) {
    const location = result.data[0];
    const newLocation: Location = {
      title: location.title,
      woeid: location.woeid,
      locationType: location.location_type,
      lattLong: location.latt_long
    }
    await database('locations').insert(newLocation);
    res.sendStatus(201);
  } else {
    res.sendStatus(404);
  }
};