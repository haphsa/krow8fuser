export interface FeedItem {
  id: number;
  code: string;
  title: string;
  subtitle: string;
  imgUrl: string;
  videoDesc: string;
  details: {
    stat1: string;
    stat2: string;
    stat3: string;
    description: string;
  };
}

export interface MenuItem {
  id: string;
  label: string;
  subtitle: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { id: 'process', label: 'OUR PROCESS', subtitle: 'A-to-Z Manufacturing Pipeline & Quality Metrics' },
  { id: 'collections', label: 'COLLECTIONS', subtitle: 'Sample Garment Lines, Heavyweights & Tech Packs' },
  { id: 'capabilities', label: 'CAPABILITIES', subtitle: 'Capacity, Laser CNC, Custom Dye & Machinery Specs' },
  { id: 'sustainability', label: 'SUSTAINABILITY', subtitle: 'Closed-Loop Dyeing, GOTS Cotton & Zero Waste' },
  { id: 'contact', label: 'CONTACT', subtitle: 'Inquire Production Slot / Request Tech Pack Quote' },
];

export const FACTORY_FEEDS: FeedItem[] = [
  {
    id: 1,
    code: 'CAM_01',
    title: 'PRECISION STITCHING',
    subtitle: 'AUTOMATED SEWING MATRIX // HEAVY-DUTY LOCKSTITCH',
    imgUrl: '/__fuser/media/hero-sewing',
    videoDesc: 'High-speed automated lockstitch machine assembling 14oz raw selvedge denim panels with 100% bonded nylon thread.',
    details: {
      stat1: 'RPM: 3,800',
      stat2: 'TENSION: 4.2 N',
      stat3: 'PRECISION: 0.05mm',
      description: 'Computer-controlled single and twin-needle sewing stations ensuring consistent tensile strength and stitch density across high-stress garment seams.'
    }
  },
  {
    id: 2,
    code: 'CAM_02',
    title: 'RAW TEXTILE MATRIX',
    subtitle: 'SPECTRUM INVENTORY // GOTS ORGANIC COTTON & LINEN',
    imgUrl: '/__fuser/media/thumb-fabric-rolls',
    videoDesc: 'Climate-controlled textile vault housing custom mill knits, 400GSM french terry, and technical ripstop textiles.',
    details: {
      stat1: 'INVENTORY: 85,000M',
      stat2: 'GSM RANGE: 180-550',
      stat3: 'TEMP: 21.5°C',
      description: 'Traceable raw material stock direct from certified sustainable mills. Every batch pre-tested for shrinkage, color fastness, and torque resilience.'
    }
  },
  {
    id: 3,
    code: 'CAM_03',
    title: 'LASER PATTERN CUTTING',
    subtitle: 'CNC OPTICAL CUTTING TABLE // ZERO LASER DISTORTION',
    imgUrl: '/__fuser/media/thumb-pattern-cut',
    videoDesc: 'Dual-head CO2 laser cutting system nesting tech packs onto multi-ply fabric sheets with 99.4% material yield.',
    details: {
      stat1: 'CUT SPEED: 1,200mm/s',
      stat2: 'ACCURACY: ±0.01mm',
      stat3: 'WASTE: < 0.6%',
      description: 'Automated CAD-to-fabric cutting bed eliminating manual scissors distortion. Sealed edge technology prevents fraying on technical outerwear materials.'
    }
  },
  {
    id: 4,
    code: 'CAM_04',
    title: 'CUSTOM DYE & YARN LAB',
    subtitle: 'PANTONE MATCHING SYSTEM // CLOSED-LOOP DYEING',
    imgUrl: '/__fuser/media/thumb-thread-spools',
    videoDesc: 'Precision color formulation laboratory producing custom garment washes, pigment dyes, and reactive thread colors.',
    details: {
      stat1: 'COLOR DELTA: < 0.3',
      stat2: 'WATER RECYCLING: 98%',
      stat3: 'BATCH CAPACITY: 500KG',
      description: 'Spectrophotometer-verified color consistency across garment runs. Non-toxic low-impact dyes with zero wastewater runoff.'
    }
  },
  {
    id: 5,
    code: 'CAM_05',
    title: 'FINISHING & ASSEMBLY LINE',
    subtitle: 'OVERHEAD CONVEYOR MATRIX // QUALITY CHECKPOINTS',
    imgUrl: '/__fuser/media/thumb-finishing-line',
    videoDesc: 'Continuous monorail conveyor carrying assembled outerwear garments through steam-tunnel presses and hardware attachment.',
    details: {
      stat1: 'LINE SPEED: 450 units/hr',
      stat2: 'INSPECTIONS: 6 PASS',
      stat3: 'PRESS TEMP: 165°C',
      description: 'Automated garment transit system connecting stitching modules directly to final pressing, trimming, and barcode labeling.'
    }
  },
  {
    id: 6,
    code: 'CAM_06',
    title: 'MASTER GARMENT SHOWCASE',
    subtitle: 'FINISHED SPECIMEN // APPAREL ARCHITECTURE',
    imgUrl: '/__fuser/media/thumb-final-garment',
    videoDesc: 'Finished specimen 06: Heavyweight drop-shoulder tee with reinforced rib collar and custom silicone brand neck tape.',
    details: {
      stat1: 'FABRIC: 320GSM ORGANIC',
      stat2: 'FIT: OVERSIZED TACTICAL',
      stat3: 'MOQ: 100 UNITS',
      description: 'Ready-for-retail finished clothing manufactured to exact client tech packs with custom brand labeling, hangtags, and sustainable polybags.'
    }
  }
];
