import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HoldDocument = Hold & Document;

@Schema()
export class Hold {
  @Prop()
  description: string;

  @Prop()
  volume: string;

  @Prop()
  capacity: string;

  @Prop()
  hull: string;
}

export const HoldSchema = SchemaFactory.createForClass(Hold);
