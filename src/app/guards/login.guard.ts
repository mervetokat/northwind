import { CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';


export const loginGuard: CanActivateFn = (route, state) => {
  
  return true
};
