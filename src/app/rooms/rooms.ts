export interface Rooms {
  numberOfRooms: number;
  availableRooms: number;
  bookedRooms: number;
}
export interface RoomList {
  roomNumber: number;
  roomType: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
}
