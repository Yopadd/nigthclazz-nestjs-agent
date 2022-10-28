import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EngineDocument = Engine & Document;

@Schema()
export class Engine {
  @Prop()
  description: string;

  @Prop()
  speed: string;

  @Prop()
  consumption: string;

  @Prop()
  acceleration: string;
}

export const EngineSchema = SchemaFactory.createForClass(Engine);
