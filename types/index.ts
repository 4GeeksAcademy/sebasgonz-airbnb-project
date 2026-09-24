export interface Listing {
  id: string;
  title: string;
  location: string;
  category: string;
  pricePerNight: number;
  rating: number;
  imageUrl: string;
}

export interface Booking {
  id: string;
  listingId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface RoomDetail extends Listing {
  reviews: number;
  hostName: string;
  hostYears: number;
  maxGuests: number;
  amenities: Amenity[];
  photos: string[];
}
