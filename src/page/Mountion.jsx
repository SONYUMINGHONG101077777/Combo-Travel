import React from "react";
import Banner from "@/components/ui/Banner";
import DialogDisplay from "@/components/ui/viewmore";

const Mountion = () => {
  return (
    
    <div className="max-w-350 mx-auto p-6 space-y-8"> {/* Header Section */}
      <div className="flex items-center gap-4">
        <img
          src="https://www.sovrinmagazine.com/assets/images/magazine/article/1482_1_1622265197_1.jpeg"
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
          src="https://img.harbor-property.com/bkcontent/2021/11/30/154700001.jpg"
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
        <div className="flex items-center gap-4">
        <img
          src="https://kohsantepheapdaily.com.kh/wp-content/uploads/2021/05/f033ab37c30201f73f142449d037028d-14.jpg"
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
      title: "ភ្នំត្បែង",
      desc: "ភ្នំត្បែង គឺជាតំបន់ទេសចរណ៍ធម្មជាតិសម្បូរបែបមួយ ដែលស្ថិតនៅខេត្តរតនគិរី។ តំបន់នេះមានសភាពអាកាសធាតុត្រជាក់ត្រជុំជាប្រចាំឆ្នាំ ព័ទ្ធជុំវិញដោយព្រៃភ្នំបៃតង ស្រស់ស្អាត",
      description1:"ភ្នំត្បែង គឺជាតំបន់ទេសចរណ៍ធម្មជាតិសម្បូរបែបមួយ ដែលស្ថិតនៅខេត្តរតនគិរី។ តំបន់នេះមានសភាពអាកាសធាតុត្រជាក់ត្រជុំជាប្រចាំឆ្នាំ ព័ទ្ធជុំវិញដោយព្រៃភ្នំបៃតង ស្រស់ស្អាត និងទឹកជ្រោះជាច្រើន។ ភ្ញៀវទេសចរអាចឡើងទស្សនាទេសភាពលើកំពូលភ្នំ ដែលអាចមើលឃើញទេសភាពទូលំទូលាយនៃព្រៃភ្នំ និងភូមិជនជាតិដើមភាគតិចនៅជុំវិញ។ ភ្នំត្បែងក៏ជាតំបន់សម្រាប់អ្នកចូលចិត្តធ្វើដំណើរផ្លូវឆ្ងាយ ឬធ្វើបាយភ្នំ (hiking) ផងដែរ។ក្រៅពីទេសភាពធម្មជាតិដ៏ស្រស់ស្អាត ភ្ញៀវអាចស្គាល់ជីវិតប្រពៃណីរបស់ជនជាតិដើមភាគតិចដូចជា ជនជាតិតំបូង ឬជនជាតិក្រេដែលរស់នៅជិតភ្នំ។ វាជាទីកន្លែងល្អសម្រាប់សម្រាកចិត្ត និងរីករាយជាមួយធម្មជាតិដ៏ស្ងប់ស្ងាត់។",
      img: "https://static.information.gov.kh/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdyttQkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--10ebfa8aeb6eb328f3bd52e3da50599548121bd1/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lNT1RBd2VEWXdNQVk2QmtWVSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--70cbddbba2e46c7ca8ac0c1f8b8316d88752e16d/8CD28603-CA55-4674-AFBC-8FDA110.jpeg",
      img1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-UMzVS1q4c6-0_m00bAY9d-wZ3IfNy8dN2rzJwCeVDtUqygTR27ksnb9fWyPNphk3LE&usqp=CAU",
      img2:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png",
      description2:"​ភ្នំត្បែង ស្ថិតនៅក្នុងស្រុកត្បែងមួយ ឬស្រុកអូរជុំ ខេត្តរតនគិរី (ភាគ ईសានខាងជើងនៃប្រទេសកម្ពុជា) ប្រហែល 20–25 គីឡូម៉ែត្រពីទីរួមខេត្តបណ្តាល។តំបន់នេះស្ថិតនៅជាប់ព្រំប្រទល់នឹងប្រទេសឡាវ និងវៀតណាម មានផ្លូវឡើងភ្នំស្អាត និងងាយស្រួលចូលដល់ដោយរថយន្ត ឬម៉ូតូ។",
       subItems: [
      {
        type: "Resort",
        img: "https://phkaslapartner.com/wp-content/uploads/2023/03/photo_2023-03-30_15-54-36.jpg",
        text: "-ភ្នំត្បែង រីសត Phnom Tbeng Resort មានបន្ទប់ស្នាក់ល្អស្អាត ទូលាយ អនាម័យល្អ អាចទទួលភ្ញៀវស្នាក់នៅជាលក្ខណៈគ្រួសារ ឬក្រុមភ្ញៀវទេសចរណ៍។"
      },
      {
        type: "Camping",
        img: "https://ezstatic1.ezweb.online/thumb/IznrgxVfez3watJgK9dvP0LkQac=/560x350/ezweb_2157/soem-ratha/resort/rs-preahvihear/gh8.1.jpg",
        text: "ជាប្រភេទតង់ អាកាសា ភ្នំត្បែង AKASA PHNOM TBENG ផ្ទះលំហែ និង ឧទ្យានជើងភ្នំ Home Stay & Cosy Parks.  ជាប់ Resort ផងដែរ"
      }
    ]
    },
    {
      id: 2,
      img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/e5/49/31.jpg",
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
      {/* <button className="mt-3 bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
        MORE
       </button> */}

       {/* កែនេះ */}
        <DialogDisplay data={item} />
  </div>
</div>

  ))}
</div>

      

      {/* Middle Image */}
      <div className="flex justify-right">
        <img
          src="https://rivertreevilla.com.kh/wp-content/uploads/2023/10/Quad-Bike.lr_-3-scaled.jpg"
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
      img: "https://asset.tovtrip.com//uploads/0001/1967/2023/08/17/untitled9.png",
      title: "ទឹកធ្លាក់ស្រែអំពិល",
      desc: "កោះសង្សា (Song Saa Island) គឺជាកោះស្រស់ស្អាត និងមានប្រជាប្រិយភាពខ្លាំងសម្រាប់ភ្ញៀវទេសចរដែលស្វែងរកភាពប្រណិត និងសន្តិភាពនៅកណ្ដាលសមុទ្រខ្មែរ។ វាស្ថិតនៅក្នុងខេត្តព្រះសីហនុ ជិតកោះរុង និងកោះរ៉ុងសន្លឹម។ កោះនេះជាកន្លែងសម្រាកបែបលក្ខណៈ Luxury Private Island Resort ដែលមានទេសភាពស្រស់ស្អាត និងសេវាកម្មកម្រិតពិភពលោក។",
    },
    {
      id: 2,
      img: "https://img.harbor-property.com/bkcontent/2023/07/15/14200001.jpg",
      title: "ភ្នត្បែង",
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
    {/* <button className="mt-3 bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600">
      MORE
    </button> */}

    {/* កែនេះ */}
    <DialogDisplay data={item} />
  </div>
</div>

  ))}
</div>

      {/* Second Two Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {[
    {
      id: 1,
      img: "https://lh3.googleusercontent.com/proxy/atnZmDdYWeR3Q-d575ty96LfiB7wIZMDZhVUkcjUlviYRYZ5-if-Nja7kzGFoBauMUVLz4QXsqMUvvTyWa85ZoN5K3b-0O4OW-BZo_jH6jRseY5iL7uXIUxsDyqOOveHxDpgdcQc",
      title: "ឧទ្យានជាតិជ័យវិរះ",
      desc: "កោះទន្សាយ (Koh Tonsay / Rabbit Island) គឺជាកោះដ៏ស្រស់ស្អាត និងមានភាពស្ងប់ស្ងាត់ ដែលស្ថិតនៅខេត្តកែប ប្រទេសកម្ពុជា។ កោះនេះត្រូវបានគេដឹងថាជា “សុីវភៅធម្មជាតិ” ដែលនៅតែមិនទាន់មានអភិវឌ្ឍច្រើន ប៉ុន្តែពោរពេញដោយសោភ័ណភាពធម្មជាតិ ទឹកសមុទ្រស្អាត និងបរិយាកាសស្ងប់ស្ងាត់សម្រាប់សម្រាក។",
    },
    {
      id: 2,
      img: "https://media-cdn.tripadvisor.com/media/photo-s/18/62/d8/db/asurajourney.jpg",
      title: "ភ្នំណាងលាង",
      desc: "កោះខ្យង់ (Koh Kyong) គឺជាកោះតូចស្រស់ស្អាតមួយស្ថិតនៅក្នុងខេត្តកោះកុង ដែលទើបតែចាប់ផ្តើមទទួលបានការចាប់អារម្មណ៍ពីភ្ញៀវទេសចរជាតិ និងអន្តរជាតិ។ កោះនេះមានធម្មជាតិដើមស្អាត សមុទ្របៃតងស្រទន់ និងជាកន្លែងសម្រាប់អ្នកស្រឡាញ់សន្តិភាព និងភាពស្ងប់ស្ងាត់។",
    },
    {
      id: 3,
      img: "https://www.knongsrok.com/wp-content/uploads/2019/11/74234782_106741897426501_3194423866755645440_n.jpg",
      title: "ស្ទឹងពពក",
      desc: "ឆ្នេរកំពត (Kampot Beach) គឺជាតំបន់ទេសចរណ៍សមុទ្រដ៏ស្រស់ស្អាត និងស្ងប់ស្ងាត់មួយស្ថិតនៅខេត្តកំពត ដែលទើបតែអភិវឌ្ឍឡើងថ្មីៗនេះ ដើម្បីទាក់ទាញភ្ញៀវទេសចរជាតិ និងអន្តរជាតិ។ ទោះបីជាមិនធំដូចឆ្នេរកែបក៏ដោយ ប៉ុន្តែឆ្នេរកំពតមានសោភ័ណភាពផ្ទាល់ខ្លួន ដោយសារទេសភាពសមុទ្របៃតងស្រទន់ ព្រមទាំងអាកាសធាតុត្រជាក់ និងភាពស្ងប់ស្ងាត់ជាប់នឹងភ្នំ។",
    },
    {
      id: 4,
      img: "https://moi-static.sgp1.cdn.digitaloceanspaces.com/uploads/post/feature_image/15819/feature.jpg",
      title: "ខ្នងក្រពើ",
      desc: "ឆ្នេរអង្គោល (Angkol Beach) គឺជាឆ្នេរសមុទ្រដ៏ស្រស់ស្អាត និងស្ងប់ស្ងាត់មួយ ស្ថិតនៅខេត្តកែប។ វាជាតំបន់ទេសចរណ៍ធម្មជាតិដែលនៅតែមិនទាន់មានការអភិវឌ្ឍច្រើន ប៉ុន្តែមានសោភ័ណភាពធម្មជាតិដើមៗ ទឹកសមុទ្រស្អាត ខ្សាច់សស្អាត និងបរិយាកាសស្ងប់ស្ងាត់សម្រាប់សម្រាក។",
    },
    {
      id: 5,
      img: "https://lh4.googleusercontent.com/proxy/0Gei3xP__ztZHetWoGwIGF2gX2Ujf7BnbHpLhyNGKuWwmvsJXsLsglj7jzMdkmbci9se6kCRDnqSMkeLFxyHEwJgXKlbDHqxuGI3WhljxbatYeTdrz-MDFNghPPzEq8Xj1g3GlEspU46HS1KL14B",
      title: "ខ្នងព្រះ",
      desc: "ឆ្នេរអូត្រេស (Otres Beach) គឺជាឆ្នេរដ៏ល្បីល្បាញមួយនៅ ក្រុងព្រះសីហនុ ដែលមានភាពស្រស់ស្អាត និងស្ងប់ស្ងាត់ជាងឆ្នេរផ្សេងៗ។ វាជាទីកន្លែងដ៏សាកសមសម្រាប់អ្នកស្រឡាញ់ធម្មជាតិ សមុទ្រ និងចង់សម្រាកឆ្ងាយពីភាពអ៊ូអរ។",
    },
    {
      id: 6,
      img: "https://image.freshnewsasia.com/2021/id-022/fn-2023-07-13-21-15-13-63.jpg",
      title: "តំបន់អូសោម",
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
