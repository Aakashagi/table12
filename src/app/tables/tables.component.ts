import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  searchText:any;

  product = [
  {date:11,number:'55',placed:'Coimbatore',np:'112',pd:'New gadgets',otv:'1234',dat:'12/04/2022',comment:'requested',status:'purchase',color:'rgb(127, 252, 173)'},
  {date:12,number:'11',placed:'Maduari',np:'124',pd:'New gadgets & mobiles',otv:'1234',dat:'22/03/2022',comment:'requested',status:'Completed',color:'#ff8585'},
  {date:13,number:'23',placed:'Chennai',np:'412',pd:'Medicine',otv:'334',dat:'2/03/2022',comment:'requested',status:'purchase',color:'#ff8585' },
  {date:14,number:'45',placed:'Coimbatore',np:'462',pd:'Cloth materials',otv:'334',dat:'12/06/2022',comment:'requested',status:'Completed',color:'#cef565' },
  {date:15,number:'65',placed:'Salem',np:'652',pd:'Fruits',otv:'674',dat:'2/02/2022',comment:'requested',status:'Completed' ,color:'#cef565'},
  {date:16,number:'57',placed:'Erode',np:'102',pd:'Vegetables',otv:'374',dat:'19/03/2022',comment:'requested',status:'purchase',color: '#76f565' },
  {date:17,number:'559',placed:'Tirupur',np:'372',pd:'Medicine',otv:'9864',dat:'12/05/2022',comment:'requested',status:'Completed' ,color:'#76f565' },
  {date:18,number:'52',placed:'Erode',np:'183',pd:'Goods',otv:'847',dat:'2/02/2002',comment:'requested',status:'purchase' ,color:'#fdd398' },
  {date:19,number:'15',placed:'Tirupur',np:'487',pd:'New gadgets',otv:'174',dat:'15/01/2022',comment:'requested',status:'purchase',color:'#fdd398'  },
  {date:1,number:'65',placed:'Nilgiris',np:'497',pd:'Machine',otv:'124',dat:'19/02/2022',comment:'requested',status:'purchase' ,color:'#3fb8f5' },
  {date:24,number:'75',placed:'Nilgiris',np:'276',pd:'Stationary Products',otv:'734',dat:'12/05/2022',comment:'requested',status:'purchase',color:' #3fb8f5'  },
  {date:45,number:'215',placed:'Vellore',np:'13',pd:'Store Items',otv:'834',dat:'30/01/2022',comment:'requested',status:'Completed' ,color:'#65f5df' },
  {date:21,number:'33',placed:'Namakal',np:'376',pd:'Delivery',otv:'734',dat:'12/09/2021',comment:'requested',status:'Completed',color:'#65f5df'  },
  {date:41,number:'55',placed:'Coimbatore',np:'372',pd:'Vegetables',otv:'174',dat:'21/02/2022',comment:'requested',status:'purchase' ,color:'rgb(127, 252, 173)' },
  {date:81,number:'76',placed:'Salem',np:'897',pd:'New gadgets',otv:'5634',dat:'22/04/2022',comment:'requested',status:'Completed' ,color:'rgb(127, 252, 173)' },



];

  constructor() { }

  ngOnInit(): void {
  }

}
