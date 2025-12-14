
import { LetterData } from './types';

export const initialLetterData: LetterData = {
  serviceType: 'letter',
  recipient: {
    name: '',
    address: '',
  },
  message: {
    content: '',
    font: 'Sinhala',
    fontSize: 16,
  },
  printing: {
    productType: 'Banner',
    quantity: 1,
    material: 'Glossy',
    instructions: ''
  },
  gift: {
    item: 'Chocolates',
    wrapping: 'Standard',
    note: ''
  },
  invitation: {
    eventType: 'Birthday',
    date: '',
    time: '',
    venue: '',
    guestCount: 10
  },
  fine: {
    referenceNo: '',
    vehicleNo: '',
    fineType: 'Traffic',
    amount: 1000,
    physicalReceipt: false
  },
  design: {
    template: 'Plain',
    envelopeColor: 'Brown',
    addOns: {
      handwrittenStyle: false,
      sticker: false,
      liveDesignSession: false,
      giftPackingVideo: false,
    },
  },
};

export const PRICING = {
  BASE: 60, // Base letter price
  HANDWRITTEN_STYLE: 20,
  STICKER: 20,
  LIVE_DESIGN_SESSION: 500,
  GIFT_PACKING_VIDEO: 300,
  PRINTING: {
    'Banner': 1500,
    'Business Cards': 2500,
    'Flyer': 45,
    'Sticker': 15
  },
  GIFTS: {
    'Chocolates': 1200,
    'Flowers': 2500,
    'Soft Toy': 1800,
    'Book Bundle': 2000,
    'WRAPPING_PREMIUM': 200
  },
  INVITATIONS: {
    'UNIT_PRICE': 50, // Per card
    'DESIGN_FEE': 200 // Base design fee
  },
  FINE_SERVICE_CHARGE: 150,
  PHYSICAL_RECEIPT_FEE: 50
};

export const MAX_CHARACTERS = 1000;