import { Component } from '@angular/core';
import { RoomList, Rooms } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent {
  numberOfRooms = 10;
  hideRooms = false;
  toggleTable = true;
  HandlehideRooms() {
    this.hideRooms = !this.hideRooms;
  }
  tableHandle() {
    this.toggleTable = !this.toggleTable;
  }
  rooms: Rooms = {
    numberOfRooms: 10,
    availableRooms: 5,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [
    {
      roomNumber: Math.ceil(Math.random() * 300),
      roomType: 'Deluxe',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
      photos: '',
      price: 599,
    },
    {
      roomNumber: Math.ceil(Math.random() * 300),
      roomType: 'Deluxe',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
      photos: '',
      price: 599,
    },
    {
      roomNumber: Math.ceil(Math.random() * 300),
      roomType: 'Large Deluxe',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
      photos: '',
      price: 1599,
    },
    {
      roomNumber: Math.ceil(Math.random() * 300),
      roomType: 'Duplex',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
      photos: '',
      price: 799,
    },
    {
      roomNumber: Math.ceil(Math.random() * 300),
      roomType: 'Susane',
      checkInTime: new Date('2021-01-01'),
      checkOutTime: new Date('2021-01-02'),
      photos: '',
      price: 996,
    },
  ];
}
