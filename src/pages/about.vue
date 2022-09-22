<script setup lang="ts">
const menuActive = ref(false)
const menu = reactive({
    experience: {
        show: true,
        active: false,
        data: [
            {
                company: 'Bluetab America an IBM Company',
                position: 'Data Developer',
                logo: '/images/bluetab.svg',
                date: '2022',
                description: 'Workflow automation for data engineering, I built data pipelines and developed batch processing scripts on Apache Spark. Also handler the data quality assurance with internal tooling.',
            },
            {
                company: 'Indra Company',
                position: 'Data Engineer',
                logo: '/images/indra.svg',
                date: '2021',
                description: 'I built a data quality platform promoting self services, migrated legacy platforms to AWS and GCP, built datamart with Python and SQL, and developed data pipelines with Python and SQL and internal tooling with FastAPI and Vue'
            },
            {
                company: 'Telefónica del Perú',
                position: 'IT Analyst',
                logo: '/images/telefonica.svg',
                date: '2017-2020',
                description: 'Design and development of the technical solution for network, security and cloud projects.Project planning and implementation of the commercial pipeline.Product development innovating on collaborative and security platforms.'
            },
            {
                company: 'Huawei del Perú',
                position: 'Service Engineer',
                logo: '/images/huawei.png',
                date: '2014-2016',
                description: 'RFX analysis for telco companies. Analizys of pain points on the service vertical, unifiying customer, delivery and product as one team to deliver value through proposals and deployments. Responsible of the Managed services portfolio.'
            }
        ]

    },
    education: {
        show: true,
        active: false,
        data: []
    },
    skills: {
        show: true,
        active: false,
        data: [
            {
                "name": "Python",
                "icon": "logos:python",
                "demo": "/videos/python.mp4",
                "visible": false
            },
            {
                "name": "Typescript",
                "icon": "logos:typescript-icon",
                "visible": false
            },
            {
                "name": "Vue",
                "icon": "logos:vue",
                "visible": false
            },
            {
                "name": "FastAPI",
                "icon": "simple-icons:fastapi",
                "visible": false
            },
            {
                "name": "SQL",
                "icon": "logos:postgresql",
                "visible": false
            },
            {
                "name": "Docker",
                "icon": "logos:docker-icon",
                "visible": false

            },
            {
                "name": "AWS",
                "icon": "logos:aws",
                "visible": false
            },
            {
                "name": "GCP",
                "icon": "logos:google-cloud",
                "visible": false
            }
        ]
    },
    projects: {
        show: true,
        active: false,
        data: []
    }
})




const currentData = ref([])

const showDetails = (which: string) => {
    switch (which) {
        case 'experience':
            menu.education.show = !menu.education.show
            menu.skills.show = !menu.skills.show
            menu.projects.show = !menu.projects.show
            currentData.value.length > 0 ? currentData.value = [] : currentData.value = menu.experience.data
            break;
        case 'education':
            menu.experience.show = !menu.experience.show
            menu.skills.show = !menu.skills.show
            menu.projects.show = !menu.projects.show
            break;
        case 'skills':
            menu.experience.show = !menu.experience.show
            menu.education.show = !menu.education.show
            menu.projects.show = !menu.projects.show
            currentData.value.length > 0 ? currentData.value = [] : currentData.value = menu.skills.data
            break;
        case 'projects':
            menu.experience.show = !menu.experience.show
            menu.education.show = !menu.education.show
            menu.skills.show = !menu.skills.show
            break;
    }
}

</script>

<template>
    <header col center mt-8 gap-4 fade-in-down>
        <h1 font-script font-bold text-secondary>Welcome to my profile</h1>
        <h2>If you are in a hurry, you can find my resume <a font-bold underline scale hover:text-teal
                href="/cv.pdf">Here</a></h2>
        <section col center>
            <img src="images/ob.png" animate-fade-in x8 rf scale shadow bg-success cp @click="menuActive=!menuActive" />
        </section>
    </header>
    <nav class v-if="menuActive" row center mt-4 fade-in>
        <a href="https://twitter.com/ssc_obahamonde" target="_blank" scale title="Twitter">
            <Ico icon="mdi-twitter" x2 text-primary m-2 hover:text-teal />
        </a>
        <a href="https://www.linkedin.com/in/obahamondem/" target="_blank" scale title="Linkedin">
            <Ico icon="mdi-linkedin" x2 text-primary m-2 hover:text-teal />
        </a>
        <a href="https://github.com/obahamonde" target="_blank" scale title="Github">
            <Ico icon="mdi-github" x2 text-primary m-2 hover:text-teal />
        </a>
        <a href="https://www.youtube.com/channel/UCSYqS3DhVLNBqoRKvjE4tGg" target="_blank" scale title="Youtube">
            <Ico icon="mdi-youtube" x2 text-primary m-2 hover:text-teal />
        </a>
        <a href="https://codepen.io/obahamonde" target="_blank" scale title="Codepen">
            <Ico icon="mdi-codepen" x2 text-primary hover:text-teal />
        </a>
    </nav>
    <div grid2 gap-6>
        <section row center v-if="menu.experience.show" @mouseover="menu.experience.active=true"
            @mouseleave="menu.experience.active=false" @click="showDetails('experience')">
            <Ico icon="mdi-briefcase" x4 cp text-primary animate-fade-in-left />

            <h2 :hidden="!menu.experience.active" @mouseleave="menu.experience.active=false" cp text-primary
                animate-fade-in font-bold px-2>Experience
            </h2>
        </section>
        <section row center v-if="menu.skills.show" @mouseover="menu.skills.active=true"
            @mouseleave="menu.skills.active=false" @click="showDetails('skills')">
            <Ico icon="mdi-xml" x4 text-primary animate-fade-in-right cp />
            <h2 :hidden="!menu.skills.active" cp text-primary animate-fade-in font-bold px-2>Skills</h2>
        </section>
        <section row center v-if="menu.education.show" @mouseover="menu.education.active=true"
            @mouseleave="menu.education.active=false" @click="showDetails('education')">
            <Ico icon="mdi-school" x4 text-primary animate-fade-in-left cp />
            <h2 :hidden="!menu.education.active" cp text-primary animate-fade-in font-bold px-2>Education</h2>
        </section>
        <section row center v-if="menu.projects.show" @mouseover="menu.projects.active=true"
            @mouseleave="menu.projects.active=false" @click="showDetails('projects')">
            <Ico icon="mdi-rocket" x4 text-primary animate-fade-in-right @mouseleave="menu.projects.active=false" cp />
            <h2 :hidden="!menu.projects.active" cp text-primary animate-fade-in font-bold px-2>Projects</h2>
        </section>

    </div>
    <section grid2 m-4 p-4 gap-4 v-if="menu.experience.show">
        <div v-for="item in currentData" :key="item.company" col center>
            <div col center w-64 pb-4 px-4 bg-success rounded-lg>
                <img :src="item.logo" x8 />
                <div col center gap-2>
                    <h3 text-sm font-bold>{{item.company}}</h3>
                    <h4 text-sm text-secondary>{{item.position}}</h4>
                    <h5 text-sm font-mono>{{item.date}}</h5>
                    <p text-xs>{{item.description}}</p>
                </div>
            </div>

        </div>
    </section>

    <section v-if="menu.skills.show" grid3 m-4 p-4 gap-8>
        <div v-for="item in currentData" :key="item.name" col center>
            <div col center rounded-lg>
                <h1>{{item.name}}</h1>
                <Ico :icon="item.icon" x2 @click="item.visible=!item.visible" cp />
                <div :hidden="!item.visible" v-if="item.demo">
                    <div> <video fade-in-up :src="item.demo" controls controlsList="nodownload" />
                        <Ico icon="mdi-close" @click="item.visible=!item.visible" cp x2 bg-danger text-light rf p-1
                            shadow fade-in scale />
                    </div>


                </div>
            </div>
        </div>
    </section>
</template>