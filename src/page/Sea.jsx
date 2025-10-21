import React from "react";
import Banner from "@/components/ui/Banner";

const Mountion = () => {
  return (
    
    <div className="max-w-5xl mx-auto p-6 space-y-8"> {/* Header Section */}
      <div className="flex items-center gap-4">
        <img
          src="https://cdn-icons-png.flaticon.com/512/18146/18146551.png"
          alt="Cambodia Map"
           className="w-150 h-34 rounded-lg object-cover animate-slideRight"
        />
        <div>
          <h2 className="font-bold text-amber-40 text-gray-800">
            ធ្វើដំណើរទៅកាន់តំបន់ភ្នំស្រស់ស្អាតនៅសមុត្រកម្ពុជា ជាមួយឆ្នេសមុទ្រស្អាតៗ និងកោះជាច្រើនដែលស្រស់ស្អាតៗ កន្លែងស្នាក់នៅបែបឯកជននឹងស៊ីវីល័យមានផាសុខភាព
            តម្លៃសមរម្យ និងមានសុវត្ថភាព។
          </h2>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/411023199.jpg?k=8b2250e62d049a1acccbacee1e61326a2cb037d859a5a509c77d9d00d6ccf757&o=&hp=1"
          alt="Cambodia Map"
          className="w-150 h-34 rounded-lg object-cover animate-slideUp" 
        />
        <div>
          <h2 className="font-bold text-amber-40 text-gray-800">
            កក់ជាមួយនឹងកន្លែងស្នាក់នៅ នៅទីនោះជាមួយគេហ័ទំព័ពួកយើង ធានានៅកន្លែងស្នាក់នៅស្អាត់ជាច្រើនដែលមាននៅកន្លែងអ្នកទៅជាមួយនឹង ប្រភេទ រីស៊ត ផ្ទះស្នាក់
            ប្រភេទបឹងកាលោ ថែមទាំងមានម្ហូបអាហារតាមសំបូបែប។
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {[
    {
      id: 1,
      img: "https://static.information.gov.kh/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOTljQlE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--e6755928dab783fe161d531ec19f5d0af10c3984/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNT1RBd2VEWXdNQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--70cbddbba2e46c7ca8ac0c1f8b8316d88752e16d/a-63.jpg",
      title: "ភ្នំគិរីរម្យ",
      desc: "តំបន់ភ្នំដែលមានខ្យល់ត្រជាក់ និងព្រៃឈើស្រស់ស្អាត។",
    },
    {
      id: 2,
      img: "https://www.visitkampot.info/__asset/ckfinder/userfiles/files/IMG_3368.jpg",
      title: "ឆ្នេរកោះរ៉ុង",
      desc: "ឆ្នេរខ្សាច់ស និងទឹកសមុទ្រទន្លេសាបស្អាតជាមួយពន្លឺថ្ងៃ។",
    },
  ].map((item) => (
    <div
      key={item.id}
      className="bg-white shadow rounded-xl overflow-hidden border border-gray-200"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-700">{item.title}</h3>
        <p className="text-gray-500 text-sm">{item.desc}</p>
        <button className="mt-3 bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
          MORE
        </button>
      </div>
    </div>
  ))}
</div>

      

      {/* Middle Image */}
      <div className="flex justify-right">
        <img
          src="https://pix10.agoda.net/geo/city/711920/1_711920_03.jpg?ca=7&ce=1&s=1920x822"
          alt="Couple"
          className="w-150 h-80 object-cover rounded-tr-4xll rounded-br-[200px]"
        />
      </div>

      {/* Text Paragraph */}
      <p className="text-gray-700 text-center leading-relaxed">
        ការធ្វើដំណើរគឺជាផ្នែកមួយនៃជីវិតដែលផ្តល់អារម្មណ៍សប្បាយ និងបន្ថែមបទពិសោធន៍ថ្មីៗ។  
        ភ្នំស្រស់ស្អាតជួយឲ្យអ្នកមានអារម្មណ៍សុខសាន្ត និងសន្តិភាព។
      </p>

      {/* Second Two Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {[
    {
      id: 1,
      img: "https://demo.cambodia.gov.kh/wp-content/uploads/2021/03/%E1%9E%80%E1%9F%86%E1%9E%96%E1%9E%84%E1%9F%8B%E1%9E%9F%E1%9F%84%E1%9E%98-%E1%9E%80%E1%9F%84%E1%9F%87%E1%9E%9F%E1%9E%84%E1%9F%92%E1%9E%9F%E1%9E%B6%E1%9E%9A%E1%9F%A2.jpg",
      title: "ភ្នំគិរីរម្យ",
      desc: "តំបន់ភ្នំដែលមានខ្យល់ត្រជាក់ និងព្រៃឈើស្រស់ស្អាត។",
    },
    {
      id: 2,
      img: "https://asset.tovtrip.com/uploads/0000/107/2023/03/04/6-3.png",
      title: "ឆ្នេរកោះរ៉ុង",
      desc: "ឆ្នេរខ្សាច់ស និងទឹកសមុទ្រទន្លេសាបស្អាតជាមួយពន្លឺថ្ងៃ។",
    },
  ].map((item) => (
    <div
      key={item.id}
      className="bg-white shadow rounded-xl overflow-hidden border border-gray-200"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-700">{item.title}</h3>
        <p className="text-gray-500 text-sm">{item.desc}</p>
        <button className="mt-3 bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
          MORE
        </button>
      </div>
    </div>
  ))}
</div>

      {/* Second Two Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {[
    {
      id: 1,
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Bamboo_Island_Beach.JPG",
      title: "ភ្នំគិរីរម្យ",
      desc: "តំបន់ភ្នំដែលមានខ្យល់ត្រជាក់ និងព្រៃឈើស្រស់ស្អាត។",
    },
    {
      id: 2,
      img: "https://s3.ams.com.kh/infotainment/2023/08/324731769_871421040809414_2744862439645012996_n.png",
      title: "ឆ្នេរកោះរ៉ុង",
      desc: "ឆ្នេរខ្សាច់ស និងទឹកសមុទ្រទន្លេសាបស្អាតជាមួយពន្លឺថ្ងៃ។",
    },
    {
      id: 3,
      img: "https://cnc.com.kh/news/laravel-filemanager/photos/30/63523c3f3c5ee.jpg",
      title: "ឆ្នេរកោះរ៉ុង",
      desc: "ឆ្នេរខ្សាច់ស និងទឹកសមុទ្រទន្លេសាបស្អាតជាមួយពន្លឺថ្ងៃ។",
    },
    {
      id: 4,
      img: "https://www.visitkampot.info/__asset/ckfinder/userfiles/files/DSC04423(1).jpg",
      title: "ឆ្នេរកោះរ៉ុង",
      desc: "ឆ្នេរខ្សាច់ស និងទឹកសមុទ្រទន្លេសាបស្អាតជាមួយពន្លឺថ្ងៃ។",
    },
    {
      id: 5,
      img: "https://refile.tnaot.com/image/2019/08/21/f62a04108a594fde8126f1dcbf909aa4.jpg",
      title: "ឆ្នេរកោះរ៉ុង",
      desc: "ឆ្នេរខ្សាច់ស និងទឹកសមុទ្រទន្លេសាបស្អាតជាមួយពន្លឺថ្ងៃ។",
    },
    {
      id: 6,
      img: "https://phkaslapartner.com/wp-content/uploads/2022/08/image-2-18.jpg",
      title: "ឆ្នេរកោះរ៉ុង",
      desc: "ឆ្នេរខ្សាច់ស និងទឹកសមុទ្រទន្លេសាបស្អាតជាមួយពន្លឺថ្ងៃ។",
    },
  ].map((item) => (
    <div
      key={item.id}
      className="bg-white shadow rounded-xl overflow-hidden border border-gray-200"
    >
      <img
        src={item.img}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-700">{item.title}</h3>
        <p className="text-gray-500 text-sm">{item.desc}</p>
        <button className="mt-3 bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
          MORE
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Mountion;
