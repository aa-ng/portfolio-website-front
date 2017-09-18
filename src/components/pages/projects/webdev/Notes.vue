<template>
  <v-container>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md10>
        <v-layout column>
          <v-container grid-list-md>
            <v-alert info :value="newUser">
              Welcome! Notes are saved using local storage
            </v-alert>
            <alex-cards :cards="cards"></alex-cards>
          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Cards from '../../../cards/Cards.vue'
  import componentData from '../../../../data/componentData'

  export default {
    data () {
      return {
        /*
        arbitrary limit for max amount of notes
        that can be stored at one time
         */
        maxNotes: 10,
        // current note user is writing
        currentNote: {label: 'Note', required: true, model: '', max: 110, multiline: true},
        // all saved notes
        notes: [],
        // stores if the user has visited the app before
        newUser: true
      }
    },
    created () {
      if (localStorage) {
        // retrive stored notes from local storage
        var notes = JSON.parse(localStorage.getItem('notes'))
        // retrieve if user has visited the application before
        var newUser = localStorage.getItem('newNotesUser')
        // if notes where found from local storage
        if (notes) {
          console.log('saved notes found: ' + notes)
          // adding back delete function to notes since local storage doesn't seem to store the delete function
          notes.forEach(note => {
            note.action = this.deleteNote
          })
          this.notes = notes
        }
        if (newUser) { // old user so set the flag to our stored value
          newUser = JSON.parse(newUser)
          this.newUser = newUser
        } else { // new user so set the flag to false so we remember later
          localStorage.setItem('newNotesUser', false)
        }
      } else {
        alert('Your browser does not support local storage notes can not be saved.')
      }
    },
    methods: {
      saveNote () {
        console.log(this.currentNote.model.length > 0)
        if (this.currentNote.model.length > 0 && this.notes.length < this.maxNotes) {
          this.notes.push({note: this.currentNote.model, model: false, action: this.deleteNote})
          this.currentNote.model = ''
          if (localStorage) {
            localStorage.setItem('notes', JSON.stringify(this.notes))
          }
        } else if (this.notes.length === this.maxNotes) {
          alert('Maximum note space exceeded')
        } else {
          alert('Can not save empty note')
        }
      },
      deleteNote (tile) {
        if (this.notes.length > 0) {
          this.notes.splice((this.notes.indexOf(tile)), 1)
          if (localStorage) {
            localStorage.setItem('notes', JSON.stringify(this.notes))
          }
        }
      }
    },
    computed: {
      progress () {
        return {
          value: Math.floor(this.notes.length / this.maxNotes * 100),
          width: 15,
          size: 100
        }
      },
      cards () {
        return [
          {
            toolbar: {
              title: 'Notes overview',
              color: 'accent'
            },
            body: {
              flex: 12,
              title: 'Notes app',
              summary: 'Welcome to my notes app!',
              textalign: 'text-xs-center',
              progress: this.progress
            }
          },
          {
            toolbar: {
              title: 'Add a note',
              color: 'accent'
            },
            body: {
              flex: 12,
              title: 'Add a note',
              form: {
                inputs: [ this.currentNote ],
                action: {
                  label: 'Save note',
                  icon: 'save',
                  click: this.saveNote
                }
              }
            }
          },
          {
            toolbar: {
              title: 'Edit saved notes',
              color: 'accent'
            },
            body: {
              flex: 12,
              summary: 'Note checkboxes are currently a work in progress',
              list: {
                title: 'Saved notes',
                tiles: this.notes
              },
              buttons: [{label: 'Delete selected notes', action: 'test'}]
            }
          }
        ]
      }
    },
    components: {
      [componentData.cards]: Cards
    }
  }
</script>

<style scoped>
  .container { padding: 16px 8px; }
  .alert.info { margin: 10px 4px; }
</style>
