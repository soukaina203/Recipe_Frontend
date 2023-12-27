import { Component, inject } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Category } from 'src/app/shared/models/category';
import { CategoryService } from 'src/app/shared/services/category.service';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
})
export class CreateComponent {
  RecipeForm1: FormGroup;
  RecipeForm2: FormGroup;
  RecipeService = inject(RecipeService);
  CategoryService = inject(CategoryService);
  IsShowAutreInput: boolean = false;
  Categories: Category[];
  Types = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Appetizers',
    'Desserts',
    'Tea Time',
  ];
  file: File;
  isUpload: boolean = false;
  image: string = '';
  isSended: boolean = false;
 private FormBuilder =inject(FormBuilder)
  userId:number=0;
  createForms(){
    this.RecipeForm1 = this.FormBuilder.group({
      user_id:[this.userId],
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
          Validators.minLength(10),
          Validators.maxLength(500),
        ],
      ],
      photo: [this.image, []],
      category_id: ['', Validators.required],

      categoryName: [''],
      // here when the user want to add a new category
    });
    this.RecipeForm2 = this.FormBuilder.group({
      instructions: ['', [Validators.required]],
      cooking_details: ['', Validators.required],
      type: ['', Validators.required], // Meals
      cooking_time:['',Validators.required]
    });
  }



  uploadSection = () => {
    this.isUpload ? (this.isUpload = false) : (this.isUpload = true);
  };
  showAutreInput = (b: string) => {
    b === 't'
      ? (this.IsShowAutreInput = true)
      : (this.IsShowAutreInput = false);
  };

  onFileSelected = (e: any) => {
    console.log('hhf');
    const fd = new FormData();
    fd.append('photo', e.target.files[0]);

    this.RecipeService.uploadImg(fd).subscribe((res) => {
      this.image = res.image_url;
      console.log(this.image);
      this.RecipeForm1.get('photo')?.setValue(res.image_url)

      this.isSended = true;
    });
  };
  ngOnInit() {
    this.CategoryService.getAll().subscribe((res) => {
      this.Categories = res;
    });
    let userString = localStorage.getItem('user');
    let parsedUser;

    if (userString) {
        parsedUser = JSON.parse(userString);
        this.userId=parsedUser.id
        console.log(this.userId)
    } else {
        console.error('User data not found in localStorage');
    }
    this.createForms()
  }

  submit(RecipeForm1:Form ,RecipeForm2:Form){

    const Recipe = {
      ...RecipeForm1,
      ...RecipeForm2
    };
    console.log(Recipe);
    this.RecipeService.SendData(Recipe).subscribe((res)=>{
      console.log(res)
    })

  }
}
