const d = document
const w = window

const myPhoneNumber = '+251923798792'
const myEmail = 'birukeph@gmail.com'

function openInNewTab(href) {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    rel: 'noopener noreferrer',
    href: href,
  }).click();
}

let prevScroll = 0
let scrollDown = true
let screen = {
	width: w.screen.availWidth,
	height: w.screen.availHeight
}

let intro = d.querySelector('.intro')
let header = d.querySelector('.header')
	let links = d.querySelector('.header .links')
let _about = d.querySelector('.about')
let _resume = d.querySelector('.resume')
	let _education = d.querySelector('.education')
	let _experience = d.querySelector('.experience')
	let _skills = d.querySelector('.skills')
let _services = d.querySelector('.services')
let _projects = d.querySelector('.projects')
let _contact = d.querySelector('.contact')


const sections = [_about, _resume, _education, _experience, _skills, _services, _projects, _contact]

const onscroll = e => {
	scrollDown = w.scrollY - prevScroll > 0

	sections.forEach(async section => isInView(section, scrollDown))

	// navbar style with scrolling
	if (intro.getBoundingClientRect().bottom < screen.height*.3) { // set white & sticky class
		header.classList.add('white')
		header.classList.add('sticky')
		header.classList.remove('flat')
	} else {
		if (!header.classList.contains('white')) return
		header.classList.add('flat')
		setTimeout(() => {
			header.style.transform = 'translateY(0)'
			header.classList.remove('white')
			header.classList.remove('sticky')
			header.classList.remove('flat')
		}, 205)
	}

	if (links.classList.contains('active'))
		links.classList.remove('active')
	
	prevScroll = w.scrollY
}


const showMenu = e => {
	links.classList.toggle('active')
}

const isInView = async item => {
	let { top, bottom } = item.getBoundingClientRect()
	let { height: h } = screen


	if (top < h/2 && h/2 <= bottom)
		d.querySelector(`a#${item.id}-link`).classList.add('active')
	else
		d.querySelector(`a#${item.id}-link`).classList.remove('active')
}

let desc = d.getElementById('description-span')
const description = ['Web Designer.', 'Developer.', 'Blogger.']
let textCounter = 0
let text_delay = 100
let change_delay = 3500
let first_change_delay = 1000

const deleteText = () => {
	let { length } = desc.innerHTML + 0

	for (let i=1; i<=length; i++) {
		setTimeout(() => {
			desc.innerHTML = desc.innerHTML.substring(0, length-i)

			if (i==length) setTimeout(() => changeText(), 750)
		}, text_delay*i)
	}
}

const changeText = () => {
	textCounter++
	textCounter %= description.length

	for (let i=0; i<description[textCounter].length; i++) {
		setTimeout(() => {
			desc.innerHTML += description[textCounter][i]
			if (i==length) setTimeout(() => deleteText(), change_delay)
		}, text_delay*1.95*i)
	}
}

const download_cv = () => {
	openInNewTab('/docs/resume.pdf')
}

const educations = [
	{
		year: '2016 - 2021',
		title: 'Bachelor of Science in Computer Engineering',
		subtitle: 'Addis Ababa Science and Technology University',
		// description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
	},
	{
		year: '2015 - 2002',
		title: 'Primary and Secondary School',
		subtitle: 'Ethio-Parents\' School',
	}
]

let education_container = d.querySelector('#education')
const loadEducation = () => {
	educations.forEach(e => {
		let education = d.createElement('div')
		education.classList.add('item')
		let year = d.createElement('p')
		year.classList.add('year')
		year.innerText = e.year
		let title = d.createElement('h2')
		title.classList.add('title')
		title.innerText = e.title
		let subtitle = d.createElement('h3')
		subtitle.classList.add('subtitle')
		subtitle.innerText = e.subtitle
		let description = d.createElement('p')
		description.classList.add('description')
		description.innerText = e.description ? e.description : ''
		education.append(...[year, title, subtitle, description])
		education_container.appendChild(education)
	})
}

const experiences = [
	{
		year: 'Nov 2020 - Apr 2021',
		title: 'Game Developer',
		subtitle: 'Desert Rose Consultancy',
		description: 'Digitalizing an existing game for use on as a web game. Integrating web server with a bot accessible from Telegram messaging platform.	Hosting and testing games online and on local networks.'
	},
	{
		year: 'Apr 2021 - Jun 2021',
		title: 'Intern Web Developer',
		subtitle: 'Desert Rose Consultancy',
		description: 'Designed and executed production strategies for a multiplayer web game, and created UI/UX and backend implementations.'
	},
	{
		year: 'December 2021 - Present',
		title: 'Software and Web Developer',
		subtitle: 'Netib Consult',
		description: 'Managing and planning software development phases. Server management and hosting. Web development.'
	}
]

let experience_container = d.querySelector('#experience')
const loadExperience = () => {
	experiences.forEach(e => {
		let experience = d.createElement('div')
		experience.classList.add('item')
		let year = d.createElement('p')
		year.classList.add('year')
		year.innerText = e.year
		let title = d.createElement('h2')
		title.classList.add('title')
		title.innerText = e.title
		let subtitle = d.createElement('h3')
		subtitle.classList.add('subtitle')
		subtitle.innerText = e.subtitle
		let description = d.createElement('p')
		description.classList.add('description')
		description.innerText = e.description ? e.description : ''
		experience.append(...[year, title, subtitle, description])
		experience_container.appendChild(experience)
	})
}

const skills = [
	{ name: 'HTML', skill: 92 },
	{ name: 'CSS', skill: 86 },
	{ name: 'JavaScript', skill: 90 },
	{ name: 'Photography', skill: 78 },
]

let skills_container = d.querySelector('.skills .container')
const loadSkills = () => {
	skills.forEach(s => {
		let skill = d.createElement('div')
		skill.classList.add('skill')
		let title = d.createElement('div')
		title.classList.add('skill-title')
		title.style.width = s.skill + '%'
		let name = d.createElement('p')
		name.classList.add('name')
		name.innerHTML = s.name
		let level = d.createElement('p')
		level.classList.add('level')
		level.innerHTML = s.skill + '%'
		let bar = d.createElement('div')
		bar.classList.add('bar')
		let fill = d.createElement('div')
		fill.classList.add('fill')
		fill.style.width = s.skill + '%'
		title.appendChild(name)
		title.appendChild(level)
		bar.appendChild(fill)
		skill.appendChild(title)
		skill.appendChild(bar)
		skills_container.appendChild(skill)
	})
}

const services = [
	{ name: 'Web Design', icon: 'icons/ux-design-svgrepo-com.svg', detail: 'Plan, create and code internet sites and web pages. Creating the best design and layouts for a web site.' },
	{ name: 'Photography', icon: 'icons/camera-svgrepo-com.svg', detail: 'Capture moments in a commercial quality using experties, quality and composition skills.' },
	{ name: 'Software Development', icon: 'icons/web-development-svgrepo-com.svg', detail: 'Design, program, build, deploy and maintain software using many different skills and tools.' },
]

let service_container = d.querySelector('.services .list')

const loadServices = () => {
	services.forEach(s => {
		let item = d.createElement('div')
		item.classList.add('item')
		let img = d.createElement('object')
		img.classList.add('icon')
		img.setAttribute('data', s.icon)
		let hr = d.createElement('div')
		hr.classList.add('hr')
		let name = d.createElement('p')
		name.classList.add('name')
		name.innerHTML = s.name
		let detail = d.createElement('p')
		detail.classList.add('detail')
		detail.innerHTML = s.detail
		item.appendChild(img)
		item.appendChild(name)
		item.appendChild(hr)
		item.appendChild(detail)
		service_container.appendChild(item)
	})
}


const projects = [
	{ photo: 'luna_home.png', title: 'Luna Group', type: 'Web Development', link: 'https://thelunagroups.com/' },
	// { photo: 'yoni_movies.png', title: 'Yoni Entertainment', type: 'Web Development', link: 'https://yoni-movies.herokuapp.com/' },
	{ photo: 'muntaha.png', title: 'Muntaha Foundation', type: 'Fullstack Web & Mobile App Development', link: 'https://www.muntahafoundation.org/' },
	{ photo: 'promise.png', title: 'PromiseLandGeneration', type: 'Web Development', link: 'https://promiselandgeneration.com/' },
	{ photo: 'filmia.png', title: 'Filmia', type: 'Game Development', link: 'http://filmia.herokuapp.com/' },
]

let project_container = d.querySelector('.projects .list')

const loadProjects = () => {
	projects.forEach((p, i) => {
		let item = d.createElement('div')
		item.classList.add('item')
		item.style.backgroundImage = `url("imgs/${p.photo}")`
		item.onclick = () => openInNewTab(p.link)

		let div = d.createElement('div')
		div.classList.add('background')

		let title = d.createElement('h1')
		title.classList.add('title')
		title.innerHTML = p.title
		
		let type = d.createElement('h2')
		type.classList.add('type')
		type.innerHTML = p.type

		item.appendChild(div)
		item.appendChild(title)
		item.appendChild(type)

		project_container.appendChild(item)
	})
}

const callPhone = () => {
	window.location.href = `tel:${myPhoneNumber}`
}

const sendEmail = () => {
	window.location.href = `mailto:${myEmail}`
}

w.onload = () => {
	w.addEventListener('scroll', onscroll)
	setTimeout(() => deleteText(), first_change_delay)
	loadEducation()
	loadExperience()
	loadSkills()
	loadServices()
	loadProjects()
}