import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-bread-crumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit, OnDestroy {

  public titulo: string = '';
  tituloSub$: Subscription;

  constructor( private router: Router) {
    this.tituloSub$ =  this.getDataRoute().subscribe( ({titulo}) => {
      this.titulo = titulo;
      document.title = titulo;
    });;
  }

  ngOnInit(): void {
    // code
  }

  ngOnDestroy(): void{
    this.tituloSub$.unsubscribe();
  }

  getDataRoute(){
    return this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event:ActivationEnd) => event.snapshot.firstChild === null ),
      map((event:ActivationEnd) => event.snapshot.data)
    )
  }

}
