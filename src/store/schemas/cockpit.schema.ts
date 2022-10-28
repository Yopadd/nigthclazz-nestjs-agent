import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CockpitDocument = Cockpit & Document;

@Schema()
export class Cockpit {
  @Prop()
  description: string;

  @Prop()
  weapon: string;

  @Prop()
  hull: string;

  @Prop()
  fieldOfView: string;
}

export const CockpitSchema = SchemaFactory.createForClass(Cockpit);
