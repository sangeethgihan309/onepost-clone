
export type Template = 'Plain' | 'Floral' | 'Official' | 'Festive';
export type EnvelopeColor = 'Brown' | 'White' | 'Red';
export type ServiceType = 'letter' | 'printing' | 'gift' | 'invitation' | 'fine';
export type PrintingProduct = 'Banner' | 'Business Cards' | 'Flyer' | 'Sticker';
export type GiftItem = 'Chocolates' | 'Flowers' | 'Soft Toy' | 'Book Bundle';
export type EventType = 'Wedding' | 'Birthday' | 'Party' | 'Corporate';

export interface AddOns {
  handwrittenStyle: boolean;
  sticker: boolean;
  liveDesignSession: boolean;
  giftPackingVideo: boolean;
}

export interface PrintingOptions {
  productType: PrintingProduct;
  quantity: number;
  material: string;
  instructions: string;
}

export interface GiftDetails {
  item: GiftItem;
  wrapping: 'Standard' | 'Premium Gold' | 'Love Heart';
  note: string;
}

export interface InvitationDetails {
  eventType: EventType;
  date: string;
  time: string;
  venue: string;
  guestCount: number;
}

export interface FineDetails {
  referenceNo: string;
  vehicleNo: string;
  fineType: 'Traffic' | 'Police' | 'Municipal';
  amount: number;
  physicalReceipt: boolean;
}

export interface LetterData {
  serviceType: ServiceType;
  recipient: {
    name: string;
    address: string;
  };
  message: {
    content: string;
    font: 'Sinhala' | 'English';
    fontSize: number;
  };
  printing: PrintingOptions;
  gift: GiftDetails; 
  invitation: InvitationDetails;
  fine: FineDetails; // New
  design: {
    template: Template;
    envelopeColor: EnvelopeColor;
    addOns: AddOns;
  };
}