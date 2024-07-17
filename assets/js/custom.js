const peopleArr = [
    {
        id: 1,
        photo: 'assets/img/Sandra_Bullock.png',
        name: 'Sandra Bullock',
        age: '59',
        gender: 'Female',
    },
    {
        id: 2,
        photo: 'assets/img/Ryan_Reynolds.png',
        name: 'Ryan Reynolds',
        age: '47',
        gender: 'Male',
    },
    {
        id: 3,
        photo: 'assets/img/Tom_Cruise.png',
        name: 'Tom Cruise',
        age: '61',
        gender: 'Male',
    },
    {
        id: 4,
        photo: 'assets/img/Jennifer_Lawrence.png',
        name: 'Jennifer Lawrence',
        age: '33',
        gender: 'Female',
    },
    {
        id: 5,
        photo: 'assets/img/Scarlett_Johansson.png',
        name: 'Scarlett Johansson',
        age: '39',
        gender: 'Female',
    },
    {
        id: 6,
        photo: 'assets/img/Johnny_Depp.png',
        name: 'Johnny Depp',
        age: '61',
        gender: 'Male',
    },
    {
        id: 7,
        photo: 'assets/img/Robert_Downey_Jr.png',
        name: 'Robert Downey Jr.',
        age: '59',
        gender: 'Male',
    },
    {
        id: 8,
        photo: 'assets/img/Chris_Hemsworth.png',
        name: 'Chris Hemsworth',
        age: '40',
        gender: 'Male',
    },
    {
        id: 9,
        photo: 'assets/img/Natalie_Portman.png',
        name: 'Natalie Portman',
        age: '43',
        gender: 'Female',
    },
    {
        id: 10,
        photo: 'assets/img/Chris_Evans.png',
        name: 'Chris Evans',
        age: '43',
        gender: 'Male',
    },
    {
        id: 11,
        photo: 'assets/img/Emma_Stone.png',
        name: 'Emma Stone',
        age: '35',
        gender: 'Female',
    },
    {
        id: 12,
        photo: 'assets/img/Ryan_Gosling.png',
        name: 'Ryan Gosling',
        age: '43',
        gender: 'Male',
    },
    {
        id: 13,
        photo: 'assets/img/Angelina_Jolie.png',
        name: 'Angelina Jolie',
        age: '49',
        gender: 'Female',
    },
    {
        id: 14,
        photo: 'assets/img/Dwayne_Johnson.png',
        name: 'Dwayne Johnson',
        age: '52',
        gender: 'Male',
    },
    {
        id: 15,
        photo: 'assets/img/Gal_Gadot.png',
        name: 'Gal Gadot',
        age: '39',
        gender: 'Female',
    },
    {
        id: 16,
        photo: 'assets/img/Robert_Pattinson.png',
        name: 'Robert Pattinson',
        age: '38',
        gender: 'Male',
    },
    {
        id: 17,
        photo: 'assets/img/Anne_Hathaway.png',
        name: 'Anne Hathaway',
        age: '41',
        gender: 'Female',
    },
    {
        id: 18,
        photo: 'assets/img/Christian_Bale.png',
        name: 'Christian Bale',
        age: '50',
        gender: 'Male',
    },
    {
        id: 19,
        photo: 'assets/img/Margot_Robbie.png',
        name: 'Margot Robbie',
        age: '33',
        gender: 'Female',
    },
    {
        id: 20,
        photo: 'assets/img/Tom_Hanks.png',
        name: 'Tom Hanks',
        age: '68',
        gender: 'Male',
    },
    {
        id: 21,
        photo: 'assets/img/Emma_Watson.png',
        name: 'Emma Watson',
        age: '34',
        gender: 'Female',
    },
    {
        id: 22,
        photo: 'assets/img/Matt_Damon.png',
        name: 'Matt Damon',
        age: '53',
        gender: 'Male',
    },
    {
        id: 23,
        photo: 'assets/img/Cate_Blanchett.png',
        name: 'Cate Blanchett',
        age: '55',
        gender: 'Female',
    },
    {
        id: 24,
        photo: 'assets/img/Joaquin_Phoenix.png',
        name: 'Joaquin Phoenix',
        age: '49',
        gender: 'Male',
    },
    {
        id: 25,
        photo: 'assets/img/Will_Smith.png',
        name: 'Will Smith',
        age: '55',
        gender: 'Male',
    },
    {
        id: 26,
        photo: 'assets/img/Charlize_Theron.png',
        name: 'Charlize Theron',
        age: '48',
        gender: 'Female',
    },
    {
        id: 27,
        photo: 'assets/img/Hugh_Jackman.png',
        name: 'Hugh Jackman',
        age: '55',
        gender: 'Male',
    },
    {
        id: 28,
        photo: 'assets/img/Keanu_Reeves.png',
        name: 'Keanu Reeves',
        age: '59',
        gender: 'Male',
    },
    {
        id: 29,
        photo: 'assets/img/Meryl_Streep.png',
        name: 'Meryl Streep',
        age: '75',
        gender: 'Female',
    },
    {
        id: 30,
        photo: 'assets/img/Ben_Affleck.png',
        name: 'Ben Affleck',
        age: '51',
        gender: 'Male',
    },
    {
        id: 31,
        photo: 'assets/img/Leonardo_DiCaprio.png',
        name: 'Leonardo DiCaprio',
        age: '49',
        gender: 'Male',
    },
    {
        id: 32,
        photo: 'assets/img/Brad_Pitt.png',
        name: 'Brad Pitt',
        age: '60',
        gender: 'Male',
    },
    {
        id: 33,
        photo: 'assets/img/Julia_Roberts.png',
        name: 'Julia Roberts',
        age: '56',
        gender: 'Female',
    },
    {
        id: 34,
        photo: 'assets/img/Mark_Wahlberg.png',
        name: 'Mark Wahlberg',
        age: '53',
        gender: 'Male',
    },
    {
        id: 35,
        photo: 'assets/img/Amy_Adams.png',
        name: 'Amy Adams',
        age: '49',
        gender: 'Female',
    },
    {
        id: 36,
        photo: 'assets/img/Jake_Gyllenhaal.png',
        name: 'Jake Gyllenhaal',
        age: '43',
        gender: 'Male',
    },
    {
        id: 37,
        photo: 'assets/img/Nicole_Kidman.png',
        name: 'Nicole Kidman',
        age: '57',
        gender: 'Female',
    },
    {
        id: 38,
        photo: 'assets/img/Javier_Bardem.png',
        name: 'Javier Bardem',
        age: '55',
        gender: 'Male',
    },
    {
        id: 39,
        photo: 'assets/img/Zoe_Saldana.png',
        name: 'Zoe Saldana',
        age: '46',
        gender: 'Female',
    },
    {
        id: 40,
        photo: 'assets/img/Bradley_Cooper.png',
        name: 'Bradley Cooper',
        age: '49',
        gender: 'Male',
    },
    {
        id: 41,
        photo: 'assets/img/Viola_Davis.png',
        name: 'Viola Davis',
        age: '58',
        gender: 'Female',
    },
    {
        id: 42,
        photo: 'assets/img/Edward_Norton.png',
        name: 'Edward Norton',
        age: '54',
        gender: 'Male',
    },
    {
        id: 43,
        photo: 'assets/img/Tom_Hardy.png',
        name: 'Tom Hardy',
        age: '46',
        gender: 'Male',
    },
    {
        id: 44,
        photo: 'assets/img/Emily_Blunt.png',
        name: 'Emily Blunt',
        age: '41',
        gender: 'Female',
    },
    {
        id: 45,
        photo: 'assets/img/Penelope_Cruz.png',
        name: 'Penelope Cruz',
        age: '50',
        gender: 'Female',
    },
    {
        id: 46,
        photo: 'assets/img/Michael_Fassbender.png',
        name: 'Michael Fassbender',
        age: '46',
        gender: 'Male',
    },
    {
        id: 47,
        photo: 'assets/img/Daniel_Craig.png',
        name: 'Daniel Craig',
        age: '56',
        gender: 'Male',
    },
    {
        id: 48,
        photo: 'assets/img/Reese_Witherspoon.png',
        name: 'Reese Witherspoon',
        age: '48',
        gender: 'Female',
    },
    {
        id: 49,
        photo: 'assets/img/Timothee_Chalamet.png',
        name: 'Timothee Chalamet',
        age: '28',
        gender: 'Male',
    },
    {
        id: 50,
        photo: 'assets/img/Elon_Musk.png',
        name: 'Elon Musk',
        age: '53',
        gender: 'Male',
    },
    {
        id: 51,
        photo: 'assets/img/Cristiano_Ronaldo.png',
        name: 'Cristiano Ronaldo',
        age: '39',
        gender: 'Male',
    },
    {
        id: 52,
        photo: 'assets/img/Beyonce.png',
        name: 'Beyonce',
        age: '42',
        gender: 'Female',
    },
    {
        id: 53,
        photo: 'assets/img/Lionel_Messi.png',
        name: 'Lionel Messi',
        age: '37',
        gender: 'Male',
    },
    {
        id: 54,
        photo: 'assets/img/Taylor_Swift.png',
        name: 'Taylor Swift',
        age: '34',
        gender: 'Female',
    },
    {
        id: 55,
        photo: 'assets/img/Bill_Gates.png',
        name: 'Bill Gates',
        age: '69',
        gender: 'Male',
    },
    {
        id: 56,
        photo: 'assets/img/Ariana_Grande.png',
        name: 'Ariana Grande',
        age: '30',
        gender: 'Female',
    },
    {
        id: 57,
        photo: 'assets/img/Rihanna.png',
        name: 'Rihanna',
        age: '36',
        gender: 'Female',
    },
    {
        id: 58,
        photo: 'assets/img/Tom_Holland.png',
        name: 'Tom Holland',
        age: '28',
        gender: 'Male',
    },
    {
        id: 59,
        photo: 'assets/img/Jennifer_Aniston.png',
        name: 'Jennifer Aniston',
        age: '55',
        gender: 'Female',
    },
    {
        id: 60,
        photo: 'assets/img/Teddy_Swims.png',
        name: 'Teddy Swims',
        age: '31',
        gender: 'Male',
    },
]

window.addEventListener('load', function() {
    const userContainer = document.querySelector('.user')
    const genderRadio = document.querySelectorAll('.gender__radio')
    const ageRange = document.querySelector('.age__range')
    const nameInput = document.querySelector('.name__input')

    function findMinAge (array) {
        let MinAge = Math.min(...array.map(item => parseInt(item.age)))
        return MinAge
    }

    let minAge  = findMinAge (peopleArr)

    function findMaxAge (array) {
        let MaxAge = Math.max(...array.map(item => parseInt(item.age)))
        return MaxAge
    }

    let maxAge  = findMaxAge (peopleArr)

    let config = {
        gender: 'All',
        age: '75',
        name: '',
        rangeVal: '55',
        rangeMin: minAge,
        rangeMax: maxAge,
    }

    const setAgeFilter = () => {
        ageRange.setAttribute ('value', config.rangeVal)
        ageRange.setAttribute ('min', config.rangeMin)
        ageRange.setAttribute ('max', config.rangeMax)
    }

    setAgeFilter()

    const renderPeople =(array)=> {
        const list = array.map (person => {
            return `<div class="user__card">
                        <div class="user__photo">
                            <img src="${person.photo}" alt="${person.name}">
                        </div>
                        <div class="user__name">${person.name}</div>
                        <div class="user__age">${person.age} years old</div>
                        <div class="user__gender">${person.gender}</div>
                    </div>`
        }).join ('')
        userContainer.innerHTML = list
    }
    renderPeople(peopleArr)

    function getNameVal () {
        nameInput.addEventListener('input', () => {
            let val = nameInput.value.toLowerCase().replace(/\s+/g, ' ').trim()
            config.name = val

            const filteredByName = mainFilter()
            renderPeople(filteredByName)
        })
    }
    getNameVal()

    function getAgeVal () {
        ageRange.addEventListener('input', () => {
            let val = ageRange.value
            config.age = val

            const filteredByAge = mainFilter()
            renderPeople(filteredByAge)
        })
    }
    getAgeVal()

    function getGenderVal () {
        genderRadio.forEach (item => {
            item.addEventListener('click', () => {
                let val = item.value
                config.gender = val

                const filteredByGender = mainFilter()
                renderPeople(filteredByGender)
            })
        })
    }
    getGenderVal()

    // function nameFilter () {
    //     return peopleArr.filter(item => item.name.toLowerCase().includes(config.name))
    // }

    // function ageFilter () {
    //     return peopleArr.filter(item => item.age <= config.age)
    // }

    // function genderFilter () {
    //     return (config.gender === 'All' ? peopleArr : peopleArr.filter(item => item.gender === config.gender))
    // }

    function mainFilter () {
        const filtered = peopleArr.filter(item => {
            const setName = item.name.toLowerCase().includes(config.name)
            const setAge = item.age <= config.age
            const setGender = config.gender === 'All' ? peopleArr : item.gender === config.gender

            return setName && setAge && setGender
        })

        return filtered
    }

})