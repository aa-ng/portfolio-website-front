<template>
  <v-container>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md10>
        <v-layout column>
          <v-container grid-list-md>
            <v-alert info :value="newUser">
              Welcome! Notes are saved using local storage
            </v-alert>
            <alex-note-cards :cards="cards"></alex-note-cards>
          </v-container>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import Cards from '../../../cards/Cards.vue'

  export default {
    data () {
      return {
        maxNotes: 10,
        currentNote: {label: 'Note', required: true, model: '', max: 110, multiline: true},
        notes: [],
        newUser: true
      }
    },
    created () {
      if (localStorage) {
        var notes = JSON.parse(localStorage.getItem('notes'))
        var newUser = localStorage.getItem('newNotesUser')
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
      'alex-note-cards': Cards
    }
  }
</script>

<style scoped>
  .container { padding: 16px 8px; }
  .alert.info { margin: 10px 4px; }
</style>
