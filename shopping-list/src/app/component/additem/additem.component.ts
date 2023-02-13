import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Route, Router } from '@angular/router';
import { Item } from 'src/models/item';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit{
 id: number=0;
 title:string='';
 price:number=0;
 quantity:number=0;



constructor(private itemService:ItemService, private router:Router) { }

ngOnInit(): void {
}
onSubmit(){
  const items = new Item();
  items.id = this.id;
  items.title = this.title;
  items.price = this.price;
  items.quantity = this.quantity;
  items.completed = false;

 //this.itemService.addItem(items);
 this.itemService.addItem(items).subscribe(i=>{
  this.router.navigate(['/']);

})

}

}

