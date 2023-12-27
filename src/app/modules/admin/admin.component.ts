import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']

})
export class AdminComponent {
  dashRoutes = [
    { route: '/admin/moi', name: 'Moi', icon: 'account_circle'},
    { route: '/admin/users', name: 'Users', icon: 'group_add'},
    { route: '/admin/recipes', name: 'Recipes', icon: 'email'},
    { route: '/admin/dash/calendar', name: 'Calandrie', icon: 'event'},
    { route: '/admin/dash/cours', name: 'Cours', icon: 'history_edu'},
    { route: '/admin/dash/info', name: 'Informations', icon: 'lightbulb'},
    { route: '/admin/dash/offre', name: 'Offres', icon: 'local_offer'},
    { route: '/admin/dash/reunion', name: 'Reunion', icon: 'group'},
    // { route: '/admin/dash/facteurs', name: 'Facteurs' },
  ];
}
