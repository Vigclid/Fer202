import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  const students = [
    {
      id: 'DE180468',
      name: 'Doan Xuan Son',
      location: 'Da Nang',
      image:
        'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/476089195_1845189876250051_5726797038482600462_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=TjAlzmDPvpkQ7kNvgHYkaT6&_nc_oc=AdhBUtZKJpDRX2EmHgV9tNM3uFa5dlo-jp46_UkA-QDcdkw-9Oh-dBZcgJR55QUeC9bu0vkx_4Wkp0lSVghgNYFj&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&oh=03_Q7cD1gF80MuEsZGId_VnTZ14BaWtfUO1oUHzBDkjIuoX_tEr6w&oe=67CD5C76'
    },
    {
      id: 'DE180468',
      name: 'Doan Xuan Son',
      location: 'Da Nang',
      image:
        'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/476089195_1845189876250051_5726797038482600462_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=TjAlzmDPvpkQ7kNvgHYkaT6&_nc_oc=AdhBUtZKJpDRX2EmHgV9tNM3uFa5dlo-jp46_UkA-QDcdkw-9Oh-dBZcgJR55QUeC9bu0vkx_4Wkp0lSVghgNYFj&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&oh=03_Q7cD1gF80MuEsZGId_VnTZ14BaWtfUO1oUHzBDkjIuoX_tEr6w&oe=67CD5C76'
    },
    {
      id: 'DE180468',
      name: 'Doan Xuan Son',
      location: 'Da Nang',
      image:
        'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/476089195_1845189876250051_5726797038482600462_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=TjAlzmDPvpkQ7kNvgHYkaT6&_nc_oc=AdhBUtZKJpDRX2EmHgV9tNM3uFa5dlo-jp46_UkA-QDcdkw-9Oh-dBZcgJR55QUeC9bu0vkx_4Wkp0lSVghgNYFj&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&oh=03_Q7cD1gF80MuEsZGId_VnTZ14BaWtfUO1oUHzBDkjIuoX_tEr6w&oe=67CD5C76'
    },
    {
      id: 'DE180468',
      name: 'Doan Xuan Son',
      location: 'Da Nang',
      image:
        'https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/476089195_1845189876250051_5726797038482600462_n.png?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=TjAlzmDPvpkQ7kNvgHYkaT6&_nc_oc=AdhBUtZKJpDRX2EmHgV9tNM3uFa5dlo-jp46_UkA-QDcdkw-9Oh-dBZcgJR55QUeC9bu0vkx_4Wkp0lSVghgNYFj&_nc_zt=23&_nc_ht=scontent.fdad3-4.fna&oh=03_Q7cD1gF80MuEsZGId_VnTZ14BaWtfUO1oUHzBDkjIuoX_tEr6w&oe=67CD5C76'
    }
  ];

  const contactMethods = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/597/597177.png',
      content: '+8402311111',
      isLink: false,
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/597/597177.png',
      content: '+852 8765 4321',
      isLink: false,
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/597/597177.png',
      content: 'fptudn@fpt.edu.vn',
      isLink: true,
      // Sử dụng mailto: để mở ứng dụng email
      href: 'mailto:fptudn@fpt.edu.vn',
    },
  ];

  // Các icon mạng xã hội
  const socialMedia = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111483.png',
      href: '#',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/20/20837.png',
      href: '#',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/80/80963.png',
      href: '#',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/733/733635.png',
      href: '#',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/49/49084.png',
      href: '#',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/4338/4338894.png',
      href: '#',
    },
  ];
  return (
    <>
    <Header />
    <Banner />
    <Body students={students}/>
    <Footer socialMedia = {socialMedia} contactMethods={contactMethods}/>
    </>
  );
}

export default App;
