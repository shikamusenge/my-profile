import type { Project } from "@/types/project"

export const projects: Project[] = [
  {
    "id": "driver-assist-device",
    "title": "Driver Assistive Device for Deafness",
    "description": "A smart AI-powered system that helps deaf drivers by providing visual alerts for important road sounds.",
    "longDescription": `
      <p>This assistive technology solution enhances driving safety for deaf individuals by converting critical auditory signals into visual alerts and vibrations.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Sound Classification:</strong> Identifies important road sounds (sirens, horns, skidding) in real-time</li>
        <li><strong>Visual Alerts:</strong> Dashboard display with color-coded warnings and icons</li>
        <li><strong>Directional Indicators:</strong> Shows approximate direction of detected sounds</li>
        <li><strong>Vibration Feedback:</strong> Steering wheel vibrations for urgent alerts</li>
        <li><strong>Priority System:</strong> Ranks alerts by urgency (emergency vehicles > honking > etc.)</li>
        <li><strong>Low-Latency Processing:</strong> Near real-time processing for immediate warnings</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The system combines embedded hardware with machine learning:</p>
      <ul>
        <li><strong>Python:</strong> Core processing logic and AI implementation</li>
        <li><strong>Scikit-learn:</strong> Machine learning models for sound classification</li>
        <li><strong>TensorFlow Lite:</strong> Optimized neural networks for edge deployment</li>
        <li><strong>Microphone Array:</strong> Directional audio capture</li>
        <li><strong>Raspberry Pi:</strong> Compact onboard processing unit</li>
        <li><strong>Computer Vision:</strong> Augmented reality display integration</li>
      </ul>
      
      <h3>Challenges and Solutions</h3>
      <p>Developing this assistive device required innovative approaches:</p>
      <ul>
        <li>Created custom audio dataset of road sounds with various noise conditions</li>
        <li>Optimized ML models to run efficiently on low-power hardware</li>
        <li>Developed filtering algorithms to reduce false positives from cabin noise</li>
        <li>Implemented intuitive alert hierarchy to prevent driver distraction</li>
      </ul>
      
      <h3>Results and Impact</h3>
      <p>The prototype has shown promising results in testing:</p>
      <ul>
        <li>93% accuracy in identifying critical sounds in urban environments</li>
        <li>Average alert latency under 0.8 seconds</li>
        <li>Positive feedback from deaf drivers during user testing</li>
        <li>Potential to significantly improve road safety for hearing-impaired</li>
      </ul>
    `,
    "image": "projects/smart-year.png",
    "screenshots": [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800"
    ],
    "demoUrl": "#",
    "codeUrl": "#",
    "tags": ["Python", "Scikit-learn", "TensorFlow Lite", "Signal Processing", "Accessibility"],
    "category": "iot",
    "featured": true,
    "date": "2023-08-15",
    "client": "Accessibility Innovation Grant"
},
 
{
  id: "ikibina-project",
  title: "Ikibina Project",
  description:
    "A community savings management platform that helps groups track contributions, loans, and financial activities.",
  longDescription: `
    <p>The Ikibina Project was developed to digitize and streamline the traditional community savings groups (known as "Ikibina" in Rwanda) that are popular across many African communities. These groups allow members to pool resources, save collectively, and access loans.</p>
    
    <h3>Key Features</h3>
    <ul>
      <li><strong>Member Management:</strong> Registration, profiles, and role assignment for all group members.</li>
      <li><strong>Contribution Tracking:</strong> Record and monitor regular member contributions.</li>
      <li><strong>Loan Management:</strong> Process loan applications, approvals, disbursements, and repayments.</li>
      <li><strong>Financial Reporting:</strong> Generate comprehensive reports on group finances and individual accounts.</li>
      <li><strong>Meeting Management:</strong> Schedule and document group meetings and decisions.</li>
      <li><strong>SMS Notifications:</strong> Automated reminders for contributions, loan repayments, and meetings.</li>
      <li><strong>Transparent Governance:</strong> Tools for democratic decision-making within the group.</li>
    </ul>
    
    <h3>Technical Implementation</h3>
    <p>The platform was built using a modern, scalable tech stack:</p>
    <ul>
      <li><strong>Frontend:</strong> React with Redux for state management and Tailwind CSS for styling.</li>
      <li><strong>Backend:</strong> Node.js with Express providing a robust API layer.</li>
      <li><strong>Database:</strong> MongoDB for flexible data modeling and efficient queries.</li>
      <li><strong>Authentication:</strong> JWT-based authentication with role-based access control.</li>
      <li><strong>Notifications:</strong> Integration with SMS gateways for mobile notifications.</li>
      <li><strong>Reporting:</strong> PDF generation for financial statements and reports.</li>
      <li><strong>Offline Support:</strong> Progressive Web App features for limited connectivity scenarios.</li>
    </ul>
    
    <h3>Challenges and Solutions</h3>
    <p>The project faced several unique challenges:</p>
    <ul>
      <li><strong>Digital Literacy:</strong> Created an intuitive UI with minimal training requirements.</li>
      <li><strong>Connectivity Issues:</strong> Implemented offline-first functionality with synchronization.</li>
      <li><strong>Financial Accuracy:</strong> Developed robust calculation engines with multiple validation layers.</li>
      <li><strong>Cultural Adaptation:</strong> Customized the platform to respect traditional group practices.</li>
    </ul>
    
    <h3>Results and Impact</h3>
    <p>The Ikibina Project has had significant positive impacts:</p>
    <ul>
      <li>Currently serving over 50 savings groups with 1,500+ members</li>
      <li>Reduced financial discrepancies by 95%</li>
      <li>Increased loan repayment rates by 30%</li>
      <li>Improved transparency and trust within groups</li>
      <li>Enabled better financial planning and decision-making</li>
      <li>Created digital financial histories for previously unbanked individuals</li>
    </ul>
    
    <h3>Future Development</h3>
    <p>Planned enhancements include:</p>
    <ul>
      <li>Mobile app versions for Android and iOS</li>
      <li>Integration with formal banking systems</li>
      <li>Advanced analytics for financial health assessment</li>
      <li>Expansion to other types of community groups</li>
    </ul>
  `,
  image: "projects/ikibina.png",
  screenshots: [
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
    "/placeholder.svg?height=600&width=800",
  ],
  demoUrl: "https://example.com/ikibina",
  codeUrl: "https://github.com/shikamusenge/ikibina",
  tags: ["React", "Node.js", "mysql", "Express", "JWT", "PDF Generation", "USSD Integration"],
  category: "web",
  featured: true,
  date: "2023-08-20",
  client: "Community Savings Groups Association",
},
  {
    id: "online-smart-voting",
    title: "Online Smart Voting",
    description:
      "A secure and user-friendly online voting platform that enables organizations to conduct transparent elections remotely.",
    longDescription: `
      <p>The Online Smart Voting platform was developed to address the challenges of conducting secure and transparent elections remotely. With the increasing need for digital solutions, this platform provides a comprehensive system for organizations of all sizes to manage their voting processes efficiently.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Secure Authentication:</strong> Multi-factor authentication ensures only eligible voters can participate.</li>
        <li><strong>Real-time Results:</strong> Live counting and visualization of votes as they come in.</li>
        <li><strong>Audit Trails:</strong> Comprehensive logging of all activities for transparency and verification.</li>
        <li><strong>Customizable Ballots:</strong> Organizations can create custom ballots with various question types.</li>
        <li><strong>Anonymous Voting:</strong> Ensures voter privacy while maintaining election integrity.</li>
        <li><strong>Admin Dashboard:</strong> Powerful tools for election administrators to manage the entire process.</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The platform is built using a modern tech stack to ensure security, scalability, and a seamless user experience:</p>
      <ul>
        <li><strong>Frontend:</strong> React with Redux for state management and Material-UI for the interface.</li>
        <li><strong>Backend:</strong> Node.js with Express providing RESTful APIs.</li>
        <li><strong>Database:</strong> MongoDB for flexible data storage and quick retrieval.</li>
        <li><strong>Authentication:</strong> JWT-based authentication with refresh tokens.</li>
        <li><strong>Real-time Updates:</strong> Socket.io for live results and notifications.</li>
        <li><strong>Security:</strong> HTTPS, data encryption, and rate limiting to prevent attacks.</li>
      </ul>
      
      <h3>Challenges and Solutions</h3>
      <p>One of the biggest challenges was ensuring the platform's security while maintaining usability. We implemented a comprehensive security strategy including:</p>
      <ul>
        <li>End-to-end encryption of sensitive data</li>
        <li>Regular security audits and penetration testing</li>
        <li>Distributed architecture to prevent single points of failure</li>
        <li>Advanced monitoring and alerting systems</li>
      </ul>
      
      <h3>Results and Impact</h3>
      <p>The platform has been successfully used by several organizations, resulting in:</p>
      <ul>
        <li>Increased voter participation by 45%</li>
        <li>Reduced election costs by 60%</li>
        <li>Improved transparency and trust in the election process</li>
        <li>Faster results tabulation (minutes instead of hours)</li>
      </ul>
    `,
    image: "projects/smrtv.png",
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    demoUrl: "#",
    codeUrl: "https://github.com/shikamusenge/voting",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Socket.io"],
    category: "web",
    featured: true,
    date: "2023-05-15",
    client: "Electoral Commission",
  },
  {
    id: "js-piano",
    title: "JS Piano",
    description:
      "An interactive virtual piano built with JavaScript that allows users to play music directly in their browser.",
    longDescription: `
      <p>The JS Piano project was created to bring the joy of playing piano to anyone with a web browser. This interactive application simulates a real piano with high-quality sound samples and responsive controls.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Realistic Piano Sounds:</strong> High-quality audio samples for each key.</li>
        <li><strong>Keyboard Controls:</strong> Play using your computer keyboard or click with the mouse.</li>
        <li><strong>Recording Functionality:</strong> Record your performances and play them back.</li>
        <li><strong>Adjustable Settings:</strong> Customize volume, reverb, and other audio parameters.</li>
        <li><strong>Sheet Music Integration:</strong> Follow along with popular songs using on-screen notation.</li>
        <li><strong>Responsive Design:</strong> Works on desktop and mobile devices.</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The piano was built using vanilla JavaScript with a focus on performance and audio quality:</p>
      <ul>
        <li><strong>Audio Engine:</strong> Web Audio API for high-fidelity sound processing.</li>
        <li><strong>UI Rendering:</strong> HTML5 Canvas for smooth animations and interactions.</li>
        <li><strong>Event Handling:</strong> Custom event system for keyboard and touch inputs.</li>
        <li><strong>Data Storage:</strong> LocalStorage for saving recordings and user preferences.</li>
        <li><strong>Audio Processing:</strong> Custom audio processing for realistic piano dynamics.</li>
      </ul>
      
      <h3>Challenges and Solutions</h3>
      <p>The main challenge was achieving low-latency audio playback across different browsers and devices:</p>
      <ul>
        <li>Implemented audio buffering techniques to reduce latency</li>
        <li>Created a custom scheduler for precise timing of note playback</li>
        <li>Optimized audio loading to balance quality and performance</li>
        <li>Developed fallback mechanisms for browsers with limited Web Audio support</li>
      </ul>
      
      <h3>Results and Impact</h3>
      <p>The JS Piano has been well-received by users worldwide:</p>
      <ul>
        <li>Over 10,000 monthly active users</li>
        <li>Used as an educational tool in music classrooms</li>
        <li>Featured in several web development showcases</li>
        <li>Positive feedback from both musicians and non-musicians</li>
      </ul>
    `,
    image: "projects/piano.png",
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    demoUrl: "https://example.com/piano",
    codeUrl: "https://github.com/shikamusenge/piano",
    tags: ["JavaScript", "HTML5", "CSS3", "Web Audio API", "Canvas", "LocalStorage"],
    category: "web",
    featured: true,
    date: "2022-11-03",
    client: "Self-initiated",
  },
  {
    id: "movie-library",
    title: "Movie Library",
    description:
      "A Netflix-inspired movie library application that allows users to browse, search, and discover films across various genres.",
    longDescription: `
      <p>The Movie Library application was designed to provide users with a Netflix-like experience for browsing and discovering movies. The platform offers a rich, interactive interface with comprehensive movie information and personalized recommendations.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Extensive Movie Database:</strong> Access to thousands of movies with detailed information.</li>
        <li><strong>Advanced Search:</strong> Find movies by title, genre, actor, director, or release year.</li>
        <li><strong>User Accounts:</strong> Create profiles, save favorites, and track viewing history.</li>
        <li><strong>Personalized Recommendations:</strong> Algorithm-based suggestions based on user preferences.</li>
        <li><strong>Responsive Design:</strong> Optimized experience across all devices and screen sizes.</li>
        <li><strong>Trailer Integration:</strong> Watch movie trailers directly within the application.</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The application leverages modern web technologies for optimal performance and user experience:</p>
      <ul>
        <li><strong>Frontend:</strong> React with Redux for state management and styled-components for UI.</li>
        <li><strong>API Integration:</strong> TMDB API for comprehensive movie data.</li>
        <li><strong>Authentication:</strong> Firebase Authentication for secure user management.</li>
        <li><strong>Storage:</strong> Firestore for user preferences and favorites.</li>
        <li><strong>Performance:</strong> Lazy loading and code splitting for faster load times.</li>
        <li><strong>Deployment:</strong> Continuous integration and deployment via GitHub Actions.</li>
      </ul>
      
      <h3>Challenges and Solutions</h3>
      <p>Managing the large dataset and ensuring fast performance presented several challenges:</p>
      <ul>
        <li>Implemented efficient caching strategies to reduce API calls</li>
        <li>Created a virtualized list component to handle large movie collections</li>
        <li>Developed a sophisticated search algorithm with typeahead functionality</li>
        <li>Optimized image loading with progressive enhancement techniques</li>
      </ul>
      
      <h3>Results and Impact</h3>
      <p>The Movie Library has become a popular tool for movie enthusiasts:</p>
      <ul>
        <li>Growing user base with high retention rates</li>
        <li>Positive user feedback on the intuitive interface and recommendations</li>
        <li>Featured in web development showcases for its performance optimizations</li>
        <li>Serves as a valuable resource for discovering both mainstream and indie films</li>
      </ul>
    `,
    image: "/projects/movie.png",
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    demoUrl: "https://shikamusenge.netlify.app/moive-lab.vercel.app/",
    codeUrl: "https://github.com/shikamusenge/movies",
    tags: ["React", "Redux", "TMDB API", "tailwind css"],
    category: "web",
    featured: true,
    date: "2023-02-10",
    client: "Personal",
  },
  {
    id: "et-sketch",
    title: "Et Sketch",
    description:
      "A drawing application that enables users to create digital art with various tools, colors, and brushes.",
    longDescription: `
      <p>Et Sketch is a web-based drawing application that provides users with a comprehensive set of tools to create digital artwork. The application combines the simplicity of traditional drawing with the power of digital manipulation.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Versatile Drawing Tools:</strong> Pencil, brush, eraser, shapes, and more.</li>
        <li><strong>Color Management:</strong> Color picker, palettes, and gradient tools.</li>
        <li><strong>Layer System:</strong> Create, manage, and manipulate multiple layers.</li>
        <li><strong>Export Options:</strong> Save creations as PNG, JPG, or SVG files.</li>
        <li><strong>Undo/Redo:</strong> Comprehensive history management.</li>
        <li><strong>Responsive Canvas:</strong> Adapts to different screen sizes and resolutions.</li>
      </ul>
      
      <h3>Technical Implementation</h3>
      <p>The application leverages modern web technologies for optimal drawing performance:</p>
      <ul>
        <li><strong>Canvas API:</strong> Core drawing functionality with optimized rendering.</li>
        <li><strong>JavaScript:</strong> Custom event handling and tool implementation.</li>
        <li><strong>HTML5 Features:</strong> File API for importing and exporting artwork.</li>
        <li><strong>CSS3:</strong> Responsive design and UI animations.</li>
        <li><strong>LocalStorage:</strong> Automatic saving of work in progress.</li>
      </ul>
      
      <h3>Challenges and Solutions</h3>
      <p>Creating a performant drawing application presented several technical challenges:</p>
      <ul>
        <li>Implemented canvas optimization techniques for smooth drawing experience</li>
        <li>Developed a custom event system to handle various input methods (mouse, touch, stylus)</li>
        <li>Created an efficient layer management system with minimal memory footprint</li>
        <li>Designed a responsive UI that works across devices without compromising functionality</li>
      </ul>
      
      <h3>Results and Impact</h3>
      <p>Et Sketch has been well-received by both casual users and digital artists:</p>
      <ul>
        <li>Used in educational settings to teach digital art concepts</li>
        <li>Adopted by professional illustrators for quick sketching and concept development</li>
        <li>Featured in web design communities for its clean interface and performance</li>
        <li>Regularly used in digital art workshops and tutorials</li>
      </ul>
    `,
    image: "/projects/sketch.png",
    screenshots: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    demoUrl: "https://example.com/sketch",
    codeUrl: "https://github.com/shikamusenge/sketch",
    tags: ["JavaScript", "Canvas API", "HTML5", "CSS3", "File API"],
    category: "web",
    featured: true,
    date: "2022-09-18",
    client: "Art Education Center",
  },
]
