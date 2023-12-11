import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  RecipeForm: FormGroup;
  RecipeService:RecipeService;
  file: File;
  isUpload: boolean = false
  image:string="";
  isSended:boolean=false
  constructor(private FormBuilder: FormBuilder) {
    this.RecipeForm = this.FormBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.pattern(/[a-zA-Z0-9 ]/),
          Validators.minLength(3),
        ],
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(80),
          Validators.maxLength(500),
        ],
      ],
      instructions: ['', [Validators.required]],
      cooking_details:['',Validators.required],
      type:['',Validators.required],
      photo:['',[Validators.required]],
      category:['',Validators.required],

      categoryName:[''] // here when the user want to add a new category

    });
  }

  uploadSection = () => {
    this.isUpload ? this.isUpload = false : this.isUpload = true;

  }

  onFileSelected = (event: any) => {
    const fd = new FormData()
    this.file = event.target?.files[0]
    fd.append('photo',this.file)
    this.RecipeService.uploadImg(fd).subscribe((res) => {
      console.log(res)
      this.image=res
      this.isSended=true
    })

  }
}
