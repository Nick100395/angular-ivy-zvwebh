import { Component, VERSION } from '@angular/core';

export interface Past {
  position: string;
  date_start: Date;
  date_end: Date;
}

export interface Present {
  position: string;
  date_start: Date;
  date_present: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  intro = 'Nisarg is a master’s graduate from Carleton University with a degree in Electrical and Computer Engineering. He has worked on several projects during his academic career including the development of an alumni website. He is passionate about working in a team and skilled in software development and programming. Nisarg believes that he has a strong ability to meet tight deadlines along with quality in work to accomplish desired goals. He has a keen interest in dealing with challenges which makes him an ideal software developer.';

  displayedColumns = ['Degree', 'University', 'Duration']

  dataSource = [{degree:'B.Tech. - Computer Engineering',  university:'Indus University', duration:'July 2012 - June 2016',}, {degree: 'M.Eng. - Electrical & Computer Engineering', university:'Carleton University', duration:'Jan 2017 - Dec 2018'}]

  panel1OpenState = false;
  panel2OpenState = false;
  panel3OpenState = false;
  panel4OpenState = false;

  duties_TCS = 'Worked on the development of alumni website for Indus University in a team. Implemented efficient code with minimized number of lines, particularly with C# and C++. Identified and implemented areas of modification in existing programs. Maintained and upgraded existing systems by making them more user friendly. Tested and evaluated new programs and fixed bugs/deficiencies';

  duties_FDM = 'Completed 16 weeks of Java training. Worked on various projects such as interview feedback system, e-health care system, Tic-Tac-Toe game, user registration, etc. in Java. Followed scrum model for the group project and worked closely in a cross functional team to accomplish desired user stories/tasks for each sprint. Currently upskilling AWS, Angular JS, JavaScript, and Node JS.';


  experience_present: Present[] = [
    {
      position: 'Junior Software Developer - FDM Group Academy, Toronto, Canada',
      date_start: new Date('2/18/20'),
      date_present: 'Present'
    }
  ];
  experience_past: Past[] = [
    {
      position: 'Software Developer - Tata Consultancy Services, Ahmedabad, India',
      date_start: new Date('1/4/16'),
      date_end: new Date('12/23/2016')
    }
  ];
  
}
