const sampleData = [

  {
    title: 'Cozy Apartment in the Heart of the City',
    description: 'A comfortable and stylish apartment with modern amenities, located in the bustling city center.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q296eSUyMEFwYXJ0bWVudCUyMGluJTIwdGhlJTIwSGVhcnQlMjBvZiUyMHRoZSUyMENpdHl8ZW58MHx8MHx8fDA%3D',
    price: 50000,
    location: 'Downtown',
    country: 'United States',
  
  },
  {
    
    title: 'Charming Cottage by the Sea',
    description: 'Escape to this charming cottage overlooking the ocean. Perfect for a relaxing getaway.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hhcm1pbmclMjBDb3R0YWdlJTIwYnklMjB0aGUlMjBTZWF8ZW58MHx8MHx8fDA%3D',
    price: 20500,
    location: 'Seaside',
    country: 'United Kingdom',
   
  },
  {
 
    title: 'Mountain Retreat with Panoramic Views',
    description: 'Experience the tranquility of the mountains in this spacious retreat with breathtaking views.',
    image: 'https://images.unsplash.com/photo-1706138659788-5ba5ded08764?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW91bnRhaW4lMjBSZXRyZWF0JTIwd2l0aCUyMFBhbm9yYW1pYyUyMFZpZXdzfGVufDB8fDB8fHww',
    price: 25000,
    location: 'Mountain Valley',
    country: 'Canada',
   
  },
  {

    title: 'Luxurious Villa with Private Pool',
    description: 'Indulge in luxury with this stunning villa featuring a private pool and lush surroundings.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8THV4dXJpb3VzJTIwVmlsbGElMjB3aXRoJTIwUHJpdmF0ZSUyMFBvb2x8ZW58MHx8MHx8fDA%3D',
    price: 36000,
    location: 'Exclusive Neighborhood',
    country: 'France',

  },
  {
  
    title: 'Rustic Cabin in the Woods',
    description: 'Get back to nature with this cozy cabin nestled in the woods, complete with a fireplace.',
    image: 'https://images.unsplash.com/photo-1515592559813-3f7dff97e185?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UnVzdGljJTIwQ2FiaW4lMjBpbiUyMHRoZSUyMFdvb2RzfGVufDB8fDB8fHww',
    price: 12000,
    location: 'Forest Retreat',
    country: 'Sweden',

  },
  {

    title: 'Modern Loft in the Arts District',
    description: 'Sleek and modern loft space in the vibrant arts district, perfect for creative souls.',
    image: 'https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9kZXJuJTIwTG9mdCUyMGluJTIwdGhlJTIwQXJ0cyUyMERpc3RyaWN0fGVufDB8fDB8fHww',
    price: 8800,
    location: 'Arts District',
    country: 'United States',

  },
  {
  
    title: 'Secluded Beachfront Bungalow',
    description: 'Escape to your own private paradise in this beachfront bungalow with stunning ocean views.',
    image: 'https://images.unsplash.com/photo-1534080775144-c706f4e9e30a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8U2VjbHVkZWQlMjBCZWFjaGZyb250JTIwQnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D',
    price: 18512,
    location: 'Beachfront Paradise',
    country: 'Australia',

  },
  {
   
    title: 'Historic Townhouse in the Old City',
    description: 'Step back in time with this beautifully restored historic townhouse in the heart of the old city.',
    image: 'https://images.unsplash.com/photo-1547595964-00ce56a24b66?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8T2xkJTIwQ2l0eXxlbnwwfHwwfHx8MA%3D%3D',
    price: 23500,
    location: 'Old City',
    country: 'Italy',

  },
  {
   
    title: 'Ski Chalet with Mountain Access',
    description: 'Experience the thrill of the slopes with this cozy ski chalet offering direct access to the mountains.',
    image: 'https://images.unsplash.com/photo-1498855926480-d98e83099315?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2tpJTIwQ2hhbGV0JTIwd2l0aCUyME1vdW50YWluJTIwQWNjZXNzfGVufDB8fDB8fHww',
    price: 33000,
    location: 'Ski Resort',
    country: 'Switzerland',

  },
  {

    title: 'Eco-Friendly Treehouse Retreat',
    description: 'Connect with nature in this eco-friendly treehouse retreat, surrounded by lush greenery.',
    image: 'https://images.unsplash.com/photo-1550934482-7904d33d1b54?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHJlZWhvdXNlfGVufDB8fDB8fHww',
    price: 45000,
    location: 'Treehouse Haven',
    country: 'Costa Rica',

  },
    {
        title: "Urban Chic Studio with City Views",
        description: "Stay in style in this urban studio apartment with panoramic views of the city skyline.",
        image:"https://images.unsplash.com/photo-1605283176568-9b41fde3672e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VXJiYW4lMjBDaGljJTIwU3R1ZGlvJTIwd2l0aCUyMENpdHklMjBWaWV3c3xlbnwwfHwwfHx8MA%3D%3D",
        price: 11000,
        location: "City Center",
        country: "Germany"
      },
      {
        title: "Serenity Cabin by the Lake",
        description: "Unwind in this peaceful cabin by the lake, surrounded by nature and tranquility.",
        image:"https://images.unsplash.com/photo-1541420937988-702d78cb9fa1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2VyZW5pdHklMjBDYWJpbiUyMGJ5JTIwdGhlJTIwTGFrZXxlbnwwfHwwfHx8MA%3D%3D",
        price: 15000,
        location: "Lakefront Haven",
        country: "Canada"
      },
      {
        title: "Colonial Mansion with Garden Oasis",
        description: "Experience grandeur in this colonial mansion with a lush garden oasis, perfect for events.",
        image:"https://images.unsplash.com/photo-1460533893735-45cea2212645?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29sb25pYWwlMjBNYW5zaW9uJTIwd2l0aCUyMEdhcmRlbiUyME9hc2lzfGVufDB8fDB8fHww",
        price: 50000,
        location: "Colonial District",
        country: "Spain"
      },
      {
        title: "Quaint Farmhouse in the Countryside",
        description: "Escape to the countryside in this charming farmhouse, complete with rolling hills and fresh air.",
        image:"https://plus.unsplash.com/premium_photo-1677622923430-e07b530eed74?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UXVhaW50JTIwRmFybWhvdXNlJTIwaW4lMjB0aGUlMjBDb3VudHJ5c2lkZXxlbnwwfHwwfHx8MA%3D%3D",
        price: 10080,
        location: "Rural Retreat",
        country: "New Zealand"
      },
      {
        title: "Contemporary Penthouse with Skyline Views",
        description: "Live the high life in this contemporary penthouse with floor-to-ceiling windows and stunning views.",
        image:"https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29udGVtcG9yYXJ5JTIwUGVudGhvdXNlJTIwd2l0aCUyMFNreWxpbmUlMjBWaWV3c3xlbnwwfHwwfHx8MA%3D%3D",
        price: 40000,
        location: "Skyline Heights",
        country: "United States"
      },
      {
        title: "Tropical Paradise Villa with Infinity Pool",
        description: "Relax in luxury in this tropical villa featuring an infinity pool and lush tropical gardens.",
        image:"https://images.unsplash.com/photo-1534612899740-55c821a90129?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHJvcGljYWwlMjBQYXJhZGlzZSUyMFZpbGxhJTIwd2l0aCUyMEluZmluaXR5JTIwUG9vbHxlbnwwfHwwfHx8MA%3D%3D",
        price: 30000,
        location: "Island Getaway",
        country: "Maldives"
      },
      {
        title: "Artistic Loft in Bohemian Quarter",
        description: "Channel your inner artist in this eclectic loft located in the heart of the bohemian quarter.",
        image:"https://images.unsplash.com/photo-1540730930991-a9286a5f5020?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Qm9oZW1pYW4lMjBRdWFydGVyfGVufDB8fDB8fHww",
        price: 13000,
        location: "Bohemian Quarter",
        country: "Argentina"
      },
      {
        title: "Mountain Cabin with Hot Tub",
        description: "Enjoy the mountains with this cozy cabin featuring a hot tub and stunning alpine views.",
        image:"https://images.unsplash.com/photo-1470010762743-1fa2363f65ca?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW91bnRhaW4lMjBDYWJpbiUyMHdpdGglMjBIb3QlMjBUdWJ8ZW58MHx8MHx8fDA%3D",
        price: 22000,
        location: "Alpine Retreat",
        country: "Norway"
      },
      {
        title: "Beachfront Condo with Sunset Views",
        description: "Experience breathtaking sunsets from this beachfront condo with direct access to the sandy shores.",
        image:"https://images.unsplash.com/photo-1481988535861-271139e06469?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVhY2hmcm9udCUyMENvbmRvJTIwd2l0aCUyMFN1bnNldCUyMFZpZXdzfGVufDB8fDB8fHww",
        price: 25000,
        location: "Beachfront Bliss",
        country: "Thailand"
      },
      {
        title: "Riverside Cottage with Private Dock",
        description: "Escape to this charming cottage by the river, complete with a private dock for boating.",
        image:"https://images.unsplash.com/photo-1551158025-928b72fc6b96?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Uml2ZXJzaWRlJTIwQ290dGFnZSUyMHdpdGglMjBQcml2YXRlJTIwRG9ja3xlbnwwfHwwfHx8MA%3D%3D",
        price: 18000,
        location: "Riverside Haven",
        country: "Netherlands"
      },
      {
        title: "Historic Tower Suite with Panoramic Cityscape",
        description: "Stay in a piece of history with this tower suite offering panoramic views of the cityscape.",
        image:"https://images.unsplash.com/photo-1616352419135-2daad4fac12a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGlzdG9yaWMlMjBUb3dlciUyMFN1aXRlJTIwd2l0aCUyMFBhbm9yYW1pYyUyMENpdHlzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
        price: 30050,
        location: "Historic District",
        country: "Portugal"
      },
      {
        title: "Countryside Yurt Retreat",
        description: "Experience a unique stay in a traditional yurt surrounded by the beauty of the countryside.",
        image:"https://images.unsplash.com/photo-1535061765107-a01b438c753e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvdW50cnlzaWRlJTIwWXVydCUyMFJldHJlYXR8ZW58MHx8MHx8fDA%3D",
        price: 12000,
        location: "Yurt Haven",
        country: "Mongolia"
      },
  ];
  
  module.exports= {data: sampleData};
 
  