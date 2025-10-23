import React from "react";
import Banner from "@/components/ui/Banner";

const Mountion = () => {
  return (
    
    <div className="max-w-350 mx-auto p-6 space-y-8"> {/* Header Section */}
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
      title: "ឆ្នេតាបារាំង",
      desc: "ឆ្នេរខ្សាច់សតាបារាំង ក្លាយជាគោលដៅទេសចរណ៍ថ្មីនៅព្រះសីហនុ ជាឆ្នេដែលមានខ្សាច់សស្អាតដែលដែលនៅជិតទីរួមខេត្ត នៅទីនោះមានខ្យល់ត្រជាក់និងមានកន្លែងសម្រាក់ អង្គុយជាកញ្ចុះនៅជាប់ឆ្នេខ្សាច់​និងមានលក់ម្ហូបអាហារគ្រឿងសមុទ្រ",
    },
    {
      id: 2,
      img: "https://www.visitkampot.info/__asset/ckfinder/userfiles/files/IMG_3368.jpg",
      title: "ឆ្នេរកែប",
      desc: "ឆ្នេរកែប (Kep Beach) គឺជាតំបន់ទេសចរណ៍សមុទ្រដ៏ល្បីល្បាញមួយនៅខេត្តកែប ដែលទាក់ទាញភ្ញៀវទេសចរជាតិ និងអន្តរជាតិជារៀងរាល់ឆ្នាំ។ វាមានភាពស្ងប់ស្ងាត់ ស្អាត និងមានអារម្មណ៍ធម្មជាតិបំផុត បង្ហាញពីសោភ័ណភាពនៃសមុទ្រខ្មៅនិងភ្នំជាប់ៗគ្នា។",
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
      title: "កោះសង្សា",
      desc: "កោះសង្សា (Song Saa Island) គឺជាកោះស្រស់ស្អាត និងមានប្រជាប្រិយភាពខ្លាំងសម្រាប់ភ្ញៀវទេសចរដែលស្វែងរកភាពប្រណិត និងសន្តិភាពនៅកណ្ដាលសមុទ្រខ្មែរ។ វាស្ថិតនៅក្នុងខេត្តព្រះសីហនុ ជិតកោះរុង និងកោះរ៉ុងសន្លឹម។ កោះនេះជាកន្លែងសម្រាកបែបលក្ខណៈ Luxury Private Island Resort ដែលមានទេសភាពស្រស់ស្អាត និងសេវាកម្មកម្រិតពិភពលោក។",
    },
    {
      id: 2,
      img: "https://asset.tovtrip.com/uploads/0000/107/2023/03/04/6-3.png",
      title: "កោះស្តេច",
      desc: "កោះស្តេច (Koh Sdach) គឺជាកោះដ៏ល្បីមួយស្ថិតនៅក្នុងសមុទ្រខេត្តកោះកុង ដែលមានទេសភាពធម្មជាតិស្រស់ស្អាត ទឹកសមុទ្រផ្អែមស្រទន់ និងជាផ្នែកមួយនៃក្រុមកោះចំនួនជាង ១២ ដែលមាននៅតំបន់នោះ។ កោះនេះមានសកម្មភាពទេសចរណ៍សម្បូរបែប ដូចជា ងូតទឹក ជិះទូក និងមើលជីវិតអ្នកនេសាទជនបទ។",
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
      title: "កោះទន្សាយ",
      desc: "កោះទន្សាយ (Koh Tonsay / Rabbit Island) គឺជាកោះដ៏ស្រស់ស្អាត និងមានភាពស្ងប់ស្ងាត់ ដែលស្ថិតនៅខេត្តកែប ប្រទេសកម្ពុជា។ កោះនេះត្រូវបានគេដឹងថាជា “សុីវភៅធម្មជាតិ” ដែលនៅតែមិនទាន់មានអភិវឌ្ឍច្រើន ប៉ុន្តែពោរពេញដោយសោភ័ណភាពធម្មជាតិ ទឹកសមុទ្រស្អាត និងបរិយាកាសស្ងប់ស្ងាត់សម្រាប់សម្រាក។",
    },
    {
      id: 2,
      img: "https://s3.ams.com.kh/infotainment/2023/08/324731769_871421040809414_2744862439645012996_n.png",
      title: "កោះខ្យង់",
      desc: "កោះខ្យង់ (Koh Kyong) គឺជាកោះតូចស្រស់ស្អាតមួយស្ថិតនៅក្នុងខេត្តកោះកុង ដែលទើបតែចាប់ផ្តើមទទួលបានការចាប់អារម្មណ៍ពីភ្ញៀវទេសចរជាតិ និងអន្តរជាតិ។ កោះនេះមានធម្មជាតិដើមស្អាត សមុទ្របៃតងស្រទន់ និងជាកន្លែងសម្រាប់អ្នកស្រឡាញ់សន្តិភាព និងភាពស្ងប់ស្ងាត់។",
    },
    {
      id: 3,
      img: "https://cnc.com.kh/news/laravel-filemanager/photos/30/63523c3f3c5ee.jpg",
      title: "ឆ្នេកំពត",
      desc: "ឆ្នេរកំពត (Kampot Beach) គឺជាតំបន់ទេសចរណ៍សមុទ្រដ៏ស្រស់ស្អាត និងស្ងប់ស្ងាត់មួយស្ថិតនៅខេត្តកំពត ដែលទើបតែអភិវឌ្ឍឡើងថ្មីៗនេះ ដើម្បីទាក់ទាញភ្ញៀវទេសចរជាតិ និងអន្តរជាតិ។ ទោះបីជាមិនធំដូចឆ្នេរកែបក៏ដោយ ប៉ុន្តែឆ្នេរកំពតមានសោភ័ណភាពផ្ទាល់ខ្លួន ដោយសារទេសភាពសមុទ្របៃតងស្រទន់ ព្រមទាំងអាកាសធាតុត្រជាក់ និងភាពស្ងប់ស្ងាត់ជាប់នឹងភ្នំ។",
    },
    {
      id: 4,
      img: "https://www.visitkampot.info/__asset/ckfinder/userfiles/files/DSC04423(1).jpg",
      title: "ឆ្នេអង្គោល",
      desc: "ឆ្នេរអង្គោល (Angkol Beach) គឺជាឆ្នេរសមុទ្រដ៏ស្រស់ស្អាត និងស្ងប់ស្ងាត់មួយ ស្ថិតនៅខេត្តកែប។ វាជាតំបន់ទេសចរណ៍ធម្មជាតិដែលនៅតែមិនទាន់មានការអភិវឌ្ឍច្រើន ប៉ុន្តែមានសោភ័ណភាពធម្មជាតិដើមៗ ទឹកសមុទ្រស្អាត ខ្សាច់សស្អាត និងបរិយាកាសស្ងប់ស្ងាត់សម្រាប់សម្រាក។",
    },
    {
      id: 5,
      img: "https://refile.tnaot.com/image/2019/08/21/f62a04108a594fde8126f1dcbf909aa4.jpg",
      title: "ឆ្នេអូត្រេស",
      desc: "ឆ្នេរអូត្រេស (Otres Beach) គឺជាឆ្នេរដ៏ល្បីល្បាញមួយនៅ ក្រុងព្រះសីហនុ ដែលមានភាពស្រស់ស្អាត និងស្ងប់ស្ងាត់ជាងឆ្នេរផ្សេងៗ។ វាជាទីកន្លែងដ៏សាកសមសម្រាប់អ្នកស្រឡាញ់ធម្មជាតិ សមុទ្រ និងចង់សម្រាកឆ្ងាយពីភាពអ៊ូអរ។",
    },
    {
      id: 6,
      img: "https://phkaslapartner.com/wp-content/uploads/2022/08/image-2-18.jpg",
      title: "ឆ្នេរកោះរ៉ុង",
      desc: "ឆ្នេរកោះរ៉ុង (Koh Rong Beach) គឺជាតំបន់ទេសចរណ៍សមុទ្រដ៏ល្បីជាងគេមួយនៅកម្ពុជា ដែលមានសោភ័ណភាពធម្មជាតិស្រស់ស្អាត ដូចជាសួនស្ថិតក្នុងសមុទ្រ។ កោះនេះត្រូវបានគេហៅថា ព្រោះវាមានខ្សាច់សស្អាត ដូចជាអុជពេជ្រ ទឹកសមុទ្របៃតងស្រទន់ និងបរិយាកាសស្ងប់ស្ងាត់ជាអស្ចារ្យ។",
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
