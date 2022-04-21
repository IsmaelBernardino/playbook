const twitter = {
  user: 'Abdalan',
  userName: 'abda',
  bio: 'Web developer',
  trending: 'LaunchX',
  hastag: '#fullstack',
  twit: function () {
    return `${this.userName} has comment the trending topic of ${this.trending} with a ${this.hastag}`
  }
}
console.log(twitter.twit())

const Facebook = {
  user: 'abdalan',
  userName: 'abda',
  post: 'jdklajlkdsaljd',
  biography: 'cdcdcdcdcd',
}

console.log(Facebook)

const Uber = {
  user: '',
  userImage: '',
  userDescripcion: '',
  destination: '',
  aprox_time: '',
  driverName: '',
  driverPlates: '',
}