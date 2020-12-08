import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-program',
  templateUrl: './program.page.html',
  styleUrls: ['./program.page.scss'],
})
export class ProgramPage implements OnInit {

  items = [
    {
      id: 1,
      title: 'FAT LOSS',
      description: 'UNISEX BEGINNER',
      background: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/breakfast.jpg) center bottom no-repeat'
    },
    {
      id: 2,
      title: 'FAT LOSS',
      description: 'FEMALE INTERMEDIATE',
      background: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/lunchanddinner.jpg) center bottom no-repeat'
    },
    {
      id: 3,
      title: 'FAT LOSS',
      description: 'MALE INTERMEDIATE',
      background: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/smoothie-ingredients.jpg) center bottom no-repeat'
    },
    {
      id: 4,
      title: 'LEAN MUSCLE GAIN',
      description: 'UNISEX BEGINNER',
      background: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/breakfast.jpg) center bottom no-repeat'
    },
    {
      id: 5,
      title: 'LEAN MUSCLE GAIN',
      description: 'MALE INTERMEDIATE',
      background: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/snacks.jpg) center bottom no-repeat'
    },
    {
      id: 6,
      title: 'LEAN MUSCLE GAIN',
      description: 'FEMALE INTERMEDIATE',
      background: 'linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(../../assets/imgs/smoothie-ingredients.jpg) center bottom no-repeat'
    },
  ];

  schedules = [
    {
      itemId: 1,
      schedule: [
        {
          week: '1-2',
          trainings: [
            [
              {
                exercise: "Globet squat",
                sets: "4",
                reps: "12",
                note: '',
                file:'Goblet_Squat'
                //rowSpan: 3
              },
              {
                exercise: "Press ups",
                sets: "4",
                reps: "12",
                note: '',
                file:'Press_Ups'
              },
              {
                exercise: "Invented rows",
                sets: "4",
                reps: "12",
                note: '',
                file:'Inverted_Row'
              },
              {
                exercise: "Cardio-treadmill",
                sets: "15mins",
                reps: "",
                note: '',
                file:''
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "20",
                note: '',
                file:'Crunch'
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "20",
                note: '',
                file:'Back_Extension'
              }
            ],
            [
              {
                exercise: "Reverse Lunges",
                sets: "4",
                reps: "16",
                note: 'Increase weight by smallest possible margin from previous week',
                rowSpan: 4,
                file:'Reverse_Lunge'
              },
              {
                exercise: "Lat pull down",
                sets: "4",
                reps: "16",
                file:'Lat_Pull_Down'
              },
              {
                exercise: "DB shoulder press",
                sets: "4",
                reps: "16",
                file:''
              },
              {
                exercise: "Cardio rower",
                sets: "15mins",
                reps: "",
                file:''
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "20",
                note:'',
                file:'Crunch'
              },
              {
                exercise: "Side Plank",
                sets: "1",
                reps: "30 second each side",
                note:'Break up as necessary',
                file:'Plank'
              },
            ],
            [
              {
                exercise: "Stiff leg deadlift",
                sets: "4",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous week',
                rowSpan: 5,
                file:'Stiff_Leg_Deadlift'
              },
              {
                exercise: "DB chest press",
                sets: "4",
                reps: "16",
                file:''
              },
              {
                exercise: "Chest supported row",
                sets: "4",
                reps: "16",
                file:'Chest_Supported_Row'
              },
              {
                exercise: "Cross trainer",
                sets: "15mins",
                reps: "",
                file:''
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "20",
                file:'Crunch'
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "20",
                note:'',
                file:'Back_Extension'
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min total",
                note:'Broke up as necessary',
                file:'Plank'
              },
            ]
          ]
        },
        {
          week: '3-4',
          trainings: [
            [
              {
                exercise: "Goblet squat",
                sets: "5",
                reps: "12",
                note: '',
                file: 'Goblet_Squat'
              },
              {
                exercise: "Press ups",
                sets: "4",
                reps: "12",
                note: '',
                file: "Press_Ups"
              },
              {
                exercise: "Invented rows",
                sets: "4",
                reps: "12",
                note: '',
                file: "Inverted_Row"
              },
              {
                exercise: "Cardio-treadmill",
                sets: "20mins",
                reps: "",
                note: '',
                file: ""
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "20",
                note: '',
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "20",
                note: '',
                file: "Back_Extension"
              },
            ],
            [
              {
                exercise: "Reverse Lunges",
                sets: "4",
                reps: "16",
                note: 'Increase weight by smallest possible margin from previous week',
                rowSpan: 5,
                file: "Reverse_Lunge"
              },
              {
                exercise: "Lat pull down",
                sets: "5",
                reps: "16",
                file: "Lat_Pull_Down"
              },
              {
                exercise: "DB shoulder press",
                sets: "4",
                reps: "16",
                file: "Dumbbell_Shoulder_Press"
              },
              {
                exercise: "Cardio rower",
                sets: "20mins",
                reps: "",
                file: ""
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "20",
                file: "Crunch"
              },
              {
                exercise: "Plank",
                sets: "2",
                reps: "30 second each side",
                note: "Break up as necessary",
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Stiff leg deadlift",
                sets: "4",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous week',
                rowSpan: 5,
                file: "Stiff_Leg_Deadlift"
              },
              {
                exercise: "DB chest press",
                sets: "5",
                reps: "16",
                file: "Dumbbell_Chest_Press"
              },
              {
                exercise: "Chest supported row",
                sets: "4",
                reps: "16",
                file: "Chest_Supported_Row"
              },
              {
                exercise: "Cross trainer",
                sets: "20mins",
                reps: "",
                file: ""
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "20",
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "20",
                note: "",
                file: "Back_Extension"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1min",
                note: "Broke up as necessary",
                file: "Plank"
              },
            ]
          ]
        },
        {
          week: '5-6',
          trainings: [
            [
              {
                exercise: "Goblet squat",
                sets: "5",
                reps: "12",
                note: '',
                file: "Goblet_Squat"
              },
              {
                exercise: "Press ups",
                sets: "5",
                reps: "12",
                note: '',
                file: "Press_Ups"
              },
              {
                exercise: "Invented rows",
                sets: "5",
                reps: "12",
                note: '',
                file: "Inverted_Row"
              },
              {
                exercise: "Cardio-treadmill",
                sets: "25mins",
                reps: "",
                note: '',
                file: ""
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "20",
                note: '',
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "20",
                note: '',
                file: "Back_Extension"
              },
            ],
            [
              {
                exercise: "Reverse Lunges",
                sets: "5",
                reps: "16",
                note: 'Increase weight by smallest possible margin from previous week',
                rowSpan: 5,
                file: "Reverse_Lunge"
              },
              {
                exercise: "Lat pull down",
                sets: "5",
                reps: "16",
                file: "Lat_Pull_Down"
              },
              {
                exercise: "DB shoulder press",
                sets: "5",
                reps: "16",
                file: "Dumbbell_Shoulder_Press"
              },
              {
                exercise: "Cardio rower",
                sets: "20mins",
                reps: "",
                file: ""
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "20",
                file: "Crunch"
              },
              {
                exercise: "Plank",
                sets: "1",
                reps: "30 second each side",
                note: "Break up as necessary",
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Stiff leg deadlift",
                sets: "5",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous week',
                rowSpan: 5,
                file: "Stiff_Leg_Deadlift"
              },
              {
                exercise: "DB chest press",
                sets: "5",
                reps: "16",
                file: "Dumbbell_Chest_Press"
              },
              {
                exercise: "Chest supported row",
                sets: "5",
                reps: "16",
                file: "Chest_Supported_Row"
              },
              {
                exercise: "Cross trainer",
                sets: "25mins",
                reps: "",
                file: ''
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "20",
                file: 'Crunch'
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "20",
                note: '',
                file: 'Back_Extension'
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1min",
                note: 'Broke up as necessary',
                file: 'Plank'
              },
            ]
          ]
        }
      ]
    },

    {
      itemId: 2,
      schedule: [
        {
          week: '1-2',
          trainings: [
            [
              {
                exercise: "Lunges",
                sets: "4",
                reps: "16",
                note: '',
                file:''
                //rowSpan: 3
              },
              {
                exercise: "Glute bridge",
                sets: "3",
                reps: "16",
                note: '',
                file:'Glute_Bridge'
              },
              {
                exercise: "Bent over row",
                sets: "3",
                reps: "16",
                note: '',
                file:'Bent-over_Row'
              },
              {
                exercise: "Press ups",
                sets: "3",
                reps: "16",
                note: '',
                file:'Press_Ups'
              },
              {
                exercise: "Cardio treadmill",
                sets: "30:30",
                reps: "8mins",
                note: '',
                file:''
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note: '',
                file:'Back_Extension'
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1min",
                note: '',
                file:'Plank'
              }
            ],
            [
              {
                exercise: "Squat",
                sets: "4",
                reps: "16",
                note: '',
                file:'Squat'
              },
              {
                exercise: "DB chest press",
                sets: "4",
                reps: "16",
                note: '',
                file:''
              },
              {
                exercise: "Chest supported row",
                sets: "4",
                reps: "16",
                note: '',
                file:'Chest_Supported_Row'
              },
              {
                exercise: "Lat pull down",
                sets: "3",
                reps: "16",
                note: '',
                file:'Lat_Pull_Down'
              },
              {
                exercise: "Cardio rower",
                sets: "3",
                reps: "500m",
                note: '',
                file:''
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "25",
                note:'',
                file:'Crunch'
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note:'',
                file:'Plank'
              },
            ],
            [
              {
                exercise: "Stiff leg deadlift",
                sets: "4",
                reps: "12",
                note: '',
                file:'Stiff_Leg_Deadlift'
              },
              {
                exercise: "Goblet squat",
                sets: "4",
                reps: "16",
                note: '',
                file:'Goblet_Squat'
              },
              {
                exercise: "Db shoulder press",
                sets: "4",
                reps: "16",
                note: '',
                file:''
              },
              {
                exercise: "Single arm row",
                sets: "3",
                reps: "16",
                note: '',
                file:'Single_Arm_Row'
              },
              {
                exercise: "Cardio bike",
                sets: "20:40",
                reps: "4 mins",
                note: '',
                file:''
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "25",
                note:'',
                file:'Crunch'
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note:'',
                file:'Back_Extension'
              },
            ]
          ]
        },
        {
          week: '3-4',
          trainings: [
            [
              {
                exercise: "Lunges",
                sets: "4",
                reps: "16",
                note: '',
                file: ''
              },
              {
                exercise: "Glute bridge",
                sets: "4",
                reps: "16",
                note: '',
                file: "Glute_Bridge"
              },
              {
                exercise: "Bent over row",
                sets: "4",
                reps: "16",
                note: '',
                file: "Bent-over_Row"
              },
              {
                exercise: "Press ups",
                sets: "4",
                reps: "16",
                note: '',
                file: "Press_Ups"
              },
              {
                exercise: "Cardio treadmill",
                sets: "30:30",
                reps: "10 mins",
                note: '',
                file: ""
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note: '',
                file: "Back_Extension"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: '',
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Squat",
                sets: "4",
                reps: "16",
                note: '',
                file: "Squat"
              },
              {
                exercise: "DB chest press",
                sets: "4",
                reps: "16",
                note: '',
                file: "Dumbbell_Chest_Press"
              },
              {
                exercise: "Chest supported row",
                sets: "4",
                reps: "16",
                note: '',
                file: "Chest_Supported_Row"
              },
              {
                exercise: "Lat pull down",
                sets: "4",
                reps: "16",
                note: '',
                file: "Lat_Pull_Down"
              },
              {
                exercise: "Cardio rower",
                sets: "4",
                reps: "500m",
                note: "",
                file: ""
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "20",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: "",
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Stiff leg deadlift",
                sets: "4",
                reps: "12",
                note: '',
                file: "Stiff_Leg_Deadlift"
              },
              {
                exercise: "Goblet squat",
                sets: "4",
                reps: "16",
                note: '',
                file: "Goblet_Squat"
              },
              {
                exercise: "Chest supported row",
                sets: "4",
                reps: "16",
                note: '',
                file: "Chest_Supported_Row"
              },
              {
                exercise: "Db shoulder press",
                sets: "4",
                reps: "16",
                note: '',
                file: "Dumbbell_Shoulder_Press"
              },
              {
                exercise: "Single arm row",
                sets: "4",
                reps: "16",
                note: '',
                file: "Single_Arm_Row"
              },
              {
                exercise: "Cardio bike",
                sets: "20:40",
                reps: "6 mins",
                note: "",
                file: ""
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "25",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note: "",
                file: "Back_Extension"
              },
            ]
          ]
        },
        {
          week: '5-6',
          trainings: [
            [
              {
                exercise: "Lunges",
                sets: "5",
                reps: "16",
                note: '',
                file: ""
              },
              {
                exercise: "Glute bridge",
                sets: "4",
                reps: "16",
                note: '',
                file: "Glute_Bridge"
              },
              {
                exercise: "Bent over row",
                sets: "5",
                reps: "16",
                note: '',
                file: "Bent-over_Row"
              },
              {
                exercise: "Press ups",
                sets: "4",
                reps: "16",
                note: '',
                file: "Press_Ups"
              },
              {
                exercise: "Cardio treadmill",
                sets: "30:30",
                reps: "10 mins",
                note: '',
                file: ""
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note: '',
                file: "Back_Extension"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: '',
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Squat",
                sets: "5",
                reps: "16",
                note: '',
                file: "Squat"
              },
              {
                exercise: "DB chest press",
                sets: "4",
                reps: "16",
                note: '',
                file: "Dumbbell_Chest_Press"
              },
              {
                exercise: "Chest supported row",
                sets: "4",
                reps: "16",
                note: '',
                file: "Chest_Supported_Row"
              },
              {
                exercise: "Lat pull down",
                sets: "4",
                reps: "16",
                note: '',
                file: "Lat_Pull_Down"
              },
              {
                exercise: "Cardio rower",
                sets: "5",
                reps: "500m",
                note: '',
                file: ""
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "25",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: "",
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Stiff leg deadlift",
                sets: "5",
                reps: "12",
                note: '',
                file: "Stiff_Leg_Deadlift"
              },
              {
                exercise: "Goblet squat",
                sets: "4",
                reps: "16",
                note: '',
                file: "Goblet_Squat"
              },
              {
                exercise: "Db shoulder press",
                sets: "5",
                reps: "16",
                note: '',
                file: "Dumbbell_Shoulder_Press"
              },
              {
                exercise: "Single arm row",
                sets: "4",
                reps: "16",
                note: '',
                file: 'Single_Arm_Row'
              },
              {
                exercise: "Cardio bike",
                sets: "20:40",
                reps: "8 mins",
                note: '',
                file: ''
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "25",
                note: '',
                file: 'Crunch'
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note: '',
                file: 'Back_Extension'
              },
            ]
          ]
        }
      ]
    },

    {
      itemId: 3,
      schedule: [
        {
          week: '1-2',
          trainings: [
            [
              {
                exercise: "Lunges",
                sets: "4",
                reps: "16",
                note: '',
                file:''
              },
              {
                exercise: "Bent over row",
                sets: "4",
                reps: "16",
                note: '',
                file:'Bent-over_Row'
              },
              {
                exercise: "Bench press",
                sets: "4",
                reps: "16",
                note: '',
                file:'Bench_Press'
              },
              {
                exercise: "Lat pull down",
                sets: "3",
                reps: "16",
                note: '',
                file:'Lat_Pull_Down'
              },
              {
                exercise: "Cardio rower",
                sets: "3",
                reps: "500m",
                note: '1 min between sets',
                file:''
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note: '',
                file:'Back_Extension'
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1min",
                note: '',
                file:'Plank'
              }
            ],
            [
              {
                exercise: "Squat",
                sets: "4",
                reps: "12",
                note: '',
                file:'Squat'
              },
              {
                exercise: "Military press",
                sets: "4",
                reps: "12",
                note: '',
                file:'Military_Press'
              },
              {
                exercise: "Incline chest press",
                sets: "4",
                reps: "16",
                note: '',
                file:'Incline_Chest_Press'
              },
              {
                exercise: "Chest supported row",
                sets: "4",
                reps: "16",
                note: '',
                file:'Chest_Supported_Row'
              },
              {
                exercise: "Cardio treadmill",
                sets: "30:30",
                reps: "8 mins",
                note: '',
                file:''
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "25",
                note:'',
                file:'Crunch'
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note:'',
                file:'Plank'
              },
            ],
            [
              {
                exercise: "Stiff leg deadlift",
                sets: "4",
                reps: "12",
                note: '',
                file:'Stiff_Leg_Deadlift'
              },
              {
                exercise: "Goblet squat",
                sets: "4",
                reps: "16",
                note: '',
                file:'Goblet_Squat'
              },
              {
                exercise: "Single arm row",
                sets: "4",
                reps: "16",
                note: '',
                file:'Single_Arm_Row'
              },
              {
                exercise: "DB shoulder press",
                sets: "4",
                reps: "16",
                note: '',
                file:''
              },
              {
                exercise: "Press ups",
                sets: "3",
                reps: "",
                note: '',
                file:'Press_Ups'
              },
              {
                exercise: "Cardio bike",
                sets: "20:40",
                reps: "4 mins",
                note: '',
                file:''
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "25",
                note:'',
                file:'Crunch'
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note:'',
                file:'Back_Extension'
              },
              {
                exercise: "Side Plank",
                sets: "",
                reps: "40 secs",
                note:'Each side',
                file:'Side_Plank'
              },
            ]
          ]
        },
        {
          week: '3-4',
          trainings: [
            [
              {
                exercise: "Lunges",
                sets: "4",
                reps: "16",
                note: '',
                file: ''
              },
              {
                exercise: "Bent over row",
                sets: "4",
                reps: "16",
                note: '',
                file: "Bent-over_Row"
              },
              {
                exercise: "Bench press",
                sets: "4",
                reps: "16",
                note: '',
                file: "Bench_Press"
              },
              {
                exercise: "Lat pull down",
                sets: "4",
                reps: "16",
                note: '',
                file: "Lat_Pull_Down"
              },
              {
                exercise: "Cardio rower",
                sets: "4",
                reps: "500m",
                note: "1 min between sets ",
                file: ""
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note: '',
                file: "Back_Extension"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: '',
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Squat",
                sets: "4",
                reps: "12",
                note: '',
                file: "Squat"
              },
              {
                exercise: "Military press",
                sets: "4",
                reps: "12",
                note: '',
                file: "Military_Press"
              },
              {
                exercise: "Incline chest press",
                sets: "4",
                reps: "16",
                note: '',
                file: "Incline_Chest_Press"
              },
              {
                exercise: "Chest supported row",
                sets: "4",
                reps: "16",
                note: '',
                file: "Chest_Supported_Row"
              },
              {
                exercise: "Lat pull down",
                sets: "4",
                reps: "16",
                note: '',
                file: "Lat_Pull_Down"
              },
              {
                exercise: "Cardio treadmill",
                sets: "30:30",
                reps: "10 mins",
                note: "",
                file: ""
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "25",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: "",
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Stiff leg deadlift",
                sets: "4",
                reps: "12",
                note: '',
                file: "Stiff_Leg_Deadlift"
              },
              {
                exercise: "Goblet squat",
                sets: "4",
                reps: "16",
                note: '',
                file: "Goblet_Squat"
              },
              {
                exercise: "Single arm row",
                sets: "4",
                reps: "16",
                note: '',
                file: "Single_Arm_Row"
              },
              {
                exercise: "Db shoulder press",
                sets: "4",
                reps: "16",
                note: '',
                file: "Dumbbell_Shoulder_Press"
              },
              {
                exercise: "Press ups",
                sets: "4",
                reps: "",
                note: '',
                file: "Press_Ups"
              },
              {
                exercise: "Cardio bike",
                sets: "20:40",
                reps: "6 mins",
                note: "",
                file: ""
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "25",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note: "",
                file: "Back_Extension"
              },
              {
                exercise: "Side Plank",
                sets: "",
                reps: "40 secs",
                note: "Each side",
                file: "Side_Plank"
              },
            ]
          ]
        },
        {
          week: '5-6',
          trainings: [
            [
              {
                exercise: "Lunges",
                sets: "5",
                reps: "16",
                note: '',
                file: ""
              },
              {
                exercise: "Bent over row",
                sets: "4",
                reps: "16",
                note: '',
                file: "Bent-over_Row"
              },
              {
                exercise: "Bench press",
                sets: "4",
                reps: "16",
                note: '',
                file: "Bench_Press"
              },
              {
                exercise: "Lat pull down",
                sets: "5",
                reps: "16",
                note: '',
                file: "Lat_Pull_Down"
              },
              {
                exercise: "Cardio rower",
                sets: "5",
                reps: "500m",
                note: "1 min between sets",
                file: ""
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note: '',
                file: "Back_Extension"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: '',
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Squat",
                sets: "5",
                reps: "12",
                note: '',
                file: "Squat"
              },
              {
                exercise: "Military press",
                sets: "4",
                reps: "12",
                note: '',
                file: "Military_Press"
              },
              {
                exercise: "Incline chest press",
                sets: "5",
                reps: "16",
                note: '',
                file: "Incline_Chest_Press"
              },
              {
                exercise: "Lat pull down",
                sets: "4",
                reps: "16",
                note: '',
                file: "Lat_Pull_Down"
              },
              {
                exercise: "Chest supported row",
                sets: "5",
                reps: "16",
                note: '',
                file: "Chest_Supported_Row"
              },
              {
                exercise: "Cardio treadmill",
                sets: "30:30",
                reps: "10 mins",
                note: "",
                file: ""
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "25",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: "",
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Stiff leg deadlift",
                sets: "5",
                reps: "12",
                note: '',
                file: "Stiff_Leg_Deadlift"
              },
              {
                exercise: "Goblet squat",
                sets: "5",
                reps: "16",
                note: '',
                file: "Goblet_Squat"
              },
              {
                exercise: "Single arm row",
                sets: "4",
                reps: "16",
                note: '',
                file: "Single_Arm_Row"
              },
              {
                exercise: "DB shoulder press",
                sets: "4",
                reps: "16",
                note: '',
                file: 'Dumbbell_Shoulder_Press'
              },
              {
                exercise: "Press ups",
                sets: "4",
                reps: "",
                note: '',
                file: 'Press_Ups'
              },
              {
                exercise: "Cardio bike",
                sets: "20:40",
                reps: "8 mins",
                note: '',
                file: ''
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "25",
                note: '',
                file: 'Crunch'
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note: '',
                file: 'Back_Extension'
              },
              {
                exercise: "Side Plank",
                sets: "",
                reps: "40 secs",
                note: 'Each side',
                file: 'Side_Plank'
              },
            ]
          ]
        }
      ]
    },

    {
      itemId: 4,
      schedule: [
        {
          week: '1-2',
          trainings: [
            [
              {
                exercise: "Inverted rows",
                sets: "3",
                reps: "16",
                note: '',
                file:'Inverted_Row',
              },
              {
                exercise: "Wide grip lat pull",
                sets: "3",
                reps: "16",
                note: '',
                file:'',
                rowSpan: 3
              },
              {
                exercise: "DB Single arm rows",
                sets: "3",
                reps: "16",
                file:'Single_Arm_Row'
              },
              {
                exercise: "DB bicep curls",
                sets: "2",
                reps: "10",
                file:'Bicep_Curl'
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "20",
                note: '',
                file:'Crunch'
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "20",
                note: '',
                file:'Back_Extension'
              },
            ],
            [
              {
                exercise: "DB shoulder press",
                sets: "3",
                reps: "16",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 4,
                file:'Dumbbell_Shoulder_Press'
              },
              {
                exercise: "Incline bench press",
                sets: "3",
                reps: "16",
                file:'Incline_Chest_Press'
              },
              {
                exercise: "Press ups",
                sets: "3",
                reps: "",
                file:'Press_Ups'
              },
              {
                exercise: "Tricep extensions",
                sets: "2",
                reps: "10",
                file:'Tricep_Extension'
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "20",
                note:'',
                file:'Crunch'
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "45",
                note:'Broken up as necessary',
                file:'Plank'
              },
            ],
            [
              {
                exercise: "Goblet squat",
                sets: "5",
                reps: "16",
                note: 'Increase weight by smallest possible margin from previous week',
                rowSpan: 3,
                file:'Goblet_Squat'
              },
              {
                exercise: "Reverse lunges",
                sets: "3",
                reps: "16",
                file:'Reverse_Lunge'
              },
              {
                exercise: "Stiff leg deadlift",
                sets: "3",
                reps: "16",
                file:'Stiff_Leg_Deadlift'
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "20",
                note:'',
                file:'Back_Extension'
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min in total",
                note:'Broken up as necessary',
                file:'Plank'
              },
            ]
          ]
        },
        {
          week: '3-4',
          trainings: [
            [
              {
                exercise: "Inverted rows",
                sets: "4",
                reps: "16",
                note: '',
                file: 'Inverted_Row'
              },
              {
                exercise: "Wide grip lat pull",
                sets: "4",
                reps: "16",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 3,
                file: ""
              },
              {
                exercise: "DB Single arm rows",
                sets: "4",
                reps: "16",
                file: "Single_Arm_Row"
              },
              {
                exercise: "DB bicep curls",
                sets: "3",
                reps: "10",                
                file: "Bicep_Curl"
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "20",
                note: '',
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "20",
                note: '',
                file: "Back_Extension"
              },
            ],
            [
              {
                exercise: "DB shoulder press",
                sets: "4",
                reps: "16",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 4,
                file: "Dumbbell_Shoulder_Press"
              },
              {
                exercise: "Incline bench press",
                sets: "4",
                reps: "16",
                file: "Incline_Chest_Press"
              },
              {
                exercise: "Press ups",
                sets: "4",
                reps: "",
                file: "Press_Ups"
              },
              {
                exercise: "Tricep extensions",
                sets: "3",
                reps: "10",
                file: "Tricep_Extension"
              },              
              {
                exercise: "Crunch",
                sets: "2",
                reps: "20",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min total",
                note: "Broken up as necessary",
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Goblet squat",
                sets: "6",
                reps: "16",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 3,
                file: "Goblet_Squat"
              },
              {
                exercise: "Reverse lunges",
                sets: "4",
                reps: "16",
                file: "Reverse_Lunge"
              },
              {
                exercise: "Stiff leg deadlift",
                sets: "4",
                reps: "16",
                file: "Stiff_Leg_Deadlift"
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "20",
                note: '',
                file: "Back_Extension"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min in total",
                note: "Broken up as necessary",
                file: "Plank"
              },              
            ]
          ]
        },
        {
          week: '5-6',
          trainings: [
            [
              {
                exercise: "Inverted rows",
                sets: "5",
                reps: "16",
                note: "",
                file: "Inverted_Row"
              },
              {
                exercise: "Wide grip lat pull",
                sets: "5",
                reps: "16",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 3,
                file: ""
              },
              {
                exercise: "DB Single arm rows",
                sets: "5",
                reps: "16",
                file: "Single_Arm_Row"
              },
              {
                exercise: "DB bicep curls",
                sets: "3",
                reps: "10",
                file: "Bicep_Curl"
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "20",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "20",
                note: "",
                file: "Back_Extension"
              },
            ],
            [
              {
                exercise: "DB shoulder press",
                sets: "5",
                reps: "16",
                note: '',
                file: "Dumbbell_Shoulder_Press"
              },
              {
                exercise: "Incline bench press",
                sets: "5",
                reps: "16",
                note: "",
                file: "Bench_Press"
              },
              {
                exercise: "Press ups",
                sets: "5",
                reps: "",
                note: "",
                file: "Press_Ups"
              },
              {
                exercise: "Tricep extensions",
                sets: "3",
                reps: "10",
                note: "",
                file: "Tricep_Extension"
              },            
              {
                exercise: "Crunch",
                sets: "2",
                reps: "20",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min total",
                note: "Broken up as necessary",
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Goblet squat",
                sets: "6",
                reps: "16",
                note: "",
                file: 'Goblet_Squat'
              },
              {
                exercise: "Reverse lunges",
                sets: "5",
                reps: "16",
                note: "",
                file: "Reverse_Lunge"
              },
              {
                exercise: "Stiff leg deadlift",
                sets: "5",
                reps: "16",
                note: "",
                file: "Stiff_Leg_Deadlift"
              },              
              {
                exercise: "Back extension",
                sets: "2",
                reps: "20",
                note: "",
                file: 'Back_Extension'
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min in total",
                note: 'Broken up as necessary',
                file: 'Plank'
              },
            ]
          ]
        }
      ]
    },

    {
      itemId: 5,
      schedule: [
        {
          week: '1-2',
          trainings: [
            [
              {
                exercise: "Bent over rows",
                sets: "3",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous  week',
                file:'Bent-over_Row',
                rowSpan: 4
              },
              {
                exercise: "Wide grip lat pull",
                sets: "3",
                reps: "12",
                file:''
              },
              {
                exercise: "DB Single arm rows",
                sets: "3",
                reps: "12",
                file:'Single_Arm_Row'
              },
              {
                exercise: "Hammer curl",
                sets: "3",
                reps: "12",
                file:'HammerCurl'
              },
              {
                exercise: "Inverted row",
                sets: "1",
                reps: "",
                note: '1 min as many reps as possible ',
                file:'Inverted_Row'
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note: '',
                file:'Crunch'
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "25",
                note: '',
                file:'Back_Extension'
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: '',
                file:'Plank'
              }
            ],
            [
              {
                exercise: "Bench",
                sets: "3",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 5,
                file:'Bench_Press'
              },
              {
                exercise: "Military press",
                sets: "3",
                reps: "8",
                file:'Military_Press'
              },
              {
                exercise: "DB incline",
                sets: "3",
                reps: "12",
                file:'Incline_Chest_Press'
              },
              {
                exercise: "DB shoulder press",
                sets: "3",
                reps: "12",
                file:'Dumbbell_Shoulder_Press'
              },
              {
                exercise: "Tricep extensions",
                sets: "3",
                reps: "12",
                file:'Tricep_Extension'
              },
              {
                exercise: "Press ups",
                sets: "1",
                reps: "",
                note:'1 min as many reps',
                file:'Press_Ups'
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note:'',
                file:'Crunch'
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "25",
                note:'',
                file:'Back_Extension'
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note:'',
                file:'Plank'
              },
            ],
            [
              {
                exercise: "Squat",
                sets: "3",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 4,
                file:'Squat'
              },
              {
                exercise: "Reverse lunges",
                sets: "3",
                reps: "16",
                file:'Reverse_Lunge'
              },
              {
                exercise: "Stiff leg deadlift",
                sets: "3",
                reps: "12",
                file:'Stiff_Leg_Deadlift'
              },
              {
                exercise: "Goblet squat",
                sets: "3",
                reps: "20",
                file:'Goblet_Squat'
              },
              {
                exercise: "Side plank",
                sets: "",
                reps: "40 secs",
                note: '40 seconds each side',
                file:'Side_Plank'
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note:'',
                file:'Crunch'
              },
            ]
          ]
        },
        {
          week: '3-4',
          trainings: [
            [
              {
                exercise: "Bent over rows",
                sets: "4",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 3,
                file: 'Bent-over_Row'
              },
              {
                exercise: "Wide grip lat pull",
                sets: "4",
                reps: "12",
                file: ""
              },
              {
                exercise: "Hammer curl",
                sets: "4",
                reps: "12",
                file: "HammerCurl"
              },
              {
                exercise: "Inverted row",
                sets: "1",
                reps: "",
                note: "1 min as many reps as possible ",
                file: "Inverted_Row"
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note: '',
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "25",
                note: '',
                file: "Back_Extension"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: '',
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Bench",
                sets: "4",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 5,
                file: "Bench_Press"
              },
              {
                exercise: "Military press",
                sets: "4",
                reps: "8",
                file: "Military_Press"
              },
              {
                exercise: "DB incline",
                sets: "4",
                reps: "12",
                file: "Incline_Chest_Press"
              },
              {
                exercise: "DB shoulder press",
                sets: "4",
                reps: "12",
                file: "Dumbbell_Shoulder_Press"
              },
              {
                exercise: "Tricep extensions",
                sets: "4",
                reps: "12",
                file: "Tricep_Extension"
              },
              {
                exercise: "Press ups",
                sets: "1",
                reps: "",
                note: "1 min as many reps ",
                file: "Press_Ups"
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "25",
                note: "",
                file: "Back_Extension"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: "",
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Squat",
                sets: "4",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 4,
                file: "Squat"
              },
              {
                exercise: "Reverse lunges",
                sets: "4",
                reps: "16",
                file: "Reverse_Lunge"
              },
              {
                exercise: "Stiff leg deadlift",
                sets: "4",
                reps: "12",
                file: "Stiff_Leg_Deadlift"
              },
              {
                exercise: "Goblet squat",
                sets: "4",
                reps: "20",
                file: "Goblet_Squat"
              },
              {
                exercise: "Side plank",
                sets: "",
                reps: "40 secs",
                note: "40 seconds each side",
                file: "Side_Plank"
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note: "",
                file: "Crunch"
              },
            ]
          ]
        },
        {
          week: '5-6',
          trainings: [
            [
              {
                exercise: "Bent over rows",
                sets: "5",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 4,
                file: "Bent-over_Row"
              },
              {
                exercise: "Wide grip lat pull",
                sets: "5",
                reps: "12",
                file: ""
              },
              {
                exercise: "DB Single arm rows",
                sets: "4",
                reps: "12",
                file: "Single_Arm_Row"
              },
              {
                exercise: "Hammer curl",
                sets: "4",
                reps: "12",
                file: "HammerCurl"
              },
              {
                exercise: "Inverted row",
                sets: "2",
                reps: "",
                note: "1 min as many reps as possible",
                file: "Inverted_Row"
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note: '',
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "25",
                note: '',
                file: "Back_Extension"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: '',
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Bench",
                sets: "5",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 5,
                file: "Bench_Press"
              },
              {
                exercise: "Military press",
                sets: "4",
                reps: "8",
                file: "Military_Press"
              },
              {
                exercise: "DB incline",
                sets: "4",
                reps: "12",
                file: "Incline_Chest_Press"
              },
              {
                exercise: "DB shoulder press",
                sets: "5",
                reps: "12",
                file: "Dumbbell_Shoulder_Press"
              },
              {
                exercise: "Tricep extensions",
                sets: "4",
                reps: "12",
                file: "Tricep_Extension"
              },
              {
                exercise: "Press ups",
                sets: "2",
                reps: "",
                note: "1 min as many reps",
                file: "Press_Ups"
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "25",
                note: "",
                file: "Back_Extension"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: "",
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Squat",
                sets: "5",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 4,
                file: "Squat"
              },
              {
                exercise: "Reverse lunges",
                sets: "4",
                reps: "16",
                file: "Reverse_Lunge"
              },
              {
                exercise: "Stiff leg deadlift",
                sets: "5",
                reps: "12",
                file: "Stiff_Leg_Deadlift"
              },
              {
                exercise: "Goblet squat",
                sets: "4",
                reps: "20",
                file: 'Goblet_Squat'
              },
              {
                exercise: "Side plank",
                sets: "",
                reps: "40 secs",
                note: "40 seconds each side",
                file: 'Side_Plank'
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note: '',
                file: 'Crunch'
              },
            ]
          ]
        }
      ]
    },

    {
      itemId: 6,
      schedule: [
        {
          week: '1-2',
          trainings: [
            [
              {
                exercise: "Squat",
                sets: "4",
                reps: "8",
                note: 'Increase weight by smallest possible margin from previous  week',
                file:'Squat',
                rowSpan: 4
              },
              {
                exercise: "Bent over rows",
                sets: "3",
                reps: "12",
                file:'Bent-over_Row'
              },
              {
                exercise: "Wide grip lat pull",
                sets: "3",
                reps: "12",
                file:''
              },
              {
                exercise: "DB Single arm rows",
                sets: "3",
                reps: "12",
                file:'Single_Arm_Row'
              },
              {
                exercise: "Inverted row",
                sets: "",
                reps: "",
                note: '1 min as many reps as possible ',
                file:'Inverted_Row'
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note: '',
                file:'Back_Extension'
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: '',
                file:'Plank'
              }
            ],
            [
              {
                exercise: "Glute bridge",
                sets: "4",
                reps: "8",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 4,
                file:'Glute_Bridge'
              },
              {
                exercise: "DB bench press",
                sets: "4",
                reps: "12",
                file:'Bench_Press'
              },
              {
                exercise: "DB shoulder press",
                sets: "4",
                reps: "12",
                file:'Dumbbell_Shoulder_Press'
              },
              {
                exercise: "Triceps extensions",
                sets: "3",
                reps: "12",
                file:'Tricep_Extension'
              },
              {
                exercise: "Press ups",
                sets: "1",
                reps: "",
                note:'1 min as many reps',
                file:'Press_Ups'
              },
              {
                exercise: "Crunch",
                sets: "1",
                reps: "25",
                note:'',
                file:'Crunch'
              },
              {
                exercise: "Back extension",
                sets: "1",
                reps: "25",
                note:'',
                file:'Back_Extension'
              },
            ],
            [
              {
                exercise: "Squat",
                sets: "3",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous  wee',
                rowSpan: 4,
                file:'Squat'
              },
              {
                exercise: "Glute bridge",
                sets: "3",
                reps: "12",
                file:'Glute_Bridge'
              },
              {
                exercise: "Reverse lunges",
                sets: "3",
                reps: "16",
                file:'Reverse_Lunge'
              },
              {
                exercise: "Stiff leg deadlift",
                sets: "3",
                reps: "12",
                file:'Stiff_Leg_Deadlift'
              },
              {
                exercise: "Side plank",
                sets: "",
                reps: "40 secs",
                note: '',
                file:'Side_Plank'
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note:'',
                file:'Crunch'
              },
            ]
          ]
        },
        {
          week: '3-4',
          trainings: [
            [
              {
                exercise: "Squat",
                sets: "5",
                reps: "8",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 4,
                file: 'Squat'
              },
              {
                exercise: "Bent over rows",
                sets: "4",
                reps: "12",
                file: "Bent-over_Row"
              },
              {
                exercise: "Wide grip lat pull",
                sets: "4",
                reps: "12",
                file: ""
              },
              {
                exercise: "DB Single arm rows",
                sets: "4",
                reps: "12",
                file: "Single_Arm_Row"
              },
              {
                exercise: "Inverted row",
                sets: "",
                reps: "",
                note: "1 min as many reps as possible ",
                file: "Inverted_Row"
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "25",
                note: '',
                file: "Back_Extension"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: '',
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Glute bridge",
                sets: "5",
                reps: "8",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 4,
                file: "Glute_Bridge"
              },
              {
                exercise: "DB bench press",
                sets: "4",
                reps: "12",
                file: "Bench_Press"
              },
              {
                exercise: "DB shoulder press",
                sets: "4",
                reps: "12",
                file: "Dumbbell_Shoulder_Press"
              },
              {
                exercise: "Triceps extensions",
                sets: "3",
                reps: "12",
                file: "Tricep_Extension"
              },
              {
                exercise: "Press ups",
                sets: "1",
                reps: "",
                note: "1 min as many reps ",
                file: "Press_Ups"
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "25",
                note: "",
                file: "Back_Extension"
              },
            ],
            [
              {
                exercise: "Squat",
                sets: "4",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 4,
                file: "Squat"
              },
              {
                exercise: "Glute bridge",
                sets: "4",
                reps: "12",
                file: "Glute_Bridge"
              },
              {
                exercise: "Reverse lunges",
                sets: "4",
                reps: "16",
                file: "Reverse_Lunge"
              },
              {
                exercise: "Stiff leg deadlift",
                sets: "4",
                reps: "12",
                file: "Stiff_Leg_Deadlift"
              },
              {
                exercise: "Side plank",
                sets: "",
                reps: "40 secs",
                note: "",
                file: "Side_Plank"
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note: "",
                file: "Crunch"
              },
            ]
          ]
        },
        {
          week: '5-6',
          trainings: [
            [
              {
                exercise: "Squat",
                sets: "5",
                reps: "8",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 4,
                file: "Squat"
              },
              {
                exercise: "Bent over rows",
                sets: "4",
                reps: "12",
                file: "Bent-over_Row"
              },
              {
                exercise: "Wide grip lat pull",
                sets: "5",
                reps: "12",
                file: ""
              },
              {
                exercise: "DB Single arm rows",
                sets: "4",
                reps: "12",
                file: "Single_Arm_Row"
              },
              {
                exercise: "Inverted row",
                sets: "2",
                reps: "",
                note: "1 min as many reps as possible",
                file: "Inverted_Row"
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "25",
                note: '',
                file: "Back_Extension"
              },
              {
                exercise: "Plank",
                sets: "",
                reps: "1 min",
                note: '',
                file: "Plank"
              },
            ],
            [
              {
                exercise: "Glute bridge",
                sets: "5",
                reps: "8",
                note: 'Increase weight by smallest possible margin from previous  week',
                rowSpan: 4,
                file: "Glute_Bridge"
              },
              {
                exercise: "DB bench press",
                sets: "4",
                reps: "12",
                file: "Bench_Press"
              },
              {
                exercise: "DB shoulder press",
                sets: "4",
                reps: "12",
                file: "Dumbbell_Shoulder_Press"
              },
              {
                exercise: "Tricep extensions",
                sets: "4",
                reps: "12",
                file: "Tricep_Extension"
              },
              {
                exercise: "Press ups",
                sets: "2",
                reps: "",
                note: "1 min as many reps",
                file: "Press_Ups"
              },
              {
                exercise: "Crunch",
                sets: "2",
                reps: "25",
                note: "",
                file: "Crunch"
              },
              {
                exercise: "Back extension",
                sets: "2",
                reps: "25",
                note: "",
                file: "Back_Extension"
              },
            ],
            [
              {
                exercise: "Squat",
                sets: "5",
                reps: "12",
                note: 'Increase weight by smallest possible margin from previous week',
                rowSpan: 4,
                file: "Squat"
              },
              {
                exercise: "Glute bridge",
                sets: "4",
                reps: "12",
                file: "Glute_Bridge"
              },
              {
                exercise: "Reverse lunges",
                sets: "4",
                reps: "16",
                file: "Reverse_Lunge"
              },
              {
                exercise: "Stiff leg deadlift",
                sets: "5",
                reps: "12",
                file: 'Stiff_Leg_Deadlift'
              },
              {
                exercise: "Side plank",
                sets: "",
                reps: "40 secs",
                note: "",
                file: 'Side_Plank'
              },
            ]
          ]
        }
      ]
    }
  ];

  constructor(private router: Router, private storage: Storage) { }//,private appsPreference: AppPreferences

  // ionViewDidLoad(){
  //   AppPreferences.fetch("level").then((res) => {
  //     if(res != null){
  //       this.router.navigate(['select-train']);
  //     }
  //   });
  // }

  ngOnInit() {
  }

  goTrain(){

    var id = 1;
    ['uni beginner','female inter','male inter', 'muscle uni beginer', 'male inter','female inter']

    var sex = '';
    var train = '';
    var level = '';

    this.storage.get("sex").then((res) => { 
      if(res != null){
        sex = res;
        this.storage.get("train").then((res) => { 
          if(res != null){
            train = res;
            this.storage.get("level").then((res) => { 
              if(res != null){
                level = res;
                if(train == "weight" && sex == "female" && level == "intermediate")
                  id = 2;
                else if(train == "weight" && sex == "male" && level == "intermediate")
                  id = 3;
                else if(train == "muscle" && sex == "male" && level == "intermediate")
                  id = 5;
                else if(train == "muscle" && sex == "female" && level == "intermediate")
                  id = 6;
                else if(train == "muscle" && level == "beginner")
                  id = 4;
                
                let schedule = this.schedules.find((scheduleItem) => {
                  return scheduleItem.itemId == id;
                }).schedule;
                let item = this.items.find((item) => {
                  return item.id == id;
                });

                let navigationExtras: NavigationExtras = {
                  state: {
                    title: item.title,
                    description: item.description,
                    schedule: schedule
                  }
                };
                this.router.navigate(['training-schedule'], navigationExtras);
              }
            });
          }
        });
      }
    });

  }

}
