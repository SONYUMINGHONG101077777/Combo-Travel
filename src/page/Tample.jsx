import React from "react";
import Banner from "@/components/ui/Banner";
import DialogDisplay from "@/components/ui/viewmore";

const Tample = () => {
  return (
    
    <div className="max-w-350 mx-auto p-6 space-y-8"> {/* Header Section */}
      <div className="flex items-center gap-4">
        <img
          src="https://ucarecdn.com/ea7e5840-a3a7-43b6-a9ca-314ce60bd7e0/-/crop/4240x2387/0,223/-/preview/"
          alt="Cambodia Map"
           className="w-150 h-34 rounded-lg object-cover animate-slideRight"
        />
        <div>
          <h2 className="font-bold text-amber-40 text-gray-800">
            ធ្វើដំណើរទៅកាន់តំបន់ ប្រាសាទវាពិតជាអស្ចារ្យណាស់ដែលជាតំបន់ប្រវត្តសាស្ត្រពីបុរាណដែលសម្រាប់ភ្ញៀវទេសចរណ៍ជាច្រើនមកកំសាន្ត និងសិក្សាស្រាវជ្រាវ
          </h2>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          src="https://previews.123rf.com/images/off/off1402/off140200095/26273499-ancient-buddhist-khmer-temple-in-angkor-wat-complex-cambodia.jpg"
          alt="Cambodia Map"
          className="w-150 h-34 rounded-lg object-cover animate-slideUp" 
        />
        <div>
          <h2 className="font-bold text-amber-40 text-gray-800">
            មានតំប់ប្រាសាទជាច្រើនដែលស្ថិនៅខេត្តសៀមរាប ពិសេសណាស់សម្រាប់ភ្ញៀវទេសចរណ៍ ជាតិនិងអន្តជាតិមកកំសាន្ត តំប្រាសាទនៅប្រទេសកម្ពុជាមិនមេនមាននៅតែតំបន់ខេត្តសៀមរាបនោះទេ នៅតាមបណ្តាលខេត្តផ្សេងៗទៀតក៏សម្បូរដូចគ្នាដែរ។
          </h2>
        </div>
      </div>
        <div className="flex items-center gap-4">
        <img
          src="https://www.greeneratravel.com/userfiles/thumbs/angkkorvilla.jpg"
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
      title: "ប្រសាទប្រែរូប",
      desc: "ប្រសាទប្រែរូប គឺជាប្រាសាទបុរាណដ៏អស្ចារ្យមួយ ដែលស្ថិតនៅលើកំពូលភ្នំដង្រែខាងជើងខេត្តព្រះវិហារ។",
      description1:"ប្រាសាទនេះត្រូវបានសង់តាមបែបលំអៀងឡើងទៅលើភ្នំ ដោយមានសំណង់ជាបន្ទប់ប្រាសាទជាបន្តបន្ទាប់ពីទ្វារចូលដល់ប្រាសាទកណ្ដាល។ ពេលឡើងដល់កំពូល អ្នកអាចមើលឃើញទេសភាពដ៏អស្ចារ្យនៃភ្នំ និងដែនទំនាបជុំវិញ។ប្រសាទប្រែរូប ត្រូវបានក្រុមប្រឹក្សាមណ្ឌលអន្តរជាតិសម្រាប់អប់រំ វិទ្យាសាស្ត្រ និងវប្បធម៌ (UNESCO) ចុះបញ្ជីជាបេតិកភណ្ឌពិភពលោកនៅឆ្នាំ ២០០៨ ដោយសារតែតម្លៃប្រវត្តិសាស្ត្រ វប្បធម៌ និងស្ថាបត្យកម្មដ៏ល្អឥតខ្ចោះរបស់វា។",
      img: "https://apsaraauthority.gov.kh/wp-content/uploads/2024/07/2-28.jpg",
      img1: "https://cdn.troryorng.com/wp-content/uploads/2024/05/27125431/photo_2024-05-16_10-51-44-1024x682.jpg",
      img2:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png",
      description2:"ប្រសាទប្រែរូប ស្ថិតនៅលើកំពូលភ្នំដង្រែ ដែលមានកម្ពស់ប្រហែល ៥២៥ ម៉ែត្រ ពីលើផ្ទៃសមុទ្រ នៅក្នុង ឃុំស្រយង់ ស្រុកជាំក្សាន្ដ ខេត្តព្រះវិហារ ប្រទេសកម្ពុជា។",
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
       title: "ប្រាសាទ នាគព័ន្ធ",
      desc: "ប្រាសាទនាគព័ន្ធ ជាប្រាសាទបុរាណមួយដែលស្ថិតនៅកណ្តាលបឹងធំមួយ ក្នុងតំបន់អង្គរធំ។ ប្រាសាទនេះត្រូវបានសង់ឡើងក្នុងសតវត្សទី ១២ ដោយព្រះបាទជ័យវរ្ម័នទី៧ ដើម្បីឧទ្ទិសជូនព្រះពោធិសត្វអវឡុកិតេស្វរៈ។",
      description1:"ប្រាសាទនាគព័ន្ធតំណាងឲ្យស្រះអនន្តបឋារិនី (Anavatapta) ដែលជាបឹងបរិសុទ្ធនៅលើភ្នំមេរុ ក្នុងទស្សនៈព្រះពុទ្ធសាសនា។នៅកណ្តាលមានកោះតូចមួយ ដែលមានប្រាសាទសង់នៅលើ និងមានរូបនាគពីររុំជុំវិញប្រាសាទ ដោយហេតុនេះហើយទើបបានឈ្មោះថា “នាគព័ន្ធ”។ នៅជុំវិញកោះកណ្ដាលមានអាងទឹកបួន ដែលតំណាងឲ្យទិសទាំងបួននៃពិភពលោក។ ទឹកពីអាងទាំងបួននោះត្រូវបានគេជឿថាមានអត្ថប្រយោជន៍ក្នុងការព្យាបាលជំងឺ និងសម្អាតចិត្តវិញ្ញាណ។",
      img: "https://demo.cambodia.gov.kh/wp-content/uploads/2021/06/%E1%9E%94%E1%9F%92%E1%9E%9A%E1%9E%B6%E1%9E%9F%E1%9E%B6%E1%9E%91%E1%9E%93%E1%9E%B6%E1%9E%82%E1%9E%96%E1%9F%90%E1%9E%93%E1%9F%92%E1%9E%92-1.jpg",
      img1: "https://lh4.googleusercontent.com/proxy/Osjgt3lwtZw_U6v05bQU5_klZKjfsE0unbm_f5Rc-Yf9_3uisr6WOPmq7MeDvZQAhiNB1oI_eP56Ly19_QEIZDG7YEB4E7ipZREEcoJ5Wr-ftGUCDqdhI60E3lLT5_HGvwlJCvFaYFxBrCDMcbVX",
      img2:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png",
      description2:"ប្រាសាទនាគព័ន្ធ ស្ថិតនៅក្នុងតំបន់ អង្គរធំ (Angkor Thom) ខេត្តសៀមរាប ប្រទេសកម្ពុជា។វាស្ថិតនៅក្បែរ ប្រាសាទព្រះខ័ន (Preah Khan) និងនៅចម្ងាយប្រហែល ១ គីឡូម៉ែត្រ ទៅខាងកើតនៃប្រាសាទនោះ។",
       subItems: [
      {
        type: "Hotel",
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/707149177.jpg?k=d623e1c9200616f3ad2ef57b0830b3bca082460d9c50f651efce66071887ff97&o=",
        text: "Memoire Siem Reap Hotel"
      },
      {
        type: "Resort",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f1/d3/73/an-outdoor-swimming-pool.jpg?w=900&h=-1&s=1",
        text: "Sala Siem Reap Resort & Spa"
      }
    ]
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
          src="https://img.harbor-property.com/infocontent/2023/08/22/10700001.jpg"
          alt="Couple"
          className="w-150 h-80 object-cover rounded-tr-4xll rounded-br-[200px]"
        />
      </div>
      

      {/* Text Paragraph */}
      <p className="text-gray-700 text-center leading-relaxed">
        ខេត្តសៀមរាប គឺជាគោលដៅទេសចរណ៍ដ៏ល្បីបំផុតនៅកម្ពុជា ដែលមានប្រាសាទអង្គរវត្តដ៏អស្ចារ្យ និងប្រាសាទបុរាណជាច្រើនផ្សេងទៀត។ ខេត្តនេះមានទេសភាពស្រស់ស្អាត រួមទាំងស្រះ ទន្លេ និងវប្បធម៌ជនជាតិខ្មែរដ៏ប៉ិនប្រសប់។ ក្រុងសៀមរាបជាមជ្ឈមណ្ឌលទេសចរណ៍ ដែលមានសណ្ឋាគារ ភោជនីយដ្ឋាន និងទីកន្លែងសម្រាប់អារម្មណ៍កម្សាន្តជាច្រើន សម្រាប់ទាក់ទាញភ្ញៀវទេសចរទូទាំងពិភពលោក។
      </p>

      {/* Second Two Cards */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {[
    {
      id: 1,
      title: "ប្រាសាទ នាគព័ន្ធ",
      desc: "ប្រាសាទបន្ទាយស្រី គឺជាប្រាសាទបុរាណដ៏ល្បី ដែលស្ថិតនៅខេត្តសៀមរាប ហើយត្រូវបានគេចាត់ទុកថា ជា “គ្រឿងអលង្ការនៃសិល្បៈខ្មែរ”។",
      description1:"ប្រាសាទនេះត្រូវបានសង់ឡើងក្នុងសតវត្សទី១០ ដោយបូជាចារ្យយ៉ាជវរ៉ាហៈ ក្នុងសម័យព្រះបាទរាជេន្រវរ្ម័នទី២។ ប្រាសាទបន្ទាយស្រីត្រូវឧទ្ទិសជូនព្រះឥសូរៈ និងសង់ដោយប្រើថ្មពណ៌ផ្កាឈូក ដែលមានការលម្អល្អបំផុតក្នុងចំណោមប្រាសាទទាំងអស់នៅអង្គរ។សិល្បៈលម្អលើជញ្ជាំង និងសសរប្រាសាទ បង្ហាញពីភាពល្អឥតខ្ចោះនៃការចម្លាក់របស់ជនជាតិខ្មែរ បង្ហាញរឿងព្រេងនៃឥសានសាសនានិងព្រះពុទ្ធសាសនា។ ទោះបីមានទំហំតូចជាងប្រាសាទអង្គរផ្សេងៗ ប៉ុន្តែវាមានភាពអស្ចារ្យ និងភាពស្រស់ស្អាតយ៉ាងខ្លាំង។",
      img: "https://ezstatic1.ezweb.online/ezweb_2157/soem-panha/tourism/10-09-2023-1.jpg",
      img1: "https://lh4.googleusercontent.com/proxy/Osjgt3lwtZw_U6v05bQU5_klZKjfsE0unbm_f5Rc-Yf9_3uisr6WOPmq7MeDvZQAhiNB1oI_eP56Ly19_QEIZDG7YEB4E7ipZREEcoJ5Wr-ftGUCDqdhI60E3lLT5_HGvwlJCvFaYFxBrCDMcbVX",
      img2:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png",
      description2:"ប្រាសាទបន្ទាយស្រី ស្ថិតនៅក្នុង ឃុំបន្ទាយស្រី ស្រុកបន្ទាយស្រី ខេត្តសៀមរាប ប្រទេសកម្ពុជា។វាស្ថិតនៅចម្ងាយប្រហែល ៣០ គីឡូម៉ែត្រទៅខាងជើងក្រុងសៀមរាប។",
       subItems: [
      {
        type: "Hotel",
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/707149177.jpg?k=d623e1c9200616f3ad2ef57b0830b3bca082460d9c50f651efce66071887ff97&o=",
        text: "Memoire Siem Reap Hotel"
      },
      {
        type: "Resort",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f1/d3/73/an-outdoor-swimming-pool.jpg?w=900&h=-1&s=1",
        text: "Sala Siem Reap Resort & Spa"
      }
    ]
    },
    {
      id: 2,
      desc: "ប្រាសាទភ្នំជីសូ ជាប្រាសាទបុរាណមួយស្ថិតនៅលើកំពូលភ្នំ ដែលមានកម្ពស់ប្រហែល ១៣៣ ម៉ែត្រ ពីលើផ្ទៃសមុទ្រ។",
      description1:"ប្រាសាទនេះត្រូវបានសង់ឡើងក្នុងសតវត្សទី១១ នៅសម័យព្រះបាទសូរ្យវរ្ម័នទី១ ដើម្បីឧទ្ទិសជូនព្រះឥសូរៈ។ សំណង់ប្រាសាទធ្វើពីថ្មខៀវ និងឥដ្ឋ មានសិល្បៈបែបបុរាណស្រស់ស្អាត និងអក្សរចំណងចាំបាច់នៅលើថ្ម។ពីលើកំពូលភ្នំ អ្នកអាចមើលឃើញទេសភាពដ៏អស្ចារ្យនៃវាលស្រែ និងភូមិជុំវិញ។ ប្រាសាទនេះក៏ជាទីកន្លែងសម្រាប់ធ្វើបួងសួង និងទស្សនាដ៏ពេញនិយមសម្រាប់ភ្ញៀវទេសចរទាំងក្នុង និងក្រៅប្រទេស។",
      img: "https://lh4.googleusercontent.com/proxy/bAn2P3JukPu0JuVQQxp5vuMf-LfSrZRiNdvf2MxlBYsZbo4eJLwGRcBYWo-3ABjGZRWlaPx12wyCSrfrOu-_QuccjOMYPnBHPT1IzOuoOdcVDyU1ZA9Qdw53UVPnydewvyz-pMWEpXwzgpHZGFqp",
      img1: "https://s3.ams.com.kh/infotainment/2023/08/Untitled-1-34.jpg",
      img2:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png",
      description2:"ប្រាសាទបន្ទាយស្រី ស្ថិតនៅក្នុង ឃុំបន្ទាយស្រី ស្រុកបន្ទាយស្រី ខេត្តសៀមរាប ប្រទេសកម្ពុជា។វាស្ថិតនៅចម្ងាយប្រហែល ៣០ គីឡូម៉ែត្រទៅខាងជើងក្រុងសៀមរាប។",
       subItems: [
      {
        type: "Hotel",
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/707149177.jpg?k=d623e1c9200616f3ad2ef57b0830b3bca082460d9c50f651efce66071887ff97&o=",
        text: "Memoire Siem Reap Hotel"
      },
      {
        type: "Resort",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f1/d3/73/an-outdoor-swimming-pool.jpg?w=900&h=-1&s=1",
        text: "Sala Siem Reap Resort & Spa"
      }
    ]
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
      desc: "ប្រាសាទបឹងមាលា ជាប្រាសាទបុរាណដ៏អស្ចារ្យមួយ ស្ថិតនៅក្នុងព្រៃក្រៅតំបន់អង្គរ ប្រហែល ៦៣ គីឡូម៉ែត្រពីក្រុងសៀមរាប។",
      description1:"ប្រាសាទនេះត្រូវបានសង់ឡើងនៅសម័យព្រះបាទសូរ្យវរ្ម័នទី២ នៅសតវត្សទី១២ ដូចគ្នានឹងប្រាសាទអង្គរវត្ត។ ប្រាសាទបឹងមាលាមានសំណង់ធំធេង និងស្ថាបត្យកម្មបែបអង្គរវត្ត ប៉ុន្តែបច្ចុប្បន្នវាត្រូវបានគេឃើញថាមានសភាពចាស់ខូច និងត្រូវបានធម្មជាតិគ្របដណ្តប់។ភាពជាប់របស់ឫសដើមឈើ និងថ្មបាក់បែកបានបង្កើតទេសភាពដ៏អស្ចារ្យ និងអនុស្សាវរីយ៍នៃអរិយធម៌ខ្មែរបុរាណ។ វាជាទីកន្លែងទាក់ទាញភ្ញៀវទេសចរយ៉ាងខ្លាំង ដែលចង់ស្វែងយល់ពីប្រវត្តិសាស្ត្រ និងធម្មជាតិរបស់កម្ពុជា។",
      img: "https://phkaslapartner.com/wp-content/uploads/2023/10/image_2023-10-06_15-22-01-edited.jpg",
      img1: "https://lokbongrattanak2.wordpress.com/wp-content/uploads/2019/05/fb_img_1556952838616.jpg",
      img2:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png",
      description2:"ប្រាសាទបឹងមាលា ស្ថិតនៅក្នុង ស្រុកបន្ទាយស្រី ខេត្តសៀមរាប ប្រទេសកម្ពុជា។វាស្ថិតនៅចម្ងាយប្រហែល ៦៣ គីឡូម៉ែត្រពីក្រុងសៀមរាប តាមផ្លូវទៅប្រាសាទកូរ៍កែរ (Koh Ker)।",
       subItems: [
      {
        type: "Hotel",
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/707149177.jpg?k=d623e1c9200616f3ad2ef57b0830b3bca082460d9c50f651efce66071887ff97&o=",
        text: "Memoire Siem Reap Hotel"
      },
      {
        type: "Resort",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f1/d3/73/an-outdoor-swimming-pool.jpg?w=900&h=-1&s=1",
        text: "Sala Siem Reap Resort & Spa"
      }
    ]
    },
    {
      id: 2,
     ​​​ desc: "ប្រាសាទបឹងមាលា ជាប្រាសាទបុរាណដ៏អស្ចារ្យមួយ ស្ថិតនៅក្នុងព្រៃក្រៅតំបន់អង្គរ ប្រហែល ៦៣ គីឡូម៉ែត្រពីក្រុងសៀមរាប។",
      description1:"ប្រាសាទសម្បួព្រៃគុក គឺជាសំណង់បុរាណសំខាន់មួយ របស់សាមញ្ញខ្មែរសម័យព្រះមហាក្សត្រ ខណៈសតវត្សទី៦–ទី៧។",
      img: "https://image.thmeythmey.com/pictures/2025/06/10//image_20.jpg",
      img1: "https://lokbongrattanak2.wordpress.com/wp-content/uploads/2019/05/fb_img_1556952838616.jpghttps://s3.ams.com.kh/infotainment/2025/06/508314034_1122944723199618_4643509695772468575_n.jpg",
      img2:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png",
      description2:"ប្រាសាទបឹងមាលា ស្ថិតនៅក្នុង ស្រុកបន្ទាយស្រី ខេត្តសៀមរាប ប្រទេសកម្ពុជា។វាស្ថិតនៅចម្ងាយប្រហែល ៦៣ គីឡូម៉ែត្រពីក្រុងសៀមរាប តាមផ្លូវទៅប្រាសាទកូរ៍កែរ (Koh Ker)।",
       subItems: [
      {
        type: "Hotel",
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/707149177.jpg?k=d623e1c9200616f3ad2ef57b0830b3bca082460d9c50f651efce66071887ff97&o=",
        text: "Memoire Siem Reap Hotel"
      },
      {
        type: "Resort",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f1/d3/73/an-outdoor-swimming-pool.jpg?w=900&h=-1&s=1",
        text: "Sala Siem Reap Resort & Spa"
      }
    ]
    },
    {
      id: 3,
      desc: "ប្រាសាទបឹងមាលា ជាប្រាសាទបុរាណដ៏អស្ចារ្យមួយ ស្ថិតនៅក្នុងព្រៃក្រៅតំបន់អង្គរ ប្រហែល ៦៣ គីឡូម៉ែត្រពីក្រុងសៀមរាប។",
      description1:"ប្រាសាទសម្បួព្រៃគុក គឺជាសំណង់បុរាណសំខាន់មួយ របស់សាមញ្ញខ្មែរសម័យព្រះមហាក្សត្រ ខណៈសតវត្សទី៦–ទី៧។",
      img: "https://image.thmeythmey.com/pictures/2025/06/10//image_20.jpg",
      img1: "https://lokbongrattanak2.wordpress.com/wp-content/uploads/2019/05/fb_img_1556952838616.jpghttps://s3.ams.com.kh/infotainment/2025/06/508314034_1122944723199618_4643509695772468575_n.jpg",
      img2:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png",
      description2:"ប្រាសាទបឹងមាលា ស្ថិតនៅក្នុង ស្រុកបន្ទាយស្រី ខេត្តសៀមរាប ប្រទេសកម្ពុជា។វាស្ថិតនៅចម្ងាយប្រហែល ៦៣ គីឡូម៉ែត្រពីក្រុងសៀមរាប តាមផ្លូវទៅប្រាសាទកូរ៍កែរ (Koh Ker)।",
       subItems: [
      {
        type: "Hotel",
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/707149177.jpg?k=d623e1c9200616f3ad2ef57b0830b3bca082460d9c50f651efce66071887ff97&o=",
        text: "Memoire Siem Reap Hotel"
      },
      {
        type: "Resort",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f1/d3/73/an-outdoor-swimming-pool.jpg?w=900&h=-1&s=1",
        text: "Sala Siem Reap Resort & Spa"
      }
    ]
    },
    {
      id: 4,
     desc: "ប្រាសាទបឹងមាលា ជាប្រាសាទបុរាណដ៏អស្ចារ្យមួយ ស្ថិតនៅក្នុងព្រៃក្រៅតំបន់អង្គរ ប្រហែល ៦៣ គីឡូម៉ែត្រពីក្រុងសៀមរាប។",
      description1:"ប្រាសាទសម្បួព្រៃគុក គឺជាសំណង់បុរាណសំខាន់មួយ របស់សាមញ្ញខ្មែរសម័យព្រះមហាក្សត្រ ខណៈសតវត្សទី៦–ទី៧។",
      img: "https://image.thmeythmey.com/pictures/2025/06/10//image_20.jpg",
      img1: "https://lokbongrattanak2.wordpress.com/wp-content/uploads/2019/05/fb_img_1556952838616.jpghttps://s3.ams.com.kh/infotainment/2025/06/508314034_1122944723199618_4643509695772468575_n.jpg",
      img2:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png",
      description2:"ប្រាសាទបឹងមាលា ស្ថិតនៅក្នុង ស្រុកបន្ទាយស្រី ខេត្តសៀមរាប ប្រទេសកម្ពុជា។វាស្ថិតនៅចម្ងាយប្រហែល ៦៣ គីឡូម៉ែត្រពីក្រុងសៀមរាប តាមផ្លូវទៅប្រាសាទកូរ៍កែរ (Koh Ker)।",
       subItems: [
      {
        type: "Hotel",
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/707149177.jpg?k=d623e1c9200616f3ad2ef57b0830b3bca082460d9c50f651efce66071887ff97&o=",
        text: "Memoire Siem Reap Hotel"
      },
      {
        type: "Resort",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f1/d3/73/an-outdoor-swimming-pool.jpg?w=900&h=-1&s=1",
        text: "Sala Siem Reap Resort & Spa"
      }
    ]
    },
    {
      id: 5,
      desc: "ប្រាសាទបឹងមាលា ជាប្រាសាទបុរាណដ៏អស្ចារ្យមួយ ស្ថិតនៅក្នុងព្រៃក្រៅតំបន់អង្គរ ប្រហែល ៦៣ គីឡូម៉ែត្រពីក្រុងសៀមរាប។",
      description1:"ប្រាសាទសម្បួព្រៃគុក គឺជាសំណង់បុរាណសំខាន់មួយ របស់សាមញ្ញខ្មែរសម័យព្រះមហាក្សត្រ ខណៈសតវត្សទី៦–ទី៧។",
      img: "https://image.thmeythmey.com/pictures/2025/06/10//image_20.jpg",
      img1: "https://lokbongrattanak2.wordpress.com/wp-content/uploads/2019/05/fb_img_1556952838616.jpghttps://s3.ams.com.kh/infotainment/2025/06/508314034_1122944723199618_4643509695772468575_n.jpg",
      img2:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png",
      description2:"ប្រាសាទបឹងមាលា ស្ថិតនៅក្នុង ស្រុកបន្ទាយស្រី ខេត្តសៀមរាប ប្រទេសកម្ពុជា។វាស្ថិតនៅចម្ងាយប្រហែល ៦៣ គីឡូម៉ែត្រពីក្រុងសៀមរាប តាមផ្លូវទៅប្រាសាទកូរ៍កែរ (Koh Ker)।",
       subItems: [
      {
        type: "Hotel",
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/707149177.jpg?k=d623e1c9200616f3ad2ef57b0830b3bca082460d9c50f651efce66071887ff97&o=",
        text: "Memoire Siem Reap Hotel"
      },
      {
        type: "Resort",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f1/d3/73/an-outdoor-swimming-pool.jpg?w=900&h=-1&s=1",
        text: "Sala Siem Reap Resort & Spa"
      }
    ]
    },
    {
      id: 6,
      desc: "ប្រាសាទបឹងមាលា ជាប្រាសាទបុរាណដ៏អស្ចារ្យមួយ ស្ថិតនៅក្នុងព្រៃក្រៅតំបន់អង្គរ ប្រហែល ៦៣ គីឡូម៉ែត្រពីក្រុងសៀមរាប។",
      description1:"ប្រាសាទសម្បួព្រៃគុក គឺជាសំណង់បុរាណសំខាន់មួយ របស់សាមញ្ញខ្មែរសម័យព្រះមហាក្សត្រ ខណៈសតវត្សទី៦–ទី៧។",
      img: "https://image.thmeythmey.com/pictures/2025/06/10//image_20.jpg",
      img1: "https://lokbongrattanak2.wordpress.com/wp-content/uploads/2019/05/fb_img_1556952838616.jpghttps://s3.ams.com.kh/infotainment/2025/06/508314034_1122944723199618_4643509695772468575_n.jpg",
      img2:"https://png.pngtree.com/png-vector/20230413/ourmid/pngtree-3d-location-icon-clipart-in-transparent-background-vector-png-image_6704161.png",
      description2:"ប្រាសាទបឹងមាលា ស្ថិតនៅក្នុង ស្រុកបន្ទាយស្រី ខេត្តសៀមរាប ប្រទេសកម្ពុជា។វាស្ថិតនៅចម្ងាយប្រហែល ៦៣ គីឡូម៉ែត្រពីក្រុងសៀមរាប តាមផ្លូវទៅប្រាសាទកូរ៍កែរ (Koh Ker)।",
       subItems: [
      {
        type: "Hotel",
        img: "https://q-xx.bstatic.com/xdata/images/hotel/max500/707149177.jpg?k=d623e1c9200616f3ad2ef57b0830b3bca082460d9c50f651efce66071887ff97&o=",
        text: "Memoire Siem Reap Hotel"
      },
      {
        type: "Resort",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/f1/d3/73/an-outdoor-swimming-pool.jpg?w=900&h=-1&s=1",
        text: "Sala Siem Reap Resort & Spa"
      }
    ]
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

    </div>
  );
};

export default Tample;
