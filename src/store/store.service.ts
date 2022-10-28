import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cockpit, CockpitDocument } from './schemas/cockpit.schema';
import { Hold, HoldDocument } from './schemas/hold.schema';
import { Engine, EngineDocument} from "./schemas/engine.schema";

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Hold.name)
    private readonly holdModel: Model<HoldDocument>,
    @InjectModel(Cockpit.name)
    private readonly cockpitModel: Model<CockpitDocument>,
    @InjectModel(Engine.name)
    private readonly engineModel: Model<EngineDocument>,
  ) {}

  findHolds(): Promise<Hold[]> {
    return this.holdModel.find().exec();
  }

  findCockpits(): Promise<Cockpit[]> {
    return this.cockpitModel.find().exec();
  }

  findEngine(): Promise<Engine[]> {
    return this.engineModel.find().exec();
  }
}
