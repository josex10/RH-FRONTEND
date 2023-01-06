import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class HandleErrorService {

  constructor(private toastrs: ToastrService) { }

   // Handling HTTP Errors using Toaster
   public handleError(err: HttpErrorResponse) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      console.log(err)
      // The backend returned an unsuccessful response code.
      errorMessage = "Something went wrong!";
    }
    console.log(errorMessage)
    this.toastrs.error(errorMessage);
  }
}
