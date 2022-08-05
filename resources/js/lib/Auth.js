
const STORED_TOKEN_NAME = 'sanctum-token'
export default class {
  constructor() {
    this.user = new User
    this.loginForm = new LoginForm
    this.loggedIn = false

    const storedToken = window.localStorage.getItem(STORED_TOKEN_NAME)
    if (storedToken) {
      this.fetchUser(storedToken)
    }
  }
  fetchUser(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axios.get('/api/user')
      .then(res => {
        this.setAsLoggedIn({ user: res.data })
      })
      .catch(err => {
        console.log('failed get request to /api/user', err, err.response)
      })
  }
  setAsLoggedIn({ token, user }) {
    this.user.fill(user)
    this.loggedIn = true
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      window.localStorage.setItem(STORED_TOKEN_NAME, token)
    }
  }
  setAsLoggedOut() {
    this.user.empty()
    this.loggedIn = false
    axios.defaults.headers.common['Authorization'] = null
    window.localStorage.removeItem(STORED_TOKEN_NAME)
  }
  logout() {
    axios.post('/api/logout')
      .then(() => {
        this.setAsLoggedOut()
      })
      .catch(console.error)
  }
  submit(registering, success) {
    const fields = this.loginForm.fieldsFor(registering)
    const data = fields.reduce((data, field) => {
      data[field.name] = field.val
      return data
    }, {})
    if ( ! this.checkFilled({ fields })) {
      return false
    }
    if (registering) {
      if (data.password !== data.password_confirmation) {
        fields.find(f => f.name === 'password_confirmation').err = 'Must match password'
        return false
      }
    }
    if (registering) {
      axios.post('/api/register', data)
        .then(res => {
          console.log('registered', data)
          this.setAsLoggedIn(res.data)
          success()
        })
        .catch(err => {
          const errors = err.response?.data?.errors
          if (typeof errors === 'object' && errors !== null) {
            fields.forEach(field => {
              if (field.name in errors) {
                const err = errors[field.name]
                if (Array.isArray(err) && err.length) {
                  field.err = err[0]
                }
              } else {
                console.log('field.name not in errors', field.name, errors)
              }
            })
          } else {
            console.log('errors is not array', errors)
          }
          this.loginForm.generalError = 'Sorry, ' + err.response?.data?.message
        })
    } else {
      axios.post('/api/login', data)
        .then(res => {
          this.setAsLoggedIn(res.data)
          success()
        })
        .catch(() => {
          this.loginForm.generalError = 'Sorry, these credentials are invalid'
        })
    }
    return true
  }
  checkFilled({ registering, i, fields }) {
    let missing = false
    if (typeof fields === 'undefined') {
      fields = this.loginForm.fieldsFor(registering)
    }
    fields.forEach((field, j) => {
      if (typeof i === 'undefined' || j <= i) {
        if (field.val === '') {
          field.err = 'Please fill'
          missing = true
        } else {
          field.err = ''
        }
      }
    })
    const valid = ! missing
    if (valid) {
      this.loginForm.generalError = ''
    }
    return ! missing
  }
}


class User {
  constructor() {
    this.empty()
  }
  empty() {
    this.name = ''
    this.email = ''
    this.id = 0
  }
  fill(props) {
    this.name = props.name
    this.email = props.email
    this.id = props.id
  }
}

class LoginForm {
  constructor() {
    this.generalError = ''
    this.fields =
      [
        { name: 'email', label: 'Email address', type: 'email', showAtLogin: true },
        { name: 'name', label: 'Name', type: 'text', showAtLogin: false },
        { name: 'password', label: 'Password', type: 'password', showAtLogin: true },
        { name: 'password_confirmation', label: 'Password Confirmation', type: 'password', showAtLogin: false },
      ].map(props => new Field(props))
  }
  fieldsFor(registering) {
    return registering
      ? this.fields
      : this.fields.filter(field => field.showAtLogin)
  }
}

class Field {
  constructor(props) {
    this.name = props.name
    this.label = props.label
    this.type = props.type
    this.showAtLogin = props.showAtLogin
    this.val = ''
    this.err = ''
  }
}

